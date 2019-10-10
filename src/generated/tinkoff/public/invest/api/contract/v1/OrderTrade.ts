// Original file: investAPI/src/docs/contracts/orders.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Long } from '@grpc/proto-loader';

export interface OrderTrade {
  'dateTime'?: (_google_protobuf_Timestamp | null);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'quantity'?: (number | string | Long);
}

export interface OrderTrade__Output {
  'dateTime': (_google_protobuf_Timestamp__Output | null);
  'price': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'quantity': (string);
}
