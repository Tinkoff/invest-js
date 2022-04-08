// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscribeCandlesResponse as _tinkoff_public_invest_api_contract_v1_SubscribeCandlesResponse, SubscribeCandlesResponse__Output as _tinkoff_public_invest_api_contract_v1_SubscribeCandlesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeCandlesResponse';
import type { SubscribeOrderBookResponse as _tinkoff_public_invest_api_contract_v1_SubscribeOrderBookResponse, SubscribeOrderBookResponse__Output as _tinkoff_public_invest_api_contract_v1_SubscribeOrderBookResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeOrderBookResponse';
import type { SubscribeTradesResponse as _tinkoff_public_invest_api_contract_v1_SubscribeTradesResponse, SubscribeTradesResponse__Output as _tinkoff_public_invest_api_contract_v1_SubscribeTradesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeTradesResponse';
import type { SubscribeInfoResponse as _tinkoff_public_invest_api_contract_v1_SubscribeInfoResponse, SubscribeInfoResponse__Output as _tinkoff_public_invest_api_contract_v1_SubscribeInfoResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeInfoResponse';
import type { Candle as _tinkoff_public_invest_api_contract_v1_Candle, Candle__Output as _tinkoff_public_invest_api_contract_v1_Candle__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Candle';
import type { Trade as _tinkoff_public_invest_api_contract_v1_Trade, Trade__Output as _tinkoff_public_invest_api_contract_v1_Trade__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Trade';
import type { OrderBook as _tinkoff_public_invest_api_contract_v1_OrderBook, OrderBook__Output as _tinkoff_public_invest_api_contract_v1_OrderBook__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderBook';
import type { TradingStatus as _tinkoff_public_invest_api_contract_v1_TradingStatus, TradingStatus__Output as _tinkoff_public_invest_api_contract_v1_TradingStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradingStatus';
import type { Ping as _tinkoff_public_invest_api_contract_v1_Ping, Ping__Output as _tinkoff_public_invest_api_contract_v1_Ping__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Ping';
import type { SubscribeLastPriceResponse as _tinkoff_public_invest_api_contract_v1_SubscribeLastPriceResponse, SubscribeLastPriceResponse__Output as _tinkoff_public_invest_api_contract_v1_SubscribeLastPriceResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscribeLastPriceResponse';
import type { LastPrice as _tinkoff_public_invest_api_contract_v1_LastPrice, LastPrice__Output as _tinkoff_public_invest_api_contract_v1_LastPrice__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/LastPrice';

export interface MarketDataResponse {
  'subscribeCandlesResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeCandlesResponse | null);
  'subscribeOrderBookResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeOrderBookResponse | null);
  'subscribeTradesResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeTradesResponse | null);
  'subscribeInfoResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeInfoResponse | null);
  'candle'?: (_tinkoff_public_invest_api_contract_v1_Candle | null);
  'trade'?: (_tinkoff_public_invest_api_contract_v1_Trade | null);
  'orderbook'?: (_tinkoff_public_invest_api_contract_v1_OrderBook | null);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_TradingStatus | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping | null);
  'subscribeLastPriceResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeLastPriceResponse | null);
  'lastPrice'?: (_tinkoff_public_invest_api_contract_v1_LastPrice | null);
  'payload'?: "subscribeCandlesResponse"|"subscribeOrderBookResponse"|"subscribeTradesResponse"|"subscribeInfoResponse"|"candle"|"trade"|"orderbook"|"tradingStatus"|"ping"|"subscribeLastPriceResponse"|"lastPrice";
}

export interface MarketDataResponse__Output {
  'subscribeCandlesResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeCandlesResponse__Output | null);
  'subscribeOrderBookResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeOrderBookResponse__Output | null);
  'subscribeTradesResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeTradesResponse__Output | null);
  'subscribeInfoResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeInfoResponse__Output | null);
  'candle'?: (_tinkoff_public_invest_api_contract_v1_Candle__Output | null);
  'trade'?: (_tinkoff_public_invest_api_contract_v1_Trade__Output | null);
  'orderbook'?: (_tinkoff_public_invest_api_contract_v1_OrderBook__Output | null);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_TradingStatus__Output | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping__Output | null);
  'subscribeLastPriceResponse'?: (_tinkoff_public_invest_api_contract_v1_SubscribeLastPriceResponse__Output | null);
  'lastPrice'?: (_tinkoff_public_invest_api_contract_v1_LastPrice__Output | null);
  'payload': "subscribeCandlesResponse"|"subscribeOrderBookResponse"|"subscribeTradesResponse"|"subscribeInfoResponse"|"candle"|"trade"|"orderbook"|"tradingStatus"|"ping"|"subscribeLastPriceResponse"|"lastPrice";
}
