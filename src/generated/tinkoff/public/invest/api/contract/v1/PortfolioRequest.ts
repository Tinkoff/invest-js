// Original file: investAPI/src/docs/contracts/operations.proto


// Original file: investAPI/src/docs/contracts/operations.proto

export enum _tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest {
  RUB = 0,
  USD = 1,
  EUR = 2,
}

export interface PortfolioRequest {
  'accountId'?: (string);
  'currency'?: (_tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest | keyof typeof _tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest);
}

export interface PortfolioRequest__Output {
  'accountId': (string);
  'currency': (keyof typeof _tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest);
}
