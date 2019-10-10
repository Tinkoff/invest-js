// Original file: investAPI/src/docs/contracts/users.proto

import type { AccountType as _tinkoff_public_invest_api_contract_v1_AccountType } from '../../../../../../tinkoff/public/invest/api/contract/v1/AccountType';
import type { AccountStatus as _tinkoff_public_invest_api_contract_v1_AccountStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/AccountStatus';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface Account {
  'id'?: (string);
  'type'?: (_tinkoff_public_invest_api_contract_v1_AccountType | keyof typeof _tinkoff_public_invest_api_contract_v1_AccountType);
  'name'?: (string);
  'status'?: (_tinkoff_public_invest_api_contract_v1_AccountStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_AccountStatus);
  'openedDate'?: (_google_protobuf_Timestamp | null);
  'closedDate'?: (_google_protobuf_Timestamp | null);
}

export interface Account__Output {
  'id': (string);
  'type': (keyof typeof _tinkoff_public_invest_api_contract_v1_AccountType);
  'name': (string);
  'status': (keyof typeof _tinkoff_public_invest_api_contract_v1_AccountStatus);
  'openedDate': (_google_protobuf_Timestamp__Output | null);
  'closedDate': (_google_protobuf_Timestamp__Output | null);
}
