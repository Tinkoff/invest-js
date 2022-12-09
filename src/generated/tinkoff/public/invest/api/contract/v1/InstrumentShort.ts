// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface InstrumentShort {
  'isin'?: (string);
  'figi'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
  'instrumentType'?: (string);
  'name'?: (string);
  'uid'?: (string);
  'positionUid'?: (string);
  'apiTradeAvailableFlag'?: (boolean);
  'forIisFlag'?: (boolean);
  'first_1minCandleDate'?: (_google_protobuf_Timestamp | null);
  'first_1dayCandleDate'?: (_google_protobuf_Timestamp | null);
  'forQualInvestorFlag'?: (boolean);
  'weekendFlag'?: (boolean);
  'blockedTcaFlag'?: (boolean);
}

export interface InstrumentShort__Output {
  'isin': (string);
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
  'instrumentType': (string);
  'name': (string);
  'uid': (string);
  'positionUid': (string);
  'apiTradeAvailableFlag': (boolean);
  'forIisFlag': (boolean);
  'first_1minCandleDate': (_google_protobuf_Timestamp__Output | null);
  'first_1dayCandleDate': (_google_protobuf_Timestamp__Output | null);
  'forQualInvestorFlag': (boolean);
  'weekendFlag': (boolean);
  'blockedTcaFlag': (boolean);
}
