// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface TradingDay {
  'date'?: (_google_protobuf_Timestamp | null);
  'isTradingDay'?: (boolean);
  'startTime'?: (_google_protobuf_Timestamp | null);
  'endTime'?: (_google_protobuf_Timestamp | null);
  'marketOrderStartTime'?: (_google_protobuf_Timestamp | null);
  'marketOrderEndTime'?: (_google_protobuf_Timestamp | null);
}

export interface TradingDay__Output {
  'date': (_google_protobuf_Timestamp__Output | null);
  'isTradingDay': (boolean);
  'startTime': (_google_protobuf_Timestamp__Output | null);
  'endTime': (_google_protobuf_Timestamp__Output | null);
  'marketOrderStartTime': (_google_protobuf_Timestamp__Output | null);
  'marketOrderEndTime': (_google_protobuf_Timestamp__Output | null);
}
