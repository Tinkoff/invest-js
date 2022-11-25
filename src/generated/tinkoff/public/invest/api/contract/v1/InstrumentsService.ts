// Original file: investAPI/src/docs/contracts/instruments.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AssetRequest as _tinkoff_public_invest_api_contract_v1_AssetRequest, AssetRequest__Output as _tinkoff_public_invest_api_contract_v1_AssetRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetRequest';
import type { AssetResponse as _tinkoff_public_invest_api_contract_v1_AssetResponse, AssetResponse__Output as _tinkoff_public_invest_api_contract_v1_AssetResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetResponse';
import type { AssetsRequest as _tinkoff_public_invest_api_contract_v1_AssetsRequest, AssetsRequest__Output as _tinkoff_public_invest_api_contract_v1_AssetsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetsRequest';
import type { AssetsResponse as _tinkoff_public_invest_api_contract_v1_AssetsResponse, AssetsResponse__Output as _tinkoff_public_invest_api_contract_v1_AssetsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AssetsResponse';
import type { BondResponse as _tinkoff_public_invest_api_contract_v1_BondResponse, BondResponse__Output as _tinkoff_public_invest_api_contract_v1_BondResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/BondResponse';
import type { BondsResponse as _tinkoff_public_invest_api_contract_v1_BondsResponse, BondsResponse__Output as _tinkoff_public_invest_api_contract_v1_BondsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/BondsResponse';
import type { Brand as _tinkoff_public_invest_api_contract_v1_Brand, Brand__Output as _tinkoff_public_invest_api_contract_v1_Brand__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Brand';
import type { CurrenciesResponse as _tinkoff_public_invest_api_contract_v1_CurrenciesResponse, CurrenciesResponse__Output as _tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CurrenciesResponse';
import type { CurrencyResponse as _tinkoff_public_invest_api_contract_v1_CurrencyResponse, CurrencyResponse__Output as _tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CurrencyResponse';
import type { EditFavoritesRequest as _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, EditFavoritesRequest__Output as _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/EditFavoritesRequest';
import type { EditFavoritesResponse as _tinkoff_public_invest_api_contract_v1_EditFavoritesResponse, EditFavoritesResponse__Output as _tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/EditFavoritesResponse';
import type { EtfResponse as _tinkoff_public_invest_api_contract_v1_EtfResponse, EtfResponse__Output as _tinkoff_public_invest_api_contract_v1_EtfResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/EtfResponse';
import type { EtfsResponse as _tinkoff_public_invest_api_contract_v1_EtfsResponse, EtfsResponse__Output as _tinkoff_public_invest_api_contract_v1_EtfsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/EtfsResponse';
import type { FindInstrumentRequest as _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, FindInstrumentRequest__Output as _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/FindInstrumentRequest';
import type { FindInstrumentResponse as _tinkoff_public_invest_api_contract_v1_FindInstrumentResponse, FindInstrumentResponse__Output as _tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/FindInstrumentResponse';
import type { FutureResponse as _tinkoff_public_invest_api_contract_v1_FutureResponse, FutureResponse__Output as _tinkoff_public_invest_api_contract_v1_FutureResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/FutureResponse';
import type { FuturesResponse as _tinkoff_public_invest_api_contract_v1_FuturesResponse, FuturesResponse__Output as _tinkoff_public_invest_api_contract_v1_FuturesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/FuturesResponse';
import type { GetAccruedInterestsRequest as _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, GetAccruedInterestsRequest__Output as _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetAccruedInterestsRequest';
import type { GetAccruedInterestsResponse as _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse, GetAccruedInterestsResponse__Output as _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetAccruedInterestsResponse';
import type { GetBondCouponsRequest as _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, GetBondCouponsRequest__Output as _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetBondCouponsRequest';
import type { GetBondCouponsResponse as _tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse, GetBondCouponsResponse__Output as _tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetBondCouponsResponse';
import type { GetBrandRequest as _tinkoff_public_invest_api_contract_v1_GetBrandRequest, GetBrandRequest__Output as _tinkoff_public_invest_api_contract_v1_GetBrandRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetBrandRequest';
import type { GetBrandsRequest as _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, GetBrandsRequest__Output as _tinkoff_public_invest_api_contract_v1_GetBrandsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetBrandsRequest';
import type { GetBrandsResponse as _tinkoff_public_invest_api_contract_v1_GetBrandsResponse, GetBrandsResponse__Output as _tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetBrandsResponse';
import type { GetCountriesRequest as _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, GetCountriesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetCountriesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetCountriesRequest';
import type { GetCountriesResponse as _tinkoff_public_invest_api_contract_v1_GetCountriesResponse, GetCountriesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetCountriesResponse';
import type { GetDividendsRequest as _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, GetDividendsRequest__Output as _tinkoff_public_invest_api_contract_v1_GetDividendsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetDividendsRequest';
import type { GetDividendsResponse as _tinkoff_public_invest_api_contract_v1_GetDividendsResponse, GetDividendsResponse__Output as _tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetDividendsResponse';
import type { GetFavoritesRequest as _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, GetFavoritesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetFavoritesRequest';
import type { GetFavoritesResponse as _tinkoff_public_invest_api_contract_v1_GetFavoritesResponse, GetFavoritesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetFavoritesResponse';
import type { GetFuturesMarginRequest as _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, GetFuturesMarginRequest__Output as _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetFuturesMarginRequest';
import type { GetFuturesMarginResponse as _tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse, GetFuturesMarginResponse__Output as _tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetFuturesMarginResponse';
import type { InstrumentRequest as _tinkoff_public_invest_api_contract_v1_InstrumentRequest, InstrumentRequest__Output as _tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentRequest';
import type { InstrumentResponse as _tinkoff_public_invest_api_contract_v1_InstrumentResponse, InstrumentResponse__Output as _tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentResponse';
import type { InstrumentsRequest as _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, InstrumentsRequest__Output as _tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentsRequest';
import type { OptionResponse as _tinkoff_public_invest_api_contract_v1_OptionResponse, OptionResponse__Output as _tinkoff_public_invest_api_contract_v1_OptionResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OptionResponse';
import type { OptionsResponse as _tinkoff_public_invest_api_contract_v1_OptionsResponse, OptionsResponse__Output as _tinkoff_public_invest_api_contract_v1_OptionsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OptionsResponse';
import type { ShareResponse as _tinkoff_public_invest_api_contract_v1_ShareResponse, ShareResponse__Output as _tinkoff_public_invest_api_contract_v1_ShareResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ShareResponse';
import type { SharesResponse as _tinkoff_public_invest_api_contract_v1_SharesResponse, SharesResponse__Output as _tinkoff_public_invest_api_contract_v1_SharesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SharesResponse';
import type { TradingSchedulesRequest as _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, TradingSchedulesRequest__Output as _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradingSchedulesRequest';
import type { TradingSchedulesResponse as _tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse, TradingSchedulesResponse__Output as _tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradingSchedulesResponse';

export interface InstrumentsServiceClient extends grpc.Client {
  BondBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondResponse__Output>): grpc.ClientUnaryCall;
  BondBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondResponse__Output>): grpc.ClientUnaryCall;
  BondBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondResponse__Output>): grpc.ClientUnaryCall;
  BondBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondResponse__Output>): grpc.ClientUnaryCall;
  bondBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondResponse__Output>): grpc.ClientUnaryCall;
  bondBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondResponse__Output>): grpc.ClientUnaryCall;
  bondBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondResponse__Output>): grpc.ClientUnaryCall;
  bondBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondResponse__Output>): grpc.ClientUnaryCall;
  
  Bonds(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondsResponse__Output>): grpc.ClientUnaryCall;
  Bonds(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondsResponse__Output>): grpc.ClientUnaryCall;
  Bonds(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondsResponse__Output>): grpc.ClientUnaryCall;
  Bonds(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondsResponse__Output>): grpc.ClientUnaryCall;
  bonds(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondsResponse__Output>): grpc.ClientUnaryCall;
  bonds(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondsResponse__Output>): grpc.ClientUnaryCall;
  bonds(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondsResponse__Output>): grpc.ClientUnaryCall;
  bonds(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_BondsResponse__Output>): grpc.ClientUnaryCall;
  
  Currencies(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>): grpc.ClientUnaryCall;
  Currencies(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>): grpc.ClientUnaryCall;
  Currencies(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>): grpc.ClientUnaryCall;
  Currencies(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>): grpc.ClientUnaryCall;
  currencies(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>): grpc.ClientUnaryCall;
  currencies(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>): grpc.ClientUnaryCall;
  currencies(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>): grpc.ClientUnaryCall;
  currencies(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>): grpc.ClientUnaryCall;
  
  CurrencyBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>): grpc.ClientUnaryCall;
  CurrencyBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>): grpc.ClientUnaryCall;
  CurrencyBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>): grpc.ClientUnaryCall;
  CurrencyBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>): grpc.ClientUnaryCall;
  currencyBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>): grpc.ClientUnaryCall;
  currencyBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>): grpc.ClientUnaryCall;
  currencyBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>): grpc.ClientUnaryCall;
  currencyBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>): grpc.ClientUnaryCall;
  
  EditFavorites(argument: _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>): grpc.ClientUnaryCall;
  EditFavorites(argument: _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>): grpc.ClientUnaryCall;
  EditFavorites(argument: _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>): grpc.ClientUnaryCall;
  EditFavorites(argument: _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>): grpc.ClientUnaryCall;
  editFavorites(argument: _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>): grpc.ClientUnaryCall;
  editFavorites(argument: _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>): grpc.ClientUnaryCall;
  editFavorites(argument: _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>): grpc.ClientUnaryCall;
  editFavorites(argument: _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>): grpc.ClientUnaryCall;
  
  EtfBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfResponse__Output>): grpc.ClientUnaryCall;
  EtfBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfResponse__Output>): grpc.ClientUnaryCall;
  EtfBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfResponse__Output>): grpc.ClientUnaryCall;
  EtfBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfResponse__Output>): grpc.ClientUnaryCall;
  etfBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfResponse__Output>): grpc.ClientUnaryCall;
  etfBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfResponse__Output>): grpc.ClientUnaryCall;
  etfBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfResponse__Output>): grpc.ClientUnaryCall;
  etfBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfResponse__Output>): grpc.ClientUnaryCall;
  
  Etfs(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>): grpc.ClientUnaryCall;
  Etfs(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>): grpc.ClientUnaryCall;
  Etfs(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>): grpc.ClientUnaryCall;
  Etfs(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>): grpc.ClientUnaryCall;
  etfs(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>): grpc.ClientUnaryCall;
  etfs(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>): grpc.ClientUnaryCall;
  etfs(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>): grpc.ClientUnaryCall;
  etfs(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>): grpc.ClientUnaryCall;
  
  FindInstrument(argument: _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>): grpc.ClientUnaryCall;
  FindInstrument(argument: _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>): grpc.ClientUnaryCall;
  FindInstrument(argument: _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>): grpc.ClientUnaryCall;
  FindInstrument(argument: _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>): grpc.ClientUnaryCall;
  findInstrument(argument: _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>): grpc.ClientUnaryCall;
  findInstrument(argument: _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>): grpc.ClientUnaryCall;
  findInstrument(argument: _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>): grpc.ClientUnaryCall;
  findInstrument(argument: _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>): grpc.ClientUnaryCall;
  
  FutureBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FutureResponse__Output>): grpc.ClientUnaryCall;
  FutureBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FutureResponse__Output>): grpc.ClientUnaryCall;
  FutureBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FutureResponse__Output>): grpc.ClientUnaryCall;
  FutureBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FutureResponse__Output>): grpc.ClientUnaryCall;
  futureBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FutureResponse__Output>): grpc.ClientUnaryCall;
  futureBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FutureResponse__Output>): grpc.ClientUnaryCall;
  futureBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FutureResponse__Output>): grpc.ClientUnaryCall;
  futureBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FutureResponse__Output>): grpc.ClientUnaryCall;
  
  Futures(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>): grpc.ClientUnaryCall;
  Futures(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>): grpc.ClientUnaryCall;
  Futures(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>): grpc.ClientUnaryCall;
  Futures(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>): grpc.ClientUnaryCall;
  futures(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>): grpc.ClientUnaryCall;
  futures(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>): grpc.ClientUnaryCall;
  futures(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>): grpc.ClientUnaryCall;
  futures(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>): grpc.ClientUnaryCall;
  
  GetAccruedInterests(argument: _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>): grpc.ClientUnaryCall;
  GetAccruedInterests(argument: _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>): grpc.ClientUnaryCall;
  GetAccruedInterests(argument: _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>): grpc.ClientUnaryCall;
  GetAccruedInterests(argument: _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>): grpc.ClientUnaryCall;
  getAccruedInterests(argument: _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>): grpc.ClientUnaryCall;
  getAccruedInterests(argument: _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>): grpc.ClientUnaryCall;
  getAccruedInterests(argument: _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>): grpc.ClientUnaryCall;
  getAccruedInterests(argument: _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>): grpc.ClientUnaryCall;
  
  GetAssetBy(argument: _tinkoff_public_invest_api_contract_v1_AssetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetResponse__Output>): grpc.ClientUnaryCall;
  GetAssetBy(argument: _tinkoff_public_invest_api_contract_v1_AssetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetResponse__Output>): grpc.ClientUnaryCall;
  GetAssetBy(argument: _tinkoff_public_invest_api_contract_v1_AssetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetResponse__Output>): grpc.ClientUnaryCall;
  GetAssetBy(argument: _tinkoff_public_invest_api_contract_v1_AssetRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetResponse__Output>): grpc.ClientUnaryCall;
  getAssetBy(argument: _tinkoff_public_invest_api_contract_v1_AssetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetResponse__Output>): grpc.ClientUnaryCall;
  getAssetBy(argument: _tinkoff_public_invest_api_contract_v1_AssetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetResponse__Output>): grpc.ClientUnaryCall;
  getAssetBy(argument: _tinkoff_public_invest_api_contract_v1_AssetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetResponse__Output>): grpc.ClientUnaryCall;
  getAssetBy(argument: _tinkoff_public_invest_api_contract_v1_AssetRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetResponse__Output>): grpc.ClientUnaryCall;
  
  GetAssets(argument: _tinkoff_public_invest_api_contract_v1_AssetsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>): grpc.ClientUnaryCall;
  GetAssets(argument: _tinkoff_public_invest_api_contract_v1_AssetsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>): grpc.ClientUnaryCall;
  GetAssets(argument: _tinkoff_public_invest_api_contract_v1_AssetsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>): grpc.ClientUnaryCall;
  GetAssets(argument: _tinkoff_public_invest_api_contract_v1_AssetsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>): grpc.ClientUnaryCall;
  getAssets(argument: _tinkoff_public_invest_api_contract_v1_AssetsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>): grpc.ClientUnaryCall;
  getAssets(argument: _tinkoff_public_invest_api_contract_v1_AssetsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>): grpc.ClientUnaryCall;
  getAssets(argument: _tinkoff_public_invest_api_contract_v1_AssetsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>): grpc.ClientUnaryCall;
  getAssets(argument: _tinkoff_public_invest_api_contract_v1_AssetsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>): grpc.ClientUnaryCall;
  
  GetBondCoupons(argument: _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>): grpc.ClientUnaryCall;
  GetBondCoupons(argument: _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>): grpc.ClientUnaryCall;
  GetBondCoupons(argument: _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>): grpc.ClientUnaryCall;
  GetBondCoupons(argument: _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>): grpc.ClientUnaryCall;
  getBondCoupons(argument: _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>): grpc.ClientUnaryCall;
  getBondCoupons(argument: _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>): grpc.ClientUnaryCall;
  getBondCoupons(argument: _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>): grpc.ClientUnaryCall;
  getBondCoupons(argument: _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>): grpc.ClientUnaryCall;
  
  GetBrandBy(argument: _tinkoff_public_invest_api_contract_v1_GetBrandRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_Brand__Output>): grpc.ClientUnaryCall;
  GetBrandBy(argument: _tinkoff_public_invest_api_contract_v1_GetBrandRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_Brand__Output>): grpc.ClientUnaryCall;
  GetBrandBy(argument: _tinkoff_public_invest_api_contract_v1_GetBrandRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_Brand__Output>): grpc.ClientUnaryCall;
  GetBrandBy(argument: _tinkoff_public_invest_api_contract_v1_GetBrandRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_Brand__Output>): grpc.ClientUnaryCall;
  getBrandBy(argument: _tinkoff_public_invest_api_contract_v1_GetBrandRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_Brand__Output>): grpc.ClientUnaryCall;
  getBrandBy(argument: _tinkoff_public_invest_api_contract_v1_GetBrandRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_Brand__Output>): grpc.ClientUnaryCall;
  getBrandBy(argument: _tinkoff_public_invest_api_contract_v1_GetBrandRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_Brand__Output>): grpc.ClientUnaryCall;
  getBrandBy(argument: _tinkoff_public_invest_api_contract_v1_GetBrandRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_Brand__Output>): grpc.ClientUnaryCall;
  
  GetBrands(argument: _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>): grpc.ClientUnaryCall;
  GetBrands(argument: _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>): grpc.ClientUnaryCall;
  GetBrands(argument: _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>): grpc.ClientUnaryCall;
  GetBrands(argument: _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>): grpc.ClientUnaryCall;
  getBrands(argument: _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>): grpc.ClientUnaryCall;
  getBrands(argument: _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>): grpc.ClientUnaryCall;
  getBrands(argument: _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>): grpc.ClientUnaryCall;
  getBrands(argument: _tinkoff_public_invest_api_contract_v1_GetBrandsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>): grpc.ClientUnaryCall;
  
  GetCountries(argument: _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>): grpc.ClientUnaryCall;
  GetCountries(argument: _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>): grpc.ClientUnaryCall;
  GetCountries(argument: _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>): grpc.ClientUnaryCall;
  GetCountries(argument: _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>): grpc.ClientUnaryCall;
  getCountries(argument: _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>): grpc.ClientUnaryCall;
  getCountries(argument: _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>): grpc.ClientUnaryCall;
  getCountries(argument: _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>): grpc.ClientUnaryCall;
  getCountries(argument: _tinkoff_public_invest_api_contract_v1_GetCountriesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>): grpc.ClientUnaryCall;
  
  GetDividends(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>): grpc.ClientUnaryCall;
  GetDividends(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>): grpc.ClientUnaryCall;
  GetDividends(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>): grpc.ClientUnaryCall;
  GetDividends(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>): grpc.ClientUnaryCall;
  getDividends(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>): grpc.ClientUnaryCall;
  getDividends(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>): grpc.ClientUnaryCall;
  getDividends(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>): grpc.ClientUnaryCall;
  getDividends(argument: _tinkoff_public_invest_api_contract_v1_GetDividendsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>): grpc.ClientUnaryCall;
  
  GetFavorites(argument: _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>): grpc.ClientUnaryCall;
  GetFavorites(argument: _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>): grpc.ClientUnaryCall;
  GetFavorites(argument: _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>): grpc.ClientUnaryCall;
  GetFavorites(argument: _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>): grpc.ClientUnaryCall;
  getFavorites(argument: _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>): grpc.ClientUnaryCall;
  getFavorites(argument: _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>): grpc.ClientUnaryCall;
  getFavorites(argument: _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>): grpc.ClientUnaryCall;
  getFavorites(argument: _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>): grpc.ClientUnaryCall;
  
  GetFuturesMargin(argument: _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>): grpc.ClientUnaryCall;
  GetFuturesMargin(argument: _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>): grpc.ClientUnaryCall;
  GetFuturesMargin(argument: _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>): grpc.ClientUnaryCall;
  GetFuturesMargin(argument: _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>): grpc.ClientUnaryCall;
  getFuturesMargin(argument: _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>): grpc.ClientUnaryCall;
  getFuturesMargin(argument: _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>): grpc.ClientUnaryCall;
  getFuturesMargin(argument: _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>): grpc.ClientUnaryCall;
  getFuturesMargin(argument: _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>): grpc.ClientUnaryCall;
  
  GetInstrumentBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>): grpc.ClientUnaryCall;
  GetInstrumentBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>): grpc.ClientUnaryCall;
  GetInstrumentBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>): grpc.ClientUnaryCall;
  GetInstrumentBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>): grpc.ClientUnaryCall;
  getInstrumentBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>): grpc.ClientUnaryCall;
  getInstrumentBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>): grpc.ClientUnaryCall;
  getInstrumentBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>): grpc.ClientUnaryCall;
  getInstrumentBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>): grpc.ClientUnaryCall;
  
  OptionBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionResponse__Output>): grpc.ClientUnaryCall;
  OptionBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionResponse__Output>): grpc.ClientUnaryCall;
  OptionBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionResponse__Output>): grpc.ClientUnaryCall;
  OptionBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionResponse__Output>): grpc.ClientUnaryCall;
  optionBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionResponse__Output>): grpc.ClientUnaryCall;
  optionBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionResponse__Output>): grpc.ClientUnaryCall;
  optionBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionResponse__Output>): grpc.ClientUnaryCall;
  optionBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionResponse__Output>): grpc.ClientUnaryCall;
  
  Options(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>): grpc.ClientUnaryCall;
  Options(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>): grpc.ClientUnaryCall;
  Options(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>): grpc.ClientUnaryCall;
  Options(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>): grpc.ClientUnaryCall;
  options(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>): grpc.ClientUnaryCall;
  options(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>): grpc.ClientUnaryCall;
  options(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>): grpc.ClientUnaryCall;
  options(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>): grpc.ClientUnaryCall;
  
  ShareBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_ShareResponse__Output>): grpc.ClientUnaryCall;
  ShareBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_ShareResponse__Output>): grpc.ClientUnaryCall;
  ShareBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_ShareResponse__Output>): grpc.ClientUnaryCall;
  ShareBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_ShareResponse__Output>): grpc.ClientUnaryCall;
  shareBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_ShareResponse__Output>): grpc.ClientUnaryCall;
  shareBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_ShareResponse__Output>): grpc.ClientUnaryCall;
  shareBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_ShareResponse__Output>): grpc.ClientUnaryCall;
  shareBy(argument: _tinkoff_public_invest_api_contract_v1_InstrumentRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_ShareResponse__Output>): grpc.ClientUnaryCall;
  
  Shares(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SharesResponse__Output>): grpc.ClientUnaryCall;
  Shares(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SharesResponse__Output>): grpc.ClientUnaryCall;
  Shares(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SharesResponse__Output>): grpc.ClientUnaryCall;
  Shares(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SharesResponse__Output>): grpc.ClientUnaryCall;
  shares(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SharesResponse__Output>): grpc.ClientUnaryCall;
  shares(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SharesResponse__Output>): grpc.ClientUnaryCall;
  shares(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SharesResponse__Output>): grpc.ClientUnaryCall;
  shares(argument: _tinkoff_public_invest_api_contract_v1_InstrumentsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SharesResponse__Output>): grpc.ClientUnaryCall;
  
  TradingSchedules(argument: _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>): grpc.ClientUnaryCall;
  TradingSchedules(argument: _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>): grpc.ClientUnaryCall;
  TradingSchedules(argument: _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>): grpc.ClientUnaryCall;
  TradingSchedules(argument: _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>): grpc.ClientUnaryCall;
  tradingSchedules(argument: _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>): grpc.ClientUnaryCall;
  tradingSchedules(argument: _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>): grpc.ClientUnaryCall;
  tradingSchedules(argument: _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>): grpc.ClientUnaryCall;
  tradingSchedules(argument: _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface InstrumentsServiceHandlers extends grpc.UntypedServiceImplementation {
  BondBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_BondResponse>;
  
  Bonds: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_BondsResponse>;
  
  Currencies: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_CurrenciesResponse>;
  
  CurrencyBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_CurrencyResponse>;
  
  EditFavorites: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_EditFavoritesRequest__Output, _tinkoff_public_invest_api_contract_v1_EditFavoritesResponse>;
  
  EtfBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_EtfResponse>;
  
  Etfs: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_EtfsResponse>;
  
  FindInstrument: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_FindInstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_FindInstrumentResponse>;
  
  FutureBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_FutureResponse>;
  
  Futures: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_FuturesResponse>;
  
  GetAccruedInterests: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse>;
  
  GetAssetBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_AssetRequest__Output, _tinkoff_public_invest_api_contract_v1_AssetResponse>;
  
  GetAssets: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_AssetsRequest__Output, _tinkoff_public_invest_api_contract_v1_AssetsResponse>;
  
  GetBondCoupons: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse>;
  
  GetBrandBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetBrandRequest__Output, _tinkoff_public_invest_api_contract_v1_Brand>;
  
  GetBrands: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetBrandsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetBrandsResponse>;
  
  GetCountries: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetCountriesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetCountriesResponse>;
  
  GetDividends: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetDividendsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetDividendsResponse>;
  
  GetFavorites: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetFavoritesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetFavoritesResponse>;
  
  GetFuturesMargin: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest__Output, _tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse>;
  
  GetInstrumentBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_InstrumentResponse>;
  
  OptionBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_OptionResponse>;
  
  Options: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_OptionsResponse>;
  
  ShareBy: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_ShareResponse>;
  
  Shares: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_SharesResponse>;
  
  TradingSchedules: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest__Output, _tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse>;
  
}

export interface InstrumentsServiceDefinition extends grpc.ServiceDefinition {
  BondBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentRequest, _tinkoff_public_invest_api_contract_v1_BondResponse, _tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_BondResponse__Output>
  Bonds: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest, _tinkoff_public_invest_api_contract_v1_BondsResponse, _tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_BondsResponse__Output>
  Currencies: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest, _tinkoff_public_invest_api_contract_v1_CurrenciesResponse, _tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_CurrenciesResponse__Output>
  CurrencyBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentRequest, _tinkoff_public_invest_api_contract_v1_CurrencyResponse, _tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_CurrencyResponse__Output>
  EditFavorites: MethodDefinition<_tinkoff_public_invest_api_contract_v1_EditFavoritesRequest, _tinkoff_public_invest_api_contract_v1_EditFavoritesResponse, _tinkoff_public_invest_api_contract_v1_EditFavoritesRequest__Output, _tinkoff_public_invest_api_contract_v1_EditFavoritesResponse__Output>
  EtfBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentRequest, _tinkoff_public_invest_api_contract_v1_EtfResponse, _tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_EtfResponse__Output>
  Etfs: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest, _tinkoff_public_invest_api_contract_v1_EtfsResponse, _tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_EtfsResponse__Output>
  FindInstrument: MethodDefinition<_tinkoff_public_invest_api_contract_v1_FindInstrumentRequest, _tinkoff_public_invest_api_contract_v1_FindInstrumentResponse, _tinkoff_public_invest_api_contract_v1_FindInstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_FindInstrumentResponse__Output>
  FutureBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentRequest, _tinkoff_public_invest_api_contract_v1_FutureResponse, _tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_FutureResponse__Output>
  Futures: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest, _tinkoff_public_invest_api_contract_v1_FuturesResponse, _tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_FuturesResponse__Output>
  GetAccruedInterests: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest, _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse, _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse__Output>
  GetAssetBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_AssetRequest, _tinkoff_public_invest_api_contract_v1_AssetResponse, _tinkoff_public_invest_api_contract_v1_AssetRequest__Output, _tinkoff_public_invest_api_contract_v1_AssetResponse__Output>
  GetAssets: MethodDefinition<_tinkoff_public_invest_api_contract_v1_AssetsRequest, _tinkoff_public_invest_api_contract_v1_AssetsResponse, _tinkoff_public_invest_api_contract_v1_AssetsRequest__Output, _tinkoff_public_invest_api_contract_v1_AssetsResponse__Output>
  GetBondCoupons: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest, _tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse, _tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse__Output>
  GetBrandBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetBrandRequest, _tinkoff_public_invest_api_contract_v1_Brand, _tinkoff_public_invest_api_contract_v1_GetBrandRequest__Output, _tinkoff_public_invest_api_contract_v1_Brand__Output>
  GetBrands: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetBrandsRequest, _tinkoff_public_invest_api_contract_v1_GetBrandsResponse, _tinkoff_public_invest_api_contract_v1_GetBrandsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetBrandsResponse__Output>
  GetCountries: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetCountriesRequest, _tinkoff_public_invest_api_contract_v1_GetCountriesResponse, _tinkoff_public_invest_api_contract_v1_GetCountriesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetCountriesResponse__Output>
  GetDividends: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetDividendsRequest, _tinkoff_public_invest_api_contract_v1_GetDividendsResponse, _tinkoff_public_invest_api_contract_v1_GetDividendsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetDividendsResponse__Output>
  GetFavorites: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetFavoritesRequest, _tinkoff_public_invest_api_contract_v1_GetFavoritesResponse, _tinkoff_public_invest_api_contract_v1_GetFavoritesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetFavoritesResponse__Output>
  GetFuturesMargin: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest, _tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse, _tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest__Output, _tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse__Output>
  GetInstrumentBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentRequest, _tinkoff_public_invest_api_contract_v1_InstrumentResponse, _tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_InstrumentResponse__Output>
  OptionBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentRequest, _tinkoff_public_invest_api_contract_v1_OptionResponse, _tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_OptionResponse__Output>
  Options: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest, _tinkoff_public_invest_api_contract_v1_OptionsResponse, _tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_OptionsResponse__Output>
  ShareBy: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentRequest, _tinkoff_public_invest_api_contract_v1_ShareResponse, _tinkoff_public_invest_api_contract_v1_InstrumentRequest__Output, _tinkoff_public_invest_api_contract_v1_ShareResponse__Output>
  Shares: MethodDefinition<_tinkoff_public_invest_api_contract_v1_InstrumentsRequest, _tinkoff_public_invest_api_contract_v1_SharesResponse, _tinkoff_public_invest_api_contract_v1_InstrumentsRequest__Output, _tinkoff_public_invest_api_contract_v1_SharesResponse__Output>
  TradingSchedules: MethodDefinition<_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest, _tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse, _tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest__Output, _tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse__Output>
}
