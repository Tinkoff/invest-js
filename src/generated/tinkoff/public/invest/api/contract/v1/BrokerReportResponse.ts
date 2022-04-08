// Original file: investAPI/src/docs/contracts/operations.proto

import type { GenerateBrokerReportResponse as _tinkoff_public_invest_api_contract_v1_GenerateBrokerReportResponse, GenerateBrokerReportResponse__Output as _tinkoff_public_invest_api_contract_v1_GenerateBrokerReportResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GenerateBrokerReportResponse';
import type { GetBrokerReportResponse as _tinkoff_public_invest_api_contract_v1_GetBrokerReportResponse, GetBrokerReportResponse__Output as _tinkoff_public_invest_api_contract_v1_GetBrokerReportResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetBrokerReportResponse';

export interface BrokerReportResponse {
  'generateBrokerReportResponse'?: (_tinkoff_public_invest_api_contract_v1_GenerateBrokerReportResponse | null);
  'getBrokerReportResponse'?: (_tinkoff_public_invest_api_contract_v1_GetBrokerReportResponse | null);
  'payload'?: "generateBrokerReportResponse"|"getBrokerReportResponse";
}

export interface BrokerReportResponse__Output {
  'generateBrokerReportResponse'?: (_tinkoff_public_invest_api_contract_v1_GenerateBrokerReportResponse__Output | null);
  'getBrokerReportResponse'?: (_tinkoff_public_invest_api_contract_v1_GetBrokerReportResponse__Output | null);
  'payload': "generateBrokerReportResponse"|"getBrokerReportResponse";
}
