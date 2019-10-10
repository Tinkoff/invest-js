// Original file: investAPI/src/docs/contracts/orders.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Long } from '@grpc/proto-loader';

export interface OrderStage {
  'price'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'quantity'?: (number | string | Long);
  'tradeId'?: (string);
}

export interface OrderStage__Output {
  'price': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'quantity': (string);
  'tradeId': (string);
}
