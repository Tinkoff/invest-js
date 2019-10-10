// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentStatus as _tinkoff_public_invest_api_contract_v1_InstrumentStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentStatus';

export interface InstrumentsRequest {
  'instrumentStatus'?: (_tinkoff_public_invest_api_contract_v1_InstrumentStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentStatus);
}

export interface InstrumentsRequest__Output {
  'instrumentStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentStatus);
}
