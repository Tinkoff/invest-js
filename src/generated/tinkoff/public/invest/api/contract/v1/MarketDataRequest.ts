// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscribeCandlesRequest as _tinkoff_public_invest_api_contract_v1_SubscribeCandlesRequest, SubscribeCandlesRequest__Output as _tinkoff_public_invest_api_contract_v1_SubscribeCandlesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeCandlesRequest';
import type { SubscribeOrderBookRequest as _tinkoff_public_invest_api_contract_v1_SubscribeOrderBookRequest, SubscribeOrderBookRequest__Output as _tinkoff_public_invest_api_contract_v1_SubscribeOrderBookRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeOrderBookRequest';
import type { SubscribeTradesRequest as _tinkoff_public_invest_api_contract_v1_SubscribeTradesRequest, SubscribeTradesRequest__Output as _tinkoff_public_invest_api_contract_v1_SubscribeTradesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeTradesRequest';
import type { SubscribeInfoRequest as _tinkoff_public_invest_api_contract_v1_SubscribeInfoRequest, SubscribeInfoRequest__Output as _tinkoff_public_invest_api_contract_v1_SubscribeInfoRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeInfoRequest';

export interface MarketDataRequest {
  'subscribeCandlesRequest'?: (_tinkoff_public_invest_api_contract_v1_SubscribeCandlesRequest | null);
  'subscribeOrderBookRequest'?: (_tinkoff_public_invest_api_contract_v1_SubscribeOrderBookRequest | null);
  'subscribeTradesRequest'?: (_tinkoff_public_invest_api_contract_v1_SubscribeTradesRequest | null);
  'subscribeInfoRequest'?: (_tinkoff_public_invest_api_contract_v1_SubscribeInfoRequest | null);
  'payload'?: "subscribeCandlesRequest"|"subscribeOrderBookRequest"|"subscribeTradesRequest"|"subscribeInfoRequest";
}

export interface MarketDataRequest__Output {
  'subscribeCandlesRequest'?: (_tinkoff_public_invest_api_contract_v1_SubscribeCandlesRequest__Output | null);
  'subscribeOrderBookRequest'?: (_tinkoff_public_invest_api_contract_v1_SubscribeOrderBookRequest__Output | null);
  'subscribeTradesRequest'?: (_tinkoff_public_invest_api_contract_v1_SubscribeTradesRequest__Output | null);
  'subscribeInfoRequest'?: (_tinkoff_public_invest_api_contract_v1_SubscribeInfoRequest__Output | null);
  'payload': "subscribeCandlesRequest"|"subscribeOrderBookRequest"|"subscribeTradesRequest"|"subscribeInfoRequest";
}
