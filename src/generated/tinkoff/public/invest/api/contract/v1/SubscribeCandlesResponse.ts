// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { CandleSubscription as _tinkoff_public_invest_api_contract_v1_CandleSubscription, CandleSubscription__Output as _tinkoff_public_invest_api_contract_v1_CandleSubscription__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CandleSubscription';

export interface SubscribeCandlesResponse {
  'trackingId'?: (string);
  'candlesSubscriptions'?: (_tinkoff_public_invest_api_contract_v1_CandleSubscription)[];
}

export interface SubscribeCandlesResponse__Output {
  'trackingId': (string);
  'candlesSubscriptions': (_tinkoff_public_invest_api_contract_v1_CandleSubscription__Output)[];
}
