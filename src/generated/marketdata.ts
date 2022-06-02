import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { MarketDataServiceClient as _tinkoff_public_invest_api_contract_v1_MarketDataServiceClient, MarketDataServiceDefinition as _tinkoff_public_invest_api_contract_v1_MarketDataServiceDefinition } from './tinkoff/public/invest/api/contract/v1/MarketDataService';
import type { MarketDataStreamServiceClient as _tinkoff_public_invest_api_contract_v1_MarketDataStreamServiceClient, MarketDataStreamServiceDefinition as _tinkoff_public_invest_api_contract_v1_MarketDataStreamServiceDefinition } from './tinkoff/public/invest/api/contract/v1/MarketDataStreamService';

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
              Candle: MessageTypeDefinition
              CandleInstrument: MessageTypeDefinition
              CandleInterval: EnumTypeDefinition
              CandleSubscription: MessageTypeDefinition
              GetCandlesRequest: MessageTypeDefinition
              GetCandlesResponse: MessageTypeDefinition
              GetLastPricesRequest: MessageTypeDefinition
              GetLastPricesResponse: MessageTypeDefinition
              GetLastTradesRequest: MessageTypeDefinition
              GetLastTradesResponse: MessageTypeDefinition
              GetOrderBookRequest: MessageTypeDefinition
              GetOrderBookResponse: MessageTypeDefinition
              GetTradingStatusRequest: MessageTypeDefinition
              GetTradingStatusResponse: MessageTypeDefinition
              HistoricCandle: MessageTypeDefinition
              InfoInstrument: MessageTypeDefinition
              InfoSubscription: MessageTypeDefinition
              LastPrice: MessageTypeDefinition
              LastPriceInstrument: MessageTypeDefinition
              LastPriceSubscription: MessageTypeDefinition
              MarketDataRequest: MessageTypeDefinition
              MarketDataResponse: MessageTypeDefinition
              MarketDataServerSideStreamRequest: MessageTypeDefinition
              MarketDataService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_MarketDataServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_MarketDataServiceDefinition }
              MarketDataStreamService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_MarketDataStreamServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_MarketDataStreamServiceDefinition }
              MoneyValue: MessageTypeDefinition
              Order: MessageTypeDefinition
              OrderBook: MessageTypeDefinition
              OrderBookInstrument: MessageTypeDefinition
              OrderBookSubscription: MessageTypeDefinition
              Ping: MessageTypeDefinition
              Quotation: MessageTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              SubscribeCandlesRequest: MessageTypeDefinition
              SubscribeCandlesResponse: MessageTypeDefinition
              SubscribeInfoRequest: MessageTypeDefinition
              SubscribeInfoResponse: MessageTypeDefinition
              SubscribeLastPriceRequest: MessageTypeDefinition
              SubscribeLastPriceResponse: MessageTypeDefinition
              SubscribeOrderBookRequest: MessageTypeDefinition
              SubscribeOrderBookResponse: MessageTypeDefinition
              SubscribeTradesRequest: MessageTypeDefinition
              SubscribeTradesResponse: MessageTypeDefinition
              SubscriptionAction: EnumTypeDefinition
              SubscriptionInterval: EnumTypeDefinition
              SubscriptionStatus: EnumTypeDefinition
              Trade: MessageTypeDefinition
              TradeDirection: EnumTypeDefinition
              TradeInstrument: MessageTypeDefinition
              TradeSubscription: MessageTypeDefinition
              TradingStatus: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

