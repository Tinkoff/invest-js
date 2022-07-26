// Original file: investAPI/src/docs/contracts/orders.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CancelOrderRequest as _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, CancelOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CancelOrderRequest';
import type { CancelOrderResponse as _tinkoff_public_invest_api_contract_v1_CancelOrderResponse, CancelOrderResponse__Output as _tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CancelOrderResponse';
import type { GetOrderStateRequest as _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, GetOrderStateRequest__Output as _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrderStateRequest';
import type { GetOrdersRequest as _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, GetOrdersRequest__Output as _tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrdersRequest';
import type { GetOrdersResponse as _tinkoff_public_invest_api_contract_v1_GetOrdersResponse, GetOrdersResponse__Output as _tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrdersResponse';
import type { OrderState as _tinkoff_public_invest_api_contract_v1_OrderState, OrderState__Output as _tinkoff_public_invest_api_contract_v1_OrderState__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderState';
import type { PostOrderRequest as _tinkoff_public_invest_api_contract_v1_PostOrderRequest, PostOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostOrderRequest';
import type { PostOrderResponse as _tinkoff_public_invest_api_contract_v1_PostOrderResponse, PostOrderResponse__Output as _tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostOrderResponse';
import type { ReplaceOrderRequest as _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, ReplaceOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ReplaceOrderRequest';

export interface OrdersServiceClient extends grpc.Client {
  CancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  
  GetOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  
  GetOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  
  PostOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  
  ReplaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  ReplaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  ReplaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  ReplaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  replaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  replaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  replaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  replaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OrdersServiceHandlers extends grpc.UntypedServiceImplementation {
  CancelOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse>;
  
  GetOrderState: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output, _tinkoff_public_invest_api_contract_v1_OrderState>;
  
  GetOrders: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse>;
  
  PostOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse>;
  
  ReplaceOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse>;
  
}

export interface OrdersServiceDefinition extends grpc.ServiceDefinition {
  CancelOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_CancelOrderRequest, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse, _tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>
  GetOrderState: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, _tinkoff_public_invest_api_contract_v1_OrderState, _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output, _tinkoff_public_invest_api_contract_v1_OrderState__Output>
  GetOrders: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetOrdersRequest, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse, _tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>
  PostOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PostOrderRequest, _tinkoff_public_invest_api_contract_v1_PostOrderResponse, _tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>
  ReplaceOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, _tinkoff_public_invest_api_contract_v1_PostOrderResponse, _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>
}
