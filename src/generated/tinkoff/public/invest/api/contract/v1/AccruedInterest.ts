// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface AccruedInterest {
  'date'?: (_google_protobuf_Timestamp | null);
  'value'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'valuePercent'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface AccruedInterest__Output {
  'date': (_google_protobuf_Timestamp__Output | null);
  'value': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'valuePercent': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'nominal': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
