"use strict";
// Original file: investAPI/src/docs/contracts/marketdata.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionStatus = void 0;
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_UNSPECIFIED"] = 0] = "SUBSCRIPTION_STATUS_UNSPECIFIED";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_SUCCESS"] = 1] = "SUBSCRIPTION_STATUS_SUCCESS";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND"] = 2] = "SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID"] = 3] = "SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_DEPTH_IS_INVALID"] = 4] = "SUBSCRIPTION_STATUS_DEPTH_IS_INVALID";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID"] = 5] = "SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED"] = 6] = "SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INTERNAL_ERROR"] = 7] = "SUBSCRIPTION_STATUS_INTERNAL_ERROR";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
//# sourceMappingURL=SubscriptionStatus.js.map