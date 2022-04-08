// Original file: investAPI/src/docs/contracts/operations.proto

import type { BrokerReport as _tinkoff_public_invest_api_contract_v1_BrokerReport, BrokerReport__Output as _tinkoff_public_invest_api_contract_v1_BrokerReport__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/BrokerReport';

export interface GetBrokerReportResponse {
  'brokerReport'?: (_tinkoff_public_invest_api_contract_v1_BrokerReport)[];
  'itemsCount'?: (number);
  'pagesCount'?: (number);
  'page'?: (number);
}

export interface GetBrokerReportResponse__Output {
  'brokerReport': (_tinkoff_public_invest_api_contract_v1_BrokerReport__Output)[];
  'itemsCount': (number);
  'pagesCount': (number);
  'page': (number);
}
