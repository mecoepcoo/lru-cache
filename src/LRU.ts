/**
 * @interface LRUOptions
 */
export interface LRUOptions {
  /** The Maximum size of items. It will be `Infinity` if set to 0 */
  max: number;
  /** Maximum age in ms. When you try to get an item that is too old, it will be dropped and return undefined if you don't set the stale */
  maxAge: number;
  /** 
   * By default, it returns 1.
   * The function is used to calculate the length of item. Maybe you are storing strings or buffers and want to limit the total size by string length instead of item counts.
   * The item is passed as the first argument, and the key is passed as the second argument.
   */
  length: (n?: any, key?: string) => number
  /**
   * Function that is called on items when they are dropped.
   * It won't be called when you overwrite an existing key.
   */
  dispose: () => void,
  /** 
   * By default, it is set to false.
   * When you call `get(key)` with the stale set to true, if the item is out of the maxAge, it returns the stale value before deleting it.
   */
  stale: boolean,
}

const initOptions: LRUOptions = {
  max: 0,
  maxAge: Infinity,
  length: () => 1,
  dispose: () => undefined,
  stale: false,
}

class LRUCache {
  MAX = Infinity

  length = 0

  constructor(options: LRUOptions = initOptions) {
    const { max } = options
    this.MAX = max || Infinity
  }

  set<T = any>(key: string, value: T, maxAge = this.MAX): boolean {
    return true
  }

  get<T = any>(key: string): T {
    return null as any
  }

  has(key: string): boolean {
    return true
  }

  peek<T = any>(key: string): T {
    return null as any
  }

  del(key: string): any {
    // ...
  }

  clear(): void {
    // ...
  }
}

export default LRUCache
