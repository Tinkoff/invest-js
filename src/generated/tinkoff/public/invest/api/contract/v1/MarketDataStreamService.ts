// Original file: investAPI/src/docs/contracts/marketdata.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MarketDataRequest as _tinkoff_public_invest_api_contract_v1_MarketDataRequest, MarketDataRequest__Output as _tinkoff_public_invest_api_contract_v1_MarketDataRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MarketDataRequest';
import type { MarketDataResponse as _tinkoff_public_invest_api_contract_v1_MarketDataResponse, MarketDataResponse__Output as _tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MarketDataResponse';
import type { MarketDataServerSideStreamRequest as _tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest, MarketDataServerSideStreamRequest__Output as _tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MarketDataServerSideStreamRequest';

export interface MarketDataStreamServiceClient extends grpc.Client {
  MarketDataServerSideStream(argument: _tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>;
  MarketDataServerSideStream(argument: _tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>;
  marketDataServerSideStream(argument: _tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>;
  marketDataServerSideStream(argument: _tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>;
  
  MarketDataStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_tinkoff_public_invest_api_contract_v1_MarketDataRequest, _tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>;
  MarketDataStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_tinkoff_public_invest_api_contract_v1_MarketDataRequest, _tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>;
  marketDataStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_tinkoff_public_invest_api_contract_v1_MarketDataRequest, _tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>;
  marketDataStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_tinkoff_public_invest_api_contract_v1_MarketDataRequest, _tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>;
  
}

export interface MarketDataStreamServiceHandlers extends grpc.UntypedServiceImplementation {
  MarketDataServerSideStream: grpc.handleServerStreamingCall<_tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest__Output, _tinkoff_public_invest_api_contract_v1_MarketDataResponse>;
  
  MarketDataStream: grpc.handleBidiStreamingCall<_tinkoff_public_invest_api_contract_v1_MarketDataRequest__Output, _tinkoff_public_invest_api_contract_v1_MarketDataResponse>;
  
}

export interface MarketDataStreamServiceDefinition extends grpc.ServiceDefinition {
  MarketDataServerSideStream: MethodDefinition<_tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest, _tinkoff_public_invest_api_contract_v1_MarketDataResponse, _tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest__Output, _tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>
  MarketDataStream: MethodDefinition<_tinkoff_public_invest_api_contract_v1_MarketDataRequest, _tinkoff_public_invest_api_contract_v1_MarketDataResponse, _tinkoff_public_invest_api_contract_v1_MarketDataRequest__Output, _tinkoff_public_invest_api_contract_v1_MarketDataResponse__Output>
}
