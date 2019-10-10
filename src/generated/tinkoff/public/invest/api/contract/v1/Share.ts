// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';
import type { ShareType as _tinkoff_public_invest_api_contract_v1_ShareType } from '../../../../../../tinkoff/public/invest/api/contract/v1/ShareType';
import type { Long } from '@grpc/proto-loader';

export interface Share {
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
  'ipoDate'?: (_google_protobuf_Timestamp | null);
  'issueSize'?: (number | string | Long);
  'countryOfRisk'?: (string);
  'countryOfRiskName'?: (string);
  'sector'?: (string);
  'issueSizePlan'?: (number | string | Long);
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag'?: (boolean);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
  'divYieldFlag'?: (boolean);
  'shareType'?: (_tinkoff_public_invest_api_contract_v1_ShareType | keyof typeof _tinkoff_public_invest_api_contract_v1_ShareType);
  'minPriceIncrement'?: (number | string);
  'apiTradeAvailableFlag'?: (boolean);
}

export interface Share__Output {
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
  'ipoDate': (_google_protobuf_Timestamp__Output | null);
  'issueSize': (string);
  'countryOfRisk': (string);
  'countryOfRiskName': (string);
  'sector': (string);
  'issueSizePlan': (string);
  'nominal': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'tradingStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag': (boolean);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
  'divYieldFlag': (boolean);
  'shareType': (keyof typeof _tinkoff_public_invest_api_contract_v1_ShareType);
  'minPriceIncrement': (number);
  'apiTradeAvailableFlag': (boolean);
}
