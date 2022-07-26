// Original file: investAPI/src/docs/contracts/operations.proto

import type { PortfolioSubscriptionResult as _tinkoff_public_invest_api_contract_v1_PortfolioSubscriptionResult, PortfolioSubscriptionResult__Output as _tinkoff_public_invest_api_contract_v1_PortfolioSubscriptionResult__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioSubscriptionResult';
import type { PortfolioResponse as _tinkoff_public_invest_api_contract_v1_PortfolioResponse, PortfolioResponse__Output as _tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioResponse';
import type { Ping as _tinkoff_public_invest_api_contract_v1_Ping, Ping__Output as _tinkoff_public_invest_api_contract_v1_Ping__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Ping';

export interface PortfolioStreamResponse {
  'subscriptions'?: (_tinkoff_public_invest_api_contract_v1_PortfolioSubscriptionResult | null);
  'portfolio'?: (_tinkoff_public_invest_api_contract_v1_PortfolioResponse | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping | null);
  'payload'?: "subscriptions"|"portfolio"|"ping";
}

export interface PortfolioStreamResponse__Output {
  'subscriptions'?: (_tinkoff_public_invest_api_contract_v1_PortfolioSubscriptionResult__Output | null);
  'portfolio'?: (_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping__Output | null);
  'payload': "subscriptions"|"portfolio"|"ping";
}
