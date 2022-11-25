// Original file: investAPI/src/docs/contracts/operations.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface VirtualPortfolioPosition {
  'positionUid'?: (string);
  'instrumentUid'?: (string);
  'figi'?: (string);
  'instrumentType'?: (string);
  'quantity'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'averagePositionPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'expectedYield'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'expectedYieldFifo'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'expireDate'?: (_google_protobuf_Timestamp | null);
  'currentPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'averagePositionPriceFifo'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
}

export interface VirtualPortfolioPosition__Output {
  'positionUid': (string);
  'instrumentUid': (string);
  'figi': (string);
  'instrumentType': (string);
  'quantity': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'averagePositionPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'expectedYield': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'expectedYieldFifo': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'expireDate': (_google_protobuf_Timestamp__Output | null);
  'currentPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'averagePositionPriceFifo': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
}
