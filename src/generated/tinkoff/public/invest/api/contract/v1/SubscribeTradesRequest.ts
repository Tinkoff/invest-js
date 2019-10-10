// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionAction as _tinkoff_public_invest_api_contract_v1_SubscriptionAction } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionAction';
import type { TradeInstrument as _tinkoff_public_invest_api_contract_v1_TradeInstrument, TradeInstrument__Output as _tinkoff_public_invest_api_contract_v1_TradeInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeInstrument';

export interface SubscribeTradesRequest {
  'subscriptionAction'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionAction | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_TradeInstrument)[];
}

export interface SubscribeTradesRequest__Output {
  'subscriptionAction': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments': (_tinkoff_public_invest_api_contract_v1_TradeInstrument__Output)[];
}
