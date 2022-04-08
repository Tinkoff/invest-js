// Original file: investAPI/src/docs/contracts/instruments.proto

import type { AssetShare as _tinkoff_public_invest_api_contract_v1_AssetShare, AssetShare__Output as _tinkoff_public_invest_api_contract_v1_AssetShare__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetShare';
import type { AssetBond as _tinkoff_public_invest_api_contract_v1_AssetBond, AssetBond__Output as _tinkoff_public_invest_api_contract_v1_AssetBond__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetBond';
import type { AssetStructuredProduct as _tinkoff_public_invest_api_contract_v1_AssetStructuredProduct, AssetStructuredProduct__Output as _tinkoff_public_invest_api_contract_v1_AssetStructuredProduct__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetStructuredProduct';
import type { AssetEtf as _tinkoff_public_invest_api_contract_v1_AssetEtf, AssetEtf__Output as _tinkoff_public_invest_api_contract_v1_AssetEtf__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetEtf';
import type { AssetClearingCertificate as _tinkoff_public_invest_api_contract_v1_AssetClearingCertificate, AssetClearingCertificate__Output as _tinkoff_public_invest_api_contract_v1_AssetClearingCertificate__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetClearingCertificate';

export interface AssetSecurity {
  'isin'?: (string);
  'type'?: (string);
  'share'?: (_tinkoff_public_invest_api_contract_v1_AssetShare | null);
  'bond'?: (_tinkoff_public_invest_api_contract_v1_AssetBond | null);
  'sp'?: (_tinkoff_public_invest_api_contract_v1_AssetStructuredProduct | null);
  'etf'?: (_tinkoff_public_invest_api_contract_v1_AssetEtf | null);
  'clearingCertificate'?: (_tinkoff_public_invest_api_contract_v1_AssetClearingCertificate | null);
  'ext'?: "share"|"bond"|"sp"|"etf"|"clearingCertificate";
}

export interface AssetSecurity__Output {
  'isin': (string);
  'type': (string);
  'share'?: (_tinkoff_public_invest_api_contract_v1_AssetShare__Output | null);
  'bond'?: (_tinkoff_public_invest_api_contract_v1_AssetBond__Output | null);
  'sp'?: (_tinkoff_public_invest_api_contract_v1_AssetStructuredProduct__Output | null);
  'etf'?: (_tinkoff_public_invest_api_contract_v1_AssetEtf__Output | null);
  'clearingCertificate'?: (_tinkoff_public_invest_api_contract_v1_AssetClearingCertificate__Output | null);
  'ext': "share"|"bond"|"sp"|"etf"|"clearingCertificate";
}
