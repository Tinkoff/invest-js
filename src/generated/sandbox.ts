import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OperationsServiceClient as _tinkoff_public_invest_api_contract_v1_OperationsServiceClient, OperationsServiceDefinition as _tinkoff_public_invest_api_contract_v1_OperationsServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OperationsService';
import type { OrdersServiceClient as _tinkoff_public_invest_api_contract_v1_OrdersServiceClient, OrdersServiceDefinition as _tinkoff_public_invest_api_contract_v1_OrdersServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OrdersService';
import type { OrdersStreamServiceClient as _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceClient, OrdersStreamServiceDefinition as _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OrdersStreamService';
import type { SandboxServiceClient as _tinkoff_public_invest_api_contract_v1_SandboxServiceClient, SandboxServiceDefinition as _tinkoff_public_invest_api_contract_v1_SandboxServiceDefinition } from './tinkoff/public/invest/api/contract/v1/SandboxService';
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
              Account: MessageTypeDefinition
              AccountStatus: EnumTypeDefinition
              AccountType: EnumTypeDefinition
              CancelOrderRequest: MessageTypeDefinition
              CancelOrderResponse: MessageTypeDefinition
              CloseSandboxAccountRequest: MessageTypeDefinition
              CloseSandboxAccountResponse: MessageTypeDefinition
              GetAccountsRequest: MessageTypeDefinition
              GetAccountsResponse: MessageTypeDefinition
              GetInfoRequest: MessageTypeDefinition
              GetInfoResponse: MessageTypeDefinition
              GetMarginAttributesRequest: MessageTypeDefinition
              GetMarginAttributesResponse: MessageTypeDefinition
              GetOrderStateRequest: MessageTypeDefinition
              GetOrdersRequest: MessageTypeDefinition
              GetOrdersResponse: MessageTypeDefinition
              GetUserTariffRequest: MessageTypeDefinition
              GetUserTariffResponse: MessageTypeDefinition
              MoneyValue: MessageTypeDefinition
              OpenSandboxAccountRequest: MessageTypeDefinition
              OpenSandboxAccountResponse: MessageTypeDefinition
              Operation: MessageTypeDefinition
              OperationState: EnumTypeDefinition
              OperationType: EnumTypeDefinition
              OperationsRequest: MessageTypeDefinition
              OperationsResponse: MessageTypeDefinition
              OperationsService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OperationsServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OperationsServiceDefinition }
              OrderDirection: EnumTypeDefinition
              OrderExecutionReportStatus: EnumTypeDefinition
              OrderStage: MessageTypeDefinition
              OrderState: MessageTypeDefinition
              OrderTrade: MessageTypeDefinition
              OrderType: EnumTypeDefinition
              OrdersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OrdersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OrdersServiceDefinition }
              OrdersStreamService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceDefinition }
              PortfolioPosition: MessageTypeDefinition
              PortfolioRequest: MessageTypeDefinition
              PortfolioResponse: MessageTypeDefinition
              PositionsRequest: MessageTypeDefinition
              PositionsResponse: MessageTypeDefinition
              PositionsSecurities: MessageTypeDefinition
              PostOrderRequest: MessageTypeDefinition
              PostOrderResponse: MessageTypeDefinition
              Quotation: MessageTypeDefinition
              SandboxPayInRequest: MessageTypeDefinition
              SandboxPayInResponse: MessageTypeDefinition
              SandboxService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_SandboxServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_SandboxServiceDefinition }
              SecurityTradingStatus: EnumTypeDefinition
              StreamLimit: MessageTypeDefinition
              TradesStreamRequest: MessageTypeDefinition
              TradesStreamResponse: MessageTypeDefinition
              UnaryLimit: MessageTypeDefinition
              UsersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_UsersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_UsersServiceDefinition }
              WithdrawLimitsRequest: MessageTypeDefinition
              WithdrawLimitsResponse: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

