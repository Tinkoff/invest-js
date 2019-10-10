// Original file: investAPI/src/docs/contracts/users.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetAccountsRequest as _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, GetAccountsRequest__Output as _tinkoff_public_invest_api_contract_v1_GetAccountsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetAccountsRequest';
import type { GetAccountsResponse as _tinkoff_public_invest_api_contract_v1_GetAccountsResponse, GetAccountsResponse__Output as _tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetAccountsResponse';
import type { GetInfoRequest as _tinkoff_public_invest_api_contract_v1_GetInfoRequest, GetInfoRequest__Output as _tinkoff_public_invest_api_contract_v1_GetInfoRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetInfoRequest';
import type { GetInfoResponse as _tinkoff_public_invest_api_contract_v1_GetInfoResponse, GetInfoResponse__Output as _tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetInfoResponse';
import type { GetMarginAttributesRequest as _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, GetMarginAttributesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetMarginAttributesRequest';
import type { GetMarginAttributesResponse as _tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse, GetMarginAttributesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetMarginAttributesResponse';
import type { GetUserTariffRequest as _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, GetUserTariffRequest__Output as _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetUserTariffRequest';
import type { GetUserTariffResponse as _tinkoff_public_invest_api_contract_v1_GetUserTariffResponse, GetUserTariffResponse__Output as _tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetUserTariffResponse';

export interface UsersServiceClient extends grpc.Client {
  GetAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  GetAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  GetAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  GetAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  getAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  getAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  getAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  getAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  
  GetInfo(argument: _tinkoff_public_invest_api_contract_v1_GetInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>): grpc.ClientUnaryCall;
  GetInfo(argument: _tinkoff_public_invest_api_contract_v1_GetInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>): grpc.ClientUnaryCall;
  GetInfo(argument: _tinkoff_public_invest_api_contract_v1_GetInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>): grpc.ClientUnaryCall;
  GetInfo(argument: _tinkoff_public_invest_api_contract_v1_GetInfoRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>): grpc.ClientUnaryCall;
  getInfo(argument: _tinkoff_public_invest_api_contract_v1_GetInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>): grpc.ClientUnaryCall;
  getInfo(argument: _tinkoff_public_invest_api_contract_v1_GetInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>): grpc.ClientUnaryCall;
  getInfo(argument: _tinkoff_public_invest_api_contract_v1_GetInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>): grpc.ClientUnaryCall;
  getInfo(argument: _tinkoff_public_invest_api_contract_v1_GetInfoRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>): grpc.ClientUnaryCall;
  
  GetMarginAttributes(argument: _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>): grpc.ClientUnaryCall;
  GetMarginAttributes(argument: _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>): grpc.ClientUnaryCall;
  GetMarginAttributes(argument: _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>): grpc.ClientUnaryCall;
  GetMarginAttributes(argument: _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>): grpc.ClientUnaryCall;
  getMarginAttributes(argument: _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>): grpc.ClientUnaryCall;
  getMarginAttributes(argument: _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>): grpc.ClientUnaryCall;
  getMarginAttributes(argument: _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>): grpc.ClientUnaryCall;
  getMarginAttributes(argument: _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserTariff(argument: _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>): grpc.ClientUnaryCall;
  GetUserTariff(argument: _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>): grpc.ClientUnaryCall;
  GetUserTariff(argument: _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>): grpc.ClientUnaryCall;
  GetUserTariff(argument: _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>): grpc.ClientUnaryCall;
  getUserTariff(argument: _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>): grpc.ClientUnaryCall;
  getUserTariff(argument: _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>): grpc.ClientUnaryCall;
  getUserTariff(argument: _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>): grpc.ClientUnaryCall;
  getUserTariff(argument: _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UsersServiceHandlers extends grpc.UntypedServiceImplementation {
  GetAccounts: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetAccountsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetAccountsResponse>;
  
  GetInfo: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetInfoRequest__Output, _tinkoff_public_invest_api_contract_v1_GetInfoResponse>;
  
  GetMarginAttributes: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse>;
  
  GetUserTariff: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetUserTariffRequest__Output, _tinkoff_public_invest_api_contract_v1_GetUserTariffResponse>;
  
}

export interface UsersServiceDefinition extends grpc.ServiceDefinition {
  GetAccounts: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetAccountsRequest, _tinkoff_public_invest_api_contract_v1_GetAccountsResponse, _tinkoff_public_invest_api_contract_v1_GetAccountsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>
  GetInfo: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetInfoRequest, _tinkoff_public_invest_api_contract_v1_GetInfoResponse, _tinkoff_public_invest_api_contract_v1_GetInfoRequest__Output, _tinkoff_public_invest_api_contract_v1_GetInfoResponse__Output>
  GetMarginAttributes: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest, _tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse, _tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse__Output>
  GetUserTariff: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetUserTariffRequest, _tinkoff_public_invest_api_contract_v1_GetUserTariffResponse, _tinkoff_public_invest_api_contract_v1_GetUserTariffRequest__Output, _tinkoff_public_invest_api_contract_v1_GetUserTariffResponse__Output>
}
