// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface HistoricCandle {
  'open'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'high'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'low'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'close'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'volume'?: (number | string | Long);
  'time'?: (_google_protobuf_Timestamp | null);
  'isComplete'?: (boolean);
}

export interface HistoricCandle__Output {
  'open': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'high': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'low': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'close': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'volume': (string);
  'time': (_google_protobuf_Timestamp__Output | null);
  'isComplete': (boolean);
}
