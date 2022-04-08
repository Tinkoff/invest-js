// Original file: investAPI/src/docs/contracts/operations.proto

import type { GenerateDividendsForeignIssuerReportResponse as _tinkoff_public_invest_api_contract_v1_GenerateDividendsForeignIssuerReportResponse, GenerateDividendsForeignIssuerReportResponse__Output as _tinkoff_public_invest_api_contract_v1_GenerateDividendsForeignIssuerReportResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GenerateDividendsForeignIssuerReportResponse';
import type { GetDividendsForeignIssuerReportResponse as _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerReportResponse, GetDividendsForeignIssuerReportResponse__Output as _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerReportResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetDividendsForeignIssuerReportResponse';

export interface GetDividendsForeignIssuerResponse {
  'generateDivForeignIssuerReportResponse'?: (_tinkoff_public_invest_api_contract_v1_GenerateDividendsForeignIssuerReportResponse | null);
  'divForeignIssuerReport'?: (_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerReportResponse | null);
  'payload'?: "generateDivForeignIssuerReportResponse"|"divForeignIssuerReport";
}

export interface GetDividendsForeignIssuerResponse__Output {
  'generateDivForeignIssuerReportResponse'?: (_tinkoff_public_invest_api_contract_v1_GenerateDividendsForeignIssuerReportResponse__Output | null);
  'divForeignIssuerReport'?: (_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerReportResponse__Output | null);
  'payload': "generateDivForeignIssuerReportResponse"|"divForeignIssuerReport";
}
