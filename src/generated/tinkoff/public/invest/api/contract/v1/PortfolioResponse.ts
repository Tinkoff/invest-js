// Original file: investAPI/src/docs/contracts/operations.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { PortfolioPosition as _tinkoff_public_invest_api_contract_v1_PortfolioPosition, PortfolioPosition__Output as _tinkoff_public_invest_api_contract_v1_PortfolioPosition__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioPosition';
import type { VirtualPortfolioPosition as _tinkoff_public_invest_api_contract_v1_VirtualPortfolioPosition, VirtualPortfolioPosition__Output as _tinkoff_public_invest_api_contract_v1_VirtualPortfolioPosition__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/VirtualPortfolioPosition';

export interface PortfolioResponse {
  'totalAmountShares'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'totalAmountBonds'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'totalAmountEtf'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'totalAmountCurrencies'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'totalAmountFutures'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'expectedYield'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'positions'?: (_tinkoff_public_invest_api_contract_v1_PortfolioPosition)[];
  'accountId'?: (string);
  'totalAmountOptions'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'totalAmountSp'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'totalAmountPortfolio'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'virtualPositions'?: (_tinkoff_public_invest_api_contract_v1_VirtualPortfolioPosition)[];
}

export interface PortfolioResponse__Output {
  'totalAmountShares': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'totalAmountBonds': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'totalAmountEtf': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'totalAmountCurrencies': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'totalAmountFutures': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'expectedYield': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'positions': (_tinkoff_public_invest_api_contract_v1_PortfolioPosition__Output)[];
  'accountId': (string);
  'totalAmountOptions': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'totalAmountSp': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'totalAmountPortfolio': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'virtualPositions': (_tinkoff_public_invest_api_contract_v1_VirtualPortfolioPosition__Output)[];
}
