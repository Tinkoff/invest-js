import { Metadata, CallOptions, ClientUnaryCall, requestCallback } from '@grpc/grpc-js';
import { InstrumentStatus } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentStatus';
import { SharesResponse } from '../generated/tinkoff/public/invest/api/contract/v1/SharesResponse';
import { InstrumentIdType } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentIdType';
import { InstrumentResponse } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentResponse';
import { InstrumentRequest } from '../generated/tinkoff/public/invest/api/contract/v1/InstrumentRequest';
import { TradingSchedulesRequest } from '../generated/tinkoff/public/invest/api/contract/v1/TradingSchedulesRequest';
import { TradingSchedulesResponse__Output } from '../generated/tinkoff/public/invest/api/contract/v1/TradingSchedulesResponse';
import { Client, InstrumentsType } from '../types';
import { PROTO_PATH } from '../constants';
import { load } from '../load';

const contract = load<InstrumentsType>(PROTO_PATH + 'instruments.proto');

export class InstrumentsService extends contract.InstrumentsService {
  /**
   * Метод получения списка акций для базовонго списка инструментов.
   */
  baseShares(callback: requestCallback<SharesResponse>): ClientUnaryCall {
    return this.shares({ instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE }, callback);
  }

  /**
   * Метод получения списка акций для всех инструментов.
   */
  allShares(callback: requestCallback<SharesResponse>): ClientUnaryCall {
    return this.shares({ instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL }, callback);
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
}
