// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';
import type { ShareType as _tinkoff_public_invest_api_contract_v1_ShareType } from '../../../../../../tinkoff/public/invest/api/contract/v1/ShareType';
import type { RealExchange as _tinkoff_public_invest_api_contract_v1_RealExchange } from '../../../../../../tinkoff/public/invest/api/contract/v1/RealExchange';
import type { Long } from '@grpc/proto-loader';

export interface Share {
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
  'minPriceIncrement'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'apiTradeAvailableFlag'?: (boolean);
  'uid'?: (string);
  'realExchange'?: (_tinkoff_public_invest_api_contract_v1_RealExchange | keyof typeof _tinkoff_public_invest_api_contract_v1_RealExchange);
}

export interface Share__Output {
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
  'minPriceIncrement': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'apiTradeAvailableFlag': (boolean);
  'uid': (string);
  'realExchange': (keyof typeof _tinkoff_public_invest_api_contract_v1_RealExchange);
}
