// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { OrderBookSubscription as _tinkoff_public_invest_api_contract_v1_OrderBookSubscription, OrderBookSubscription__Output as _tinkoff_public_invest_api_contract_v1_OrderBookSubscription__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderBookSubscription';

export interface SubscribeOrderBookResponse {
  'trackingId'?: (string);
  'orderBookSubscriptions'?: (_tinkoff_public_invest_api_contract_v1_OrderBookSubscription)[];
}

export interface SubscribeOrderBookResponse__Output {
  'trackingId': (string);
  'orderBookSubscriptions': (_tinkoff_public_invest_api_contract_v1_OrderBookSubscription__Output)[];
}
