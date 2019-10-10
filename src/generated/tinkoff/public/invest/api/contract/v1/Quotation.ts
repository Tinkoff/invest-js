// Original file: investAPI/src/docs/contracts/common.proto

import type { Long } from '@grpc/proto-loader';

export interface Quotation {
  'units'?: (number | string | Long);
  'nano'?: (number);
}

export interface Quotation__Output {
  'units': (string);
  'nano': (number);
}
