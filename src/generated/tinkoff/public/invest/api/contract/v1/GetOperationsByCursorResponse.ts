// Original file: investAPI/src/docs/contracts/operations.proto

import type { OperationItem as _tinkoff_public_invest_api_contract_v1_OperationItem, OperationItem__Output as _tinkoff_public_invest_api_contract_v1_OperationItem__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationItem';

export interface GetOperationsByCursorResponse {
  'hasNext'?: (boolean);
  'nextCursor'?: (string);
  'items'?: (_tinkoff_public_invest_api_contract_v1_OperationItem)[];
}

export interface GetOperationsByCursorResponse__Output {
  'hasNext': (boolean);
  'nextCursor': (string);
  'items': (_tinkoff_public_invest_api_contract_v1_OperationItem__Output)[];
}
