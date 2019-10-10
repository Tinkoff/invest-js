import type {
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
      keepCase: true,
      longs: String as Function,
      enums: String as Function,
      defaults: true,
      oneofs: true,
    })
  ) as T).tinkoff.public.invest.api.contract.v1;
}

export const { InstrumentsService } = load<InstrumentsType>(PROTO_PATH + 'instruments.proto');
const { UsersService } = load<UsersType>(PROTO_PATH + 'users.proto');
const { StopOrdersService } = load<StopordersType>(PROTO_PATH + 'stoporders.proto');
const { OperationsService } = load<OperationsType>(PROTO_PATH + 'operations.proto');
const { OrdersService } = load<OrdersType>(PROTO_PATH + 'orders.proto');

interface OpenAPIClientOptions {
  token: string;
}
class OpenAPIClient {
  token: string;
  instruments: Client<typeof InstrumentsService>;
  constructor(options: OpenAPIClientOptions) {
    this.token = options.token;
    const metadata = new Metadata();
    metadata.add('Authorization', 'Bearer ' + this.token);
    const ssl_creds = credentials.combineChannelCredentials(
      credentials.createSsl(),
      credentials.createFromMetadataGenerator((_: any, callback: any) =>
        callback(null, metadata)
      )
    );
    this.instruments = new InstrumentsService('invest-public-api.tinkoff.ru:443', ssl_creds);
  }
}


export { OpenAPIClient }


