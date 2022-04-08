// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionAction as _tinkoff_public_invest_api_contract_v1_SubscriptionAction } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionAction';
import type { LastPriceInstrument as _tinkoff_public_invest_api_contract_v1_LastPriceInstrument, LastPriceInstrument__Output as _tinkoff_public_invest_api_contract_v1_LastPriceInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/LastPriceInstrument';

export interface SubscribeLastPriceRequest {
  'subscriptionAction'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionAction | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_LastPriceInstrument)[];
}

export interface SubscribeLastPriceRequest__Output {
  'subscriptionAction': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments': (_tinkoff_public_invest_api_contract_v1_LastPriceInstrument__Output)[];
}
