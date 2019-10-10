// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionAction as _tinkoff_public_invest_api_contract_v1_SubscriptionAction } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionAction';
import type { OrderBookInstrument as _tinkoff_public_invest_api_contract_v1_OrderBookInstrument, OrderBookInstrument__Output as _tinkoff_public_invest_api_contract_v1_OrderBookInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderBookInstrument';

export interface SubscribeOrderBookRequest {
  'subscriptionAction'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionAction | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_OrderBookInstrument)[];
}

export interface SubscribeOrderBookRequest__Output {
  'subscriptionAction': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments': (_tinkoff_public_invest_api_contract_v1_OrderBookInstrument__Output)[];
}
