// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { InfoSubscription as _tinkoff_public_invest_api_contract_v1_InfoSubscription, InfoSubscription__Output as _tinkoff_public_invest_api_contract_v1_InfoSubscription__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InfoSubscription';

export interface SubscribeInfoResponse {
  'trackingId'?: (string);
  'infoSubscriptions'?: (_tinkoff_public_invest_api_contract_v1_InfoSubscription)[];
}

export interface SubscribeInfoResponse__Output {
  'trackingId': (string);
  'infoSubscriptions': (_tinkoff_public_invest_api_contract_v1_InfoSubscription__Output)[];
}
