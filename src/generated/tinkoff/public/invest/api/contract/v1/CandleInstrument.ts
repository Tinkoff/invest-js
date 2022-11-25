// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionInterval as _tinkoff_public_invest_api_contract_v1_SubscriptionInterval } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionInterval';

export interface CandleInstrument {
  'figi'?: (string);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionInterval | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionInterval);
  'instrumentId'?: (string);
}

export interface CandleInstrument__Output {
  'figi': (string);
  'interval': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionInterval);
  'instrumentId': (string);
}
