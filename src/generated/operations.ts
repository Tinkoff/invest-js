import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OperationsServiceClient as _tinkoff_public_invest_api_contract_v1_OperationsServiceClient, OperationsServiceDefinition as _tinkoff_public_invest_api_contract_v1_OperationsServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OperationsService';

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
              BrokerReport: MessageTypeDefinition
              BrokerReportRequest: MessageTypeDefinition
              BrokerReportResponse: MessageTypeDefinition
              DividendsForeignIssuerReport: MessageTypeDefinition
              GenerateBrokerReportRequest: MessageTypeDefinition
              GenerateBrokerReportResponse: MessageTypeDefinition
              GenerateDividendsForeignIssuerReportRequest: MessageTypeDefinition
              GenerateDividendsForeignIssuerReportResponse: MessageTypeDefinition
              GetBrokerReportRequest: MessageTypeDefinition
              GetBrokerReportResponse: MessageTypeDefinition
              GetDividendsForeignIssuerReportRequest: MessageTypeDefinition
              GetDividendsForeignIssuerReportResponse: MessageTypeDefinition
              GetDividendsForeignIssuerRequest: MessageTypeDefinition
              GetDividendsForeignIssuerResponse: MessageTypeDefinition
              MoneyValue: MessageTypeDefinition
              Operation: MessageTypeDefinition
              OperationState: EnumTypeDefinition
              OperationTrade: MessageTypeDefinition
              OperationType: EnumTypeDefinition
              OperationsRequest: MessageTypeDefinition
              OperationsResponse: MessageTypeDefinition
              OperationsService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OperationsServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OperationsServiceDefinition }
              Ping: MessageTypeDefinition
              PortfolioPosition: MessageTypeDefinition
              PortfolioRequest: MessageTypeDefinition
              PortfolioResponse: MessageTypeDefinition
              PositionsFutures: MessageTypeDefinition
              PositionsRequest: MessageTypeDefinition
              PositionsResponse: MessageTypeDefinition
              PositionsSecurities: MessageTypeDefinition
              Quotation: MessageTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              WithdrawLimitsRequest: MessageTypeDefinition
              WithdrawLimitsResponse: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

