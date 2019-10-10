// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentIdType as _tinkoff_public_invest_api_contract_v1_InstrumentIdType } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentIdType';

export interface InstrumentRequest {
  'idType'?: (_tinkoff_public_invest_api_contract_v1_InstrumentIdType | keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentIdType);
  'classCode'?: (string);
  'id'?: (string);
}

export interface InstrumentRequest__Output {
  'idType': (keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentIdType);
  'classCode': (string);
  'id': (string);
}
