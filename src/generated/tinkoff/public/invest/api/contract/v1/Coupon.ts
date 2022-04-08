// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { CouponType as _tinkoff_public_invest_api_contract_v1_CouponType } from '../../../../../../tinkoff/public/invest/api/contract/v1/CouponType';
import type { Long } from '@grpc/proto-loader';

export interface Coupon {
  'figi'?: (string);
  'couponDate'?: (_google_protobuf_Timestamp | null);
  'couponNumber'?: (number | string | Long);
  'fixDate'?: (_google_protobuf_Timestamp | null);
  'payOneBond'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'couponType'?: (_tinkoff_public_invest_api_contract_v1_CouponType | keyof typeof _tinkoff_public_invest_api_contract_v1_CouponType);
  'couponStartDate'?: (_google_protobuf_Timestamp | null);
  'couponEndDate'?: (_google_protobuf_Timestamp | null);
  'couponPeriod'?: (number);
}

export interface Coupon__Output {
  'figi': (string);
  'couponDate': (_google_protobuf_Timestamp__Output | null);
  'couponNumber': (string);
  'fixDate': (_google_protobuf_Timestamp__Output | null);
  'payOneBond': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'couponType': (keyof typeof _tinkoff_public_invest_api_contract_v1_CouponType);
  'couponStartDate': (_google_protobuf_Timestamp__Output | null);
  'couponEndDate': (_google_protobuf_Timestamp__Output | null);
  'couponPeriod': (number);
}
