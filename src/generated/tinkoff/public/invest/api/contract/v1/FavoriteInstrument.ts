// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentType as _tinkoff_public_invest_api_contract_v1_InstrumentType } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentType';

export interface FavoriteInstrument {
  'figi'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
  'isin'?: (string);
  'instrumentType'?: (string);
  'otcFlag'?: (boolean);
  'apiTradeAvailableFlag'?: (boolean);
  'instrumentKind'?: (_tinkoff_public_invest_api_contract_v1_InstrumentType | keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentType);
}

export interface FavoriteInstrument__Output {
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
  'isin': (string);
  'instrumentType': (string);
  'otcFlag': (boolean);
  'apiTradeAvailableFlag': (boolean);
  'instrumentKind': (keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentType);
}
