// Original file: investAPI/src/docs/contracts/orders.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { TradesStreamRequest as _tinkoff_public_invest_api_contract_v1_TradesStreamRequest, TradesStreamRequest__Output as _tinkoff_public_invest_api_contract_v1_TradesStreamRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradesStreamRequest';
import type { TradesStreamResponse as _tinkoff_public_invest_api_contract_v1_TradesStreamResponse, TradesStreamResponse__Output as _tinkoff_public_invest_api_contract_v1_TradesStreamResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradesStreamResponse';

export interface OrdersStreamServiceClient extends grpc.Client {
  TradesStream(argument: _tinkoff_public_invest_api_contract_v1_TradesStreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_TradesStreamResponse__Output>;
  TradesStream(argument: _tinkoff_public_invest_api_contract_v1_TradesStreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_TradesStreamResponse__Output>;
  tradesStream(argument: _tinkoff_public_invest_api_contract_v1_TradesStreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_TradesStreamResponse__Output>;
  tradesStream(argument: _tinkoff_public_invest_api_contract_v1_TradesStreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_TradesStreamResponse__Output>;
  
}

export interface OrdersStreamServiceHandlers extends grpc.UntypedServiceImplementation {
  TradesStream: grpc.handleServerStreamingCall<_tinkoff_public_invest_api_contract_v1_TradesStreamRequest__Output, _tinkoff_public_invest_api_contract_v1_TradesStreamResponse>;
  
}

export interface OrdersStreamServiceDefinition extends grpc.ServiceDefinition {
  TradesStream: MethodDefinition<_tinkoff_public_invest_api_contract_v1_TradesStreamRequest, _tinkoff_public_invest_api_contract_v1_TradesStreamResponse, _tinkoff_public_invest_api_contract_v1_TradesStreamRequest__Output, _tinkoff_public_invest_api_contract_v1_TradesStreamResponse__Output>
}
