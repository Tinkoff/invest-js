// Original file: investAPI/src/docs/contracts/operations.proto

import type { PositionsAccountSubscriptionStatus as _tinkoff_public_invest_api_contract_v1_PositionsAccountSubscriptionStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsAccountSubscriptionStatus';

export interface PositionsSubscriptionStatus {
  'accountId'?: (string);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_PositionsAccountSubscriptionStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_PositionsAccountSubscriptionStatus);
}

export interface PositionsSubscriptionStatus__Output {
  'accountId': (string);
  'subscriptionStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_PositionsAccountSubscriptionStatus);
}
