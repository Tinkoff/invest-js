// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';

export interface Future {
  'figi'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
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
  'firstTradeDate'?: (_google_protobuf_Timestamp | null);
  'lastTradeDate'?: (_google_protobuf_Timestamp | null);
  'futuresType'?: (string);
  'assetType'?: (string);
  'basicAsset'?: (string);
  'basicAssetSize'?: (number | string);
  'countryOfRisk'?: (string);
  'countryOfRiskName'?: (string);
  'sector'?: (string);
  'expirationDate'?: (_google_protobuf_Timestamp | null);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag'?: (boolean);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
  'minPriceIncrement'?: (number | string);
  'apiTradeAvailableFlag'?: (boolean);
}

export interface Future__Output {
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
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
  'firstTradeDate': (_google_protobuf_Timestamp__Output | null);
  'lastTradeDate': (_google_protobuf_Timestamp__Output | null);
  'futuresType': (string);
  'assetType': (string);
  'basicAsset': (string);
  'basicAssetSize': (number);
  'countryOfRisk': (string);
  'countryOfRiskName': (string);
  'sector': (string);
  'expirationDate': (_google_protobuf_Timestamp__Output | null);
  'tradingStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag': (boolean);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
  'minPriceIncrement': (number);
  'apiTradeAvailableFlag': (boolean);
}
