// Original file: investAPI/src/docs/contracts/instruments.proto

import type { AssetType as _tinkoff_public_invest_api_contract_v1_AssetType } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { AssetCurrency as _tinkoff_public_invest_api_contract_v1_AssetCurrency, AssetCurrency__Output as _tinkoff_public_invest_api_contract_v1_AssetCurrency__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetCurrency';
import type { AssetSecurity as _tinkoff_public_invest_api_contract_v1_AssetSecurity, AssetSecurity__Output as _tinkoff_public_invest_api_contract_v1_AssetSecurity__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetSecurity';
import type { Brand as _tinkoff_public_invest_api_contract_v1_Brand, Brand__Output as _tinkoff_public_invest_api_contract_v1_Brand__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Brand';
import type { AssetInstrument as _tinkoff_public_invest_api_contract_v1_AssetInstrument, AssetInstrument__Output as _tinkoff_public_invest_api_contract_v1_AssetInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetInstrument';

export interface AssetFull {
  'uid'?: (string);
  'type'?: (_tinkoff_public_invest_api_contract_v1_AssetType | keyof typeof _tinkoff_public_invest_api_contract_v1_AssetType);
  'name'?: (string);
  'nameBrief'?: (string);
  'description'?: (string);
  'deletedAt'?: (_google_protobuf_Timestamp | null);
  'requiredTests'?: (string)[];
  'currency'?: (_tinkoff_public_invest_api_contract_v1_AssetCurrency | null);
  'security'?: (_tinkoff_public_invest_api_contract_v1_AssetSecurity | null);
  'gosRegCode'?: (string);
  'cfi'?: (string);
  'codeNsd'?: (string);
  'status'?: (string);
  'brand'?: (_tinkoff_public_invest_api_contract_v1_Brand | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
  'brCode'?: (string);
  'brCodeName'?: (string);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_AssetInstrument)[];
  'ext'?: "currency"|"security";
}

export interface AssetFull__Output {
  'uid': (string);
  'type': (keyof typeof _tinkoff_public_invest_api_contract_v1_AssetType);
  'name': (string);
  'nameBrief': (string);
  'description': (string);
  'deletedAt': (_google_protobuf_Timestamp__Output | null);
  'requiredTests': (string)[];
  'currency'?: (_tinkoff_public_invest_api_contract_v1_AssetCurrency__Output | null);
  'security'?: (_tinkoff_public_invest_api_contract_v1_AssetSecurity__Output | null);
  'gosRegCode': (string);
  'cfi': (string);
  'codeNsd': (string);
  'status': (string);
  'brand': (_tinkoff_public_invest_api_contract_v1_Brand__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
  'brCode': (string);
  'brCodeName': (string);
  'instruments': (_tinkoff_public_invest_api_contract_v1_AssetInstrument__Output)[];
  'ext': "currency"|"security";
}
