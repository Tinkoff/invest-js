import 'dotenv/config';
import {OpenAPIClient} from '../src';
import {InstrumentIdType} from '../build/generated/tinkoff/public/invest/api/contract/v1/InstrumentIdType';
import {OrderDirection} from "../src/generated/tinkoff/public/invest/api/contract/v1/OrderDirection";
import {OrderType} from "../src/generated/tinkoff/public/invest/api/contract/v1/OrderType";

const client = new OpenAPIClient({
  token: process.env.TOKEN as string,
});

const sandboxClient = new OpenAPIClient({
  token: process.env.TOKEN as string,
  url: 'http://sandbox-invest-public-api.tinkoff.ru'
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


const postOrderArguments = {
  figi: "figi",
  accountId: "my_account_id",
  direction: OrderDirection.ORDER_DIRECTION_BUY,
  orderType: OrderType.ORDER_TYPE_MARKET,
  price: {
    units: 10
  },
  orderId: "1234-qwer-1234-tyui",
  quantity: 1
};

//Выставление ордера в песочнице
sandboxClient.orders.postOrder(
    postOrderArguments,
    (_, x) => {
      console.log(_, x);
    }
)
//Выставление ордера в настоящем API
client.orders.postOrder(
    postOrderArguments,
    (_, x) => {
      console.log(_, x);
    }
)
//получение операций в песочнице
sandboxClient.operations.getOperations(
    {
      from: {
        seconds: 1628492201
      },
      to: {
        seconds: 1660028201
      },
      accountId: "my_account_id"
    },
    (_, x) => {
      console.log(_, x);
    }
)

//пополнение счета в песочнице в USD
sandboxClient.sandbox.sandboxPayIn(
    {
      accountId: "my_account_id",
      amount: {
        currency: "usd",
        units: 1000
      }
    },
    (_, x) => {
      console.log(_, x);
    }
)

//пополнение счета в песочнице в RUB
sandboxClient.sandbox.sandboxPayIn(
    {
      accountId: "my_account_id",
      amount: {
        currency: "rub",
        units: 1000
      }
    },
    (_, x) => {
      console.log(_, x);
    }
)

//получение списка аккаунтов песочницы
sandboxClient.usersService.getAccounts(
    {},
    (_, x) => {
      console.log(_, x);
    }
)
