import { OpenAPIClient } from '@tinkoff/invest-openapi-js-sdk';
import { InstrumentIdType } from '../build/generated/tinkoff/public/invest/api/contract/v1/InstrumentIdType';

const client = new OpenAPIClient({
  token: process.env.TOKEN as string,
});

client.instruments.shares({}, (x, y) => {
  console.log(x, y!.instruments.filter(x => x.ticker ==='AAPL'));
});

client.instruments.shareBy({ id:'BBG000B9XRY4', idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI, classCode: '' }, (_, x) => {
  console.log(_, x);
})

const marketDataStream = client.marketDataStream.marketDataStream();

marketDataStream.on('open', function(feature) {
  console.log(1);
  console.log(feature);
});

marketDataStream.on('data', function(feature) {
  console.log(1);

  console.log(feature);
});

marketDataStream.on('error', function(e) {
  console.error(e);
});

marketDataStream.write({subscribeCandlesRequest: {instruments: [{figi: 'BBG000B9XRY4', interval: 'SUBSCRIPTION_INTERVAL_ONE_MINUTE'}], subscriptionAction: 'SUBSCRIPTION_ACTION_SUBSCRIBE'}})

