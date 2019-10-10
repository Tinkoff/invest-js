// Original file: investAPI/src/docs/contracts/orders.proto

import type { OrderExecutionReportStatus as _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderExecutionReportStatus';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { OrderDirection as _tinkoff_public_invest_api_contract_v1_OrderDirection } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderDirection';
import type { OrderStage as _tinkoff_public_invest_api_contract_v1_OrderStage, OrderStage__Output as _tinkoff_public_invest_api_contract_v1_OrderStage__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderStage';
import type { OrderType as _tinkoff_public_invest_api_contract_v1_OrderType } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface OrderState {
  'orderId'?: (string);
  'executionReportStatus'?: (_tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus);
  'lotsRequested'?: (number | string | Long);
  'lotsExecuted'?: (number | string | Long);
  'initialOrderPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'executedOrderPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'totalOrderAmount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'averagePositionPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'initialCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'executedCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'figi'?: (string);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_OrderDirection | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderDirection);
  'initialSecurityPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'stages'?: (_tinkoff_public_invest_api_contract_v1_OrderStage)[];
  'serviceCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'currency'?: (string);
  'orderType'?: (_tinkoff_public_invest_api_contract_v1_OrderType | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderType);
  'orderDate'?: (_google_protobuf_Timestamp | null);
}

export interface OrderState__Output {
  'orderId': (string);
  'executionReportStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus);
  'lotsRequested': (string);
  'lotsExecuted': (string);
  'initialOrderPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'executedOrderPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'totalOrderAmount': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'averagePositionPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'initialCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'executedCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'figi': (string);
  'direction': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderDirection);
  'initialSecurityPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'stages': (_tinkoff_public_invest_api_contract_v1_OrderStage__Output)[];
  'serviceCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'currency': (string);
  'orderType': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderType);
  'orderDate': (_google_protobuf_Timestamp__Output | null);
}
