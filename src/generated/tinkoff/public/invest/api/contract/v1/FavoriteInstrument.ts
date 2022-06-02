// Original file: investAPI/src/docs/contracts/instruments.proto


export interface FavoriteInstrument {
  'figi'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
  'isin'?: (string);
  'instrumentType'?: (string);
  'otcFlag'?: (boolean);
  'apiTradeAvailableFlag'?: (boolean);
}

export interface FavoriteInstrument__Output {
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
  'isin': (string);
  'instrumentType': (string);
  'otcFlag': (boolean);
  'apiTradeAvailableFlag': (boolean);
}
