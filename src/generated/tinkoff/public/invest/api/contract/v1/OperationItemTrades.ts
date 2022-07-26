// Original file: investAPI/src/docs/contracts/operations.proto

import type { OperationItemTrade as _tinkoff_public_invest_api_contract_v1_OperationItemTrade, OperationItemTrade__Output as _tinkoff_public_invest_api_contract_v1_OperationItemTrade__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationItemTrade';

export interface OperationItemTrades {
  'tradesSize'?: (number);
  'trades'?: (_tinkoff_public_invest_api_contract_v1_OperationItemTrade)[];
}

export interface OperationItemTrades__Output {
  'tradesSize': (number);
  'trades': (_tinkoff_public_invest_api_contract_v1_OperationItemTrade__Output)[];
}
