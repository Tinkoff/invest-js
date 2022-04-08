// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Order as _tinkoff_public_invest_api_contract_v1_Order, Order__Output as _tinkoff_public_invest_api_contract_v1_Order__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Order';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface OrderBook {
  'figi'?: (string);
  'depth'?: (number);
  'isConsistent'?: (boolean);
  'bids'?: (_tinkoff_public_invest_api_contract_v1_Order)[];
  'asks'?: (_tinkoff_public_invest_api_contract_v1_Order)[];
  'time'?: (_google_protobuf_Timestamp | null);
  'limitUp'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'limitDown'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface OrderBook__Output {
  'figi': (string);
  'depth': (number);
  'isConsistent': (boolean);
  'bids': (_tinkoff_public_invest_api_contract_v1_Order__Output)[];
  'asks': (_tinkoff_public_invest_api_contract_v1_Order__Output)[];
  'time': (_google_protobuf_Timestamp__Output | null);
  'limitUp': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'limitDown': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
