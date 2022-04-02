import { loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { Basic, ServicePath } from './types';

export function load<T extends Basic>(protoPath: string): ServicePath<T> {
  return (
    loadPackageDefinition(
      loadSync(protoPath, {
        keepCase: false,
        longs: String as Function,
        enums: String as Function,
        defaults: true,
        oneofs: true,
      })
    ) as T
  ).tinkoff.public.invest.api.contract.v1;
}
