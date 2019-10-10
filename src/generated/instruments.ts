import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { InstrumentsServiceClient as _tinkoff_public_invest_api_contract_v1_InstrumentsServiceClient, InstrumentsServiceDefinition as _tinkoff_public_invest_api_contract_v1_InstrumentsServiceDefinition } from './tinkoff/public/invest/api/contract/v1/InstrumentsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  tinkoff: {
    public: {
      invest: {
        api: {
          contract: {
            v1: {
              AccruedInterest: MessageTypeDefinition
              Bond: MessageTypeDefinition
              BondResponse: MessageTypeDefinition
              BondsResponse: MessageTypeDefinition
              CurrenciesResponse: MessageTypeDefinition
              Currency: MessageTypeDefinition
              CurrencyResponse: MessageTypeDefinition
              Dividend: MessageTypeDefinition
              Etf: MessageTypeDefinition
              EtfResponse: MessageTypeDefinition
              EtfsResponse: MessageTypeDefinition
              Future: MessageTypeDefinition
              FutureResponse: MessageTypeDefinition
              FuturesResponse: MessageTypeDefinition
              GetAccruedInterestsRequest: MessageTypeDefinition
              GetAccruedInterestsResponse: MessageTypeDefinition
              GetDividendsRequest: MessageTypeDefinition
              GetDividendsResponse: MessageTypeDefinition
              GetFuturesMarginRequest: MessageTypeDefinition
              GetFuturesMarginResponse: MessageTypeDefinition
              Instrument: MessageTypeDefinition
              InstrumentIdType: EnumTypeDefinition
              InstrumentRequest: MessageTypeDefinition
              InstrumentResponse: MessageTypeDefinition
              InstrumentStatus: EnumTypeDefinition
              InstrumentsRequest: MessageTypeDefinition
              InstrumentsService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_InstrumentsServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_InstrumentsServiceDefinition }
              MoneyValue: MessageTypeDefinition
              Quotation: MessageTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              Share: MessageTypeDefinition
              ShareResponse: MessageTypeDefinition
              ShareType: EnumTypeDefinition
              SharesResponse: MessageTypeDefinition
              TradingDay: MessageTypeDefinition
              TradingSchedule: MessageTypeDefinition
              TradingSchedulesRequest: MessageTypeDefinition
              TradingSchedulesResponse: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

