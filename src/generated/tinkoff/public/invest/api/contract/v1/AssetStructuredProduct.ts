// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { StructuredProductType as _tinkoff_public_invest_api_contract_v1_StructuredProductType } from '../../../../../../tinkoff/public/invest/api/contract/v1/StructuredProductType';
import type { AssetType as _tinkoff_public_invest_api_contract_v1_AssetType } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface AssetStructuredProduct {
  'borrowName'?: (string);
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'nominalCurrency'?: (string);
  'type'?: (_tinkoff_public_invest_api_contract_v1_StructuredProductType | keyof typeof _tinkoff_public_invest_api_contract_v1_StructuredProductType);
  'logicPortfolio'?: (string);
  'assetType'?: (_tinkoff_public_invest_api_contract_v1_AssetType | keyof typeof _tinkoff_public_invest_api_contract_v1_AssetType);
  'basicAsset'?: (string);
  'safetyBarrier'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'maturityDate'?: (_google_protobuf_Timestamp | null);
  'issueSizePlan'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'issueSize'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'placementDate'?: (_google_protobuf_Timestamp | null);
  'issueKind'?: (string);
}

export interface AssetStructuredProduct__Output {
  'borrowName': (string);
  'nominal': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'nominalCurrency': (string);
  'type': (keyof typeof _tinkoff_public_invest_api_contract_v1_StructuredProductType);
  'logicPortfolio': (string);
  'assetType': (keyof typeof _tinkoff_public_invest_api_contract_v1_AssetType);
  'basicAsset': (string);
  'safetyBarrier': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'maturityDate': (_google_protobuf_Timestamp__Output | null);
  'issueSizePlan': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'issueSize': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'placementDate': (_google_protobuf_Timestamp__Output | null);
  'issueKind': (string);
}
