// Original file: investAPI/src/docs/contracts/instruments.proto

import type { EditFavoritesRequestInstrument as _tinkoff_public_invest_api_contract_v1_EditFavoritesRequestInstrument, EditFavoritesRequestInstrument__Output as _tinkoff_public_invest_api_contract_v1_EditFavoritesRequestInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/EditFavoritesRequestInstrument';
import type { EditFavoritesActionType as _tinkoff_public_invest_api_contract_v1_EditFavoritesActionType } from '../../../../../../tinkoff/public/invest/api/contract/v1/EditFavoritesActionType';

export interface EditFavoritesRequest {
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_EditFavoritesRequestInstrument)[];
  'actionType'?: (_tinkoff_public_invest_api_contract_v1_EditFavoritesActionType | keyof typeof _tinkoff_public_invest_api_contract_v1_EditFavoritesActionType);
}

export interface EditFavoritesRequest__Output {
  'instruments': (_tinkoff_public_invest_api_contract_v1_EditFavoritesRequestInstrument__Output)[];
  'actionType': (keyof typeof _tinkoff_public_invest_api_contract_v1_EditFavoritesActionType);
}
