// Original file: investAPI/src/docs/contracts/instruments.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface Dividend {
  'dividendNet'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'paymentDate'?: (_google_protobuf_Timestamp | null);
  'declaredDate'?: (_google_protobuf_Timestamp | null);
  'lastBuyDate'?: (_google_protobuf_Timestamp | null);
  'dividendType'?: (string);
  'recordDate'?: (_google_protobuf_Timestamp | null);
  'regularity'?: (string);
  'closePrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'yieldValue'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'createdAt'?: (_google_protobuf_Timestamp | null);
}

export interface Dividend__Output {
  'dividendNet': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'paymentDate': (_google_protobuf_Timestamp__Output | null);
  'declaredDate': (_google_protobuf_Timestamp__Output | null);
  'lastBuyDate': (_google_protobuf_Timestamp__Output | null);
  'dividendType': (string);
  'recordDate': (_google_protobuf_Timestamp__Output | null);
  'regularity': (string);
  'closePrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'yieldValue': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
}
