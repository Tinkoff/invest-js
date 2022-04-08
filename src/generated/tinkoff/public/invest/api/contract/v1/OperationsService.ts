// Original file: investAPI/src/docs/contracts/operations.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BrokerReportRequest as _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, BrokerReportRequest__Output as _tinkoff_public_invest_api_contract_v1_BrokerReportRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/BrokerReportRequest';
import type { BrokerReportResponse as _tinkoff_public_invest_api_contract_v1_BrokerReportResponse, BrokerReportResponse__Output as _tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/BrokerReportResponse';
import type { GetDividendsForeignIssuerRequest as _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, GetDividendsForeignIssuerRequest__Output as _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetDividendsForeignIssuerRequest';
import type { GetDividendsForeignIssuerResponse as _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse, GetDividendsForeignIssuerResponse__Output as _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetDividendsForeignIssuerResponse';
import type { OperationsRequest as _tinkoff_public_invest_api_contract_v1_OperationsRequest, OperationsRequest__Output as _tinkoff_public_invest_api_contract_v1_OperationsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationsRequest';
import type { OperationsResponse as _tinkoff_public_invest_api_contract_v1_OperationsResponse, OperationsResponse__Output as _tinkoff_public_invest_api_contract_v1_OperationsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationsResponse';
import type { PortfolioRequest as _tinkoff_public_invest_api_contract_v1_PortfolioRequest, PortfolioRequest__Output as _tinkoff_public_invest_api_contract_v1_PortfolioRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioRequest';
import type { PortfolioResponse as _tinkoff_public_invest_api_contract_v1_PortfolioResponse, PortfolioResponse__Output as _tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioResponse';
import type { PositionsRequest as _tinkoff_public_invest_api_contract_v1_PositionsRequest, PositionsRequest__Output as _tinkoff_public_invest_api_contract_v1_PositionsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsRequest';
import type { PositionsResponse as _tinkoff_public_invest_api_contract_v1_PositionsResponse, PositionsResponse__Output as _tinkoff_public_invest_api_contract_v1_PositionsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsResponse';
import type { WithdrawLimitsRequest as _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, WithdrawLimitsRequest__Output as _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/WithdrawLimitsRequest';
import type { WithdrawLimitsResponse as _tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse, WithdrawLimitsResponse__Output as _tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/WithdrawLimitsResponse';

export interface OperationsServiceClient extends grpc.Client {
  GetBrokerReport(argument: _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>): grpc.ClientUnaryCall;
  GetBrokerReport(argument: _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>): grpc.ClientUnaryCall;
  GetBrokerReport(argument: _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>): grpc.ClientUnaryCall;
  GetBrokerReport(argument: _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>): grpc.ClientUnaryCall;
  getBrokerReport(argument: _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>): grpc.ClientUnaryCall;
  getBrokerReport(argument: _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>): grpc.ClientUnaryCall;
  getBrokerReport(argument: _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>): grpc.ClientUnaryCall;
  getBrokerReport(argument: _tinkoff_public_invest_api_contract_v1_BrokerReportRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>): grpc.ClientUnaryCall;
  
  GetDividendsForeignIssuer(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>): grpc.ClientUnaryCall;
  GetDividendsForeignIssuer(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>): grpc.ClientUnaryCall;
  GetDividendsForeignIssuer(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>): grpc.ClientUnaryCall;
  GetDividendsForeignIssuer(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>): grpc.ClientUnaryCall;
  getDividendsForeignIssuer(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>): grpc.ClientUnaryCall;
  getDividendsForeignIssuer(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>): grpc.ClientUnaryCall;
  getDividendsForeignIssuer(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>): grpc.ClientUnaryCall;
  getDividendsForeignIssuer(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>): grpc.ClientUnaryCall;
  
  GetOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  GetOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  GetOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  GetOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  getOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  getOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  getOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  getOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  
  GetPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  GetPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  GetPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  GetPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  getPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  getPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  getPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  getPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  
  GetPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  GetPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  GetPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  GetPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  getPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  getPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  getPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  getPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  
  GetWithdrawLimits(argument: _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>): grpc.ClientUnaryCall;
  GetWithdrawLimits(argument: _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>): grpc.ClientUnaryCall;
  GetWithdrawLimits(argument: _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>): grpc.ClientUnaryCall;
  GetWithdrawLimits(argument: _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawLimits(argument: _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawLimits(argument: _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawLimits(argument: _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>): grpc.ClientUnaryCall;
  getWithdrawLimits(argument: _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OperationsServiceHandlers extends grpc.UntypedServiceImplementation {
  GetBrokerReport: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_BrokerReportRequest__Output, _tinkoff_public_invest_api_contract_v1_BrokerReportResponse>;
  
  GetDividendsForeignIssuer: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest__Output, _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse>;
  
  GetOperations: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_OperationsRequest__Output, _tinkoff_public_invest_api_contract_v1_OperationsResponse>;
  
  GetPortfolio: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PortfolioRequest__Output, _tinkoff_public_invest_api_contract_v1_PortfolioResponse>;
  
  GetPositions: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PositionsRequest__Output, _tinkoff_public_invest_api_contract_v1_PositionsResponse>;
  
  GetWithdrawLimits: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest__Output, _tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse>;
  
}

export interface OperationsServiceDefinition extends grpc.ServiceDefinition {
  GetBrokerReport: MethodDefinition<_tinkoff_public_invest_api_contract_v1_BrokerReportRequest, _tinkoff_public_invest_api_contract_v1_BrokerReportResponse, _tinkoff_public_invest_api_contract_v1_BrokerReportRequest__Output, _tinkoff_public_invest_api_contract_v1_BrokerReportResponse__Output>
  GetDividendsForeignIssuer: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest, _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse, _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest__Output, _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse__Output>
  GetOperations: MethodDefinition<_tinkoff_public_invest_api_contract_v1_OperationsRequest, _tinkoff_public_invest_api_contract_v1_OperationsResponse, _tinkoff_public_invest_api_contract_v1_OperationsRequest__Output, _tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>
  GetPortfolio: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PortfolioRequest, _tinkoff_public_invest_api_contract_v1_PortfolioResponse, _tinkoff_public_invest_api_contract_v1_PortfolioRequest__Output, _tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>
  GetPositions: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PositionsRequest, _tinkoff_public_invest_api_contract_v1_PositionsResponse, _tinkoff_public_invest_api_contract_v1_PositionsRequest__Output, _tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>
  GetWithdrawLimits: MethodDefinition<_tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest, _tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse, _tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest__Output, _tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse__Output>
}
