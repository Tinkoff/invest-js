// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
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
  'klong'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'kshort'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dlong'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dshort'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dlongMin'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dshortMin'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
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
  'minPriceIncrement'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'apiTradeAvailableFlag'?: (boolean);
  'uid'?: (string);
}

export interface Bond__Output {
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
  'isin': (string);
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
  'minPriceIncrement': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'apiTradeAvailableFlag': (boolean);
  'uid': (string);
}
