// Original file: investAPI/src/docs/contracts/stoporders.proto

import type { StopOrderDirection as _tinkoff_public_invest_api_contract_v1_StopOrderDirection } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderDirection';
import type { StopOrderType as _tinkoff_public_invest_api_contract_v1_StopOrderType } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Long } from '@grpc/proto-loader';

export interface StopOrder {
  'stopOrderId'?: (string);
  'lotsRequested'?: (number | string | Long);
  'figi'?: (string);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_StopOrderDirection | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderDirection);
  'currency'?: (string);
  'orderType'?: (_tinkoff_public_invest_api_contract_v1_StopOrderType | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderType);
  'createDate'?: (_google_protobuf_Timestamp | null);
  'activationDateTime'?: (_google_protobuf_Timestamp | null);
  'expirationTime'?: (_google_protobuf_Timestamp | null);
  'price'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'stopPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
}

export interface StopOrder__Output {
  'stopOrderId': (string);
  'lotsRequested': (string);
  'figi': (string);
  'direction': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderDirection);
  'currency': (string);
  'orderType': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderType);
  'createDate': (_google_protobuf_Timestamp__Output | null);
  'activationDateTime': (_google_protobuf_Timestamp__Output | null);
  'expirationTime': (_google_protobuf_Timestamp__Output | null);
  'price': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'stopPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
}
