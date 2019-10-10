// Original file: investAPI/src/docs/contracts/stoporders.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CancelStopOrderRequest as _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, CancelStopOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CancelStopOrderRequest';
import type { CancelStopOrderResponse as _tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse, CancelStopOrderResponse__Output as _tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CancelStopOrderResponse';
import type { GetStopOrdersRequest as _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, GetStopOrdersRequest__Output as _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetStopOrdersRequest';
import type { GetStopOrdersResponse as _tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse, GetStopOrdersResponse__Output as _tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetStopOrdersResponse';
import type { PostStopOrderRequest as _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, PostStopOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostStopOrderRequest';
import type { PostStopOrderResponse as _tinkoff_public_invest_api_contract_v1_PostStopOrderResponse, PostStopOrderResponse__Output as _tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostStopOrderResponse';

export interface StopOrdersServiceClient extends grpc.Client {
  CancelStopOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelStopOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelStopOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelStopOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelStopOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelStopOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelStopOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelStopOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>): grpc.ClientUnaryCall;
  
  GetStopOrders(argument: _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetStopOrders(argument: _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetStopOrders(argument: _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetStopOrders(argument: _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>): grpc.ClientUnaryCall;
  getStopOrders(argument: _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>): grpc.ClientUnaryCall;
  getStopOrders(argument: _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>): grpc.ClientUnaryCall;
  getStopOrders(argument: _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>): grpc.ClientUnaryCall;
  getStopOrders(argument: _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>): grpc.ClientUnaryCall;
  
  PostStopOrder(argument: _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>): grpc.ClientUnaryCall;
  PostStopOrder(argument: _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>): grpc.ClientUnaryCall;
  PostStopOrder(argument: _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>): grpc.ClientUnaryCall;
  PostStopOrder(argument: _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>): grpc.ClientUnaryCall;
  postStopOrder(argument: _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>): grpc.ClientUnaryCall;
  postStopOrder(argument: _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>): grpc.ClientUnaryCall;
  postStopOrder(argument: _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>): grpc.ClientUnaryCall;
  postStopOrder(argument: _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface StopOrdersServiceHandlers extends grpc.UntypedServiceImplementation {
  CancelStopOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse>;
  
  GetStopOrders: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest__Output, _tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse>;
  
  PostStopOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostStopOrderResponse>;
  
}

export interface StopOrdersServiceDefinition extends grpc.ServiceDefinition {
  CancelStopOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest, _tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse, _tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse__Output>
  GetStopOrders: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest, _tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse, _tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest__Output, _tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse__Output>
  PostStopOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest, _tinkoff_public_invest_api_contract_v1_PostStopOrderResponse, _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostStopOrderResponse__Output>
}
