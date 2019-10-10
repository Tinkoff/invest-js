// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { TradeSubscription as _tinkoff_public_invest_api_contract_v1_TradeSubscription, TradeSubscription__Output as _tinkoff_public_invest_api_contract_v1_TradeSubscription__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeSubscription';

export interface SubscribeTradesResponse {
  'trackingId'?: (string);
  'tradeSubscriptions'?: (_tinkoff_public_invest_api_contract_v1_TradeSubscription)[];
}

export interface SubscribeTradesResponse__Output {
  'trackingId': (string);
  'tradeSubscriptions': (_tinkoff_public_invest_api_contract_v1_TradeSubscription__Output)[];
}
