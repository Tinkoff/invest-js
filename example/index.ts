import { OpenAPIClient } from '@tinkoff/invest-openapi-js-sdk';

const client = new OpenAPIClient({
  token: process.env.TOKEN as string,
});

const a = client.instruments.etfs({}, (x, y) => {
  debugger;
  console.log(x, y, a);
});
