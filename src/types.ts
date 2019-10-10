export type { ProtoGrpcType as InstrumentsType } from './generated/instruments';
export type { ProtoGrpcType as MarketdataType } from './generated/marketdata';
export type { ProtoGrpcType as OrdersType } from './generated/orders';
export type { ProtoGrpcType as OperationsType } from './generated/operations';
export type { ProtoGrpcType as SandboxType } from './generated/sandbox';
export type { ProtoGrpcType as StopordersType } from './generated/stoporders';
export type { ProtoGrpcType as UsersType } from './generated/users';

export type Client<Constructor> =  Constructor extends (new (...args: any) => infer R) ? R : null;
export type ServicePath<T extends Basic> = T['tinkoff']['public']['invest']['api']['contract']['v1'];
export type Basic = {
  tinkoff: {
    public: {
      invest: {
        api: {
          contract: {
            v1: {};
          };
        };
      };
    };
  };
};
