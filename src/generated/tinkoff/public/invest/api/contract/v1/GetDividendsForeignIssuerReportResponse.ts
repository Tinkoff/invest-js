// Original file: investAPI/src/docs/contracts/operations.proto

import type { DividendsForeignIssuerReport as _tinkoff_public_invest_api_contract_v1_DividendsForeignIssuerReport, DividendsForeignIssuerReport__Output as _tinkoff_public_invest_api_contract_v1_DividendsForeignIssuerReport__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/DividendsForeignIssuerReport';

export interface GetDividendsForeignIssuerReportResponse {
  'dividendsForeignIssuerReport'?: (_tinkoff_public_invest_api_contract_v1_DividendsForeignIssuerReport)[];
  'itemsCount'?: (number);
  'pagesCount'?: (number);
  'page'?: (number);
}

export interface GetDividendsForeignIssuerReportResponse__Output {
  'dividendsForeignIssuerReport': (_tinkoff_public_invest_api_contract_v1_DividendsForeignIssuerReport__Output)[];
  'itemsCount': (number);
  'pagesCount': (number);
  'page': (number);
}
