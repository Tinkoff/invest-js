// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionStatus as _tinkoff_public_invest_api_contract_v1_SubscriptionStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionStatus';

export interface OrderBookSubscription {
  'figi'?: (string);
  'depth'?: (number);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
}

export interface OrderBookSubscription__Output {
  'figi': (string);
  'depth': (number);
  'subscriptionStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
}
