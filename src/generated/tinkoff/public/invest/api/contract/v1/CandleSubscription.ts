// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionInterval as _tinkoff_public_invest_api_contract_v1_SubscriptionInterval } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionInterval';
import type { SubscriptionStatus as _tinkoff_public_invest_api_contract_v1_SubscriptionStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionStatus';

export interface CandleSubscription {
  'figi'?: (string);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionInterval | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionInterval);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
}

export interface CandleSubscription__Output {
  'figi': (string);
  'interval': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionInterval);
  'subscriptionStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
}
