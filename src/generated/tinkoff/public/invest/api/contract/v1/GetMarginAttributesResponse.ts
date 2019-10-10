// Original file: investAPI/src/docs/contracts/users.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface GetMarginAttributesResponse {
  'liquidPortfolio'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'startingMargin'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'minimalMargin'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'fundsSufficiencyLevel'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'amountOfMissingFunds'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
}

export interface GetMarginAttributesResponse__Output {
  'liquidPortfolio': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'startingMargin': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'minimalMargin': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'fundsSufficiencyLevel': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'amountOfMissingFunds': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
}
