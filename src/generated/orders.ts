import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrdersServiceClient as _tinkoff_public_invest_api_contract_v1_OrdersServiceClient, OrdersServiceDefinition as _tinkoff_public_invest_api_contract_v1_OrdersServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OrdersService';
import type { OrdersStreamServiceClient as _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceClient, OrdersStreamServiceDefinition as _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OrdersStreamService';

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
              CancelOrderRequest: MessageTypeDefinition
              CancelOrderResponse: MessageTypeDefinition
              GetOrderStateRequest: MessageTypeDefinition
              GetOrdersRequest: MessageTypeDefinition
              GetOrdersResponse: MessageTypeDefinition
              InstrumentType: EnumTypeDefinition
              MoneyValue: MessageTypeDefinition
              OrderDirection: EnumTypeDefinition
              OrderExecutionReportStatus: EnumTypeDefinition
              OrderStage: MessageTypeDefinition
              OrderState: MessageTypeDefinition
              OrderTrade: MessageTypeDefinition
              OrderTrades: MessageTypeDefinition
              OrderType: EnumTypeDefinition
              OrdersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OrdersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OrdersServiceDefinition }
              OrdersStreamService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceDefinition }
              Ping: MessageTypeDefinition
              PostOrderRequest: MessageTypeDefinition
              PostOrderResponse: MessageTypeDefinition
              PriceType: EnumTypeDefinition
              Quotation: MessageTypeDefinition
              ReplaceOrderRequest: MessageTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              TradesStreamRequest: MessageTypeDefinition
              TradesStreamResponse: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

