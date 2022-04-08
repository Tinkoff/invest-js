// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface AssetBond {
  'currentNominal'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'borrowName'?: (string);
  'issueSize'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'nominalCurrency'?: (string);
  'issueKind'?: (string);
  'interestKind'?: (string);
  'couponQuantityPerYear'?: (number);
  'indexedNominalFlag'?: (boolean);
  'subordinatedFlag'?: (boolean);
  'collateralFlag'?: (boolean);
  'taxFreeFlag'?: (boolean);
  'amortizationFlag'?: (boolean);
  'floatingCouponFlag'?: (boolean);
  'perpetualFlag'?: (boolean);
  'maturityDate'?: (_google_protobuf_Timestamp | null);
  'returnCondition'?: (string);
  'stateRegDate'?: (_google_protobuf_Timestamp | null);
  'placementDate'?: (_google_protobuf_Timestamp | null);
  'placementPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'issueSizePlan'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface AssetBond__Output {
  'currentNominal': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'borrowName': (string);
  'issueSize': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'nominal': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'nominalCurrency': (string);
  'issueKind': (string);
  'interestKind': (string);
  'couponQuantityPerYear': (number);
  'indexedNominalFlag': (boolean);
  'subordinatedFlag': (boolean);
  'collateralFlag': (boolean);
  'taxFreeFlag': (boolean);
  'amortizationFlag': (boolean);
  'floatingCouponFlag': (boolean);
  'perpetualFlag': (boolean);
  'maturityDate': (_google_protobuf_Timestamp__Output | null);
  'returnCondition': (string);
  'stateRegDate': (_google_protobuf_Timestamp__Output | null);
  'placementDate': (_google_protobuf_Timestamp__Output | null);
  'placementPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'issueSizePlan': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
