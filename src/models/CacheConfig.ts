export interface CacheConfig {
  /**
   * Флаг включения кэша.
   * По умолчанию включен.
   */
  isEnabled?: boolean;
  /**
   * Время жизни кэша в секундах.
   * По умолчанию 30 минут.
   */
  lifetime?: number;
}
