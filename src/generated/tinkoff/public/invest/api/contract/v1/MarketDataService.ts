// Original file: investAPI/src/docs/contracts/marketdata.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetCandlesRequest as _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, GetCandlesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetCandlesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetCandlesRequest';
import type { GetCandlesResponse as _tinkoff_public_invest_api_contract_v1_GetCandlesResponse, GetCandlesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetCandlesResponse';
import type { GetClosePricesRequest as _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, GetClosePricesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetClosePricesRequest';
import type { GetClosePricesResponse as _tinkoff_public_invest_api_contract_v1_GetClosePricesResponse, GetClosePricesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetClosePricesResponse';
import type { GetLastPricesRequest as _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, GetLastPricesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetLastPricesRequest';
import type { GetLastPricesResponse as _tinkoff_public_invest_api_contract_v1_GetLastPricesResponse, GetLastPricesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetLastPricesResponse';
import type { GetLastTradesRequest as _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, GetLastTradesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetLastTradesRequest';
import type { GetLastTradesResponse as _tinkoff_public_invest_api_contract_v1_GetLastTradesResponse, GetLastTradesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetLastTradesResponse';
import type { GetOrderBookRequest as _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, GetOrderBookRequest__Output as _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrderBookRequest';
import type { GetOrderBookResponse as _tinkoff_public_invest_api_contract_v1_GetOrderBookResponse, GetOrderBookResponse__Output as _tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrderBookResponse';
import type { GetTradingStatusRequest as _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, GetTradingStatusRequest__Output as _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetTradingStatusRequest';
import type { GetTradingStatusResponse as _tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse, GetTradingStatusResponse__Output as _tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetTradingStatusResponse';
import type { GetTradingStatusesRequest as _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, GetTradingStatusesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetTradingStatusesRequest';
import type { GetTradingStatusesResponse as _tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse, GetTradingStatusesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetTradingStatusesResponse';

export interface MarketDataServiceClient extends grpc.Client {
  GetCandles(argument: _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>): grpc.ClientUnaryCall;
  GetCandles(argument: _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>): grpc.ClientUnaryCall;
  GetCandles(argument: _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>): grpc.ClientUnaryCall;
  GetCandles(argument: _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>): grpc.ClientUnaryCall;
  getCandles(argument: _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>): grpc.ClientUnaryCall;
  getCandles(argument: _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>): grpc.ClientUnaryCall;
  getCandles(argument: _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>): grpc.ClientUnaryCall;
  getCandles(argument: _tinkoff_public_invest_api_contract_v1_GetCandlesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>): grpc.ClientUnaryCall;
  
  GetClosePrices(argument: _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>): grpc.ClientUnaryCall;
  GetClosePrices(argument: _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>): grpc.ClientUnaryCall;
  GetClosePrices(argument: _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>): grpc.ClientUnaryCall;
  GetClosePrices(argument: _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>): grpc.ClientUnaryCall;
  getClosePrices(argument: _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>): grpc.ClientUnaryCall;
  getClosePrices(argument: _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>): grpc.ClientUnaryCall;
  getClosePrices(argument: _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>): grpc.ClientUnaryCall;
  getClosePrices(argument: _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>): grpc.ClientUnaryCall;
  
  GetLastPrices(argument: _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>): grpc.ClientUnaryCall;
  GetLastPrices(argument: _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>): grpc.ClientUnaryCall;
  GetLastPrices(argument: _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>): grpc.ClientUnaryCall;
  GetLastPrices(argument: _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>): grpc.ClientUnaryCall;
  getLastPrices(argument: _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>): grpc.ClientUnaryCall;
  getLastPrices(argument: _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>): grpc.ClientUnaryCall;
  getLastPrices(argument: _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>): grpc.ClientUnaryCall;
  getLastPrices(argument: _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>): grpc.ClientUnaryCall;
  
  GetLastTrades(argument: _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>): grpc.ClientUnaryCall;
  GetLastTrades(argument: _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>): grpc.ClientUnaryCall;
  GetLastTrades(argument: _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>): grpc.ClientUnaryCall;
  GetLastTrades(argument: _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>): grpc.ClientUnaryCall;
  getLastTrades(argument: _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>): grpc.ClientUnaryCall;
  getLastTrades(argument: _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>): grpc.ClientUnaryCall;
  getLastTrades(argument: _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>): grpc.ClientUnaryCall;
  getLastTrades(argument: _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>): grpc.ClientUnaryCall;
  
  GetOrderBook(argument: _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>): grpc.ClientUnaryCall;
  GetOrderBook(argument: _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>): grpc.ClientUnaryCall;
  GetOrderBook(argument: _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>): grpc.ClientUnaryCall;
  GetOrderBook(argument: _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>): grpc.ClientUnaryCall;
  getOrderBook(argument: _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>): grpc.ClientUnaryCall;
  getOrderBook(argument: _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>): grpc.ClientUnaryCall;
  getOrderBook(argument: _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>): grpc.ClientUnaryCall;
  getOrderBook(argument: _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>): grpc.ClientUnaryCall;
  
  GetTradingStatus(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>): grpc.ClientUnaryCall;
  GetTradingStatus(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>): grpc.ClientUnaryCall;
  GetTradingStatus(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>): grpc.ClientUnaryCall;
  GetTradingStatus(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>): grpc.ClientUnaryCall;
  getTradingStatus(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>): grpc.ClientUnaryCall;
  getTradingStatus(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>): grpc.ClientUnaryCall;
  getTradingStatus(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>): grpc.ClientUnaryCall;
  getTradingStatus(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>): grpc.ClientUnaryCall;
  
  GetTradingStatuses(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>): grpc.ClientUnaryCall;
  GetTradingStatuses(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>): grpc.ClientUnaryCall;
  GetTradingStatuses(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>): grpc.ClientUnaryCall;
  GetTradingStatuses(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>): grpc.ClientUnaryCall;
  getTradingStatuses(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>): grpc.ClientUnaryCall;
  getTradingStatuses(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>): grpc.ClientUnaryCall;
  getTradingStatuses(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>): grpc.ClientUnaryCall;
  getTradingStatuses(argument: _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface MarketDataServiceHandlers extends grpc.UntypedServiceImplementation {
  GetCandles: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetCandlesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetCandlesResponse>;
  
  GetClosePrices: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetClosePricesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetClosePricesResponse>;
  
  GetLastPrices: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetLastPricesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetLastPricesResponse>;
  
  GetLastTrades: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetLastTradesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetLastTradesResponse>;
  
  GetOrderBook: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetOrderBookRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrderBookResponse>;
  
  GetTradingStatus: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest__Output, _tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse>;
  
  GetTradingStatuses: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse>;
  
}

export interface MarketDataServiceDefinition extends grpc.ServiceDefinition {
  GetCandles: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetCandlesRequest, _tinkoff_public_invest_api_contract_v1_GetCandlesResponse, _tinkoff_public_invest_api_contract_v1_GetCandlesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetCandlesResponse__Output>
  GetClosePrices: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetClosePricesRequest, _tinkoff_public_invest_api_contract_v1_GetClosePricesResponse, _tinkoff_public_invest_api_contract_v1_GetClosePricesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetClosePricesResponse__Output>
  GetLastPrices: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetLastPricesRequest, _tinkoff_public_invest_api_contract_v1_GetLastPricesResponse, _tinkoff_public_invest_api_contract_v1_GetLastPricesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetLastPricesResponse__Output>
  GetLastTrades: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetLastTradesRequest, _tinkoff_public_invest_api_contract_v1_GetLastTradesResponse, _tinkoff_public_invest_api_contract_v1_GetLastTradesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetLastTradesResponse__Output>
  GetOrderBook: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetOrderBookRequest, _tinkoff_public_invest_api_contract_v1_GetOrderBookResponse, _tinkoff_public_invest_api_contract_v1_GetOrderBookRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrderBookResponse__Output>
  GetTradingStatus: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest, _tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse, _tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest__Output, _tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse__Output>
  GetTradingStatuses: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest, _tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse, _tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse__Output>
}
