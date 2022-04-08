// Original file: investAPI/src/docs/contracts/operations.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Long } from '@grpc/proto-loader';

export interface DividendsForeignIssuerReport {
  'recordDate'?: (_google_protobuf_Timestamp | null);
  'paymentDate'?: (_google_protobuf_Timestamp | null);
  'securityName'?: (string);
  'isin'?: (string);
  'issuerCountry'?: (string);
  'quantity'?: (number | string | Long);
  'dividend'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'externalCommission'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dividendGross'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'tax'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dividendAmount'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'currency'?: (string);
}

export interface DividendsForeignIssuerReport__Output {
  'recordDate': (_google_protobuf_Timestamp__Output | null);
  'paymentDate': (_google_protobuf_Timestamp__Output | null);
  'securityName': (string);
  'isin': (string);
  'issuerCountry': (string);
  'quantity': (string);
  'dividend': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'externalCommission': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dividendGross': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'tax': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dividendAmount': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'currency': (string);
}
