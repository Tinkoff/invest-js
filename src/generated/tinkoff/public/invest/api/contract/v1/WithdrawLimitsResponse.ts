// Original file: investAPI/src/docs/contracts/operations.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';

export interface WithdrawLimitsResponse {
  'money'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue)[];
  'blocked'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue)[];
  'blockedGuarantee'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue)[];
}

export interface WithdrawLimitsResponse__Output {
  'money': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output)[];
  'blocked': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output)[];
  'blockedGuarantee': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output)[];
}
