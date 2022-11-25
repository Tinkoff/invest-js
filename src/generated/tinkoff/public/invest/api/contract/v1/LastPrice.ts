// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface LastPrice {
  'figi'?: (string);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'time'?: (_google_protobuf_Timestamp | null);
  'instrumentUid'?: (string);
}

export interface LastPrice__Output {
  'figi': (string);
  'price': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'time': (_google_protobuf_Timestamp__Output | null);
  'instrumentUid': (string);
}
