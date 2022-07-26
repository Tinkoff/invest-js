// Original file: investAPI/src/docs/contracts/operations.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Long } from '@grpc/proto-loader';

export interface OperationItemTrade {
  'num'?: (string);
  'date'?: (_google_protobuf_Timestamp | null);
  'quantity'?: (number | string | Long);
  'price'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'yield'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'yieldRelative'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface OperationItemTrade__Output {
  'num': (string);
  'date': (_google_protobuf_Timestamp__Output | null);
  'quantity': (string);
  'price': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'yield': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'yieldRelative': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
