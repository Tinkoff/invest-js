// Original file: investAPI/src/docs/contracts/instruments.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface GetFuturesMarginResponse {
  'initialMarginOnBuy'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'initialMarginOnSell'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'minPriceIncrement'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'minPriceIncrementAmount'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface GetFuturesMarginResponse__Output {
  'initialMarginOnBuy': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'initialMarginOnSell': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'minPriceIncrement': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'minPriceIncrementAmount': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
