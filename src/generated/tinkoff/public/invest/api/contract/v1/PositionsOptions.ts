// Original file: investAPI/src/docs/contracts/operations.proto

import type { Long } from '@grpc/proto-loader';

export interface PositionsOptions {
  'positionUid'?: (string);
  'instrumentUid'?: (string);
  'blocked'?: (number | string | Long);
  'balance'?: (number | string | Long);
}

export interface PositionsOptions__Output {
  'positionUid': (string);
  'instrumentUid': (string);
  'blocked': (string);
  'balance': (string);
}
