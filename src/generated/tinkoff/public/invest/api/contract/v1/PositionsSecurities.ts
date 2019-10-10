// Original file: investAPI/src/docs/contracts/operations.proto

import type { Long } from '@grpc/proto-loader';

export interface PositionsSecurities {
  'figi'?: (string);
  'blocked'?: (number | string | Long);
  'balance'?: (number | string | Long);
}

export interface PositionsSecurities__Output {
  'figi': (string);
  'blocked': (string);
  'balance': (string);
}
