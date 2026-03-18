
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model BlocklistSource
 * 
 */
export type BlocklistSource = $Result.DefaultSelection<Prisma.$BlocklistSourcePayload>
/**
 * Model ScheduleBlock
 * 
 */
export type ScheduleBlock = $Result.DefaultSelection<Prisma.$ScheduleBlockPayload>
/**
 * Model RssFeed
 * 
 */
export type RssFeed = $Result.DefaultSelection<Prisma.$RssFeedPayload>
/**
 * Model MediaRhythm
 * 
 */
export type MediaRhythm = $Result.DefaultSelection<Prisma.$MediaRhythmPayload>
/**
 * Model DnsQuery
 * 
 */
export type DnsQuery = $Result.DefaultSelection<Prisma.$DnsQueryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Settings
 * const settings = await prisma.settings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Settings
   * const settings = await prisma.settings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blocklistSource`: Exposes CRUD operations for the **BlocklistSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlocklistSources
    * const blocklistSources = await prisma.blocklistSource.findMany()
    * ```
    */
  get blocklistSource(): Prisma.BlocklistSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleBlock`: Exposes CRUD operations for the **ScheduleBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleBlocks
    * const scheduleBlocks = await prisma.scheduleBlock.findMany()
    * ```
    */
  get scheduleBlock(): Prisma.ScheduleBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rssFeed`: Exposes CRUD operations for the **RssFeed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RssFeeds
    * const rssFeeds = await prisma.rssFeed.findMany()
    * ```
    */
  get rssFeed(): Prisma.RssFeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaRhythm`: Exposes CRUD operations for the **MediaRhythm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaRhythms
    * const mediaRhythms = await prisma.mediaRhythm.findMany()
    * ```
    */
  get mediaRhythm(): Prisma.MediaRhythmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dnsQuery`: Exposes CRUD operations for the **DnsQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DnsQueries
    * const dnsQueries = await prisma.dnsQuery.findMany()
    * ```
    */
  get dnsQuery(): Prisma.DnsQueryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Settings: 'Settings',
    BlocklistSource: 'BlocklistSource',
    ScheduleBlock: 'ScheduleBlock',
    RssFeed: 'RssFeed',
    MediaRhythm: 'MediaRhythm',
    DnsQuery: 'DnsQuery'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "settings" | "blocklistSource" | "scheduleBlock" | "rssFeed" | "mediaRhythm" | "dnsQuery"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      BlocklistSource: {
        payload: Prisma.$BlocklistSourcePayload<ExtArgs>
        fields: Prisma.BlocklistSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlocklistSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlocklistSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>
          }
          findFirst: {
            args: Prisma.BlocklistSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlocklistSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>
          }
          findMany: {
            args: Prisma.BlocklistSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>[]
          }
          create: {
            args: Prisma.BlocklistSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>
          }
          createMany: {
            args: Prisma.BlocklistSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlocklistSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>[]
          }
          delete: {
            args: Prisma.BlocklistSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>
          }
          update: {
            args: Prisma.BlocklistSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>
          }
          deleteMany: {
            args: Prisma.BlocklistSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlocklistSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlocklistSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>[]
          }
          upsert: {
            args: Prisma.BlocklistSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocklistSourcePayload>
          }
          aggregate: {
            args: Prisma.BlocklistSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlocklistSource>
          }
          groupBy: {
            args: Prisma.BlocklistSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlocklistSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlocklistSourceCountArgs<ExtArgs>
            result: $Utils.Optional<BlocklistSourceCountAggregateOutputType> | number
          }
        }
      }
      ScheduleBlock: {
        payload: Prisma.$ScheduleBlockPayload<ExtArgs>
        fields: Prisma.ScheduleBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          findFirst: {
            args: Prisma.ScheduleBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          findMany: {
            args: Prisma.ScheduleBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>[]
          }
          create: {
            args: Prisma.ScheduleBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          createMany: {
            args: Prisma.ScheduleBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>[]
          }
          delete: {
            args: Prisma.ScheduleBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          update: {
            args: Prisma.ScheduleBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>[]
          }
          upsert: {
            args: Prisma.ScheduleBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          aggregate: {
            args: Prisma.ScheduleBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleBlock>
          }
          groupBy: {
            args: Prisma.ScheduleBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleBlockCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleBlockCountAggregateOutputType> | number
          }
        }
      }
      RssFeed: {
        payload: Prisma.$RssFeedPayload<ExtArgs>
        fields: Prisma.RssFeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RssFeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RssFeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>
          }
          findFirst: {
            args: Prisma.RssFeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RssFeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>
          }
          findMany: {
            args: Prisma.RssFeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>[]
          }
          create: {
            args: Prisma.RssFeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>
          }
          createMany: {
            args: Prisma.RssFeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RssFeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>[]
          }
          delete: {
            args: Prisma.RssFeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>
          }
          update: {
            args: Prisma.RssFeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>
          }
          deleteMany: {
            args: Prisma.RssFeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RssFeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RssFeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>[]
          }
          upsert: {
            args: Prisma.RssFeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RssFeedPayload>
          }
          aggregate: {
            args: Prisma.RssFeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRssFeed>
          }
          groupBy: {
            args: Prisma.RssFeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<RssFeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.RssFeedCountArgs<ExtArgs>
            result: $Utils.Optional<RssFeedCountAggregateOutputType> | number
          }
        }
      }
      MediaRhythm: {
        payload: Prisma.$MediaRhythmPayload<ExtArgs>
        fields: Prisma.MediaRhythmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaRhythmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaRhythmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>
          }
          findFirst: {
            args: Prisma.MediaRhythmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaRhythmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>
          }
          findMany: {
            args: Prisma.MediaRhythmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>[]
          }
          create: {
            args: Prisma.MediaRhythmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>
          }
          createMany: {
            args: Prisma.MediaRhythmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaRhythmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>[]
          }
          delete: {
            args: Prisma.MediaRhythmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>
          }
          update: {
            args: Prisma.MediaRhythmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>
          }
          deleteMany: {
            args: Prisma.MediaRhythmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaRhythmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaRhythmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>[]
          }
          upsert: {
            args: Prisma.MediaRhythmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRhythmPayload>
          }
          aggregate: {
            args: Prisma.MediaRhythmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaRhythm>
          }
          groupBy: {
            args: Prisma.MediaRhythmGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaRhythmGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaRhythmCountArgs<ExtArgs>
            result: $Utils.Optional<MediaRhythmCountAggregateOutputType> | number
          }
        }
      }
      DnsQuery: {
        payload: Prisma.$DnsQueryPayload<ExtArgs>
        fields: Prisma.DnsQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DnsQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DnsQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>
          }
          findFirst: {
            args: Prisma.DnsQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DnsQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>
          }
          findMany: {
            args: Prisma.DnsQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>[]
          }
          create: {
            args: Prisma.DnsQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>
          }
          createMany: {
            args: Prisma.DnsQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DnsQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>[]
          }
          delete: {
            args: Prisma.DnsQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>
          }
          update: {
            args: Prisma.DnsQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>
          }
          deleteMany: {
            args: Prisma.DnsQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DnsQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DnsQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>[]
          }
          upsert: {
            args: Prisma.DnsQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsQueryPayload>
          }
          aggregate: {
            args: Prisma.DnsQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDnsQuery>
          }
          groupBy: {
            args: Prisma.DnsQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DnsQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DnsQueryCountArgs<ExtArgs>
            result: $Utils.Optional<DnsQueryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    settings?: SettingsOmit
    blocklistSource?: BlocklistSourceOmit
    scheduleBlock?: ScheduleBlockOmit
    rssFeed?: RssFeedOmit
    mediaRhythm?: MediaRhythmOmit
    dnsQuery?: DnsQueryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SettingsCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type SettingsMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type SettingsCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    key: string
    value: string
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    key?: boolean
    value?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingsWithKeyOnly = await prisma.settings.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `key`
     * const settingsWithKeyOnly = await prisma.settings.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `key`
     * const settingsWithKeyOnly = await prisma.settings.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly key: FieldRef<"Settings", 'String'>
    readonly value: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
  }


  /**
   * Model BlocklistSource
   */

  export type AggregateBlocklistSource = {
    _count: BlocklistSourceCountAggregateOutputType | null
    _avg: BlocklistSourceAvgAggregateOutputType | null
    _sum: BlocklistSourceSumAggregateOutputType | null
    _min: BlocklistSourceMinAggregateOutputType | null
    _max: BlocklistSourceMaxAggregateOutputType | null
  }

  export type BlocklistSourceAvgAggregateOutputType = {
    domainCount: number | null
  }

  export type BlocklistSourceSumAggregateOutputType = {
    domainCount: number | null
  }

  export type BlocklistSourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    enabled: boolean | null
    type: string | null
    domainCount: number | null
    lastSynced: Date | null
    createdAt: Date | null
  }

  export type BlocklistSourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    enabled: boolean | null
    type: string | null
    domainCount: number | null
    lastSynced: Date | null
    createdAt: Date | null
  }

  export type BlocklistSourceCountAggregateOutputType = {
    id: number
    name: number
    url: number
    enabled: number
    type: number
    domainCount: number
    lastSynced: number
    createdAt: number
    _all: number
  }


  export type BlocklistSourceAvgAggregateInputType = {
    domainCount?: true
  }

  export type BlocklistSourceSumAggregateInputType = {
    domainCount?: true
  }

  export type BlocklistSourceMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    enabled?: true
    type?: true
    domainCount?: true
    lastSynced?: true
    createdAt?: true
  }

  export type BlocklistSourceMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    enabled?: true
    type?: true
    domainCount?: true
    lastSynced?: true
    createdAt?: true
  }

  export type BlocklistSourceCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    enabled?: true
    type?: true
    domainCount?: true
    lastSynced?: true
    createdAt?: true
    _all?: true
  }

  export type BlocklistSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlocklistSource to aggregate.
     */
    where?: BlocklistSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlocklistSources to fetch.
     */
    orderBy?: BlocklistSourceOrderByWithRelationInput | BlocklistSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlocklistSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlocklistSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlocklistSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlocklistSources
    **/
    _count?: true | BlocklistSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlocklistSourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlocklistSourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlocklistSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlocklistSourceMaxAggregateInputType
  }

  export type GetBlocklistSourceAggregateType<T extends BlocklistSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateBlocklistSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlocklistSource[P]>
      : GetScalarType<T[P], AggregateBlocklistSource[P]>
  }




  export type BlocklistSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlocklistSourceWhereInput
    orderBy?: BlocklistSourceOrderByWithAggregationInput | BlocklistSourceOrderByWithAggregationInput[]
    by: BlocklistSourceScalarFieldEnum[] | BlocklistSourceScalarFieldEnum
    having?: BlocklistSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlocklistSourceCountAggregateInputType | true
    _avg?: BlocklistSourceAvgAggregateInputType
    _sum?: BlocklistSourceSumAggregateInputType
    _min?: BlocklistSourceMinAggregateInputType
    _max?: BlocklistSourceMaxAggregateInputType
  }

  export type BlocklistSourceGroupByOutputType = {
    id: string
    name: string
    url: string | null
    enabled: boolean
    type: string
    domainCount: number
    lastSynced: Date | null
    createdAt: Date
    _count: BlocklistSourceCountAggregateOutputType | null
    _avg: BlocklistSourceAvgAggregateOutputType | null
    _sum: BlocklistSourceSumAggregateOutputType | null
    _min: BlocklistSourceMinAggregateOutputType | null
    _max: BlocklistSourceMaxAggregateOutputType | null
  }

  type GetBlocklistSourceGroupByPayload<T extends BlocklistSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlocklistSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlocklistSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlocklistSourceGroupByOutputType[P]>
            : GetScalarType<T[P], BlocklistSourceGroupByOutputType[P]>
        }
      >
    >


  export type BlocklistSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    enabled?: boolean
    type?: boolean
    domainCount?: boolean
    lastSynced?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blocklistSource"]>

  export type BlocklistSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    enabled?: boolean
    type?: boolean
    domainCount?: boolean
    lastSynced?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blocklistSource"]>

  export type BlocklistSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    enabled?: boolean
    type?: boolean
    domainCount?: boolean
    lastSynced?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blocklistSource"]>

  export type BlocklistSourceSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    enabled?: boolean
    type?: boolean
    domainCount?: boolean
    lastSynced?: boolean
    createdAt?: boolean
  }

  export type BlocklistSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "enabled" | "type" | "domainCount" | "lastSynced" | "createdAt", ExtArgs["result"]["blocklistSource"]>

  export type $BlocklistSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlocklistSource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string | null
      enabled: boolean
      type: string
      domainCount: number
      lastSynced: Date | null
      createdAt: Date
    }, ExtArgs["result"]["blocklistSource"]>
    composites: {}
  }

  type BlocklistSourceGetPayload<S extends boolean | null | undefined | BlocklistSourceDefaultArgs> = $Result.GetResult<Prisma.$BlocklistSourcePayload, S>

  type BlocklistSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlocklistSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlocklistSourceCountAggregateInputType | true
    }

  export interface BlocklistSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlocklistSource'], meta: { name: 'BlocklistSource' } }
    /**
     * Find zero or one BlocklistSource that matches the filter.
     * @param {BlocklistSourceFindUniqueArgs} args - Arguments to find a BlocklistSource
     * @example
     * // Get one BlocklistSource
     * const blocklistSource = await prisma.blocklistSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlocklistSourceFindUniqueArgs>(args: SelectSubset<T, BlocklistSourceFindUniqueArgs<ExtArgs>>): Prisma__BlocklistSourceClient<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlocklistSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlocklistSourceFindUniqueOrThrowArgs} args - Arguments to find a BlocklistSource
     * @example
     * // Get one BlocklistSource
     * const blocklistSource = await prisma.blocklistSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlocklistSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, BlocklistSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlocklistSourceClient<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlocklistSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocklistSourceFindFirstArgs} args - Arguments to find a BlocklistSource
     * @example
     * // Get one BlocklistSource
     * const blocklistSource = await prisma.blocklistSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlocklistSourceFindFirstArgs>(args?: SelectSubset<T, BlocklistSourceFindFirstArgs<ExtArgs>>): Prisma__BlocklistSourceClient<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlocklistSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocklistSourceFindFirstOrThrowArgs} args - Arguments to find a BlocklistSource
     * @example
     * // Get one BlocklistSource
     * const blocklistSource = await prisma.blocklistSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlocklistSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, BlocklistSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlocklistSourceClient<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlocklistSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocklistSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlocklistSources
     * const blocklistSources = await prisma.blocklistSource.findMany()
     * 
     * // Get first 10 BlocklistSources
     * const blocklistSources = await prisma.blocklistSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blocklistSourceWithIdOnly = await prisma.blocklistSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlocklistSourceFindManyArgs>(args?: SelectSubset<T, BlocklistSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlocklistSource.
     * @param {BlocklistSourceCreateArgs} args - Arguments to create a BlocklistSource.
     * @example
     * // Create one BlocklistSource
     * const BlocklistSource = await prisma.blocklistSource.create({
     *   data: {
     *     // ... data to create a BlocklistSource
     *   }
     * })
     * 
     */
    create<T extends BlocklistSourceCreateArgs>(args: SelectSubset<T, BlocklistSourceCreateArgs<ExtArgs>>): Prisma__BlocklistSourceClient<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlocklistSources.
     * @param {BlocklistSourceCreateManyArgs} args - Arguments to create many BlocklistSources.
     * @example
     * // Create many BlocklistSources
     * const blocklistSource = await prisma.blocklistSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlocklistSourceCreateManyArgs>(args?: SelectSubset<T, BlocklistSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlocklistSources and returns the data saved in the database.
     * @param {BlocklistSourceCreateManyAndReturnArgs} args - Arguments to create many BlocklistSources.
     * @example
     * // Create many BlocklistSources
     * const blocklistSource = await prisma.blocklistSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlocklistSources and only return the `id`
     * const blocklistSourceWithIdOnly = await prisma.blocklistSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlocklistSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, BlocklistSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlocklistSource.
     * @param {BlocklistSourceDeleteArgs} args - Arguments to delete one BlocklistSource.
     * @example
     * // Delete one BlocklistSource
     * const BlocklistSource = await prisma.blocklistSource.delete({
     *   where: {
     *     // ... filter to delete one BlocklistSource
     *   }
     * })
     * 
     */
    delete<T extends BlocklistSourceDeleteArgs>(args: SelectSubset<T, BlocklistSourceDeleteArgs<ExtArgs>>): Prisma__BlocklistSourceClient<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlocklistSource.
     * @param {BlocklistSourceUpdateArgs} args - Arguments to update one BlocklistSource.
     * @example
     * // Update one BlocklistSource
     * const blocklistSource = await prisma.blocklistSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlocklistSourceUpdateArgs>(args: SelectSubset<T, BlocklistSourceUpdateArgs<ExtArgs>>): Prisma__BlocklistSourceClient<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlocklistSources.
     * @param {BlocklistSourceDeleteManyArgs} args - Arguments to filter BlocklistSources to delete.
     * @example
     * // Delete a few BlocklistSources
     * const { count } = await prisma.blocklistSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlocklistSourceDeleteManyArgs>(args?: SelectSubset<T, BlocklistSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlocklistSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocklistSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlocklistSources
     * const blocklistSource = await prisma.blocklistSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlocklistSourceUpdateManyArgs>(args: SelectSubset<T, BlocklistSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlocklistSources and returns the data updated in the database.
     * @param {BlocklistSourceUpdateManyAndReturnArgs} args - Arguments to update many BlocklistSources.
     * @example
     * // Update many BlocklistSources
     * const blocklistSource = await prisma.blocklistSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlocklistSources and only return the `id`
     * const blocklistSourceWithIdOnly = await prisma.blocklistSource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlocklistSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, BlocklistSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlocklistSource.
     * @param {BlocklistSourceUpsertArgs} args - Arguments to update or create a BlocklistSource.
     * @example
     * // Update or create a BlocklistSource
     * const blocklistSource = await prisma.blocklistSource.upsert({
     *   create: {
     *     // ... data to create a BlocklistSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlocklistSource we want to update
     *   }
     * })
     */
    upsert<T extends BlocklistSourceUpsertArgs>(args: SelectSubset<T, BlocklistSourceUpsertArgs<ExtArgs>>): Prisma__BlocklistSourceClient<$Result.GetResult<Prisma.$BlocklistSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlocklistSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocklistSourceCountArgs} args - Arguments to filter BlocklistSources to count.
     * @example
     * // Count the number of BlocklistSources
     * const count = await prisma.blocklistSource.count({
     *   where: {
     *     // ... the filter for the BlocklistSources we want to count
     *   }
     * })
    **/
    count<T extends BlocklistSourceCountArgs>(
      args?: Subset<T, BlocklistSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlocklistSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlocklistSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocklistSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlocklistSourceAggregateArgs>(args: Subset<T, BlocklistSourceAggregateArgs>): Prisma.PrismaPromise<GetBlocklistSourceAggregateType<T>>

    /**
     * Group by BlocklistSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocklistSourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlocklistSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlocklistSourceGroupByArgs['orderBy'] }
        : { orderBy?: BlocklistSourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlocklistSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlocklistSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlocklistSource model
   */
  readonly fields: BlocklistSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlocklistSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlocklistSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlocklistSource model
   */
  interface BlocklistSourceFieldRefs {
    readonly id: FieldRef<"BlocklistSource", 'String'>
    readonly name: FieldRef<"BlocklistSource", 'String'>
    readonly url: FieldRef<"BlocklistSource", 'String'>
    readonly enabled: FieldRef<"BlocklistSource", 'Boolean'>
    readonly type: FieldRef<"BlocklistSource", 'String'>
    readonly domainCount: FieldRef<"BlocklistSource", 'Int'>
    readonly lastSynced: FieldRef<"BlocklistSource", 'DateTime'>
    readonly createdAt: FieldRef<"BlocklistSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlocklistSource findUnique
   */
  export type BlocklistSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * Filter, which BlocklistSource to fetch.
     */
    where: BlocklistSourceWhereUniqueInput
  }

  /**
   * BlocklistSource findUniqueOrThrow
   */
  export type BlocklistSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * Filter, which BlocklistSource to fetch.
     */
    where: BlocklistSourceWhereUniqueInput
  }

  /**
   * BlocklistSource findFirst
   */
  export type BlocklistSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * Filter, which BlocklistSource to fetch.
     */
    where?: BlocklistSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlocklistSources to fetch.
     */
    orderBy?: BlocklistSourceOrderByWithRelationInput | BlocklistSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlocklistSources.
     */
    cursor?: BlocklistSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlocklistSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlocklistSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlocklistSources.
     */
    distinct?: BlocklistSourceScalarFieldEnum | BlocklistSourceScalarFieldEnum[]
  }

  /**
   * BlocklistSource findFirstOrThrow
   */
  export type BlocklistSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * Filter, which BlocklistSource to fetch.
     */
    where?: BlocklistSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlocklistSources to fetch.
     */
    orderBy?: BlocklistSourceOrderByWithRelationInput | BlocklistSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlocklistSources.
     */
    cursor?: BlocklistSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlocklistSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlocklistSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlocklistSources.
     */
    distinct?: BlocklistSourceScalarFieldEnum | BlocklistSourceScalarFieldEnum[]
  }

  /**
   * BlocklistSource findMany
   */
  export type BlocklistSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * Filter, which BlocklistSources to fetch.
     */
    where?: BlocklistSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlocklistSources to fetch.
     */
    orderBy?: BlocklistSourceOrderByWithRelationInput | BlocklistSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlocklistSources.
     */
    cursor?: BlocklistSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlocklistSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlocklistSources.
     */
    skip?: number
    distinct?: BlocklistSourceScalarFieldEnum | BlocklistSourceScalarFieldEnum[]
  }

  /**
   * BlocklistSource create
   */
  export type BlocklistSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * The data needed to create a BlocklistSource.
     */
    data: XOR<BlocklistSourceCreateInput, BlocklistSourceUncheckedCreateInput>
  }

  /**
   * BlocklistSource createMany
   */
  export type BlocklistSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlocklistSources.
     */
    data: BlocklistSourceCreateManyInput | BlocklistSourceCreateManyInput[]
  }

  /**
   * BlocklistSource createManyAndReturn
   */
  export type BlocklistSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * The data used to create many BlocklistSources.
     */
    data: BlocklistSourceCreateManyInput | BlocklistSourceCreateManyInput[]
  }

  /**
   * BlocklistSource update
   */
  export type BlocklistSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * The data needed to update a BlocklistSource.
     */
    data: XOR<BlocklistSourceUpdateInput, BlocklistSourceUncheckedUpdateInput>
    /**
     * Choose, which BlocklistSource to update.
     */
    where: BlocklistSourceWhereUniqueInput
  }

  /**
   * BlocklistSource updateMany
   */
  export type BlocklistSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlocklistSources.
     */
    data: XOR<BlocklistSourceUpdateManyMutationInput, BlocklistSourceUncheckedUpdateManyInput>
    /**
     * Filter which BlocklistSources to update
     */
    where?: BlocklistSourceWhereInput
    /**
     * Limit how many BlocklistSources to update.
     */
    limit?: number
  }

  /**
   * BlocklistSource updateManyAndReturn
   */
  export type BlocklistSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * The data used to update BlocklistSources.
     */
    data: XOR<BlocklistSourceUpdateManyMutationInput, BlocklistSourceUncheckedUpdateManyInput>
    /**
     * Filter which BlocklistSources to update
     */
    where?: BlocklistSourceWhereInput
    /**
     * Limit how many BlocklistSources to update.
     */
    limit?: number
  }

  /**
   * BlocklistSource upsert
   */
  export type BlocklistSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * The filter to search for the BlocklistSource to update in case it exists.
     */
    where: BlocklistSourceWhereUniqueInput
    /**
     * In case the BlocklistSource found by the `where` argument doesn't exist, create a new BlocklistSource with this data.
     */
    create: XOR<BlocklistSourceCreateInput, BlocklistSourceUncheckedCreateInput>
    /**
     * In case the BlocklistSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlocklistSourceUpdateInput, BlocklistSourceUncheckedUpdateInput>
  }

  /**
   * BlocklistSource delete
   */
  export type BlocklistSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
    /**
     * Filter which BlocklistSource to delete.
     */
    where: BlocklistSourceWhereUniqueInput
  }

  /**
   * BlocklistSource deleteMany
   */
  export type BlocklistSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlocklistSources to delete
     */
    where?: BlocklistSourceWhereInput
    /**
     * Limit how many BlocklistSources to delete.
     */
    limit?: number
  }

  /**
   * BlocklistSource without action
   */
  export type BlocklistSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocklistSource
     */
    select?: BlocklistSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlocklistSource
     */
    omit?: BlocklistSourceOmit<ExtArgs> | null
  }


  /**
   * Model ScheduleBlock
   */

  export type AggregateScheduleBlock = {
    _count: ScheduleBlockCountAggregateOutputType | null
    _avg: ScheduleBlockAvgAggregateOutputType | null
    _sum: ScheduleBlockSumAggregateOutputType | null
    _min: ScheduleBlockMinAggregateOutputType | null
    _max: ScheduleBlockMaxAggregateOutputType | null
  }

  export type ScheduleBlockAvgAggregateOutputType = {
    dayOfWeek: number | null
    startHour: number | null
    endHour: number | null
  }

  export type ScheduleBlockSumAggregateOutputType = {
    dayOfWeek: number | null
    startHour: number | null
    endHour: number | null
  }

  export type ScheduleBlockMinAggregateOutputType = {
    id: string | null
    dayOfWeek: number | null
    startHour: number | null
    endHour: number | null
    label: string | null
  }

  export type ScheduleBlockMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: number | null
    startHour: number | null
    endHour: number | null
    label: string | null
  }

  export type ScheduleBlockCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startHour: number
    endHour: number
    label: number
    _all: number
  }


  export type ScheduleBlockAvgAggregateInputType = {
    dayOfWeek?: true
    startHour?: true
    endHour?: true
  }

  export type ScheduleBlockSumAggregateInputType = {
    dayOfWeek?: true
    startHour?: true
    endHour?: true
  }

  export type ScheduleBlockMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startHour?: true
    endHour?: true
    label?: true
  }

  export type ScheduleBlockMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startHour?: true
    endHour?: true
    label?: true
  }

  export type ScheduleBlockCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startHour?: true
    endHour?: true
    label?: true
    _all?: true
  }

  export type ScheduleBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleBlock to aggregate.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleBlocks
    **/
    _count?: true | ScheduleBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleBlockMaxAggregateInputType
  }

  export type GetScheduleBlockAggregateType<T extends ScheduleBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleBlock[P]>
      : GetScalarType<T[P], AggregateScheduleBlock[P]>
  }




  export type ScheduleBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleBlockWhereInput
    orderBy?: ScheduleBlockOrderByWithAggregationInput | ScheduleBlockOrderByWithAggregationInput[]
    by: ScheduleBlockScalarFieldEnum[] | ScheduleBlockScalarFieldEnum
    having?: ScheduleBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleBlockCountAggregateInputType | true
    _avg?: ScheduleBlockAvgAggregateInputType
    _sum?: ScheduleBlockSumAggregateInputType
    _min?: ScheduleBlockMinAggregateInputType
    _max?: ScheduleBlockMaxAggregateInputType
  }

  export type ScheduleBlockGroupByOutputType = {
    id: string
    dayOfWeek: number
    startHour: number
    endHour: number
    label: string | null
    _count: ScheduleBlockCountAggregateOutputType | null
    _avg: ScheduleBlockAvgAggregateOutputType | null
    _sum: ScheduleBlockSumAggregateOutputType | null
    _min: ScheduleBlockMinAggregateOutputType | null
    _max: ScheduleBlockMaxAggregateOutputType | null
  }

  type GetScheduleBlockGroupByPayload<T extends ScheduleBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleBlockGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleBlockGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    endHour?: boolean
    label?: boolean
  }, ExtArgs["result"]["scheduleBlock"]>

  export type ScheduleBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    endHour?: boolean
    label?: boolean
  }, ExtArgs["result"]["scheduleBlock"]>

  export type ScheduleBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    endHour?: boolean
    label?: boolean
  }, ExtArgs["result"]["scheduleBlock"]>

  export type ScheduleBlockSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    endHour?: boolean
    label?: boolean
  }

  export type ScheduleBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startHour" | "endHour" | "label", ExtArgs["result"]["scheduleBlock"]>

  export type $ScheduleBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleBlock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: number
      startHour: number
      endHour: number
      label: string | null
    }, ExtArgs["result"]["scheduleBlock"]>
    composites: {}
  }

  type ScheduleBlockGetPayload<S extends boolean | null | undefined | ScheduleBlockDefaultArgs> = $Result.GetResult<Prisma.$ScheduleBlockPayload, S>

  type ScheduleBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleBlockCountAggregateInputType | true
    }

  export interface ScheduleBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleBlock'], meta: { name: 'ScheduleBlock' } }
    /**
     * Find zero or one ScheduleBlock that matches the filter.
     * @param {ScheduleBlockFindUniqueArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleBlockFindUniqueArgs>(args: SelectSubset<T, ScheduleBlockFindUniqueArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleBlockFindUniqueOrThrowArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindFirstArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleBlockFindFirstArgs>(args?: SelectSubset<T, ScheduleBlockFindFirstArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindFirstOrThrowArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleBlocks
     * const scheduleBlocks = await prisma.scheduleBlock.findMany()
     * 
     * // Get first 10 ScheduleBlocks
     * const scheduleBlocks = await prisma.scheduleBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleBlockWithIdOnly = await prisma.scheduleBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleBlockFindManyArgs>(args?: SelectSubset<T, ScheduleBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleBlock.
     * @param {ScheduleBlockCreateArgs} args - Arguments to create a ScheduleBlock.
     * @example
     * // Create one ScheduleBlock
     * const ScheduleBlock = await prisma.scheduleBlock.create({
     *   data: {
     *     // ... data to create a ScheduleBlock
     *   }
     * })
     * 
     */
    create<T extends ScheduleBlockCreateArgs>(args: SelectSubset<T, ScheduleBlockCreateArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleBlocks.
     * @param {ScheduleBlockCreateManyArgs} args - Arguments to create many ScheduleBlocks.
     * @example
     * // Create many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleBlockCreateManyArgs>(args?: SelectSubset<T, ScheduleBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleBlocks and returns the data saved in the database.
     * @param {ScheduleBlockCreateManyAndReturnArgs} args - Arguments to create many ScheduleBlocks.
     * @example
     * // Create many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleBlocks and only return the `id`
     * const scheduleBlockWithIdOnly = await prisma.scheduleBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleBlock.
     * @param {ScheduleBlockDeleteArgs} args - Arguments to delete one ScheduleBlock.
     * @example
     * // Delete one ScheduleBlock
     * const ScheduleBlock = await prisma.scheduleBlock.delete({
     *   where: {
     *     // ... filter to delete one ScheduleBlock
     *   }
     * })
     * 
     */
    delete<T extends ScheduleBlockDeleteArgs>(args: SelectSubset<T, ScheduleBlockDeleteArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleBlock.
     * @param {ScheduleBlockUpdateArgs} args - Arguments to update one ScheduleBlock.
     * @example
     * // Update one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleBlockUpdateArgs>(args: SelectSubset<T, ScheduleBlockUpdateArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleBlocks.
     * @param {ScheduleBlockDeleteManyArgs} args - Arguments to filter ScheduleBlocks to delete.
     * @example
     * // Delete a few ScheduleBlocks
     * const { count } = await prisma.scheduleBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleBlockDeleteManyArgs>(args?: SelectSubset<T, ScheduleBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleBlockUpdateManyArgs>(args: SelectSubset<T, ScheduleBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleBlocks and returns the data updated in the database.
     * @param {ScheduleBlockUpdateManyAndReturnArgs} args - Arguments to update many ScheduleBlocks.
     * @example
     * // Update many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleBlocks and only return the `id`
     * const scheduleBlockWithIdOnly = await prisma.scheduleBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleBlock.
     * @param {ScheduleBlockUpsertArgs} args - Arguments to update or create a ScheduleBlock.
     * @example
     * // Update or create a ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.upsert({
     *   create: {
     *     // ... data to create a ScheduleBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleBlock we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleBlockUpsertArgs>(args: SelectSubset<T, ScheduleBlockUpsertArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockCountArgs} args - Arguments to filter ScheduleBlocks to count.
     * @example
     * // Count the number of ScheduleBlocks
     * const count = await prisma.scheduleBlock.count({
     *   where: {
     *     // ... the filter for the ScheduleBlocks we want to count
     *   }
     * })
    **/
    count<T extends ScheduleBlockCountArgs>(
      args?: Subset<T, ScheduleBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleBlockAggregateArgs>(args: Subset<T, ScheduleBlockAggregateArgs>): Prisma.PrismaPromise<GetScheduleBlockAggregateType<T>>

    /**
     * Group by ScheduleBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleBlockGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleBlock model
   */
  readonly fields: ScheduleBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduleBlock model
   */
  interface ScheduleBlockFieldRefs {
    readonly id: FieldRef<"ScheduleBlock", 'String'>
    readonly dayOfWeek: FieldRef<"ScheduleBlock", 'Int'>
    readonly startHour: FieldRef<"ScheduleBlock", 'Int'>
    readonly endHour: FieldRef<"ScheduleBlock", 'Int'>
    readonly label: FieldRef<"ScheduleBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleBlock findUnique
   */
  export type ScheduleBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock findUniqueOrThrow
   */
  export type ScheduleBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock findFirst
   */
  export type ScheduleBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleBlocks.
     */
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock findFirstOrThrow
   */
  export type ScheduleBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleBlocks.
     */
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock findMany
   */
  export type ScheduleBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleBlocks to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock create
   */
  export type ScheduleBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * The data needed to create a ScheduleBlock.
     */
    data: XOR<ScheduleBlockCreateInput, ScheduleBlockUncheckedCreateInput>
  }

  /**
   * ScheduleBlock createMany
   */
  export type ScheduleBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleBlocks.
     */
    data: ScheduleBlockCreateManyInput | ScheduleBlockCreateManyInput[]
  }

  /**
   * ScheduleBlock createManyAndReturn
   */
  export type ScheduleBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleBlocks.
     */
    data: ScheduleBlockCreateManyInput | ScheduleBlockCreateManyInput[]
  }

  /**
   * ScheduleBlock update
   */
  export type ScheduleBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * The data needed to update a ScheduleBlock.
     */
    data: XOR<ScheduleBlockUpdateInput, ScheduleBlockUncheckedUpdateInput>
    /**
     * Choose, which ScheduleBlock to update.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock updateMany
   */
  export type ScheduleBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleBlocks.
     */
    data: XOR<ScheduleBlockUpdateManyMutationInput, ScheduleBlockUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleBlocks to update
     */
    where?: ScheduleBlockWhereInput
    /**
     * Limit how many ScheduleBlocks to update.
     */
    limit?: number
  }

  /**
   * ScheduleBlock updateManyAndReturn
   */
  export type ScheduleBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleBlocks.
     */
    data: XOR<ScheduleBlockUpdateManyMutationInput, ScheduleBlockUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleBlocks to update
     */
    where?: ScheduleBlockWhereInput
    /**
     * Limit how many ScheduleBlocks to update.
     */
    limit?: number
  }

  /**
   * ScheduleBlock upsert
   */
  export type ScheduleBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * The filter to search for the ScheduleBlock to update in case it exists.
     */
    where: ScheduleBlockWhereUniqueInput
    /**
     * In case the ScheduleBlock found by the `where` argument doesn't exist, create a new ScheduleBlock with this data.
     */
    create: XOR<ScheduleBlockCreateInput, ScheduleBlockUncheckedCreateInput>
    /**
     * In case the ScheduleBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleBlockUpdateInput, ScheduleBlockUncheckedUpdateInput>
  }

  /**
   * ScheduleBlock delete
   */
  export type ScheduleBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Filter which ScheduleBlock to delete.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock deleteMany
   */
  export type ScheduleBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleBlocks to delete
     */
    where?: ScheduleBlockWhereInput
    /**
     * Limit how many ScheduleBlocks to delete.
     */
    limit?: number
  }

  /**
   * ScheduleBlock without action
   */
  export type ScheduleBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
  }


  /**
   * Model RssFeed
   */

  export type AggregateRssFeed = {
    _count: RssFeedCountAggregateOutputType | null
    _min: RssFeedMinAggregateOutputType | null
    _max: RssFeedMaxAggregateOutputType | null
  }

  export type RssFeedMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    enabled: boolean | null
    createdAt: Date | null
  }

  export type RssFeedMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    enabled: boolean | null
    createdAt: Date | null
  }

  export type RssFeedCountAggregateOutputType = {
    id: number
    name: number
    url: number
    enabled: number
    createdAt: number
    _all: number
  }


  export type RssFeedMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    enabled?: true
    createdAt?: true
  }

  export type RssFeedMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    enabled?: true
    createdAt?: true
  }

  export type RssFeedCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    enabled?: true
    createdAt?: true
    _all?: true
  }

  export type RssFeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RssFeed to aggregate.
     */
    where?: RssFeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RssFeeds to fetch.
     */
    orderBy?: RssFeedOrderByWithRelationInput | RssFeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RssFeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RssFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RssFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RssFeeds
    **/
    _count?: true | RssFeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RssFeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RssFeedMaxAggregateInputType
  }

  export type GetRssFeedAggregateType<T extends RssFeedAggregateArgs> = {
        [P in keyof T & keyof AggregateRssFeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRssFeed[P]>
      : GetScalarType<T[P], AggregateRssFeed[P]>
  }




  export type RssFeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RssFeedWhereInput
    orderBy?: RssFeedOrderByWithAggregationInput | RssFeedOrderByWithAggregationInput[]
    by: RssFeedScalarFieldEnum[] | RssFeedScalarFieldEnum
    having?: RssFeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RssFeedCountAggregateInputType | true
    _min?: RssFeedMinAggregateInputType
    _max?: RssFeedMaxAggregateInputType
  }

  export type RssFeedGroupByOutputType = {
    id: string
    name: string
    url: string
    enabled: boolean
    createdAt: Date
    _count: RssFeedCountAggregateOutputType | null
    _min: RssFeedMinAggregateOutputType | null
    _max: RssFeedMaxAggregateOutputType | null
  }

  type GetRssFeedGroupByPayload<T extends RssFeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RssFeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RssFeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RssFeedGroupByOutputType[P]>
            : GetScalarType<T[P], RssFeedGroupByOutputType[P]>
        }
      >
    >


  export type RssFeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    enabled?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rssFeed"]>

  export type RssFeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    enabled?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rssFeed"]>

  export type RssFeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    enabled?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rssFeed"]>

  export type RssFeedSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    enabled?: boolean
    createdAt?: boolean
  }

  export type RssFeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "enabled" | "createdAt", ExtArgs["result"]["rssFeed"]>

  export type $RssFeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RssFeed"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      enabled: boolean
      createdAt: Date
    }, ExtArgs["result"]["rssFeed"]>
    composites: {}
  }

  type RssFeedGetPayload<S extends boolean | null | undefined | RssFeedDefaultArgs> = $Result.GetResult<Prisma.$RssFeedPayload, S>

  type RssFeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RssFeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RssFeedCountAggregateInputType | true
    }

  export interface RssFeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RssFeed'], meta: { name: 'RssFeed' } }
    /**
     * Find zero or one RssFeed that matches the filter.
     * @param {RssFeedFindUniqueArgs} args - Arguments to find a RssFeed
     * @example
     * // Get one RssFeed
     * const rssFeed = await prisma.rssFeed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RssFeedFindUniqueArgs>(args: SelectSubset<T, RssFeedFindUniqueArgs<ExtArgs>>): Prisma__RssFeedClient<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RssFeed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RssFeedFindUniqueOrThrowArgs} args - Arguments to find a RssFeed
     * @example
     * // Get one RssFeed
     * const rssFeed = await prisma.rssFeed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RssFeedFindUniqueOrThrowArgs>(args: SelectSubset<T, RssFeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RssFeedClient<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RssFeed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssFeedFindFirstArgs} args - Arguments to find a RssFeed
     * @example
     * // Get one RssFeed
     * const rssFeed = await prisma.rssFeed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RssFeedFindFirstArgs>(args?: SelectSubset<T, RssFeedFindFirstArgs<ExtArgs>>): Prisma__RssFeedClient<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RssFeed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssFeedFindFirstOrThrowArgs} args - Arguments to find a RssFeed
     * @example
     * // Get one RssFeed
     * const rssFeed = await prisma.rssFeed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RssFeedFindFirstOrThrowArgs>(args?: SelectSubset<T, RssFeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__RssFeedClient<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RssFeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssFeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RssFeeds
     * const rssFeeds = await prisma.rssFeed.findMany()
     * 
     * // Get first 10 RssFeeds
     * const rssFeeds = await prisma.rssFeed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rssFeedWithIdOnly = await prisma.rssFeed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RssFeedFindManyArgs>(args?: SelectSubset<T, RssFeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RssFeed.
     * @param {RssFeedCreateArgs} args - Arguments to create a RssFeed.
     * @example
     * // Create one RssFeed
     * const RssFeed = await prisma.rssFeed.create({
     *   data: {
     *     // ... data to create a RssFeed
     *   }
     * })
     * 
     */
    create<T extends RssFeedCreateArgs>(args: SelectSubset<T, RssFeedCreateArgs<ExtArgs>>): Prisma__RssFeedClient<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RssFeeds.
     * @param {RssFeedCreateManyArgs} args - Arguments to create many RssFeeds.
     * @example
     * // Create many RssFeeds
     * const rssFeed = await prisma.rssFeed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RssFeedCreateManyArgs>(args?: SelectSubset<T, RssFeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RssFeeds and returns the data saved in the database.
     * @param {RssFeedCreateManyAndReturnArgs} args - Arguments to create many RssFeeds.
     * @example
     * // Create many RssFeeds
     * const rssFeed = await prisma.rssFeed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RssFeeds and only return the `id`
     * const rssFeedWithIdOnly = await prisma.rssFeed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RssFeedCreateManyAndReturnArgs>(args?: SelectSubset<T, RssFeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RssFeed.
     * @param {RssFeedDeleteArgs} args - Arguments to delete one RssFeed.
     * @example
     * // Delete one RssFeed
     * const RssFeed = await prisma.rssFeed.delete({
     *   where: {
     *     // ... filter to delete one RssFeed
     *   }
     * })
     * 
     */
    delete<T extends RssFeedDeleteArgs>(args: SelectSubset<T, RssFeedDeleteArgs<ExtArgs>>): Prisma__RssFeedClient<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RssFeed.
     * @param {RssFeedUpdateArgs} args - Arguments to update one RssFeed.
     * @example
     * // Update one RssFeed
     * const rssFeed = await prisma.rssFeed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RssFeedUpdateArgs>(args: SelectSubset<T, RssFeedUpdateArgs<ExtArgs>>): Prisma__RssFeedClient<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RssFeeds.
     * @param {RssFeedDeleteManyArgs} args - Arguments to filter RssFeeds to delete.
     * @example
     * // Delete a few RssFeeds
     * const { count } = await prisma.rssFeed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RssFeedDeleteManyArgs>(args?: SelectSubset<T, RssFeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RssFeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssFeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RssFeeds
     * const rssFeed = await prisma.rssFeed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RssFeedUpdateManyArgs>(args: SelectSubset<T, RssFeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RssFeeds and returns the data updated in the database.
     * @param {RssFeedUpdateManyAndReturnArgs} args - Arguments to update many RssFeeds.
     * @example
     * // Update many RssFeeds
     * const rssFeed = await prisma.rssFeed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RssFeeds and only return the `id`
     * const rssFeedWithIdOnly = await prisma.rssFeed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RssFeedUpdateManyAndReturnArgs>(args: SelectSubset<T, RssFeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RssFeed.
     * @param {RssFeedUpsertArgs} args - Arguments to update or create a RssFeed.
     * @example
     * // Update or create a RssFeed
     * const rssFeed = await prisma.rssFeed.upsert({
     *   create: {
     *     // ... data to create a RssFeed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RssFeed we want to update
     *   }
     * })
     */
    upsert<T extends RssFeedUpsertArgs>(args: SelectSubset<T, RssFeedUpsertArgs<ExtArgs>>): Prisma__RssFeedClient<$Result.GetResult<Prisma.$RssFeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RssFeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssFeedCountArgs} args - Arguments to filter RssFeeds to count.
     * @example
     * // Count the number of RssFeeds
     * const count = await prisma.rssFeed.count({
     *   where: {
     *     // ... the filter for the RssFeeds we want to count
     *   }
     * })
    **/
    count<T extends RssFeedCountArgs>(
      args?: Subset<T, RssFeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RssFeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RssFeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssFeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RssFeedAggregateArgs>(args: Subset<T, RssFeedAggregateArgs>): Prisma.PrismaPromise<GetRssFeedAggregateType<T>>

    /**
     * Group by RssFeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssFeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RssFeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RssFeedGroupByArgs['orderBy'] }
        : { orderBy?: RssFeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RssFeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRssFeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RssFeed model
   */
  readonly fields: RssFeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RssFeed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RssFeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RssFeed model
   */
  interface RssFeedFieldRefs {
    readonly id: FieldRef<"RssFeed", 'String'>
    readonly name: FieldRef<"RssFeed", 'String'>
    readonly url: FieldRef<"RssFeed", 'String'>
    readonly enabled: FieldRef<"RssFeed", 'Boolean'>
    readonly createdAt: FieldRef<"RssFeed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RssFeed findUnique
   */
  export type RssFeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * Filter, which RssFeed to fetch.
     */
    where: RssFeedWhereUniqueInput
  }

  /**
   * RssFeed findUniqueOrThrow
   */
  export type RssFeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * Filter, which RssFeed to fetch.
     */
    where: RssFeedWhereUniqueInput
  }

  /**
   * RssFeed findFirst
   */
  export type RssFeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * Filter, which RssFeed to fetch.
     */
    where?: RssFeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RssFeeds to fetch.
     */
    orderBy?: RssFeedOrderByWithRelationInput | RssFeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RssFeeds.
     */
    cursor?: RssFeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RssFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RssFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RssFeeds.
     */
    distinct?: RssFeedScalarFieldEnum | RssFeedScalarFieldEnum[]
  }

  /**
   * RssFeed findFirstOrThrow
   */
  export type RssFeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * Filter, which RssFeed to fetch.
     */
    where?: RssFeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RssFeeds to fetch.
     */
    orderBy?: RssFeedOrderByWithRelationInput | RssFeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RssFeeds.
     */
    cursor?: RssFeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RssFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RssFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RssFeeds.
     */
    distinct?: RssFeedScalarFieldEnum | RssFeedScalarFieldEnum[]
  }

  /**
   * RssFeed findMany
   */
  export type RssFeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * Filter, which RssFeeds to fetch.
     */
    where?: RssFeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RssFeeds to fetch.
     */
    orderBy?: RssFeedOrderByWithRelationInput | RssFeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RssFeeds.
     */
    cursor?: RssFeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RssFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RssFeeds.
     */
    skip?: number
    distinct?: RssFeedScalarFieldEnum | RssFeedScalarFieldEnum[]
  }

  /**
   * RssFeed create
   */
  export type RssFeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * The data needed to create a RssFeed.
     */
    data: XOR<RssFeedCreateInput, RssFeedUncheckedCreateInput>
  }

  /**
   * RssFeed createMany
   */
  export type RssFeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RssFeeds.
     */
    data: RssFeedCreateManyInput | RssFeedCreateManyInput[]
  }

  /**
   * RssFeed createManyAndReturn
   */
  export type RssFeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * The data used to create many RssFeeds.
     */
    data: RssFeedCreateManyInput | RssFeedCreateManyInput[]
  }

  /**
   * RssFeed update
   */
  export type RssFeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * The data needed to update a RssFeed.
     */
    data: XOR<RssFeedUpdateInput, RssFeedUncheckedUpdateInput>
    /**
     * Choose, which RssFeed to update.
     */
    where: RssFeedWhereUniqueInput
  }

  /**
   * RssFeed updateMany
   */
  export type RssFeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RssFeeds.
     */
    data: XOR<RssFeedUpdateManyMutationInput, RssFeedUncheckedUpdateManyInput>
    /**
     * Filter which RssFeeds to update
     */
    where?: RssFeedWhereInput
    /**
     * Limit how many RssFeeds to update.
     */
    limit?: number
  }

  /**
   * RssFeed updateManyAndReturn
   */
  export type RssFeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * The data used to update RssFeeds.
     */
    data: XOR<RssFeedUpdateManyMutationInput, RssFeedUncheckedUpdateManyInput>
    /**
     * Filter which RssFeeds to update
     */
    where?: RssFeedWhereInput
    /**
     * Limit how many RssFeeds to update.
     */
    limit?: number
  }

  /**
   * RssFeed upsert
   */
  export type RssFeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * The filter to search for the RssFeed to update in case it exists.
     */
    where: RssFeedWhereUniqueInput
    /**
     * In case the RssFeed found by the `where` argument doesn't exist, create a new RssFeed with this data.
     */
    create: XOR<RssFeedCreateInput, RssFeedUncheckedCreateInput>
    /**
     * In case the RssFeed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RssFeedUpdateInput, RssFeedUncheckedUpdateInput>
  }

  /**
   * RssFeed delete
   */
  export type RssFeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
    /**
     * Filter which RssFeed to delete.
     */
    where: RssFeedWhereUniqueInput
  }

  /**
   * RssFeed deleteMany
   */
  export type RssFeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RssFeeds to delete
     */
    where?: RssFeedWhereInput
    /**
     * Limit how many RssFeeds to delete.
     */
    limit?: number
  }

  /**
   * RssFeed without action
   */
  export type RssFeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RssFeed
     */
    select?: RssFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RssFeed
     */
    omit?: RssFeedOmit<ExtArgs> | null
  }


  /**
   * Model MediaRhythm
   */

  export type AggregateMediaRhythm = {
    _count: MediaRhythmCountAggregateOutputType | null
    _min: MediaRhythmMinAggregateOutputType | null
    _max: MediaRhythmMaxAggregateOutputType | null
  }

  export type MediaRhythmMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    time: string | null
    days: string | null
  }

  export type MediaRhythmMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    time: string | null
    days: string | null
  }

  export type MediaRhythmCountAggregateOutputType = {
    id: number
    title: number
    description: number
    time: number
    days: number
    _all: number
  }


  export type MediaRhythmMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    time?: true
    days?: true
  }

  export type MediaRhythmMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    time?: true
    days?: true
  }

  export type MediaRhythmCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    time?: true
    days?: true
    _all?: true
  }

  export type MediaRhythmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaRhythm to aggregate.
     */
    where?: MediaRhythmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRhythms to fetch.
     */
    orderBy?: MediaRhythmOrderByWithRelationInput | MediaRhythmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaRhythmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRhythms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRhythms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaRhythms
    **/
    _count?: true | MediaRhythmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaRhythmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaRhythmMaxAggregateInputType
  }

  export type GetMediaRhythmAggregateType<T extends MediaRhythmAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaRhythm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaRhythm[P]>
      : GetScalarType<T[P], AggregateMediaRhythm[P]>
  }




  export type MediaRhythmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaRhythmWhereInput
    orderBy?: MediaRhythmOrderByWithAggregationInput | MediaRhythmOrderByWithAggregationInput[]
    by: MediaRhythmScalarFieldEnum[] | MediaRhythmScalarFieldEnum
    having?: MediaRhythmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaRhythmCountAggregateInputType | true
    _min?: MediaRhythmMinAggregateInputType
    _max?: MediaRhythmMaxAggregateInputType
  }

  export type MediaRhythmGroupByOutputType = {
    id: string
    title: string
    description: string | null
    time: string | null
    days: string
    _count: MediaRhythmCountAggregateOutputType | null
    _min: MediaRhythmMinAggregateOutputType | null
    _max: MediaRhythmMaxAggregateOutputType | null
  }

  type GetMediaRhythmGroupByPayload<T extends MediaRhythmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaRhythmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaRhythmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaRhythmGroupByOutputType[P]>
            : GetScalarType<T[P], MediaRhythmGroupByOutputType[P]>
        }
      >
    >


  export type MediaRhythmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    time?: boolean
    days?: boolean
  }, ExtArgs["result"]["mediaRhythm"]>

  export type MediaRhythmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    time?: boolean
    days?: boolean
  }, ExtArgs["result"]["mediaRhythm"]>

  export type MediaRhythmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    time?: boolean
    days?: boolean
  }, ExtArgs["result"]["mediaRhythm"]>

  export type MediaRhythmSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    time?: boolean
    days?: boolean
  }

  export type MediaRhythmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "time" | "days", ExtArgs["result"]["mediaRhythm"]>

  export type $MediaRhythmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaRhythm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      time: string | null
      days: string
    }, ExtArgs["result"]["mediaRhythm"]>
    composites: {}
  }

  type MediaRhythmGetPayload<S extends boolean | null | undefined | MediaRhythmDefaultArgs> = $Result.GetResult<Prisma.$MediaRhythmPayload, S>

  type MediaRhythmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaRhythmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaRhythmCountAggregateInputType | true
    }

  export interface MediaRhythmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaRhythm'], meta: { name: 'MediaRhythm' } }
    /**
     * Find zero or one MediaRhythm that matches the filter.
     * @param {MediaRhythmFindUniqueArgs} args - Arguments to find a MediaRhythm
     * @example
     * // Get one MediaRhythm
     * const mediaRhythm = await prisma.mediaRhythm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaRhythmFindUniqueArgs>(args: SelectSubset<T, MediaRhythmFindUniqueArgs<ExtArgs>>): Prisma__MediaRhythmClient<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaRhythm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaRhythmFindUniqueOrThrowArgs} args - Arguments to find a MediaRhythm
     * @example
     * // Get one MediaRhythm
     * const mediaRhythm = await prisma.mediaRhythm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaRhythmFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaRhythmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaRhythmClient<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaRhythm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRhythmFindFirstArgs} args - Arguments to find a MediaRhythm
     * @example
     * // Get one MediaRhythm
     * const mediaRhythm = await prisma.mediaRhythm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaRhythmFindFirstArgs>(args?: SelectSubset<T, MediaRhythmFindFirstArgs<ExtArgs>>): Prisma__MediaRhythmClient<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaRhythm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRhythmFindFirstOrThrowArgs} args - Arguments to find a MediaRhythm
     * @example
     * // Get one MediaRhythm
     * const mediaRhythm = await prisma.mediaRhythm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaRhythmFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaRhythmFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaRhythmClient<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaRhythms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRhythmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaRhythms
     * const mediaRhythms = await prisma.mediaRhythm.findMany()
     * 
     * // Get first 10 MediaRhythms
     * const mediaRhythms = await prisma.mediaRhythm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaRhythmWithIdOnly = await prisma.mediaRhythm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaRhythmFindManyArgs>(args?: SelectSubset<T, MediaRhythmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaRhythm.
     * @param {MediaRhythmCreateArgs} args - Arguments to create a MediaRhythm.
     * @example
     * // Create one MediaRhythm
     * const MediaRhythm = await prisma.mediaRhythm.create({
     *   data: {
     *     // ... data to create a MediaRhythm
     *   }
     * })
     * 
     */
    create<T extends MediaRhythmCreateArgs>(args: SelectSubset<T, MediaRhythmCreateArgs<ExtArgs>>): Prisma__MediaRhythmClient<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaRhythms.
     * @param {MediaRhythmCreateManyArgs} args - Arguments to create many MediaRhythms.
     * @example
     * // Create many MediaRhythms
     * const mediaRhythm = await prisma.mediaRhythm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaRhythmCreateManyArgs>(args?: SelectSubset<T, MediaRhythmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaRhythms and returns the data saved in the database.
     * @param {MediaRhythmCreateManyAndReturnArgs} args - Arguments to create many MediaRhythms.
     * @example
     * // Create many MediaRhythms
     * const mediaRhythm = await prisma.mediaRhythm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaRhythms and only return the `id`
     * const mediaRhythmWithIdOnly = await prisma.mediaRhythm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaRhythmCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaRhythmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaRhythm.
     * @param {MediaRhythmDeleteArgs} args - Arguments to delete one MediaRhythm.
     * @example
     * // Delete one MediaRhythm
     * const MediaRhythm = await prisma.mediaRhythm.delete({
     *   where: {
     *     // ... filter to delete one MediaRhythm
     *   }
     * })
     * 
     */
    delete<T extends MediaRhythmDeleteArgs>(args: SelectSubset<T, MediaRhythmDeleteArgs<ExtArgs>>): Prisma__MediaRhythmClient<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaRhythm.
     * @param {MediaRhythmUpdateArgs} args - Arguments to update one MediaRhythm.
     * @example
     * // Update one MediaRhythm
     * const mediaRhythm = await prisma.mediaRhythm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaRhythmUpdateArgs>(args: SelectSubset<T, MediaRhythmUpdateArgs<ExtArgs>>): Prisma__MediaRhythmClient<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaRhythms.
     * @param {MediaRhythmDeleteManyArgs} args - Arguments to filter MediaRhythms to delete.
     * @example
     * // Delete a few MediaRhythms
     * const { count } = await prisma.mediaRhythm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaRhythmDeleteManyArgs>(args?: SelectSubset<T, MediaRhythmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaRhythms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRhythmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaRhythms
     * const mediaRhythm = await prisma.mediaRhythm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaRhythmUpdateManyArgs>(args: SelectSubset<T, MediaRhythmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaRhythms and returns the data updated in the database.
     * @param {MediaRhythmUpdateManyAndReturnArgs} args - Arguments to update many MediaRhythms.
     * @example
     * // Update many MediaRhythms
     * const mediaRhythm = await prisma.mediaRhythm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaRhythms and only return the `id`
     * const mediaRhythmWithIdOnly = await prisma.mediaRhythm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaRhythmUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaRhythmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaRhythm.
     * @param {MediaRhythmUpsertArgs} args - Arguments to update or create a MediaRhythm.
     * @example
     * // Update or create a MediaRhythm
     * const mediaRhythm = await prisma.mediaRhythm.upsert({
     *   create: {
     *     // ... data to create a MediaRhythm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaRhythm we want to update
     *   }
     * })
     */
    upsert<T extends MediaRhythmUpsertArgs>(args: SelectSubset<T, MediaRhythmUpsertArgs<ExtArgs>>): Prisma__MediaRhythmClient<$Result.GetResult<Prisma.$MediaRhythmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaRhythms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRhythmCountArgs} args - Arguments to filter MediaRhythms to count.
     * @example
     * // Count the number of MediaRhythms
     * const count = await prisma.mediaRhythm.count({
     *   where: {
     *     // ... the filter for the MediaRhythms we want to count
     *   }
     * })
    **/
    count<T extends MediaRhythmCountArgs>(
      args?: Subset<T, MediaRhythmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaRhythmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaRhythm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRhythmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaRhythmAggregateArgs>(args: Subset<T, MediaRhythmAggregateArgs>): Prisma.PrismaPromise<GetMediaRhythmAggregateType<T>>

    /**
     * Group by MediaRhythm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRhythmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaRhythmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaRhythmGroupByArgs['orderBy'] }
        : { orderBy?: MediaRhythmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaRhythmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaRhythmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaRhythm model
   */
  readonly fields: MediaRhythmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaRhythm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaRhythmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaRhythm model
   */
  interface MediaRhythmFieldRefs {
    readonly id: FieldRef<"MediaRhythm", 'String'>
    readonly title: FieldRef<"MediaRhythm", 'String'>
    readonly description: FieldRef<"MediaRhythm", 'String'>
    readonly time: FieldRef<"MediaRhythm", 'String'>
    readonly days: FieldRef<"MediaRhythm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaRhythm findUnique
   */
  export type MediaRhythmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * Filter, which MediaRhythm to fetch.
     */
    where: MediaRhythmWhereUniqueInput
  }

  /**
   * MediaRhythm findUniqueOrThrow
   */
  export type MediaRhythmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * Filter, which MediaRhythm to fetch.
     */
    where: MediaRhythmWhereUniqueInput
  }

  /**
   * MediaRhythm findFirst
   */
  export type MediaRhythmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * Filter, which MediaRhythm to fetch.
     */
    where?: MediaRhythmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRhythms to fetch.
     */
    orderBy?: MediaRhythmOrderByWithRelationInput | MediaRhythmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaRhythms.
     */
    cursor?: MediaRhythmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRhythms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRhythms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaRhythms.
     */
    distinct?: MediaRhythmScalarFieldEnum | MediaRhythmScalarFieldEnum[]
  }

  /**
   * MediaRhythm findFirstOrThrow
   */
  export type MediaRhythmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * Filter, which MediaRhythm to fetch.
     */
    where?: MediaRhythmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRhythms to fetch.
     */
    orderBy?: MediaRhythmOrderByWithRelationInput | MediaRhythmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaRhythms.
     */
    cursor?: MediaRhythmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRhythms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRhythms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaRhythms.
     */
    distinct?: MediaRhythmScalarFieldEnum | MediaRhythmScalarFieldEnum[]
  }

  /**
   * MediaRhythm findMany
   */
  export type MediaRhythmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * Filter, which MediaRhythms to fetch.
     */
    where?: MediaRhythmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRhythms to fetch.
     */
    orderBy?: MediaRhythmOrderByWithRelationInput | MediaRhythmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaRhythms.
     */
    cursor?: MediaRhythmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRhythms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRhythms.
     */
    skip?: number
    distinct?: MediaRhythmScalarFieldEnum | MediaRhythmScalarFieldEnum[]
  }

  /**
   * MediaRhythm create
   */
  export type MediaRhythmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * The data needed to create a MediaRhythm.
     */
    data: XOR<MediaRhythmCreateInput, MediaRhythmUncheckedCreateInput>
  }

  /**
   * MediaRhythm createMany
   */
  export type MediaRhythmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaRhythms.
     */
    data: MediaRhythmCreateManyInput | MediaRhythmCreateManyInput[]
  }

  /**
   * MediaRhythm createManyAndReturn
   */
  export type MediaRhythmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * The data used to create many MediaRhythms.
     */
    data: MediaRhythmCreateManyInput | MediaRhythmCreateManyInput[]
  }

  /**
   * MediaRhythm update
   */
  export type MediaRhythmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * The data needed to update a MediaRhythm.
     */
    data: XOR<MediaRhythmUpdateInput, MediaRhythmUncheckedUpdateInput>
    /**
     * Choose, which MediaRhythm to update.
     */
    where: MediaRhythmWhereUniqueInput
  }

  /**
   * MediaRhythm updateMany
   */
  export type MediaRhythmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaRhythms.
     */
    data: XOR<MediaRhythmUpdateManyMutationInput, MediaRhythmUncheckedUpdateManyInput>
    /**
     * Filter which MediaRhythms to update
     */
    where?: MediaRhythmWhereInput
    /**
     * Limit how many MediaRhythms to update.
     */
    limit?: number
  }

  /**
   * MediaRhythm updateManyAndReturn
   */
  export type MediaRhythmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * The data used to update MediaRhythms.
     */
    data: XOR<MediaRhythmUpdateManyMutationInput, MediaRhythmUncheckedUpdateManyInput>
    /**
     * Filter which MediaRhythms to update
     */
    where?: MediaRhythmWhereInput
    /**
     * Limit how many MediaRhythms to update.
     */
    limit?: number
  }

  /**
   * MediaRhythm upsert
   */
  export type MediaRhythmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * The filter to search for the MediaRhythm to update in case it exists.
     */
    where: MediaRhythmWhereUniqueInput
    /**
     * In case the MediaRhythm found by the `where` argument doesn't exist, create a new MediaRhythm with this data.
     */
    create: XOR<MediaRhythmCreateInput, MediaRhythmUncheckedCreateInput>
    /**
     * In case the MediaRhythm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaRhythmUpdateInput, MediaRhythmUncheckedUpdateInput>
  }

  /**
   * MediaRhythm delete
   */
  export type MediaRhythmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
    /**
     * Filter which MediaRhythm to delete.
     */
    where: MediaRhythmWhereUniqueInput
  }

  /**
   * MediaRhythm deleteMany
   */
  export type MediaRhythmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaRhythms to delete
     */
    where?: MediaRhythmWhereInput
    /**
     * Limit how many MediaRhythms to delete.
     */
    limit?: number
  }

  /**
   * MediaRhythm without action
   */
  export type MediaRhythmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRhythm
     */
    select?: MediaRhythmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRhythm
     */
    omit?: MediaRhythmOmit<ExtArgs> | null
  }


  /**
   * Model DnsQuery
   */

  export type AggregateDnsQuery = {
    _count: DnsQueryCountAggregateOutputType | null
    _min: DnsQueryMinAggregateOutputType | null
    _max: DnsQueryMaxAggregateOutputType | null
  }

  export type DnsQueryMinAggregateOutputType = {
    id: string | null
    domain: string | null
    blocked: boolean | null
    timestamp: Date | null
  }

  export type DnsQueryMaxAggregateOutputType = {
    id: string | null
    domain: string | null
    blocked: boolean | null
    timestamp: Date | null
  }

  export type DnsQueryCountAggregateOutputType = {
    id: number
    domain: number
    blocked: number
    timestamp: number
    _all: number
  }


  export type DnsQueryMinAggregateInputType = {
    id?: true
    domain?: true
    blocked?: true
    timestamp?: true
  }

  export type DnsQueryMaxAggregateInputType = {
    id?: true
    domain?: true
    blocked?: true
    timestamp?: true
  }

  export type DnsQueryCountAggregateInputType = {
    id?: true
    domain?: true
    blocked?: true
    timestamp?: true
    _all?: true
  }

  export type DnsQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DnsQuery to aggregate.
     */
    where?: DnsQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsQueries to fetch.
     */
    orderBy?: DnsQueryOrderByWithRelationInput | DnsQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DnsQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DnsQueries
    **/
    _count?: true | DnsQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DnsQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DnsQueryMaxAggregateInputType
  }

  export type GetDnsQueryAggregateType<T extends DnsQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateDnsQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDnsQuery[P]>
      : GetScalarType<T[P], AggregateDnsQuery[P]>
  }




  export type DnsQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DnsQueryWhereInput
    orderBy?: DnsQueryOrderByWithAggregationInput | DnsQueryOrderByWithAggregationInput[]
    by: DnsQueryScalarFieldEnum[] | DnsQueryScalarFieldEnum
    having?: DnsQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DnsQueryCountAggregateInputType | true
    _min?: DnsQueryMinAggregateInputType
    _max?: DnsQueryMaxAggregateInputType
  }

  export type DnsQueryGroupByOutputType = {
    id: string
    domain: string
    blocked: boolean
    timestamp: Date
    _count: DnsQueryCountAggregateOutputType | null
    _min: DnsQueryMinAggregateOutputType | null
    _max: DnsQueryMaxAggregateOutputType | null
  }

  type GetDnsQueryGroupByPayload<T extends DnsQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DnsQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DnsQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DnsQueryGroupByOutputType[P]>
            : GetScalarType<T[P], DnsQueryGroupByOutputType[P]>
        }
      >
    >


  export type DnsQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    blocked?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["dnsQuery"]>

  export type DnsQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    blocked?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["dnsQuery"]>

  export type DnsQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    blocked?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["dnsQuery"]>

  export type DnsQuerySelectScalar = {
    id?: boolean
    domain?: boolean
    blocked?: boolean
    timestamp?: boolean
  }

  export type DnsQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domain" | "blocked" | "timestamp", ExtArgs["result"]["dnsQuery"]>

  export type $DnsQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DnsQuery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domain: string
      blocked: boolean
      timestamp: Date
    }, ExtArgs["result"]["dnsQuery"]>
    composites: {}
  }

  type DnsQueryGetPayload<S extends boolean | null | undefined | DnsQueryDefaultArgs> = $Result.GetResult<Prisma.$DnsQueryPayload, S>

  type DnsQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DnsQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DnsQueryCountAggregateInputType | true
    }

  export interface DnsQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DnsQuery'], meta: { name: 'DnsQuery' } }
    /**
     * Find zero or one DnsQuery that matches the filter.
     * @param {DnsQueryFindUniqueArgs} args - Arguments to find a DnsQuery
     * @example
     * // Get one DnsQuery
     * const dnsQuery = await prisma.dnsQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DnsQueryFindUniqueArgs>(args: SelectSubset<T, DnsQueryFindUniqueArgs<ExtArgs>>): Prisma__DnsQueryClient<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DnsQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DnsQueryFindUniqueOrThrowArgs} args - Arguments to find a DnsQuery
     * @example
     * // Get one DnsQuery
     * const dnsQuery = await prisma.dnsQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DnsQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, DnsQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DnsQueryClient<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DnsQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsQueryFindFirstArgs} args - Arguments to find a DnsQuery
     * @example
     * // Get one DnsQuery
     * const dnsQuery = await prisma.dnsQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DnsQueryFindFirstArgs>(args?: SelectSubset<T, DnsQueryFindFirstArgs<ExtArgs>>): Prisma__DnsQueryClient<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DnsQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsQueryFindFirstOrThrowArgs} args - Arguments to find a DnsQuery
     * @example
     * // Get one DnsQuery
     * const dnsQuery = await prisma.dnsQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DnsQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, DnsQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DnsQueryClient<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DnsQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DnsQueries
     * const dnsQueries = await prisma.dnsQuery.findMany()
     * 
     * // Get first 10 DnsQueries
     * const dnsQueries = await prisma.dnsQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dnsQueryWithIdOnly = await prisma.dnsQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DnsQueryFindManyArgs>(args?: SelectSubset<T, DnsQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DnsQuery.
     * @param {DnsQueryCreateArgs} args - Arguments to create a DnsQuery.
     * @example
     * // Create one DnsQuery
     * const DnsQuery = await prisma.dnsQuery.create({
     *   data: {
     *     // ... data to create a DnsQuery
     *   }
     * })
     * 
     */
    create<T extends DnsQueryCreateArgs>(args: SelectSubset<T, DnsQueryCreateArgs<ExtArgs>>): Prisma__DnsQueryClient<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DnsQueries.
     * @param {DnsQueryCreateManyArgs} args - Arguments to create many DnsQueries.
     * @example
     * // Create many DnsQueries
     * const dnsQuery = await prisma.dnsQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DnsQueryCreateManyArgs>(args?: SelectSubset<T, DnsQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DnsQueries and returns the data saved in the database.
     * @param {DnsQueryCreateManyAndReturnArgs} args - Arguments to create many DnsQueries.
     * @example
     * // Create many DnsQueries
     * const dnsQuery = await prisma.dnsQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DnsQueries and only return the `id`
     * const dnsQueryWithIdOnly = await prisma.dnsQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DnsQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, DnsQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DnsQuery.
     * @param {DnsQueryDeleteArgs} args - Arguments to delete one DnsQuery.
     * @example
     * // Delete one DnsQuery
     * const DnsQuery = await prisma.dnsQuery.delete({
     *   where: {
     *     // ... filter to delete one DnsQuery
     *   }
     * })
     * 
     */
    delete<T extends DnsQueryDeleteArgs>(args: SelectSubset<T, DnsQueryDeleteArgs<ExtArgs>>): Prisma__DnsQueryClient<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DnsQuery.
     * @param {DnsQueryUpdateArgs} args - Arguments to update one DnsQuery.
     * @example
     * // Update one DnsQuery
     * const dnsQuery = await prisma.dnsQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DnsQueryUpdateArgs>(args: SelectSubset<T, DnsQueryUpdateArgs<ExtArgs>>): Prisma__DnsQueryClient<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DnsQueries.
     * @param {DnsQueryDeleteManyArgs} args - Arguments to filter DnsQueries to delete.
     * @example
     * // Delete a few DnsQueries
     * const { count } = await prisma.dnsQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DnsQueryDeleteManyArgs>(args?: SelectSubset<T, DnsQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DnsQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DnsQueries
     * const dnsQuery = await prisma.dnsQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DnsQueryUpdateManyArgs>(args: SelectSubset<T, DnsQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DnsQueries and returns the data updated in the database.
     * @param {DnsQueryUpdateManyAndReturnArgs} args - Arguments to update many DnsQueries.
     * @example
     * // Update many DnsQueries
     * const dnsQuery = await prisma.dnsQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DnsQueries and only return the `id`
     * const dnsQueryWithIdOnly = await prisma.dnsQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DnsQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, DnsQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DnsQuery.
     * @param {DnsQueryUpsertArgs} args - Arguments to update or create a DnsQuery.
     * @example
     * // Update or create a DnsQuery
     * const dnsQuery = await prisma.dnsQuery.upsert({
     *   create: {
     *     // ... data to create a DnsQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DnsQuery we want to update
     *   }
     * })
     */
    upsert<T extends DnsQueryUpsertArgs>(args: SelectSubset<T, DnsQueryUpsertArgs<ExtArgs>>): Prisma__DnsQueryClient<$Result.GetResult<Prisma.$DnsQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DnsQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsQueryCountArgs} args - Arguments to filter DnsQueries to count.
     * @example
     * // Count the number of DnsQueries
     * const count = await prisma.dnsQuery.count({
     *   where: {
     *     // ... the filter for the DnsQueries we want to count
     *   }
     * })
    **/
    count<T extends DnsQueryCountArgs>(
      args?: Subset<T, DnsQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DnsQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DnsQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DnsQueryAggregateArgs>(args: Subset<T, DnsQueryAggregateArgs>): Prisma.PrismaPromise<GetDnsQueryAggregateType<T>>

    /**
     * Group by DnsQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsQueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DnsQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DnsQueryGroupByArgs['orderBy'] }
        : { orderBy?: DnsQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DnsQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDnsQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DnsQuery model
   */
  readonly fields: DnsQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DnsQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DnsQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DnsQuery model
   */
  interface DnsQueryFieldRefs {
    readonly id: FieldRef<"DnsQuery", 'String'>
    readonly domain: FieldRef<"DnsQuery", 'String'>
    readonly blocked: FieldRef<"DnsQuery", 'Boolean'>
    readonly timestamp: FieldRef<"DnsQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DnsQuery findUnique
   */
  export type DnsQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * Filter, which DnsQuery to fetch.
     */
    where: DnsQueryWhereUniqueInput
  }

  /**
   * DnsQuery findUniqueOrThrow
   */
  export type DnsQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * Filter, which DnsQuery to fetch.
     */
    where: DnsQueryWhereUniqueInput
  }

  /**
   * DnsQuery findFirst
   */
  export type DnsQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * Filter, which DnsQuery to fetch.
     */
    where?: DnsQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsQueries to fetch.
     */
    orderBy?: DnsQueryOrderByWithRelationInput | DnsQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DnsQueries.
     */
    cursor?: DnsQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DnsQueries.
     */
    distinct?: DnsQueryScalarFieldEnum | DnsQueryScalarFieldEnum[]
  }

  /**
   * DnsQuery findFirstOrThrow
   */
  export type DnsQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * Filter, which DnsQuery to fetch.
     */
    where?: DnsQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsQueries to fetch.
     */
    orderBy?: DnsQueryOrderByWithRelationInput | DnsQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DnsQueries.
     */
    cursor?: DnsQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DnsQueries.
     */
    distinct?: DnsQueryScalarFieldEnum | DnsQueryScalarFieldEnum[]
  }

  /**
   * DnsQuery findMany
   */
  export type DnsQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * Filter, which DnsQueries to fetch.
     */
    where?: DnsQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsQueries to fetch.
     */
    orderBy?: DnsQueryOrderByWithRelationInput | DnsQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DnsQueries.
     */
    cursor?: DnsQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsQueries.
     */
    skip?: number
    distinct?: DnsQueryScalarFieldEnum | DnsQueryScalarFieldEnum[]
  }

  /**
   * DnsQuery create
   */
  export type DnsQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * The data needed to create a DnsQuery.
     */
    data: XOR<DnsQueryCreateInput, DnsQueryUncheckedCreateInput>
  }

  /**
   * DnsQuery createMany
   */
  export type DnsQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DnsQueries.
     */
    data: DnsQueryCreateManyInput | DnsQueryCreateManyInput[]
  }

  /**
   * DnsQuery createManyAndReturn
   */
  export type DnsQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * The data used to create many DnsQueries.
     */
    data: DnsQueryCreateManyInput | DnsQueryCreateManyInput[]
  }

  /**
   * DnsQuery update
   */
  export type DnsQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * The data needed to update a DnsQuery.
     */
    data: XOR<DnsQueryUpdateInput, DnsQueryUncheckedUpdateInput>
    /**
     * Choose, which DnsQuery to update.
     */
    where: DnsQueryWhereUniqueInput
  }

  /**
   * DnsQuery updateMany
   */
  export type DnsQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DnsQueries.
     */
    data: XOR<DnsQueryUpdateManyMutationInput, DnsQueryUncheckedUpdateManyInput>
    /**
     * Filter which DnsQueries to update
     */
    where?: DnsQueryWhereInput
    /**
     * Limit how many DnsQueries to update.
     */
    limit?: number
  }

  /**
   * DnsQuery updateManyAndReturn
   */
  export type DnsQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * The data used to update DnsQueries.
     */
    data: XOR<DnsQueryUpdateManyMutationInput, DnsQueryUncheckedUpdateManyInput>
    /**
     * Filter which DnsQueries to update
     */
    where?: DnsQueryWhereInput
    /**
     * Limit how many DnsQueries to update.
     */
    limit?: number
  }

  /**
   * DnsQuery upsert
   */
  export type DnsQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * The filter to search for the DnsQuery to update in case it exists.
     */
    where: DnsQueryWhereUniqueInput
    /**
     * In case the DnsQuery found by the `where` argument doesn't exist, create a new DnsQuery with this data.
     */
    create: XOR<DnsQueryCreateInput, DnsQueryUncheckedCreateInput>
    /**
     * In case the DnsQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DnsQueryUpdateInput, DnsQueryUncheckedUpdateInput>
  }

  /**
   * DnsQuery delete
   */
  export type DnsQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
    /**
     * Filter which DnsQuery to delete.
     */
    where: DnsQueryWhereUniqueInput
  }

  /**
   * DnsQuery deleteMany
   */
  export type DnsQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DnsQueries to delete
     */
    where?: DnsQueryWhereInput
    /**
     * Limit how many DnsQueries to delete.
     */
    limit?: number
  }

  /**
   * DnsQuery without action
   */
  export type DnsQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsQuery
     */
    select?: DnsQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsQuery
     */
    omit?: DnsQueryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SettingsScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const BlocklistSourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    enabled: 'enabled',
    type: 'type',
    domainCount: 'domainCount',
    lastSynced: 'lastSynced',
    createdAt: 'createdAt'
  };

  export type BlocklistSourceScalarFieldEnum = (typeof BlocklistSourceScalarFieldEnum)[keyof typeof BlocklistSourceScalarFieldEnum]


  export const ScheduleBlockScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startHour: 'startHour',
    endHour: 'endHour',
    label: 'label'
  };

  export type ScheduleBlockScalarFieldEnum = (typeof ScheduleBlockScalarFieldEnum)[keyof typeof ScheduleBlockScalarFieldEnum]


  export const RssFeedScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    enabled: 'enabled',
    createdAt: 'createdAt'
  };

  export type RssFeedScalarFieldEnum = (typeof RssFeedScalarFieldEnum)[keyof typeof RssFeedScalarFieldEnum]


  export const MediaRhythmScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    time: 'time',
    days: 'days'
  };

  export type MediaRhythmScalarFieldEnum = (typeof MediaRhythmScalarFieldEnum)[keyof typeof MediaRhythmScalarFieldEnum]


  export const DnsQueryScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    blocked: 'blocked',
    timestamp: 'timestamp'
  };

  export type DnsQueryScalarFieldEnum = (typeof DnsQueryScalarFieldEnum)[keyof typeof DnsQueryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    key?: StringFilter<"Settings"> | string
    value?: StringFilter<"Settings"> | string
  }

  export type SettingsOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    value?: StringFilter<"Settings"> | string
  }, "key">

  export type SettingsOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Settings"> | string
    value?: StringWithAggregatesFilter<"Settings"> | string
  }

  export type BlocklistSourceWhereInput = {
    AND?: BlocklistSourceWhereInput | BlocklistSourceWhereInput[]
    OR?: BlocklistSourceWhereInput[]
    NOT?: BlocklistSourceWhereInput | BlocklistSourceWhereInput[]
    id?: StringFilter<"BlocklistSource"> | string
    name?: StringFilter<"BlocklistSource"> | string
    url?: StringNullableFilter<"BlocklistSource"> | string | null
    enabled?: BoolFilter<"BlocklistSource"> | boolean
    type?: StringFilter<"BlocklistSource"> | string
    domainCount?: IntFilter<"BlocklistSource"> | number
    lastSynced?: DateTimeNullableFilter<"BlocklistSource"> | Date | string | null
    createdAt?: DateTimeFilter<"BlocklistSource"> | Date | string
  }

  export type BlocklistSourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    enabled?: SortOrder
    type?: SortOrder
    domainCount?: SortOrder
    lastSynced?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type BlocklistSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlocklistSourceWhereInput | BlocklistSourceWhereInput[]
    OR?: BlocklistSourceWhereInput[]
    NOT?: BlocklistSourceWhereInput | BlocklistSourceWhereInput[]
    name?: StringFilter<"BlocklistSource"> | string
    url?: StringNullableFilter<"BlocklistSource"> | string | null
    enabled?: BoolFilter<"BlocklistSource"> | boolean
    type?: StringFilter<"BlocklistSource"> | string
    domainCount?: IntFilter<"BlocklistSource"> | number
    lastSynced?: DateTimeNullableFilter<"BlocklistSource"> | Date | string | null
    createdAt?: DateTimeFilter<"BlocklistSource"> | Date | string
  }, "id">

  export type BlocklistSourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    enabled?: SortOrder
    type?: SortOrder
    domainCount?: SortOrder
    lastSynced?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BlocklistSourceCountOrderByAggregateInput
    _avg?: BlocklistSourceAvgOrderByAggregateInput
    _max?: BlocklistSourceMaxOrderByAggregateInput
    _min?: BlocklistSourceMinOrderByAggregateInput
    _sum?: BlocklistSourceSumOrderByAggregateInput
  }

  export type BlocklistSourceScalarWhereWithAggregatesInput = {
    AND?: BlocklistSourceScalarWhereWithAggregatesInput | BlocklistSourceScalarWhereWithAggregatesInput[]
    OR?: BlocklistSourceScalarWhereWithAggregatesInput[]
    NOT?: BlocklistSourceScalarWhereWithAggregatesInput | BlocklistSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlocklistSource"> | string
    name?: StringWithAggregatesFilter<"BlocklistSource"> | string
    url?: StringNullableWithAggregatesFilter<"BlocklistSource"> | string | null
    enabled?: BoolWithAggregatesFilter<"BlocklistSource"> | boolean
    type?: StringWithAggregatesFilter<"BlocklistSource"> | string
    domainCount?: IntWithAggregatesFilter<"BlocklistSource"> | number
    lastSynced?: DateTimeNullableWithAggregatesFilter<"BlocklistSource"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlocklistSource"> | Date | string
  }

  export type ScheduleBlockWhereInput = {
    AND?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    OR?: ScheduleBlockWhereInput[]
    NOT?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    id?: StringFilter<"ScheduleBlock"> | string
    dayOfWeek?: IntFilter<"ScheduleBlock"> | number
    startHour?: IntFilter<"ScheduleBlock"> | number
    endHour?: IntFilter<"ScheduleBlock"> | number
    label?: StringNullableFilter<"ScheduleBlock"> | string | null
  }

  export type ScheduleBlockOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    label?: SortOrderInput | SortOrder
  }

  export type ScheduleBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    OR?: ScheduleBlockWhereInput[]
    NOT?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    dayOfWeek?: IntFilter<"ScheduleBlock"> | number
    startHour?: IntFilter<"ScheduleBlock"> | number
    endHour?: IntFilter<"ScheduleBlock"> | number
    label?: StringNullableFilter<"ScheduleBlock"> | string | null
  }, "id">

  export type ScheduleBlockOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    label?: SortOrderInput | SortOrder
    _count?: ScheduleBlockCountOrderByAggregateInput
    _avg?: ScheduleBlockAvgOrderByAggregateInput
    _max?: ScheduleBlockMaxOrderByAggregateInput
    _min?: ScheduleBlockMinOrderByAggregateInput
    _sum?: ScheduleBlockSumOrderByAggregateInput
  }

  export type ScheduleBlockScalarWhereWithAggregatesInput = {
    AND?: ScheduleBlockScalarWhereWithAggregatesInput | ScheduleBlockScalarWhereWithAggregatesInput[]
    OR?: ScheduleBlockScalarWhereWithAggregatesInput[]
    NOT?: ScheduleBlockScalarWhereWithAggregatesInput | ScheduleBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleBlock"> | string
    dayOfWeek?: IntWithAggregatesFilter<"ScheduleBlock"> | number
    startHour?: IntWithAggregatesFilter<"ScheduleBlock"> | number
    endHour?: IntWithAggregatesFilter<"ScheduleBlock"> | number
    label?: StringNullableWithAggregatesFilter<"ScheduleBlock"> | string | null
  }

  export type RssFeedWhereInput = {
    AND?: RssFeedWhereInput | RssFeedWhereInput[]
    OR?: RssFeedWhereInput[]
    NOT?: RssFeedWhereInput | RssFeedWhereInput[]
    id?: StringFilter<"RssFeed"> | string
    name?: StringFilter<"RssFeed"> | string
    url?: StringFilter<"RssFeed"> | string
    enabled?: BoolFilter<"RssFeed"> | boolean
    createdAt?: DateTimeFilter<"RssFeed"> | Date | string
  }

  export type RssFeedOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type RssFeedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RssFeedWhereInput | RssFeedWhereInput[]
    OR?: RssFeedWhereInput[]
    NOT?: RssFeedWhereInput | RssFeedWhereInput[]
    name?: StringFilter<"RssFeed"> | string
    url?: StringFilter<"RssFeed"> | string
    enabled?: BoolFilter<"RssFeed"> | boolean
    createdAt?: DateTimeFilter<"RssFeed"> | Date | string
  }, "id">

  export type RssFeedOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    _count?: RssFeedCountOrderByAggregateInput
    _max?: RssFeedMaxOrderByAggregateInput
    _min?: RssFeedMinOrderByAggregateInput
  }

  export type RssFeedScalarWhereWithAggregatesInput = {
    AND?: RssFeedScalarWhereWithAggregatesInput | RssFeedScalarWhereWithAggregatesInput[]
    OR?: RssFeedScalarWhereWithAggregatesInput[]
    NOT?: RssFeedScalarWhereWithAggregatesInput | RssFeedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RssFeed"> | string
    name?: StringWithAggregatesFilter<"RssFeed"> | string
    url?: StringWithAggregatesFilter<"RssFeed"> | string
    enabled?: BoolWithAggregatesFilter<"RssFeed"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RssFeed"> | Date | string
  }

  export type MediaRhythmWhereInput = {
    AND?: MediaRhythmWhereInput | MediaRhythmWhereInput[]
    OR?: MediaRhythmWhereInput[]
    NOT?: MediaRhythmWhereInput | MediaRhythmWhereInput[]
    id?: StringFilter<"MediaRhythm"> | string
    title?: StringFilter<"MediaRhythm"> | string
    description?: StringNullableFilter<"MediaRhythm"> | string | null
    time?: StringNullableFilter<"MediaRhythm"> | string | null
    days?: StringFilter<"MediaRhythm"> | string
  }

  export type MediaRhythmOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    days?: SortOrder
  }

  export type MediaRhythmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: MediaRhythmWhereInput | MediaRhythmWhereInput[]
    OR?: MediaRhythmWhereInput[]
    NOT?: MediaRhythmWhereInput | MediaRhythmWhereInput[]
    description?: StringNullableFilter<"MediaRhythm"> | string | null
    time?: StringNullableFilter<"MediaRhythm"> | string | null
    days?: StringFilter<"MediaRhythm"> | string
  }, "id" | "title">

  export type MediaRhythmOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    days?: SortOrder
    _count?: MediaRhythmCountOrderByAggregateInput
    _max?: MediaRhythmMaxOrderByAggregateInput
    _min?: MediaRhythmMinOrderByAggregateInput
  }

  export type MediaRhythmScalarWhereWithAggregatesInput = {
    AND?: MediaRhythmScalarWhereWithAggregatesInput | MediaRhythmScalarWhereWithAggregatesInput[]
    OR?: MediaRhythmScalarWhereWithAggregatesInput[]
    NOT?: MediaRhythmScalarWhereWithAggregatesInput | MediaRhythmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaRhythm"> | string
    title?: StringWithAggregatesFilter<"MediaRhythm"> | string
    description?: StringNullableWithAggregatesFilter<"MediaRhythm"> | string | null
    time?: StringNullableWithAggregatesFilter<"MediaRhythm"> | string | null
    days?: StringWithAggregatesFilter<"MediaRhythm"> | string
  }

  export type DnsQueryWhereInput = {
    AND?: DnsQueryWhereInput | DnsQueryWhereInput[]
    OR?: DnsQueryWhereInput[]
    NOT?: DnsQueryWhereInput | DnsQueryWhereInput[]
    id?: StringFilter<"DnsQuery"> | string
    domain?: StringFilter<"DnsQuery"> | string
    blocked?: BoolFilter<"DnsQuery"> | boolean
    timestamp?: DateTimeFilter<"DnsQuery"> | Date | string
  }

  export type DnsQueryOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    blocked?: SortOrder
    timestamp?: SortOrder
  }

  export type DnsQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DnsQueryWhereInput | DnsQueryWhereInput[]
    OR?: DnsQueryWhereInput[]
    NOT?: DnsQueryWhereInput | DnsQueryWhereInput[]
    domain?: StringFilter<"DnsQuery"> | string
    blocked?: BoolFilter<"DnsQuery"> | boolean
    timestamp?: DateTimeFilter<"DnsQuery"> | Date | string
  }, "id">

  export type DnsQueryOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    blocked?: SortOrder
    timestamp?: SortOrder
    _count?: DnsQueryCountOrderByAggregateInput
    _max?: DnsQueryMaxOrderByAggregateInput
    _min?: DnsQueryMinOrderByAggregateInput
  }

  export type DnsQueryScalarWhereWithAggregatesInput = {
    AND?: DnsQueryScalarWhereWithAggregatesInput | DnsQueryScalarWhereWithAggregatesInput[]
    OR?: DnsQueryScalarWhereWithAggregatesInput[]
    NOT?: DnsQueryScalarWhereWithAggregatesInput | DnsQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DnsQuery"> | string
    domain?: StringWithAggregatesFilter<"DnsQuery"> | string
    blocked?: BoolWithAggregatesFilter<"DnsQuery"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"DnsQuery"> | Date | string
  }

  export type SettingsCreateInput = {
    key: string
    value: string
  }

  export type SettingsUncheckedCreateInput = {
    key: string
    value: string
  }

  export type SettingsUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsCreateManyInput = {
    key: string
    value: string
  }

  export type SettingsUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type BlocklistSourceCreateInput = {
    id?: string
    name: string
    url?: string | null
    enabled?: boolean
    type?: string
    domainCount?: number
    lastSynced?: Date | string | null
    createdAt?: Date | string
  }

  export type BlocklistSourceUncheckedCreateInput = {
    id?: string
    name: string
    url?: string | null
    enabled?: boolean
    type?: string
    domainCount?: number
    lastSynced?: Date | string | null
    createdAt?: Date | string
  }

  export type BlocklistSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    domainCount?: IntFieldUpdateOperationsInput | number
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocklistSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    domainCount?: IntFieldUpdateOperationsInput | number
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocklistSourceCreateManyInput = {
    id?: string
    name: string
    url?: string | null
    enabled?: boolean
    type?: string
    domainCount?: number
    lastSynced?: Date | string | null
    createdAt?: Date | string
  }

  export type BlocklistSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    domainCount?: IntFieldUpdateOperationsInput | number
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocklistSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    domainCount?: IntFieldUpdateOperationsInput | number
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleBlockCreateInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    endHour: number
    label?: string | null
  }

  export type ScheduleBlockUncheckedCreateInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    endHour: number
    label?: string | null
  }

  export type ScheduleBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleBlockCreateManyInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    endHour: number
    label?: string | null
  }

  export type ScheduleBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RssFeedCreateInput = {
    id?: string
    name: string
    url: string
    enabled?: boolean
    createdAt?: Date | string
  }

  export type RssFeedUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    enabled?: boolean
    createdAt?: Date | string
  }

  export type RssFeedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RssFeedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RssFeedCreateManyInput = {
    id?: string
    name: string
    url: string
    enabled?: boolean
    createdAt?: Date | string
  }

  export type RssFeedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RssFeedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaRhythmCreateInput = {
    id?: string
    title: string
    description?: string | null
    time?: string | null
    days: string
  }

  export type MediaRhythmUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    time?: string | null
    days: string
  }

  export type MediaRhythmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StringFieldUpdateOperationsInput | string
  }

  export type MediaRhythmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StringFieldUpdateOperationsInput | string
  }

  export type MediaRhythmCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    time?: string | null
    days: string
  }

  export type MediaRhythmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StringFieldUpdateOperationsInput | string
  }

  export type MediaRhythmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StringFieldUpdateOperationsInput | string
  }

  export type DnsQueryCreateInput = {
    id?: string
    domain: string
    blocked: boolean
    timestamp?: Date | string
  }

  export type DnsQueryUncheckedCreateInput = {
    id?: string
    domain: string
    blocked: boolean
    timestamp?: Date | string
  }

  export type DnsQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsQueryCreateManyInput = {
    id?: string
    domain: string
    blocked: boolean
    timestamp?: Date | string
  }

  export type DnsQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SettingsCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlocklistSourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    enabled?: SortOrder
    type?: SortOrder
    domainCount?: SortOrder
    lastSynced?: SortOrder
    createdAt?: SortOrder
  }

  export type BlocklistSourceAvgOrderByAggregateInput = {
    domainCount?: SortOrder
  }

  export type BlocklistSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    enabled?: SortOrder
    type?: SortOrder
    domainCount?: SortOrder
    lastSynced?: SortOrder
    createdAt?: SortOrder
  }

  export type BlocklistSourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    enabled?: SortOrder
    type?: SortOrder
    domainCount?: SortOrder
    lastSynced?: SortOrder
    createdAt?: SortOrder
  }

  export type BlocklistSourceSumOrderByAggregateInput = {
    domainCount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ScheduleBlockCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    label?: SortOrder
  }

  export type ScheduleBlockAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
  }

  export type ScheduleBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    label?: SortOrder
  }

  export type ScheduleBlockMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    label?: SortOrder
  }

  export type ScheduleBlockSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
  }

  export type RssFeedCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type RssFeedMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type RssFeedMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaRhythmCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time?: SortOrder
    days?: SortOrder
  }

  export type MediaRhythmMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time?: SortOrder
    days?: SortOrder
  }

  export type MediaRhythmMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time?: SortOrder
    days?: SortOrder
  }

  export type DnsQueryCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    blocked?: SortOrder
    timestamp?: SortOrder
  }

  export type DnsQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    blocked?: SortOrder
    timestamp?: SortOrder
  }

  export type DnsQueryMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    blocked?: SortOrder
    timestamp?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}