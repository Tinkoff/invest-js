// Original file: investAPI/src/docs/contracts/orders.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { OrderDirection as _tinkoff_public_invest_api_contract_v1_OrderDirection } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderDirection';
import type { OrderTrade as _tinkoff_public_invest_api_contract_v1_OrderTrade, OrderTrade__Output as _tinkoff_public_invest_api_contract_v1_OrderTrade__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderTrade';

export interface OrderTrades {
  'orderId'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_OrderDirection | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderDirection);
  'figi'?: (string);
  'trades'?: (_tinkoff_public_invest_api_contract_v1_OrderTrade)[];
  'accountId'?: (string);
  'instrumentUid'?: (string);
}

export interface OrderTrades__Output {
  'orderId': (string);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'direction': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderDirection);
  'figi': (string);
  'trades': (_tinkoff_public_invest_api_contract_v1_OrderTrade__Output)[];
  'accountId': (string);
  'instrumentUid': (string);
}
