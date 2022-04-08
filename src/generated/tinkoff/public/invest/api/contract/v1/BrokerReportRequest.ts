// Original file: investAPI/src/docs/contracts/operations.proto

import type { GenerateBrokerReportRequest as _tinkoff_public_invest_api_contract_v1_GenerateBrokerReportRequest, GenerateBrokerReportRequest__Output as _tinkoff_public_invest_api_contract_v1_GenerateBrokerReportRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GenerateBrokerReportRequest';
import type { GetBrokerReportRequest as _tinkoff_public_invest_api_contract_v1_GetBrokerReportRequest, GetBrokerReportRequest__Output as _tinkoff_public_invest_api_contract_v1_GetBrokerReportRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetBrokerReportRequest';

export interface BrokerReportRequest {
  'generateBrokerReportRequest'?: (_tinkoff_public_invest_api_contract_v1_GenerateBrokerReportRequest | null);
  'getBrokerReportRequest'?: (_tinkoff_public_invest_api_contract_v1_GetBrokerReportRequest | null);
  'payload'?: "generateBrokerReportRequest"|"getBrokerReportRequest";
}

export interface BrokerReportRequest__Output {
  'generateBrokerReportRequest'?: (_tinkoff_public_invest_api_contract_v1_GenerateBrokerReportRequest__Output | null);
  'getBrokerReportRequest'?: (_tinkoff_public_invest_api_contract_v1_GetBrokerReportRequest__Output | null);
  'payload': "generateBrokerReportRequest"|"getBrokerReportRequest";
}
