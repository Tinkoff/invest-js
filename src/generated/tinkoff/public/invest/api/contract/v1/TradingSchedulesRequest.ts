// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface TradingSchedulesRequest {
  'exchange'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
}

export interface TradingSchedulesRequest__Output {
  'exchange': (string);
  'from': (_google_protobuf_Timestamp__Output | null);
  'to': (_google_protobuf_Timestamp__Output | null);
}
