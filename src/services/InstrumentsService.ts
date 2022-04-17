import {
  CallOptions,
  ChannelCredentials,
  ClientOptions,
  ClientUnaryCall,
  Metadata,
  requestCallback,
  ServiceError,
} from '@grpc/grpc-js';
import NodeCache from 'node-cache';

import { CacheConfig } from '../models';
import { Client, InstrumentsType } from '../types';
import { InstrumentIdType } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentIdType';
import { InstrumentRequest } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentRequest';
import { InstrumentResponse } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentResponse';
import { InstrumentStatus } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentStatus';
import { PROTO_PATH } from '../constants';
import { SharesResponse } from '../generated/tinkoff/public/invest/api/contract/v1/SharesResponse';
import { TradingSchedulesRequest } from '../generated/tinkoff/public/invest/api/contract/v1/TradingSchedulesRequest';
import { TradingSchedulesResponse__Output } from '../generated/tinkoff/public/invest/api/contract/v1/TradingSchedulesResponse';
import { load } from '../load';
import { InstrumentsRequest } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentsRequest';

const contract = load<InstrumentsType>(PROTO_PATH + 'instruments.proto');

export class InstrumentsService extends contract.InstrumentsService {
  cache?: NodeCache;

  constructor(
    address: string,
    credentials: ChannelCredentials,
    options?: ClientOptions | undefined,
    cacheConfig?: CacheConfig
  ) {
    super(address, credentials, options);
    this.initNodeCache(cacheConfig);
  }

  /**
   * Метод получения списка акций для базовонго списка инструментов.
   * Поддерживает кэширование.
   */
  baseShares(callback: requestCallback<SharesResponse>): ClientUnaryCall | void {
    return this.applyCaching<InstrumentsRequest, SharesResponse>(
      this.shares,
      { instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE },
      callback
    );
  }

  /**
   * Метод получения списка акций для всех инструментов.
   * Поддерживает кэширование.
   */
  allShares(callback: requestCallback<SharesResponse>): ClientUnaryCall | void {
    return this.applyCaching<InstrumentsRequest, SharesResponse>(
      this.shares,
      { instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL },
      callback
    );
  }

  /**
   * Метод получения основной информации об инструменте c идентификатором FIGI.
   */
  getInstrumentByFIGI(
    argument: InstrumentRequest,
    callback: requestCallback<InstrumentResponse>
  ): ClientUnaryCall {
    return this.getInstrumentBy(
      { idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI, ...argument },
      callback
    );
  }

  /**
   * Метод получения основной информации об инструменте c идентификатором Ticker.
   */
  getInstrumentByTicker(
    argument: InstrumentRequest,
    callback: requestCallback<InstrumentResponse>
  ): ClientUnaryCall {
    return this.getInstrumentBy(
      { idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER, ...argument },
      callback
    );
  }

  /**
   * Метод получения расписания торгов торговых площадок
   */
  tradingSchedules: Client<typeof contract.InstrumentsService>['tradingSchedules'] = (
    argument: TradingSchedulesRequest,
    ...restArgs: Array<Metadata | CallOptions | requestCallback<TradingSchedulesResponse__Output>>
  ): ClientUnaryCall => {
    const nowMs = Date.now();
    const nowSeconds = Math.floor(nowMs / 1000);
    const nanos = (nowMs % 1000) * 1e6;
    const defaultArgument: TradingSchedulesRequest = {
      from: { seconds: nowSeconds, nanos },
      to: { seconds: nowSeconds + 6 * 24 * 3600, nanos },
    };

    return super.tradingSchedules(
      Object.assign(defaultArgument, argument),
      // @ts-ignore
      ...restArgs
    );
  };

  private initNodeCache(cacheConfig?: CacheConfig): void {
    const defaultConfig: CacheConfig = {
      isEnabled: true,
      lifetime: 1800,
    };

    cacheConfig = {
      ...defaultConfig,
      ...cacheConfig,
    };

    if (cacheConfig.isEnabled) {
      const { lifetime } = cacheConfig;

      this.cache = new NodeCache({
        stdTTL: lifetime,
      });
    }
  }

  private applyCaching<T, S>(
    endpoint: any,
    request: T,
    callback: requestCallback<S>
  ): ClientUnaryCall | void {
    const formattedKey = `${endpoint.originalName}.${JSON.stringify(request)}`;

    if (this.cache === undefined || this.cache.get(formattedKey) === undefined) {
      return endpoint.call(this, request, (e: ServiceError | null, v: S | undefined) => {
        if (this.cache) {
          this.cache.set(formattedKey, v);
        }

        callback(e, v);
      });
    }

    return callback(null, this.cache.get(formattedKey));
  }
}
