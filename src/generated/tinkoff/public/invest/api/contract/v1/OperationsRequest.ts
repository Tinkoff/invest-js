// Original file: investAPI/src/docs/contracts/operations.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { OperationState as _tinkoff_public_invest_api_contract_v1_OperationState } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationState';

export interface OperationsRequest {
  'accountId'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'state'?: (_tinkoff_public_invest_api_contract_v1_OperationState | keyof typeof _tinkoff_public_invest_api_contract_v1_OperationState);
  'figi'?: (string);
}

export interface OperationsRequest__Output {
  'accountId': (string);
  'from': (_google_protobuf_Timestamp__Output | null);
  'to': (_google_protobuf_Timestamp__Output | null);
  'state': (keyof typeof _tinkoff_public_invest_api_contract_v1_OperationState);
  'figi': (string);
}
