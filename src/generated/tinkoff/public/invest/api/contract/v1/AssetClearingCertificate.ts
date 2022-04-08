// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface AssetClearingCertificate {
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'nominalCurrency'?: (string);
}

export interface AssetClearingCertificate__Output {
  'nominal': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'nominalCurrency': (string);
}
