// Original file: investAPI/src/docs/contracts/operations.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface PortfolioPosition {
  'figi'?: (string);
  'instrumentType'?: (string);
  'quantity'?: (number | string);
  'averagePositionPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'expectedYield'?: (number | string);
  'currentNkd'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'averagePositionPricePt'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface PortfolioPosition__Output {
  'figi': (string);
  'instrumentType': (string);
  'quantity': (number);
  'averagePositionPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'expectedYield': (number);
  'currentNkd': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'averagePositionPricePt': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
