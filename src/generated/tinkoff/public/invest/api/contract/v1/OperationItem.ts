// Original file: investAPI/src/docs/contracts/operations.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { OperationType as _tinkoff_public_invest_api_contract_v1_OperationType } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationType';
import type { OperationState as _tinkoff_public_invest_api_contract_v1_OperationState } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationState';
import type { InstrumentType as _tinkoff_public_invest_api_contract_v1_InstrumentType } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentType';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { OperationItemTrades as _tinkoff_public_invest_api_contract_v1_OperationItemTrades, OperationItemTrades__Output as _tinkoff_public_invest_api_contract_v1_OperationItemTrades__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationItemTrades';
import type { Long } from '@grpc/proto-loader';

export interface OperationItem {
  'cursor'?: (string);
  'brokerAccountId'?: (string);
  'id'?: (string);
  'parentOperationId'?: (string);
  'name'?: (string);
  'date'?: (_google_protobuf_Timestamp | null);
  'type'?: (_tinkoff_public_invest_api_contract_v1_OperationType | keyof typeof _tinkoff_public_invest_api_contract_v1_OperationType);
  'description'?: (string);
  'state'?: (_tinkoff_public_invest_api_contract_v1_OperationState | keyof typeof _tinkoff_public_invest_api_contract_v1_OperationState);
  'instrumentUid'?: (string);
  'figi'?: (string);
  'instrumentType'?: (string);
  'instrumentKind'?: (_tinkoff_public_invest_api_contract_v1_InstrumentType | keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentType);
  'payment'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'price'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'commission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'yield'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'yieldRelative'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'accruedInt'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'quantity'?: (number | string | Long);
  'quantityRest'?: (number | string | Long);
  'quantityDone'?: (number | string | Long);
  'cancelDateTime'?: (_google_protobuf_Timestamp | null);
  'cancelReason'?: (string);
  'tradesInfo'?: (_tinkoff_public_invest_api_contract_v1_OperationItemTrades | null);
}

export interface OperationItem__Output {
  'cursor': (string);
  'brokerAccountId': (string);
  'id': (string);
  'parentOperationId': (string);
  'name': (string);
  'date': (_google_protobuf_Timestamp__Output | null);
  'type': (keyof typeof _tinkoff_public_invest_api_contract_v1_OperationType);
  'description': (string);
  'state': (keyof typeof _tinkoff_public_invest_api_contract_v1_OperationState);
  'instrumentUid': (string);
  'figi': (string);
  'instrumentType': (string);
  'instrumentKind': (keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentType);
  'payment': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'price': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'commission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'yield': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'yieldRelative': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'accruedInt': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'quantity': (string);
  'quantityRest': (string);
  'quantityDone': (string);
  'cancelDateTime': (_google_protobuf_Timestamp__Output | null);
  'cancelReason': (string);
  'tradesInfo': (_tinkoff_public_invest_api_contract_v1_OperationItemTrades__Output | null);
}
