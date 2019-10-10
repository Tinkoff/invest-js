// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';
import type { Long } from '@grpc/proto-loader';

export interface Bond {
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
  'couponQuantityPerYear'?: (number);
  'maturityDate'?: (_google_protobuf_Timestamp | null);
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'stateRegDate'?: (_google_protobuf_Timestamp | null);
  'placementDate'?: (_google_protobuf_Timestamp | null);
  'placementPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'aciValue'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'countryOfRisk'?: (string);
  'countryOfRiskName'?: (string);
  'sector'?: (string);
  'issueKind'?: (string);
  'issueSize'?: (number | string | Long);
  'issueSizePlan'?: (number | string | Long);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag'?: (boolean);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
  'floatingCouponFlag'?: (boolean);
  'perpetualFlag'?: (boolean);
  'amortizationFlag'?: (boolean);
  'minPriceIncrement'?: (number | string);
  'apiTradeAvailableFlag'?: (boolean);
}

export interface Bond__Output {
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
  'couponQuantityPerYear': (number);
  'maturityDate': (_google_protobuf_Timestamp__Output | null);
  'nominal': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'stateRegDate': (_google_protobuf_Timestamp__Output | null);
  'placementDate': (_google_protobuf_Timestamp__Output | null);
  'placementPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'aciValue': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'countryOfRisk': (string);
  'countryOfRiskName': (string);
  'sector': (string);
  'issueKind': (string);
  'issueSize': (string);
  'issueSizePlan': (string);
  'tradingStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag': (boolean);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
  'floatingCouponFlag': (boolean);
  'perpetualFlag': (boolean);
  'amortizationFlag': (boolean);
  'minPriceIncrement': (number);
  'apiTradeAvailableFlag': (boolean);
}
