const dev = process.env.NODE_ENV === 'development';
export const PROTO_PATH = dev
  ? __dirname + '/../investAPI/src/docs/contracts/'
  : __dirname + '/contracts/';