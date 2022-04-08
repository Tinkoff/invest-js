// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Order as _tinkoff_public_invest_api_contract_v1_Order, Order__Output as _tinkoff_public_invest_api_contract_v1_Order__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Order';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface GetOrderBookResponse {
  'figi'?: (string);
  'depth'?: (number);
  'bids'?: (_tinkoff_public_invest_api_contract_v1_Order)[];
  'asks'?: (_tinkoff_public_invest_api_contract_v1_Order)[];
  'lastPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'closePrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'limitUp'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'limitDown'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface GetOrderBookResponse__Output {
  'figi': (string);
  'depth': (number);
  'bids': (_tinkoff_public_invest_api_contract_v1_Order__Output)[];
  'asks': (_tinkoff_public_invest_api_contract_v1_Order__Output)[];
  'lastPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'closePrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'limitUp': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'limitDown': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
