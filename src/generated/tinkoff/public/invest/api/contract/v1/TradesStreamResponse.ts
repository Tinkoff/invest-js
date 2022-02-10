// Original file: investAPI/src/docs/contracts/orders.proto

import type { OrderTrades as _tinkoff_public_invest_api_contract_v1_OrderTrades, OrderTrades__Output as _tinkoff_public_invest_api_contract_v1_OrderTrades__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderTrades';
import type { Ping as _tinkoff_public_invest_api_contract_v1_Ping, Ping__Output as _tinkoff_public_invest_api_contract_v1_Ping__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Ping';

export interface TradesStreamResponse {
  'orderTrades'?: (_tinkoff_public_invest_api_contract_v1_OrderTrades | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping | null);
  'payload'?: "orderTrades"|"ping";
}

export interface TradesStreamResponse__Output {
  'orderTrades'?: (_tinkoff_public_invest_api_contract_v1_OrderTrades__Output | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping__Output | null);
  'payload': "orderTrades"|"ping";
}
