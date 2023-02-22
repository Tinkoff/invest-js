// Original file: investAPI/src/docs/contracts/operations.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';

export interface PortfolioPosition {
  'figi'?: (string);
  'instrumentType'?: (string);
  'quantity'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'averagePositionPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'expectedYield'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'currentNkd'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'averagePositionPricePt'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'currentPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'averagePositionPriceFifo'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'quantityLots'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'blocked'?: (boolean);
  'blockedLots'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'positionUid'?: (string);
  'instrumentUid'?: (string);
  'varMargin'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'expectedYieldFifo'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface PortfolioPosition__Output {
  'figi': (string);
  'instrumentType': (string);
  'quantity': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'averagePositionPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'expectedYield': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'currentNkd': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'averagePositionPricePt': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'currentPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'averagePositionPriceFifo': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'quantityLots': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'blocked': (boolean);
  'blockedLots': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'positionUid': (string);
  'instrumentUid': (string);
  'varMargin': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'expectedYieldFifo': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
