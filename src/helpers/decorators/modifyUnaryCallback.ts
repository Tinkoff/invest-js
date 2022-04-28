import { ServiceError } from '@grpc/grpc-js';

import { apiErrors } from '../../const/apiErrors';

/**
 * Modifies callback by providing extra logic.
 * @param originalMethod method to be called with modified arguments.
 * @param args arguments to be passed to an original method.
 */
export function modifyUnaryCallback(originalMethod: Function, args: any[]) {
  const callback = args.at(-1);

  args[args.length - 1] = (error: ServiceError, response: ResponseType) => {
    if (error) {
      const { details } = error;
      error.details = apiErrors[details]?.description || details;
    }

    callback(error, response);
  };

  originalMethod(...args);
}
