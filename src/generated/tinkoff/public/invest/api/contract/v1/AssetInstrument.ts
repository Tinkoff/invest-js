// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentLink as _tinkoff_public_invest_api_contract_v1_InstrumentLink, InstrumentLink__Output as _tinkoff_public_invest_api_contract_v1_InstrumentLink__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentLink';

export interface AssetInstrument {
  'uid'?: (string);
  'figi'?: (string);
  'instrumentType'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
  'links'?: (_tinkoff_public_invest_api_contract_v1_InstrumentLink)[];
}

export interface AssetInstrument__Output {
  'uid': (string);
  'figi': (string);
  'instrumentType': (string);
  'ticker': (string);
  'classCode': (string);
  'links': (_tinkoff_public_invest_api_contract_v1_InstrumentLink__Output)[];
}
