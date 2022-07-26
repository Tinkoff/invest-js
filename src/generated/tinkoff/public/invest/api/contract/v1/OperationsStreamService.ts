// Original file: investAPI/src/docs/contracts/operations.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PortfolioStreamRequest as _tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest, PortfolioStreamRequest__Output as _tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioStreamRequest';
import type { PortfolioStreamResponse as _tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse, PortfolioStreamResponse__Output as _tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioStreamResponse';

export interface OperationsStreamServiceClient extends grpc.Client {
  PortfolioStream(argument: _tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse__Output>;
  PortfolioStream(argument: _tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse__Output>;
  portfolioStream(argument: _tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse__Output>;
  portfolioStream(argument: _tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse__Output>;
  
}

export interface OperationsStreamServiceHandlers extends grpc.UntypedServiceImplementation {
  PortfolioStream: grpc.handleServerStreamingCall<_tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest__Output, _tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse>;
  
}

export interface OperationsStreamServiceDefinition extends grpc.ServiceDefinition {
  PortfolioStream: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest, _tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse, _tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest__Output, _tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse__Output>
}
