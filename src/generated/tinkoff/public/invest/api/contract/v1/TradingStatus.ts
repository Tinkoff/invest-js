// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface TradingStatus {
  'figi'?: (string);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'time'?: (_google_protobuf_Timestamp | null);
  'limitOrderAvailableFlag'?: (boolean);
  'marketOrderAvailableFlag'?: (boolean);
  'instrumentUid'?: (string);
}

export interface TradingStatus__Output {
  'figi': (string);
  'tradingStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'time': (_google_protobuf_Timestamp__Output | null);
  'limitOrderAvailableFlag': (boolean);
  'marketOrderAvailableFlag': (boolean);
  'instrumentUid': (string);
}
