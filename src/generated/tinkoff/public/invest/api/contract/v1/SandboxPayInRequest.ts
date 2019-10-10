// Original file: investAPI/src/docs/contracts/sandbox.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';

export interface SandboxPayInRequest {
  'accountId'?: (string);
  'amount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
}

export interface SandboxPayInRequest__Output {
  'accountId': (string);
  'amount': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
}
