// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionAction as _tinkoff_public_invest_api_contract_v1_SubscriptionAction } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionAction';
import type { CandleInstrument as _tinkoff_public_invest_api_contract_v1_CandleInstrument, CandleInstrument__Output as _tinkoff_public_invest_api_contract_v1_CandleInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CandleInstrument';

export interface SubscribeCandlesRequest {
  'subscriptionAction'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionAction | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_CandleInstrument)[];
  'waitingClose'?: (boolean);
}

export interface SubscribeCandlesRequest__Output {
  'subscriptionAction': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments': (_tinkoff_public_invest_api_contract_v1_CandleInstrument__Output)[];
  'waitingClose': (boolean);
}
