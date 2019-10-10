// Original file: investAPI/src/docs/contracts/users.proto

import type { UnaryLimit as _tinkoff_public_invest_api_contract_v1_UnaryLimit, UnaryLimit__Output as _tinkoff_public_invest_api_contract_v1_UnaryLimit__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/UnaryLimit';
import type { StreamLimit as _tinkoff_public_invest_api_contract_v1_StreamLimit, StreamLimit__Output as _tinkoff_public_invest_api_contract_v1_StreamLimit__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/StreamLimit';

export interface GetUserTariffResponse {
  'unaryLimits'?: (_tinkoff_public_invest_api_contract_v1_UnaryLimit)[];
  'streamLimits'?: (_tinkoff_public_invest_api_contract_v1_StreamLimit)[];
}

export interface GetUserTariffResponse__Output {
  'unaryLimits': (_tinkoff_public_invest_api_contract_v1_UnaryLimit__Output)[];
  'streamLimits': (_tinkoff_public_invest_api_contract_v1_StreamLimit__Output)[];
}
