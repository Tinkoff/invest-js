// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';

export interface GetTradingStatusResponse {
  'figi'?: (string);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'limitOrderAvailableFlag'?: (boolean);
  'marketOrderAvailableFlag'?: (boolean);
  'apiTradeAvailableFlag'?: (boolean);
  'instrumentUid'?: (string);
}

export interface GetTradingStatusResponse__Output {
  'figi': (string);
  'tradingStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'limitOrderAvailableFlag': (boolean);
  'marketOrderAvailableFlag': (boolean);
  'apiTradeAvailableFlag': (boolean);
  'instrumentUid': (string);
}
