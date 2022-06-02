/**
 * Iterates over constructor.prototype and constructor.__proto__.prototype
 * and calls passed value within functions descriptors.
 * @param value value which is called withing property descriptor.
 */
export function applyToAllMethods(value: Function) {
  return function (constructor: Function) {
    const properties = [
      ...Object.getOwnPropertyNames(constructor.prototype),
      ...Object.getOwnPropertyNames(Object.getPrototypeOf(constructor).prototype),
    ];

    for (const propertyName of properties) {
      const property = constructor.prototype[propertyName];

      if (!(property instanceof Function)) {
        continue;
      }

      Object.defineProperty(constructor.prototype, propertyName, {
        value: function (...args: any[]) {
          value(property.bind(this), args);
        },
      });
    }
  };
}
