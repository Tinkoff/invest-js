// Original file: investAPI/src/docs/contracts/instruments.proto


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
}
