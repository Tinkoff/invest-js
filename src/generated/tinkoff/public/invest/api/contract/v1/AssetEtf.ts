// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface AssetEtf {
  'totalExpense'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'hurdleRate'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'performanceFee'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'fixedCommission'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'paymentType'?: (string);
  'watermarkFlag'?: (boolean);
  'buyPremium'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'sellDiscount'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'rebalancingFlag'?: (boolean);
  'rebalancingFreq'?: (string);
  'managementType'?: (string);
  'primaryIndex'?: (string);
  'focusType'?: (string);
  'leveragedFlag'?: (boolean);
  'numShare'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'ucitsFlag'?: (boolean);
  'releasedDate'?: (_google_protobuf_Timestamp | null);
  'description'?: (string);
  'primaryIndexDescription'?: (string);
  'primaryIndexCompany'?: (string);
  'indexRecoveryPeriod'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'inavCode'?: (string);
  'divYieldFlag'?: (boolean);
  'expenseCommission'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'primaryIndexTrackingError'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'rebalancingPlan'?: (string);
  'taxRate'?: (string);
  'rebalancingDates'?: (_google_protobuf_Timestamp)[];
  'issueKind'?: (string);
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'nominalCurrency'?: (string);
}

export interface AssetEtf__Output {
  'totalExpense': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'hurdleRate': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'performanceFee': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'fixedCommission': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'paymentType': (string);
  'watermarkFlag': (boolean);
  'buyPremium': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'sellDiscount': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'rebalancingFlag': (boolean);
  'rebalancingFreq': (string);
  'managementType': (string);
  'primaryIndex': (string);
  'focusType': (string);
  'leveragedFlag': (boolean);
  'numShare': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'ucitsFlag': (boolean);
  'releasedDate': (_google_protobuf_Timestamp__Output | null);
  'description': (string);
  'primaryIndexDescription': (string);
  'primaryIndexCompany': (string);
  'indexRecoveryPeriod': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'inavCode': (string);
  'divYieldFlag': (boolean);
  'expenseCommission': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'primaryIndexTrackingError': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'rebalancingPlan': (string);
  'taxRate': (string);
  'rebalancingDates': (_google_protobuf_Timestamp__Output)[];
  'issueKind': (string);
  'nominal': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'nominalCurrency': (string);
}
