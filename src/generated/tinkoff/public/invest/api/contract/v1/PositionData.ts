// Original file: investAPI/src/docs/contracts/operations.proto

import type { PositionsMoney as _tinkoff_public_invest_api_contract_v1_PositionsMoney, PositionsMoney__Output as _tinkoff_public_invest_api_contract_v1_PositionsMoney__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsMoney';
import type { PositionsSecurities as _tinkoff_public_invest_api_contract_v1_PositionsSecurities, PositionsSecurities__Output as _tinkoff_public_invest_api_contract_v1_PositionsSecurities__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsSecurities';
import type { PositionsFutures as _tinkoff_public_invest_api_contract_v1_PositionsFutures, PositionsFutures__Output as _tinkoff_public_invest_api_contract_v1_PositionsFutures__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsFutures';
import type { PositionsOptions as _tinkoff_public_invest_api_contract_v1_PositionsOptions, PositionsOptions__Output as _tinkoff_public_invest_api_contract_v1_PositionsOptions__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsOptions';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface PositionData {
  'accountId'?: (string);
  'money'?: (_tinkoff_public_invest_api_contract_v1_PositionsMoney)[];
  'securities'?: (_tinkoff_public_invest_api_contract_v1_PositionsSecurities)[];
  'futures'?: (_tinkoff_public_invest_api_contract_v1_PositionsFutures)[];
  'options'?: (_tinkoff_public_invest_api_contract_v1_PositionsOptions)[];
  'date'?: (_google_protobuf_Timestamp | null);
}

export interface PositionData__Output {
  'accountId': (string);
  'money': (_tinkoff_public_invest_api_contract_v1_PositionsMoney__Output)[];
  'securities': (_tinkoff_public_invest_api_contract_v1_PositionsSecurities__Output)[];
  'futures': (_tinkoff_public_invest_api_contract_v1_PositionsFutures__Output)[];
  'options': (_tinkoff_public_invest_api_contract_v1_PositionsOptions__Output)[];
  'date': (_google_protobuf_Timestamp__Output | null);
}
