import type {
  SandboxType,
  MarketdataType,
  InstrumentsType,
  UsersType,
  StopordersType,
  OperationsType,
  OrdersType,
  Basic,
  Client,
} from './types';
import { PROTO_PATH } from './constants';
import { loadPackageDefinition, Metadata, credentials } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { ServicePath } from './types';

function load<T extends Basic>(protoPath: string): ServicePath<T> {
  return (loadPackageDefinition(
    loadSync(protoPath, {
      keepCase: false,
      longs: String as Function,
      enums: String as Function,
      defaults: true,
      oneofs: true,
    })
  ) as T).tinkoff.public.invest.api.contract.v1;
}

export const { SandboxService } = load<SandboxType>(PROTO_PATH + 'sandbox.proto');
export const { InstrumentsService } = load<InstrumentsType>(PROTO_PATH + 'instruments.proto');
export const { UsersService } = load<UsersType>(PROTO_PATH + 'users.proto');
export const { StopOrdersService } = load<StopordersType>(PROTO_PATH + 'stoporders.proto');
export const { OperationsService } = load<OperationsType>(PROTO_PATH + 'operations.proto');
export const { OrdersService, OrdersStreamService } = load<OrdersType>(PROTO_PATH + 'orders.proto');
export const { MarketDataService, MarketDataStreamService } = load<MarketdataType>(PROTO_PATH + 'marketdata.proto');

interface OpenAPIClientOptions {
  token: string;
  url?: string;
}
class OpenAPIClient {
  token: string;
  url: string;
  instruments: Client<typeof InstrumentsService>;
  ordersStream: Client<typeof OrdersStreamService>;
  orders: Client<typeof OrdersService>;
  operations: Client<typeof OperationsService>;
  marketDataStream: Client<typeof MarketDataStreamService>;
  marketData: Client<typeof MarketDataService>;
  usersService: Client<typeof UsersService>;
  stopOrders: Client<typeof StopOrdersService>;
  sandbox: Client<typeof SandboxService>;


  constructor(options: OpenAPIClientOptions) {
    this.token = options.token;
    this.url = options.url || 'invest-public-api.tinkoff.ru:443';
    const metadata = new Metadata();
    metadata.add('Authorization', 'Bearer ' + this.token);
    const ssl_creds = credentials.combineChannelCredentials(
      credentials.createSsl(),
      credentials.createFromMetadataGenerator((_: any, callback: any) =>
        callback(null, metadata)
      )
    );
    this.instruments = new InstrumentsService(this.url, ssl_creds);
    this.ordersStream = new OrdersStreamService(this.url, ssl_creds);
    this.marketDataStream = new MarketDataStreamService(this.url, ssl_creds);
    this.marketData = new MarketDataService(this.url, ssl_creds);
    this.usersService = new UsersService(this.url, ssl_creds);
    this.orders = new OrdersService(this.url, ssl_creds);
    this.operations = new OperationsService(this.url, ssl_creds);
    this.stopOrders = new StopOrdersService(this.url, ssl_creds);
    this.sandbox = new SandboxService(this.url, ssl_creds);
  }
}


export { OpenAPIClient }


