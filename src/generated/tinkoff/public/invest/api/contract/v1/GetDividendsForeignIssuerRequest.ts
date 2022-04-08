// Original file: investAPI/src/docs/contracts/operations.proto

import type { GenerateDividendsForeignIssuerReportRequest as _tinkoff_public_invest_api_contract_v1_GenerateDividendsForeignIssuerReportRequest, GenerateDividendsForeignIssuerReportRequest__Output as _tinkoff_public_invest_api_contract_v1_GenerateDividendsForeignIssuerReportRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GenerateDividendsForeignIssuerReportRequest';
import type { GetDividendsForeignIssuerReportRequest as _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerReportRequest, GetDividendsForeignIssuerReportRequest__Output as _tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerReportRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetDividendsForeignIssuerReportRequest';

export interface GetDividendsForeignIssuerRequest {
  'generateDivForeignIssuerReport'?: (_tinkoff_public_invest_api_contract_v1_GenerateDividendsForeignIssuerReportRequest | null);
  'getDivForeignIssuerReport'?: (_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerReportRequest | null);
  'payload'?: "generateDivForeignIssuerReport"|"getDivForeignIssuerReport";
}

export interface GetDividendsForeignIssuerRequest__Output {
  'generateDivForeignIssuerReport'?: (_tinkoff_public_invest_api_contract_v1_GenerateDividendsForeignIssuerReportRequest__Output | null);
  'getDivForeignIssuerReport'?: (_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerReportRequest__Output | null);
  'payload': "generateDivForeignIssuerReport"|"getDivForeignIssuerReport";
}
