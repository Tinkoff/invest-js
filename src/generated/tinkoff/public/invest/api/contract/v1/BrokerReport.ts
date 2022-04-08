// Original file: investAPI/src/docs/contracts/operations.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Long } from '@grpc/proto-loader';

export interface BrokerReport {
  'tradeId'?: (string);
  'orderId'?: (string);
  'figi'?: (string);
  'executeSign'?: (string);
  'tradeDatetime'?: (_google_protobuf_Timestamp | null);
  'exchange'?: (string);
  'classCode'?: (string);
  'direction'?: (string);
  'name'?: (string);
  'ticker'?: (string);
  'price'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'quantity'?: (number | string | Long);
  'orderAmount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'aciValue'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'totalOrderAmount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'brokerCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'exchangeCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'exchangeClearingCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'repoRate'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'party'?: (string);
  'clearValueDate'?: (_google_protobuf_Timestamp | null);
  'secValueDate'?: (_google_protobuf_Timestamp | null);
  'brokerStatus'?: (string);
  'separateAgreementType'?: (string);
  'separateAgreementNumber'?: (string);
  'separateAgreementDate'?: (string);
  'deliveryType'?: (string);
}

export interface BrokerReport__Output {
  'tradeId': (string);
  'orderId': (string);
  'figi': (string);
  'executeSign': (string);
  'tradeDatetime': (_google_protobuf_Timestamp__Output | null);
  'exchange': (string);
  'classCode': (string);
  'direction': (string);
  'name': (string);
  'ticker': (string);
  'price': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'quantity': (string);
  'orderAmount': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'aciValue': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'totalOrderAmount': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'brokerCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'exchangeCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'exchangeClearingCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'repoRate': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'party': (string);
  'clearValueDate': (_google_protobuf_Timestamp__Output | null);
  'secValueDate': (_google_protobuf_Timestamp__Output | null);
  'brokerStatus': (string);
  'separateAgreementType': (string);
  'separateAgreementNumber': (string);
  'separateAgreementDate': (string);
  'deliveryType': (string);
}
