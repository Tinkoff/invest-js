// Original file: investAPI/src/docs/contracts/common.proto

import type { Long } from '@grpc/proto-loader';

export interface MoneyValue {
  'currency'?: (string);
  'units'?: (number | string | Long);
  'nano'?: (number);
}

export interface MoneyValue__Output {
  'currency': (string);
  'units': (string);
  'nano': (number);
}
