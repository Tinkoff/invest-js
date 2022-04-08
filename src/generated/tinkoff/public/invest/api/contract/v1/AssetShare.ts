// Original file: investAPI/src/docs/contracts/instruments.proto

import type { ShareType as _tinkoff_public_invest_api_contract_v1_ShareType } from '../../../../../../tinkoff/public/invest/api/contract/v1/ShareType';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface AssetShare {
  'type'?: (_tinkoff_public_invest_api_contract_v1_ShareType | keyof typeof _tinkoff_public_invest_api_contract_v1_ShareType);
  'issueSize'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'nominalCurrency'?: (string);
  'primaryIndex'?: (string);
  'dividendRate'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'preferredShareType'?: (string);
  'ipoDate'?: (_google_protobuf_Timestamp | null);
  'registryDate'?: (_google_protobuf_Timestamp | null);
  'divYieldFlag'?: (boolean);
  'issueKind'?: (string);
  'placementDate'?: (_google_protobuf_Timestamp | null);
  'represIsin'?: (string);
  'issueSizePlan'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'totalFloat'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface AssetShare__Output {
  'type': (keyof typeof _tinkoff_public_invest_api_contract_v1_ShareType);
  'issueSize': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'nominal': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'nominalCurrency': (string);
  'primaryIndex': (string);
  'dividendRate': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'preferredShareType': (string);
  'ipoDate': (_google_protobuf_Timestamp__Output | null);
  'registryDate': (_google_protobuf_Timestamp__Output | null);
  'divYieldFlag': (boolean);
  'issueKind': (string);
  'placementDate': (_google_protobuf_Timestamp__Output | null);
  'represIsin': (string);
  'issueSizePlan': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'totalFloat': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
