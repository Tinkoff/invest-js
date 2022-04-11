import 'dotenv/config';
// import { OpenAPIClient } from '@tinkoff/invest-js';
import { OpenAPIClient } from '../src/index';
import { InstrumentIdType } from '../build/generated/tinkoff/public/invest/api/contract/v1/InstrumentIdType';

const client = new OpenAPIClient({
  token: process.env.TOKEN as string,
});

// InstrumentsService
client.instruments.shares({}, (x, y) => {
  if (x) {
    console.log(x);
  }

  console.log(
    x,
    y!.instruments.filter((x) => x.ticker === 'AAPL')
  );
});

client.instruments.shareBy(
  { id: 'BBG000B9XRY4', idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI, classCode: '' },
  (_, x) => {
    console.log(_, x);
  }
);

client.instruments.baseShares((e, v) => {
  console.log(e, v);
});

client.instruments.allShares((e, v) => {
  console.log(e, v);
});

client.instruments.getInstrumentByFIGI({ id: 'BBG000B9XRY4', classCode: '' }, (e, v) => {
  console.log(e, v);
});

client.instruments.getInstrumentByTicker({ id: 'AAPL', classCode: 'SPBXM' }, (e, v) => {
  console.log(e, v);
});

client.instruments.tradingSchedules({}, (e, v) => {
  console.log(e, v);
});

// marketDataStream
const marketDataStream = client.marketDataStream.marketDataStream();

marketDataStream.on('open', function (feature) {
  console.log(1);
  console.log(feature);
});

marketDataStream.on('data', function (feature) {
  console.log(1);

  console.log(feature);
});

marketDataStream.on('error', function (e) {
  console.error(e);
});

marketDataStream.write({
  subscribeCandlesRequest: {
    instruments: [{ figi: 'BBG000B9XRY4', interval: 'SUBSCRIPTION_INTERVAL_ONE_MINUTE' }],
    subscriptionAction: 'SUBSCRIPTION_ACTION_SUBSCRIBE',
  },
});
