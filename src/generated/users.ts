import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UsersServiceClient as _tinkoff_public_invest_api_contract_v1_UsersServiceClient, UsersServiceDefinition as _tinkoff_public_invest_api_contract_v1_UsersServiceDefinition } from './tinkoff/public/invest/api/contract/v1/UsersService';

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
              AccessLevel: EnumTypeDefinition
              Account: MessageTypeDefinition
              AccountStatus: EnumTypeDefinition
              AccountType: EnumTypeDefinition
              GetAccountsRequest: MessageTypeDefinition
              GetAccountsResponse: MessageTypeDefinition
              GetInfoRequest: MessageTypeDefinition
              GetInfoResponse: MessageTypeDefinition
              GetMarginAttributesRequest: MessageTypeDefinition
              GetMarginAttributesResponse: MessageTypeDefinition
              GetUserTariffRequest: MessageTypeDefinition
              GetUserTariffResponse: MessageTypeDefinition
              MoneyValue: MessageTypeDefinition
              Ping: MessageTypeDefinition
              Quotation: MessageTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              StreamLimit: MessageTypeDefinition
              UnaryLimit: MessageTypeDefinition
              UsersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_UsersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_UsersServiceDefinition }
            }
          }
        }
      }
    }
  }
}

