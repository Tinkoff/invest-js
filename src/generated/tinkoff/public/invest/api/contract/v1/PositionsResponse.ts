// Original file: investAPI/src/docs/contracts/operations.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { PositionsSecurities as _tinkoff_public_invest_api_contract_v1_PositionsSecurities, PositionsSecurities__Output as _tinkoff_public_invest_api_contract_v1_PositionsSecurities__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsSecurities';

export interface PositionsResponse {
  'money'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue)[];
  'blocked'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue)[];
  'securities'?: (_tinkoff_public_invest_api_contract_v1_PositionsSecurities)[];
  'limitsLoadingInProgress'?: (boolean);
}

export interface PositionsResponse__Output {
  'money': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output)[];
  'blocked': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output)[];
  'securities': (_tinkoff_public_invest_api_contract_v1_PositionsSecurities__Output)[];
  'limitsLoadingInProgress': (boolean);
}
