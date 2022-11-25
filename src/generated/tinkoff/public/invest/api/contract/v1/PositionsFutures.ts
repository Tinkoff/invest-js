// Original file: investAPI/src/docs/contracts/operations.proto

import type { Long } from '@grpc/proto-loader';

export interface PositionsFutures {
  'figi'?: (string);
  'blocked'?: (number | string | Long);
  'balance'?: (number | string | Long);
  'positionUid'?: (string);
  'instrumentUid'?: (string);
}

export interface PositionsFutures__Output {
  'figi': (string);
  'blocked': (string);
  'balance': (string);
  'positionUid': (string);
  'instrumentUid': (string);
}
