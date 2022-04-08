// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { LastPriceSubscription as _tinkoff_public_invest_api_contract_v1_LastPriceSubscription, LastPriceSubscription__Output as _tinkoff_public_invest_api_contract_v1_LastPriceSubscription__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/LastPriceSubscription';

export interface SubscribeLastPriceResponse {
  'trackingId'?: (string);
  'lastPriceSubscriptions'?: (_tinkoff_public_invest_api_contract_v1_LastPriceSubscription)[];
}

export interface SubscribeLastPriceResponse__Output {
  'trackingId': (string);
  'lastPriceSubscriptions': (_tinkoff_public_invest_api_contract_v1_LastPriceSubscription__Output)[];
}
