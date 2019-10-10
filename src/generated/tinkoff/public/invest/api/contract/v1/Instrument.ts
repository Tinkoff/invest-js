// Original file: investAPI/src/docs/contracts/instruments.proto

import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';

export interface Instrument {
  'figi'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
  'isin'?: (string);
  'lot'?: (number);
  'currency'?: (string);
  'klong'?: (number | string);
  'kshort'?: (number | string);
  'dlong'?: (number | string);
  'dshort'?: (number | string);
  'dlongMin'?: (number | string);
  'dshortMin'?: (number | string);
  'shortEnabledFlag'?: (boolean);
  'name'?: (string);
  'exchange'?: (string);
  'countryOfRisk'?: (string);
  'countryOfRiskName'?: (string);
  'instrumentType'?: (string);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag'?: (boolean);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
  'minPriceIncrement'?: (number | string);
  'apiTradeAvailableFlag'?: (boolean);
}

export interface Instrument__Output {
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
  'isin': (string);
  'lot': (number);
  'currency': (string);
  'klong': (number);
  'kshort': (number);
  'dlong': (number);
  'dshort': (number);
  'dlongMin': (number);
  'dshortMin': (number);
  'shortEnabledFlag': (boolean);
  'name': (string);
  'exchange': (string);
  'countryOfRisk': (string);
  'countryOfRiskName': (string);
  'instrumentType': (string);
  'tradingStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag': (boolean);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
  'minPriceIncrement': (number);
  'apiTradeAvailableFlag': (boolean);
}
