// Original file: investAPI/src/docs/contracts/operations.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Long } from '@grpc/proto-loader';

export interface OperationTrade {
  'tradeId'?: (string);
  'dateTime'?: (_google_protobuf_Timestamp | null);
  'quantity'?: (number | string | Long);
  'price'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
}

export interface OperationTrade__Output {
  'tradeId': (string);
  'dateTime': (_google_protobuf_Timestamp__Output | null);
  'quantity': (string);
  'price': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
}
