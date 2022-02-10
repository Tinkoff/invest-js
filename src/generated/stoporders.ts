import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { StopOrdersServiceClient as _tinkoff_public_invest_api_contract_v1_StopOrdersServiceClient, StopOrdersServiceDefinition as _tinkoff_public_invest_api_contract_v1_StopOrdersServiceDefinition } from './tinkoff/public/invest/api/contract/v1/StopOrdersService';

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
              CancelStopOrderRequest: MessageTypeDefinition
              CancelStopOrderResponse: MessageTypeDefinition
              GetStopOrdersRequest: MessageTypeDefinition
              GetStopOrdersResponse: MessageTypeDefinition
              MoneyValue: MessageTypeDefinition
              Ping: MessageTypeDefinition
              PostStopOrderRequest: MessageTypeDefinition
              PostStopOrderResponse: MessageTypeDefinition
              Quotation: MessageTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              StopOrder: MessageTypeDefinition
              StopOrderDirection: EnumTypeDefinition
              StopOrderExpirationType: EnumTypeDefinition
              StopOrderType: EnumTypeDefinition
              StopOrdersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_StopOrdersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_StopOrdersServiceDefinition }
            }
          }
        }
      }
    }
  }
}

