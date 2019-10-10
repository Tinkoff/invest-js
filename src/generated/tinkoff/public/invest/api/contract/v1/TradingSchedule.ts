// Original file: investAPI/src/docs/contracts/instruments.proto

import type { TradingDay as _tinkoff_public_invest_api_contract_v1_TradingDay, TradingDay__Output as _tinkoff_public_invest_api_contract_v1_TradingDay__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradingDay';

export interface TradingSchedule {
  'exchange'?: (string);
  'days'?: (_tinkoff_public_invest_api_contract_v1_TradingDay)[];
}

export interface TradingSchedule__Output {
  'exchange': (string);
  'days': (_tinkoff_public_invest_api_contract_v1_TradingDay__Output)[];
}
