// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';
import type { RealExchange as _tinkoff_public_invest_api_contract_v1_RealExchange } from '../../../../../../tinkoff/public/invest/api/contract/v1/RealExchange';

export interface Future {
  'figi'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
  'lot'?: (number);
  'currency'?: (string);
  'klong'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'kshort'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dlong'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dshort'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dlongMin'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dshortMin'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'shortEnabledFlag'?: (boolean);
  'name'?: (string);
  'exchange'?: (string);
  'firstTradeDate'?: (_google_protobuf_Timestamp | null);
  'lastTradeDate'?: (_google_protobuf_Timestamp | null);
  'futuresType'?: (string);
  'assetType'?: (string);
  'basicAsset'?: (string);
  'basicAssetSize'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'countryOfRisk'?: (string);
  'countryOfRiskName'?: (string);
  'sector'?: (string);
  'expirationDate'?: (_google_protobuf_Timestamp | null);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag'?: (boolean);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
  'minPriceIncrement'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'apiTradeAvailableFlag'?: (boolean);
  'uid'?: (string);
  'realExchange'?: (_tinkoff_public_invest_api_contract_v1_RealExchange | keyof typeof _tinkoff_public_invest_api_contract_v1_RealExchange);
  'positionUid'?: (string);
  'basicAssetPositionUid'?: (string);
  'forIisFlag'?: (boolean);
  'forQualInvestorFlag'?: (boolean);
  'first_1minCandleDate'?: (_google_protobuf_Timestamp | null);
  'first_1dayCandleDate'?: (_google_protobuf_Timestamp | null);
}

export interface Future__Output {
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
  'lot': (number);
  'currency': (string);
  'klong': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'kshort': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dlong': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dshort': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dlongMin': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dshortMin': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'shortEnabledFlag': (boolean);
  'name': (string);
  'exchange': (string);
  'firstTradeDate': (_google_protobuf_Timestamp__Output | null);
  'lastTradeDate': (_google_protobuf_Timestamp__Output | null);
  'futuresType': (string);
  'assetType': (string);
  'basicAsset': (string);
  'basicAssetSize': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'countryOfRisk': (string);
  'countryOfRiskName': (string);
  'sector': (string);
  'expirationDate': (_google_protobuf_Timestamp__Output | null);
  'tradingStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag': (boolean);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
  'minPriceIncrement': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'apiTradeAvailableFlag': (boolean);
  'uid': (string);
  'realExchange': (keyof typeof _tinkoff_public_invest_api_contract_v1_RealExchange);
  'positionUid': (string);
  'basicAssetPositionUid': (string);
  'forIisFlag': (boolean);
  'forQualInvestorFlag': (boolean);
  'first_1minCandleDate': (_google_protobuf_Timestamp__Output | null);
  'first_1dayCandleDate': (_google_protobuf_Timestamp__Output | null);
}
