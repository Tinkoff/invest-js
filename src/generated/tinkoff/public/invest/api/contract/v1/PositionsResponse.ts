// Original file: investAPI/src/docs/contracts/operations.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { PositionsSecurities as _tinkoff_public_invest_api_contract_v1_PositionsSecurities, PositionsSecurities__Output as _tinkoff_public_invest_api_contract_v1_PositionsSecurities__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsSecurities';
import type { PositionsFutures as _tinkoff_public_invest_api_contract_v1_PositionsFutures, PositionsFutures__Output as _tinkoff_public_invest_api_contract_v1_PositionsFutures__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsFutures';
import type { PositionsOptions as _tinkoff_public_invest_api_contract_v1_PositionsOptions, PositionsOptions__Output as _tinkoff_public_invest_api_contract_v1_PositionsOptions__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsOptions';

export interface PositionsResponse {
  'money'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue)[];
  'blocked'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue)[];
  'securities'?: (_tinkoff_public_invest_api_contract_v1_PositionsSecurities)[];
  'limitsLoadingInProgress'?: (boolean);
  'futures'?: (_tinkoff_public_invest_api_contract_v1_PositionsFutures)[];
  'options'?: (_tinkoff_public_invest_api_contract_v1_PositionsOptions)[];
}

export interface PositionsResponse__Output {
  'money': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output)[];
  'blocked': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output)[];
  'securities': (_tinkoff_public_invest_api_contract_v1_PositionsSecurities__Output)[];
  'limitsLoadingInProgress': (boolean);
  'futures': (_tinkoff_public_invest_api_contract_v1_PositionsFutures__Output)[];
  'options': (_tinkoff_public_invest_api_contract_v1_PositionsOptions__Output)[];
}
