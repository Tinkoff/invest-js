// Original file: investAPI/src/docs/contracts/marketdata.proto


export interface GetOrderBookRequest {
  'figi'?: (string);
  'depth'?: (number);
  'instrumentId'?: (string);
}

export interface GetOrderBookRequest__Output {
  'figi': (string);
  'depth': (number);
  'instrumentId': (string);
}
