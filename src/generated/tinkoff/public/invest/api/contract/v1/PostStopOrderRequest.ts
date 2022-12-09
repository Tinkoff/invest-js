// Original file: investAPI/src/docs/contracts/stoporders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { StopOrderDirection as _tinkoff_public_invest_api_contract_v1_StopOrderDirection } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderDirection';
import type { StopOrderExpirationType as _tinkoff_public_invest_api_contract_v1_StopOrderExpirationType } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderExpirationType';
import type { StopOrderType as _tinkoff_public_invest_api_contract_v1_StopOrderType } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface PostStopOrderRequest {
  'figi'?: (string);
  'quantity'?: (number | string | Long);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'stopPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_StopOrderDirection | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderDirection);
  'accountId'?: (string);
  'expirationType'?: (_tinkoff_public_invest_api_contract_v1_StopOrderExpirationType | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderExpirationType);
  'stopOrderType'?: (_tinkoff_public_invest_api_contract_v1_StopOrderType | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderType);
  'expireDate'?: (_google_protobuf_Timestamp | null);
  'instrumentId'?: (string);
}

export interface PostStopOrderRequest__Output {
  'figi': (string);
  'quantity': (string);
  'price': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'stopPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'direction': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderDirection);
  'accountId': (string);
  'expirationType': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderExpirationType);
  'stopOrderType': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderType);
  'expireDate': (_google_protobuf_Timestamp__Output | null);
  'instrumentId': (string);
}
