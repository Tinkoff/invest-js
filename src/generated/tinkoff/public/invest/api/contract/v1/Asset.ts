// Original file: investAPI/src/docs/contracts/instruments.proto

import type { AssetType as _tinkoff_public_invest_api_contract_v1_AssetType } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetType';
import type { AssetInstrument as _tinkoff_public_invest_api_contract_v1_AssetInstrument, AssetInstrument__Output as _tinkoff_public_invest_api_contract_v1_AssetInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetInstrument';

export interface Asset {
  'uid'?: (string);
  'type'?: (_tinkoff_public_invest_api_contract_v1_AssetType | keyof typeof _tinkoff_public_invest_api_contract_v1_AssetType);
  'name'?: (string);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_AssetInstrument)[];
}

export interface Asset__Output {
  'uid': (string);
  'type': (keyof typeof _tinkoff_public_invest_api_contract_v1_AssetType);
  'name': (string);
  'instruments': (_tinkoff_public_invest_api_contract_v1_AssetInstrument__Output)[];
}
