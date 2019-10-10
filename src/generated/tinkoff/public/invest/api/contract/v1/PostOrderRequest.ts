// Original file: investAPI/src/docs/contracts/orders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { OrderDirection as _tinkoff_public_invest_api_contract_v1_OrderDirection } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderDirection';
import type { OrderType as _tinkoff_public_invest_api_contract_v1_OrderType } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderType';
import type { Long } from '@grpc/proto-loader';

export interface PostOrderRequest {
  'figi'?: (string);
  'quantity'?: (number | string | Long);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_OrderDirection | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderDirection);
  'accountId'?: (string);
  'orderType'?: (_tinkoff_public_invest_api_contract_v1_OrderType | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderType);
  'orderId'?: (string);
}

export interface PostOrderRequest__Output {
  'figi': (string);
  'quantity': (string);
  'price': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'direction': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderDirection);
  'accountId': (string);
  'orderType': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderType);
  'orderId': (string);
}
