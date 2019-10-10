// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { CandleInterval as _tinkoff_public_invest_api_contract_v1_CandleInterval } from '../../../../../../tinkoff/public/invest/api/contract/v1/CandleInterval';

export interface GetCandlesRequest {
  'figi'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_CandleInterval | keyof typeof _tinkoff_public_invest_api_contract_v1_CandleInterval);
}

export interface GetCandlesRequest__Output {
  'figi': (string);
  'from': (_google_protobuf_Timestamp__Output | null);
  'to': (_google_protobuf_Timestamp__Output | null);
  'interval': (keyof typeof _tinkoff_public_invest_api_contract_v1_CandleInterval);
}
