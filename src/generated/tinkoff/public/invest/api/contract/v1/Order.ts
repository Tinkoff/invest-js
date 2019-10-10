// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Long } from '@grpc/proto-loader';

export interface Order {
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'quantity'?: (number | string | Long);
}

export interface Order__Output {
  'price': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'quantity': (string);
}
