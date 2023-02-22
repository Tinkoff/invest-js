// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface TradingDay {
  'date'?: (_google_protobuf_Timestamp | null);
  'isTradingDay'?: (boolean);
  'startTime'?: (_google_protobuf_Timestamp | null);
  'endTime'?: (_google_protobuf_Timestamp | null);
  'openingAuctionStartTime'?: (_google_protobuf_Timestamp | null);
  'closingAuctionEndTime'?: (_google_protobuf_Timestamp | null);
  'eveningOpeningAuctionStartTime'?: (_google_protobuf_Timestamp | null);
  'eveningStartTime'?: (_google_protobuf_Timestamp | null);
  'eveningEndTime'?: (_google_protobuf_Timestamp | null);
  'clearingStartTime'?: (_google_protobuf_Timestamp | null);
  'clearingEndTime'?: (_google_protobuf_Timestamp | null);
  'premarketStartTime'?: (_google_protobuf_Timestamp | null);
  'premarketEndTime'?: (_google_protobuf_Timestamp | null);
  'closingAuctionStartTime'?: (_google_protobuf_Timestamp | null);
  'openingAuctionEndTime'?: (_google_protobuf_Timestamp | null);
}

export interface TradingDay__Output {
  'date': (_google_protobuf_Timestamp__Output | null);
  'isTradingDay': (boolean);
  'startTime': (_google_protobuf_Timestamp__Output | null);
  'endTime': (_google_protobuf_Timestamp__Output | null);
  'openingAuctionStartTime': (_google_protobuf_Timestamp__Output | null);
  'closingAuctionEndTime': (_google_protobuf_Timestamp__Output | null);
  'eveningOpeningAuctionStartTime': (_google_protobuf_Timestamp__Output | null);
  'eveningStartTime': (_google_protobuf_Timestamp__Output | null);
  'eveningEndTime': (_google_protobuf_Timestamp__Output | null);
  'clearingStartTime': (_google_protobuf_Timestamp__Output | null);
  'clearingEndTime': (_google_protobuf_Timestamp__Output | null);
  'premarketStartTime': (_google_protobuf_Timestamp__Output | null);
  'premarketEndTime': (_google_protobuf_Timestamp__Output | null);
  'closingAuctionStartTime': (_google_protobuf_Timestamp__Output | null);
  'openingAuctionEndTime': (_google_protobuf_Timestamp__Output | null);
}
