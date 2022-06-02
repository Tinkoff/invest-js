import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { InstrumentsServiceClient as _tinkoff_public_invest_api_contract_v1_InstrumentsServiceClient, InstrumentsServiceDefinition as _tinkoff_public_invest_api_contract_v1_InstrumentsServiceDefinition } from './tinkoff/public/invest/api/contract/v1/InstrumentsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  tinkoff: {
    public: {
      invest: {
        api: {
          contract: {
            v1: {
              AccruedInterest: MessageTypeDefinition
              Asset: MessageTypeDefinition
              AssetBond: MessageTypeDefinition
              AssetClearingCertificate: MessageTypeDefinition
              AssetCurrency: MessageTypeDefinition
              AssetEtf: MessageTypeDefinition
              AssetFull: MessageTypeDefinition
              AssetInstrument: MessageTypeDefinition
              AssetRequest: MessageTypeDefinition
              AssetResponse: MessageTypeDefinition
              AssetSecurity: MessageTypeDefinition
              AssetShare: MessageTypeDefinition
              AssetStructuredProduct: MessageTypeDefinition
              AssetType: EnumTypeDefinition
              AssetsRequest: MessageTypeDefinition
              AssetsResponse: MessageTypeDefinition
              Bond: MessageTypeDefinition
              BondResponse: MessageTypeDefinition
              BondsResponse: MessageTypeDefinition
              Brand: MessageTypeDefinition
              CountryResponse: MessageTypeDefinition
              Coupon: MessageTypeDefinition
              CouponType: EnumTypeDefinition
              CurrenciesResponse: MessageTypeDefinition
              Currency: MessageTypeDefinition
              CurrencyResponse: MessageTypeDefinition
              Dividend: MessageTypeDefinition
              EditFavoritesActionType: EnumTypeDefinition
              EditFavoritesRequest: MessageTypeDefinition
              EditFavoritesRequestInstrument: MessageTypeDefinition
              EditFavoritesResponse: MessageTypeDefinition
              Etf: MessageTypeDefinition
              EtfResponse: MessageTypeDefinition
              EtfsResponse: MessageTypeDefinition
              FavoriteInstrument: MessageTypeDefinition
              FindInstrumentRequest: MessageTypeDefinition
              FindInstrumentResponse: MessageTypeDefinition
              Future: MessageTypeDefinition
              FutureResponse: MessageTypeDefinition
              FuturesResponse: MessageTypeDefinition
              GetAccruedInterestsRequest: MessageTypeDefinition
              GetAccruedInterestsResponse: MessageTypeDefinition
              GetBondCouponsRequest: MessageTypeDefinition
              GetBondCouponsResponse: MessageTypeDefinition
              GetBrandRequest: MessageTypeDefinition
              GetBrandsRequest: MessageTypeDefinition
              GetBrandsResponse: MessageTypeDefinition
              GetCountriesRequest: MessageTypeDefinition
              GetCountriesResponse: MessageTypeDefinition
              GetDividendsRequest: MessageTypeDefinition
              GetDividendsResponse: MessageTypeDefinition
              GetFavoritesRequest: MessageTypeDefinition
              GetFavoritesResponse: MessageTypeDefinition
              GetFuturesMarginRequest: MessageTypeDefinition
              GetFuturesMarginResponse: MessageTypeDefinition
              Instrument: MessageTypeDefinition
              InstrumentIdType: EnumTypeDefinition
              InstrumentLink: MessageTypeDefinition
              InstrumentRequest: MessageTypeDefinition
              InstrumentResponse: MessageTypeDefinition
              InstrumentShort: MessageTypeDefinition
              InstrumentStatus: EnumTypeDefinition
              InstrumentsRequest: MessageTypeDefinition
              InstrumentsService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_InstrumentsServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_InstrumentsServiceDefinition }
              MoneyValue: MessageTypeDefinition
              Ping: MessageTypeDefinition
              Quotation: MessageTypeDefinition
              RealExchange: EnumTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              Share: MessageTypeDefinition
              ShareResponse: MessageTypeDefinition
              ShareType: EnumTypeDefinition
              SharesResponse: MessageTypeDefinition
              StructuredProductType: EnumTypeDefinition
              TradingDay: MessageTypeDefinition
              TradingSchedule: MessageTypeDefinition
              TradingSchedulesRequest: MessageTypeDefinition
              TradingSchedulesResponse: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

