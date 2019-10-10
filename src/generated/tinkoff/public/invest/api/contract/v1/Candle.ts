// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionInterval as _tinkoff_public_invest_api_contract_v1_SubscriptionInterval } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionInterval';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface Candle {
  'figi'?: (string);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionInterval | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionInterval);
  'open'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'high'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'low'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'close'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'value'?: (number | string | Long);
  'time'?: (_google_protobuf_Timestamp | null);
}

export interface Candle__Output {
  'figi': (string);
  'interval': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionInterval);
  'open': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'high': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'low': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'close': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'value': (string);
  'time': (_google_protobuf_Timestamp__Output | null);
}
