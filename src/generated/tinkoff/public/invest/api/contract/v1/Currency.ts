// Original file: investAPI/src/docs/contracts/instruments.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';

export interface Currency {
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
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'countryOfRisk'?: (string);
  'countryOfRiskName'?: (string);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag'?: (boolean);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
  'isoCurrencyName'?: (string);
  'minPriceIncrement'?: (number | string);
  'apiTradeAvailableFlag'?: (boolean);
}

export interface Currency__Output {
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
  'nominal': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'countryOfRisk': (string);
  'countryOfRiskName': (string);
  'tradingStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag': (boolean);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
  'isoCurrencyName': (string);
  'minPriceIncrement': (number);
  'apiTradeAvailableFlag': (boolean);
}
