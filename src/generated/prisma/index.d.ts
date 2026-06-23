
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FarmerProfile
 * 
 */
export type FarmerProfile = $Result.DefaultSelection<Prisma.$FarmerProfilePayload>
/**
 * Model OfficerProfile
 * 
 */
export type OfficerProfile = $Result.DefaultSelection<Prisma.$OfficerProfilePayload>
/**
 * Model OfficerFarmerAssignment
 * 
 */
export type OfficerFarmerAssignment = $Result.DefaultSelection<Prisma.$OfficerFarmerAssignmentPayload>
/**
 * Model Farm
 * 
 */
export type Farm = $Result.DefaultSelection<Prisma.$FarmPayload>
/**
 * Model Crop
 * 
 */
export type Crop = $Result.DefaultSelection<Prisma.$CropPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model DiseaseAlert
 * 
 */
export type DiseaseAlert = $Result.DefaultSelection<Prisma.$DiseaseAlertPayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>
/**
 * Model CropType
 * 
 */
export type CropType = $Result.DefaultSelection<Prisma.$CropTypePayload>
/**
 * Model Disease
 * 
 */
export type Disease = $Result.DefaultSelection<Prisma.$DiseasePayload>
/**
 * Model ActivityType
 * 
 */
export type ActivityType = $Result.DefaultSelection<Prisma.$ActivityTypePayload>
/**
 * Model SystemLog
 * 
 */
export type SystemLog = $Result.DefaultSelection<Prisma.$SystemLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.farmerProfile`: Exposes CRUD operations for the **FarmerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FarmerProfiles
    * const farmerProfiles = await prisma.farmerProfile.findMany()
    * ```
    */
  get farmerProfile(): Prisma.FarmerProfileDelegate<ExtArgs>;

  /**
   * `prisma.officerProfile`: Exposes CRUD operations for the **OfficerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfficerProfiles
    * const officerProfiles = await prisma.officerProfile.findMany()
    * ```
    */
  get officerProfile(): Prisma.OfficerProfileDelegate<ExtArgs>;

  /**
   * `prisma.officerFarmerAssignment`: Exposes CRUD operations for the **OfficerFarmerAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfficerFarmerAssignments
    * const officerFarmerAssignments = await prisma.officerFarmerAssignment.findMany()
    * ```
    */
  get officerFarmerAssignment(): Prisma.OfficerFarmerAssignmentDelegate<ExtArgs>;

  /**
   * `prisma.farm`: Exposes CRUD operations for the **Farm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farms
    * const farms = await prisma.farm.findMany()
    * ```
    */
  get farm(): Prisma.FarmDelegate<ExtArgs>;

  /**
   * `prisma.crop`: Exposes CRUD operations for the **Crop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crop.findMany()
    * ```
    */
  get crop(): Prisma.CropDelegate<ExtArgs>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs>;

  /**
   * `prisma.diseaseAlert`: Exposes CRUD operations for the **DiseaseAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiseaseAlerts
    * const diseaseAlerts = await prisma.diseaseAlert.findMany()
    * ```
    */
  get diseaseAlert(): Prisma.DiseaseAlertDelegate<ExtArgs>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs>;

  /**
   * `prisma.cropType`: Exposes CRUD operations for the **CropType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CropTypes
    * const cropTypes = await prisma.cropType.findMany()
    * ```
    */
  get cropType(): Prisma.CropTypeDelegate<ExtArgs>;

  /**
   * `prisma.disease`: Exposes CRUD operations for the **Disease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diseases
    * const diseases = await prisma.disease.findMany()
    * ```
    */
  get disease(): Prisma.DiseaseDelegate<ExtArgs>;

  /**
   * `prisma.activityType`: Exposes CRUD operations for the **ActivityType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityTypes
    * const activityTypes = await prisma.activityType.findMany()
    * ```
    */
  get activityType(): Prisma.ActivityTypeDelegate<ExtArgs>;

  /**
   * `prisma.systemLog`: Exposes CRUD operations for the **SystemLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemLogs
    * const systemLogs = await prisma.systemLog.findMany()
    * ```
    */
  get systemLog(): Prisma.SystemLogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    FarmerProfile: 'FarmerProfile',
    OfficerProfile: 'OfficerProfile',
    OfficerFarmerAssignment: 'OfficerFarmerAssignment',
    Farm: 'Farm',
    Crop: 'Crop',
    Activity: 'Activity',
    DiseaseAlert: 'DiseaseAlert',
    Recommendation: 'Recommendation',
    CropType: 'CropType',
    Disease: 'Disease',
    ActivityType: 'ActivityType',
    SystemLog: 'SystemLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "farmerProfile" | "officerProfile" | "officerFarmerAssignment" | "farm" | "crop" | "activity" | "diseaseAlert" | "recommendation" | "cropType" | "disease" | "activityType" | "systemLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FarmerProfile: {
        payload: Prisma.$FarmerProfilePayload<ExtArgs>
        fields: Prisma.FarmerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload>
          }
          findFirst: {
            args: Prisma.FarmerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload>
          }
          findMany: {
            args: Prisma.FarmerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload>[]
          }
          create: {
            args: Prisma.FarmerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload>
          }
          createMany: {
            args: Prisma.FarmerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload>[]
          }
          delete: {
            args: Prisma.FarmerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload>
          }
          update: {
            args: Prisma.FarmerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload>
          }
          deleteMany: {
            args: Prisma.FarmerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerProfilePayload>
          }
          aggregate: {
            args: Prisma.FarmerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmerProfile>
          }
          groupBy: {
            args: Prisma.FarmerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<FarmerProfileCountAggregateOutputType> | number
          }
        }
      }
      OfficerProfile: {
        payload: Prisma.$OfficerProfilePayload<ExtArgs>
        fields: Prisma.OfficerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload>
          }
          findFirst: {
            args: Prisma.OfficerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload>
          }
          findMany: {
            args: Prisma.OfficerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload>[]
          }
          create: {
            args: Prisma.OfficerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload>
          }
          createMany: {
            args: Prisma.OfficerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload>[]
          }
          delete: {
            args: Prisma.OfficerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload>
          }
          update: {
            args: Prisma.OfficerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload>
          }
          deleteMany: {
            args: Prisma.OfficerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfficerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerProfilePayload>
          }
          aggregate: {
            args: Prisma.OfficerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfficerProfile>
          }
          groupBy: {
            args: Prisma.OfficerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<OfficerProfileCountAggregateOutputType> | number
          }
        }
      }
      OfficerFarmerAssignment: {
        payload: Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>
        fields: Prisma.OfficerFarmerAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficerFarmerAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficerFarmerAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload>
          }
          findFirst: {
            args: Prisma.OfficerFarmerAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficerFarmerAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload>
          }
          findMany: {
            args: Prisma.OfficerFarmerAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload>[]
          }
          create: {
            args: Prisma.OfficerFarmerAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload>
          }
          createMany: {
            args: Prisma.OfficerFarmerAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficerFarmerAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload>[]
          }
          delete: {
            args: Prisma.OfficerFarmerAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload>
          }
          update: {
            args: Prisma.OfficerFarmerAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.OfficerFarmerAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficerFarmerAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfficerFarmerAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerFarmerAssignmentPayload>
          }
          aggregate: {
            args: Prisma.OfficerFarmerAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfficerFarmerAssignment>
          }
          groupBy: {
            args: Prisma.OfficerFarmerAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficerFarmerAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficerFarmerAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<OfficerFarmerAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Farm: {
        payload: Prisma.$FarmPayload<ExtArgs>
        fields: Prisma.FarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findFirst: {
            args: Prisma.FarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findMany: {
            args: Prisma.FarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          create: {
            args: Prisma.FarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          createMany: {
            args: Prisma.FarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          delete: {
            args: Prisma.FarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          update: {
            args: Prisma.FarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          deleteMany: {
            args: Prisma.FarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          aggregate: {
            args: Prisma.FarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarm>
          }
          groupBy: {
            args: Prisma.FarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmCountArgs<ExtArgs>
            result: $Utils.Optional<FarmCountAggregateOutputType> | number
          }
        }
      }
      Crop: {
        payload: Prisma.$CropPayload<ExtArgs>
        fields: Prisma.CropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findFirst: {
            args: Prisma.CropFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findMany: {
            args: Prisma.CropFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          create: {
            args: Prisma.CropCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          createMany: {
            args: Prisma.CropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          delete: {
            args: Prisma.CropDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          update: {
            args: Prisma.CropUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          deleteMany: {
            args: Prisma.CropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CropUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          aggregate: {
            args: Prisma.CropAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrop>
          }
          groupBy: {
            args: Prisma.CropGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropCountArgs<ExtArgs>
            result: $Utils.Optional<CropCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      DiseaseAlert: {
        payload: Prisma.$DiseaseAlertPayload<ExtArgs>
        fields: Prisma.DiseaseAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload>
          }
          findFirst: {
            args: Prisma.DiseaseAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload>
          }
          findMany: {
            args: Prisma.DiseaseAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload>[]
          }
          create: {
            args: Prisma.DiseaseAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload>
          }
          createMany: {
            args: Prisma.DiseaseAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseaseAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload>[]
          }
          delete: {
            args: Prisma.DiseaseAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload>
          }
          update: {
            args: Prisma.DiseaseAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload>
          }
          deleteMany: {
            args: Prisma.DiseaseAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiseaseAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseAlertPayload>
          }
          aggregate: {
            args: Prisma.DiseaseAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiseaseAlert>
          }
          groupBy: {
            args: Prisma.DiseaseAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseaseAlertCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseAlertCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
      CropType: {
        payload: Prisma.$CropTypePayload<ExtArgs>
        fields: Prisma.CropTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload>
          }
          findFirst: {
            args: Prisma.CropTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload>
          }
          findMany: {
            args: Prisma.CropTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload>[]
          }
          create: {
            args: Prisma.CropTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload>
          }
          createMany: {
            args: Prisma.CropTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload>[]
          }
          delete: {
            args: Prisma.CropTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload>
          }
          update: {
            args: Prisma.CropTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload>
          }
          deleteMany: {
            args: Prisma.CropTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CropTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropTypePayload>
          }
          aggregate: {
            args: Prisma.CropTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCropType>
          }
          groupBy: {
            args: Prisma.CropTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropTypeCountArgs<ExtArgs>
            result: $Utils.Optional<CropTypeCountAggregateOutputType> | number
          }
        }
      }
      Disease: {
        payload: Prisma.$DiseasePayload<ExtArgs>
        fields: Prisma.DiseaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findFirst: {
            args: Prisma.DiseaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findMany: {
            args: Prisma.DiseaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          create: {
            args: Prisma.DiseaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          createMany: {
            args: Prisma.DiseaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          delete: {
            args: Prisma.DiseaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          update: {
            args: Prisma.DiseaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          deleteMany: {
            args: Prisma.DiseaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiseaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          aggregate: {
            args: Prisma.DiseaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisease>
          }
          groupBy: {
            args: Prisma.DiseaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseaseCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseCountAggregateOutputType> | number
          }
        }
      }
      ActivityType: {
        payload: Prisma.$ActivityTypePayload<ExtArgs>
        fields: Prisma.ActivityTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          findFirst: {
            args: Prisma.ActivityTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          findMany: {
            args: Prisma.ActivityTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>[]
          }
          create: {
            args: Prisma.ActivityTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          createMany: {
            args: Prisma.ActivityTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>[]
          }
          delete: {
            args: Prisma.ActivityTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          update: {
            args: Prisma.ActivityTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          deleteMany: {
            args: Prisma.ActivityTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          aggregate: {
            args: Prisma.ActivityTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityType>
          }
          groupBy: {
            args: Prisma.ActivityTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityTypeCountAggregateOutputType> | number
          }
        }
      }
      SystemLog: {
        payload: Prisma.$SystemLogPayload<ExtArgs>
        fields: Prisma.SystemLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findFirst: {
            args: Prisma.SystemLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findMany: {
            args: Prisma.SystemLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          create: {
            args: Prisma.SystemLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          createMany: {
            args: Prisma.SystemLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          delete: {
            args: Prisma.SystemLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          update: {
            args: Prisma.SystemLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          deleteMany: {
            args: Prisma.SystemLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          aggregate: {
            args: Prisma.SystemLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemLog>
          }
          groupBy: {
            args: Prisma.SystemLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemLogCountArgs<ExtArgs>
            result: $Utils.Optional<SystemLogCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    farms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farms?: boolean | UserCountOutputTypeCountFarmsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
  }


  /**
   * Count Type FarmerProfileCountOutputType
   */

  export type FarmerProfileCountOutputType = {
    assignments: number
    recommendations: number
  }

  export type FarmerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | FarmerProfileCountOutputTypeCountAssignmentsArgs
    recommendations?: boolean | FarmerProfileCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * FarmerProfileCountOutputType without action
   */
  export type FarmerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfileCountOutputType
     */
    select?: FarmerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmerProfileCountOutputType without action
   */
  export type FarmerProfileCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerFarmerAssignmentWhereInput
  }

  /**
   * FarmerProfileCountOutputType without action
   */
  export type FarmerProfileCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Count Type OfficerProfileCountOutputType
   */

  export type OfficerProfileCountOutputType = {
    assignments: number
    recommendations: number
  }

  export type OfficerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | OfficerProfileCountOutputTypeCountAssignmentsArgs
    recommendations?: boolean | OfficerProfileCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * OfficerProfileCountOutputType without action
   */
  export type OfficerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfileCountOutputType
     */
    select?: OfficerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfficerProfileCountOutputType without action
   */
  export type OfficerProfileCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerFarmerAssignmentWhereInput
  }

  /**
   * OfficerProfileCountOutputType without action
   */
  export type OfficerProfileCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Count Type FarmCountOutputType
   */

  export type FarmCountOutputType = {
    crops: number
    activities: number
    diseaseAlerts: number
  }

  export type FarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crops?: boolean | FarmCountOutputTypeCountCropsArgs
    activities?: boolean | FarmCountOutputTypeCountActivitiesArgs
    diseaseAlerts?: boolean | FarmCountOutputTypeCountDiseaseAlertsArgs
  }

  // Custom InputTypes
  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCountOutputType
     */
    select?: FarmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropWhereInput
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountDiseaseAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseAlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    fullName: string | null
    role: string | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    fullName: string | null
    role: string | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullName: number
    role: number
    avatarUrl: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    farmerProfile?: boolean | User$farmerProfileArgs<ExtArgs>
    officerProfile?: boolean | User$officerProfileArgs<ExtArgs>
    farms?: boolean | User$farmsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmerProfile?: boolean | User$farmerProfileArgs<ExtArgs>
    officerProfile?: boolean | User$officerProfileArgs<ExtArgs>
    farms?: boolean | User$farmsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      farmerProfile: Prisma.$FarmerProfilePayload<ExtArgs> | null
      officerProfile: Prisma.$OfficerProfilePayload<ExtArgs> | null
      farms: Prisma.$FarmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      fullName: string
      role: string
      avatarUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmerProfile<T extends User$farmerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$farmerProfileArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    officerProfile<T extends User$officerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$officerProfileArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    farms<T extends User$farmsArgs<ExtArgs> = {}>(args?: Subset<T, User$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.farmerProfile
   */
  export type User$farmerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    where?: FarmerProfileWhereInput
  }

  /**
   * User.officerProfile
   */
  export type User$officerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    where?: OfficerProfileWhereInput
  }

  /**
   * User.farms
   */
  export type User$farmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    cursor?: FarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FarmerProfile
   */

  export type AggregateFarmerProfile = {
    _count: FarmerProfileCountAggregateOutputType | null
    _avg: FarmerProfileAvgAggregateOutputType | null
    _sum: FarmerProfileSumAggregateOutputType | null
    _min: FarmerProfileMinAggregateOutputType | null
    _max: FarmerProfileMaxAggregateOutputType | null
  }

  export type FarmerProfileAvgAggregateOutputType = {
    performanceScore: number | null
  }

  export type FarmerProfileSumAggregateOutputType = {
    performanceScore: number | null
  }

  export type FarmerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    location: string | null
    performanceScore: number | null
    status: string | null
  }

  export type FarmerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    location: string | null
    performanceScore: number | null
    status: string | null
  }

  export type FarmerProfileCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    location: number
    performanceScore: number
    status: number
    _all: number
  }


  export type FarmerProfileAvgAggregateInputType = {
    performanceScore?: true
  }

  export type FarmerProfileSumAggregateInputType = {
    performanceScore?: true
  }

  export type FarmerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    location?: true
    performanceScore?: true
    status?: true
  }

  export type FarmerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    location?: true
    performanceScore?: true
    status?: true
  }

  export type FarmerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    location?: true
    performanceScore?: true
    status?: true
    _all?: true
  }

  export type FarmerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmerProfile to aggregate.
     */
    where?: FarmerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmerProfiles to fetch.
     */
    orderBy?: FarmerProfileOrderByWithRelationInput | FarmerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FarmerProfiles
    **/
    _count?: true | FarmerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmerProfileMaxAggregateInputType
  }

  export type GetFarmerProfileAggregateType<T extends FarmerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmerProfile[P]>
      : GetScalarType<T[P], AggregateFarmerProfile[P]>
  }




  export type FarmerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerProfileWhereInput
    orderBy?: FarmerProfileOrderByWithAggregationInput | FarmerProfileOrderByWithAggregationInput[]
    by: FarmerProfileScalarFieldEnum[] | FarmerProfileScalarFieldEnum
    having?: FarmerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmerProfileCountAggregateInputType | true
    _avg?: FarmerProfileAvgAggregateInputType
    _sum?: FarmerProfileSumAggregateInputType
    _min?: FarmerProfileMinAggregateInputType
    _max?: FarmerProfileMaxAggregateInputType
  }

  export type FarmerProfileGroupByOutputType = {
    id: string
    userId: string
    phone: string | null
    location: string | null
    performanceScore: number
    status: string
    _count: FarmerProfileCountAggregateOutputType | null
    _avg: FarmerProfileAvgAggregateOutputType | null
    _sum: FarmerProfileSumAggregateOutputType | null
    _min: FarmerProfileMinAggregateOutputType | null
    _max: FarmerProfileMaxAggregateOutputType | null
  }

  type GetFarmerProfileGroupByPayload<T extends FarmerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], FarmerProfileGroupByOutputType[P]>
        }
      >
    >


  export type FarmerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    location?: boolean
    performanceScore?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | FarmerProfile$assignmentsArgs<ExtArgs>
    recommendations?: boolean | FarmerProfile$recommendationsArgs<ExtArgs>
    _count?: boolean | FarmerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmerProfile"]>

  export type FarmerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    location?: boolean
    performanceScore?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmerProfile"]>

  export type FarmerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    location?: boolean
    performanceScore?: boolean
    status?: boolean
  }

  export type FarmerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | FarmerProfile$assignmentsArgs<ExtArgs>
    recommendations?: boolean | FarmerProfile$recommendationsArgs<ExtArgs>
    _count?: boolean | FarmerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FarmerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FarmerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FarmerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      phone: string | null
      location: string | null
      performanceScore: number
      status: string
    }, ExtArgs["result"]["farmerProfile"]>
    composites: {}
  }

  type FarmerProfileGetPayload<S extends boolean | null | undefined | FarmerProfileDefaultArgs> = $Result.GetResult<Prisma.$FarmerProfilePayload, S>

  type FarmerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FarmerProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FarmerProfileCountAggregateInputType | true
    }

  export interface FarmerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FarmerProfile'], meta: { name: 'FarmerProfile' } }
    /**
     * Find zero or one FarmerProfile that matches the filter.
     * @param {FarmerProfileFindUniqueArgs} args - Arguments to find a FarmerProfile
     * @example
     * // Get one FarmerProfile
     * const farmerProfile = await prisma.farmerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmerProfileFindUniqueArgs>(args: SelectSubset<T, FarmerProfileFindUniqueArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FarmerProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FarmerProfileFindUniqueOrThrowArgs} args - Arguments to find a FarmerProfile
     * @example
     * // Get one FarmerProfile
     * const farmerProfile = await prisma.farmerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FarmerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerProfileFindFirstArgs} args - Arguments to find a FarmerProfile
     * @example
     * // Get one FarmerProfile
     * const farmerProfile = await prisma.farmerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmerProfileFindFirstArgs>(args?: SelectSubset<T, FarmerProfileFindFirstArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FarmerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerProfileFindFirstOrThrowArgs} args - Arguments to find a FarmerProfile
     * @example
     * // Get one FarmerProfile
     * const farmerProfile = await prisma.farmerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FarmerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmerProfiles
     * const farmerProfiles = await prisma.farmerProfile.findMany()
     * 
     * // Get first 10 FarmerProfiles
     * const farmerProfiles = await prisma.farmerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmerProfileWithIdOnly = await prisma.farmerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmerProfileFindManyArgs>(args?: SelectSubset<T, FarmerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FarmerProfile.
     * @param {FarmerProfileCreateArgs} args - Arguments to create a FarmerProfile.
     * @example
     * // Create one FarmerProfile
     * const FarmerProfile = await prisma.farmerProfile.create({
     *   data: {
     *     // ... data to create a FarmerProfile
     *   }
     * })
     * 
     */
    create<T extends FarmerProfileCreateArgs>(args: SelectSubset<T, FarmerProfileCreateArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FarmerProfiles.
     * @param {FarmerProfileCreateManyArgs} args - Arguments to create many FarmerProfiles.
     * @example
     * // Create many FarmerProfiles
     * const farmerProfile = await prisma.farmerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmerProfileCreateManyArgs>(args?: SelectSubset<T, FarmerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FarmerProfiles and returns the data saved in the database.
     * @param {FarmerProfileCreateManyAndReturnArgs} args - Arguments to create many FarmerProfiles.
     * @example
     * // Create many FarmerProfiles
     * const farmerProfile = await prisma.farmerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FarmerProfiles and only return the `id`
     * const farmerProfileWithIdOnly = await prisma.farmerProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FarmerProfile.
     * @param {FarmerProfileDeleteArgs} args - Arguments to delete one FarmerProfile.
     * @example
     * // Delete one FarmerProfile
     * const FarmerProfile = await prisma.farmerProfile.delete({
     *   where: {
     *     // ... filter to delete one FarmerProfile
     *   }
     * })
     * 
     */
    delete<T extends FarmerProfileDeleteArgs>(args: SelectSubset<T, FarmerProfileDeleteArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FarmerProfile.
     * @param {FarmerProfileUpdateArgs} args - Arguments to update one FarmerProfile.
     * @example
     * // Update one FarmerProfile
     * const farmerProfile = await prisma.farmerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmerProfileUpdateArgs>(args: SelectSubset<T, FarmerProfileUpdateArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FarmerProfiles.
     * @param {FarmerProfileDeleteManyArgs} args - Arguments to filter FarmerProfiles to delete.
     * @example
     * // Delete a few FarmerProfiles
     * const { count } = await prisma.farmerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmerProfileDeleteManyArgs>(args?: SelectSubset<T, FarmerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmerProfiles
     * const farmerProfile = await prisma.farmerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmerProfileUpdateManyArgs>(args: SelectSubset<T, FarmerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FarmerProfile.
     * @param {FarmerProfileUpsertArgs} args - Arguments to update or create a FarmerProfile.
     * @example
     * // Update or create a FarmerProfile
     * const farmerProfile = await prisma.farmerProfile.upsert({
     *   create: {
     *     // ... data to create a FarmerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmerProfile we want to update
     *   }
     * })
     */
    upsert<T extends FarmerProfileUpsertArgs>(args: SelectSubset<T, FarmerProfileUpsertArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FarmerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerProfileCountArgs} args - Arguments to filter FarmerProfiles to count.
     * @example
     * // Count the number of FarmerProfiles
     * const count = await prisma.farmerProfile.count({
     *   where: {
     *     // ... the filter for the FarmerProfiles we want to count
     *   }
     * })
    **/
    count<T extends FarmerProfileCountArgs>(
      args?: Subset<T, FarmerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FarmerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmerProfileAggregateArgs>(args: Subset<T, FarmerProfileAggregateArgs>): Prisma.PrismaPromise<GetFarmerProfileAggregateType<T>>

    /**
     * Group by FarmerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerProfileGroupByArgs} args - Group by arguments.
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
      T extends FarmerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmerProfileGroupByArgs['orderBy'] }
        : { orderBy?: FarmerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FarmerProfile model
   */
  readonly fields: FarmerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FarmerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignments<T extends FarmerProfile$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, FarmerProfile$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    recommendations<T extends FarmerProfile$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, FarmerProfile$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the FarmerProfile model
   */ 
  interface FarmerProfileFieldRefs {
    readonly id: FieldRef<"FarmerProfile", 'String'>
    readonly userId: FieldRef<"FarmerProfile", 'String'>
    readonly phone: FieldRef<"FarmerProfile", 'String'>
    readonly location: FieldRef<"FarmerProfile", 'String'>
    readonly performanceScore: FieldRef<"FarmerProfile", 'Float'>
    readonly status: FieldRef<"FarmerProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FarmerProfile findUnique
   */
  export type FarmerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * Filter, which FarmerProfile to fetch.
     */
    where: FarmerProfileWhereUniqueInput
  }

  /**
   * FarmerProfile findUniqueOrThrow
   */
  export type FarmerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * Filter, which FarmerProfile to fetch.
     */
    where: FarmerProfileWhereUniqueInput
  }

  /**
   * FarmerProfile findFirst
   */
  export type FarmerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * Filter, which FarmerProfile to fetch.
     */
    where?: FarmerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmerProfiles to fetch.
     */
    orderBy?: FarmerProfileOrderByWithRelationInput | FarmerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmerProfiles.
     */
    cursor?: FarmerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmerProfiles.
     */
    distinct?: FarmerProfileScalarFieldEnum | FarmerProfileScalarFieldEnum[]
  }

  /**
   * FarmerProfile findFirstOrThrow
   */
  export type FarmerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * Filter, which FarmerProfile to fetch.
     */
    where?: FarmerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmerProfiles to fetch.
     */
    orderBy?: FarmerProfileOrderByWithRelationInput | FarmerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmerProfiles.
     */
    cursor?: FarmerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmerProfiles.
     */
    distinct?: FarmerProfileScalarFieldEnum | FarmerProfileScalarFieldEnum[]
  }

  /**
   * FarmerProfile findMany
   */
  export type FarmerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * Filter, which FarmerProfiles to fetch.
     */
    where?: FarmerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmerProfiles to fetch.
     */
    orderBy?: FarmerProfileOrderByWithRelationInput | FarmerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FarmerProfiles.
     */
    cursor?: FarmerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmerProfiles.
     */
    skip?: number
    distinct?: FarmerProfileScalarFieldEnum | FarmerProfileScalarFieldEnum[]
  }

  /**
   * FarmerProfile create
   */
  export type FarmerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a FarmerProfile.
     */
    data: XOR<FarmerProfileCreateInput, FarmerProfileUncheckedCreateInput>
  }

  /**
   * FarmerProfile createMany
   */
  export type FarmerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FarmerProfiles.
     */
    data: FarmerProfileCreateManyInput | FarmerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FarmerProfile createManyAndReturn
   */
  export type FarmerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FarmerProfiles.
     */
    data: FarmerProfileCreateManyInput | FarmerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FarmerProfile update
   */
  export type FarmerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a FarmerProfile.
     */
    data: XOR<FarmerProfileUpdateInput, FarmerProfileUncheckedUpdateInput>
    /**
     * Choose, which FarmerProfile to update.
     */
    where: FarmerProfileWhereUniqueInput
  }

  /**
   * FarmerProfile updateMany
   */
  export type FarmerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FarmerProfiles.
     */
    data: XOR<FarmerProfileUpdateManyMutationInput, FarmerProfileUncheckedUpdateManyInput>
    /**
     * Filter which FarmerProfiles to update
     */
    where?: FarmerProfileWhereInput
  }

  /**
   * FarmerProfile upsert
   */
  export type FarmerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the FarmerProfile to update in case it exists.
     */
    where: FarmerProfileWhereUniqueInput
    /**
     * In case the FarmerProfile found by the `where` argument doesn't exist, create a new FarmerProfile with this data.
     */
    create: XOR<FarmerProfileCreateInput, FarmerProfileUncheckedCreateInput>
    /**
     * In case the FarmerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmerProfileUpdateInput, FarmerProfileUncheckedUpdateInput>
  }

  /**
   * FarmerProfile delete
   */
  export type FarmerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
    /**
     * Filter which FarmerProfile to delete.
     */
    where: FarmerProfileWhereUniqueInput
  }

  /**
   * FarmerProfile deleteMany
   */
  export type FarmerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmerProfiles to delete
     */
    where?: FarmerProfileWhereInput
  }

  /**
   * FarmerProfile.assignments
   */
  export type FarmerProfile$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    where?: OfficerFarmerAssignmentWhereInput
    orderBy?: OfficerFarmerAssignmentOrderByWithRelationInput | OfficerFarmerAssignmentOrderByWithRelationInput[]
    cursor?: OfficerFarmerAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfficerFarmerAssignmentScalarFieldEnum | OfficerFarmerAssignmentScalarFieldEnum[]
  }

  /**
   * FarmerProfile.recommendations
   */
  export type FarmerProfile$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * FarmerProfile without action
   */
  export type FarmerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerProfile
     */
    select?: FarmerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerProfileInclude<ExtArgs> | null
  }


  /**
   * Model OfficerProfile
   */

  export type AggregateOfficerProfile = {
    _count: OfficerProfileCountAggregateOutputType | null
    _avg: OfficerProfileAvgAggregateOutputType | null
    _sum: OfficerProfileSumAggregateOutputType | null
    _min: OfficerProfileMinAggregateOutputType | null
    _max: OfficerProfileMaxAggregateOutputType | null
  }

  export type OfficerProfileAvgAggregateOutputType = {
    performanceScore: number | null
  }

  export type OfficerProfileSumAggregateOutputType = {
    performanceScore: number | null
  }

  export type OfficerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    region: string | null
    performanceScore: number | null
    status: string | null
  }

  export type OfficerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    region: string | null
    performanceScore: number | null
    status: string | null
  }

  export type OfficerProfileCountAggregateOutputType = {
    id: number
    userId: number
    region: number
    performanceScore: number
    status: number
    _all: number
  }


  export type OfficerProfileAvgAggregateInputType = {
    performanceScore?: true
  }

  export type OfficerProfileSumAggregateInputType = {
    performanceScore?: true
  }

  export type OfficerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    region?: true
    performanceScore?: true
    status?: true
  }

  export type OfficerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    region?: true
    performanceScore?: true
    status?: true
  }

  export type OfficerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    region?: true
    performanceScore?: true
    status?: true
    _all?: true
  }

  export type OfficerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficerProfile to aggregate.
     */
    where?: OfficerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerProfiles to fetch.
     */
    orderBy?: OfficerProfileOrderByWithRelationInput | OfficerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfficerProfiles
    **/
    _count?: true | OfficerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfficerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfficerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficerProfileMaxAggregateInputType
  }

  export type GetOfficerProfileAggregateType<T extends OfficerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateOfficerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficerProfile[P]>
      : GetScalarType<T[P], AggregateOfficerProfile[P]>
  }




  export type OfficerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerProfileWhereInput
    orderBy?: OfficerProfileOrderByWithAggregationInput | OfficerProfileOrderByWithAggregationInput[]
    by: OfficerProfileScalarFieldEnum[] | OfficerProfileScalarFieldEnum
    having?: OfficerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficerProfileCountAggregateInputType | true
    _avg?: OfficerProfileAvgAggregateInputType
    _sum?: OfficerProfileSumAggregateInputType
    _min?: OfficerProfileMinAggregateInputType
    _max?: OfficerProfileMaxAggregateInputType
  }

  export type OfficerProfileGroupByOutputType = {
    id: string
    userId: string
    region: string | null
    performanceScore: number
    status: string
    _count: OfficerProfileCountAggregateOutputType | null
    _avg: OfficerProfileAvgAggregateOutputType | null
    _sum: OfficerProfileSumAggregateOutputType | null
    _min: OfficerProfileMinAggregateOutputType | null
    _max: OfficerProfileMaxAggregateOutputType | null
  }

  type GetOfficerProfileGroupByPayload<T extends OfficerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], OfficerProfileGroupByOutputType[P]>
        }
      >
    >


  export type OfficerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    region?: boolean
    performanceScore?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | OfficerProfile$assignmentsArgs<ExtArgs>
    recommendations?: boolean | OfficerProfile$recommendationsArgs<ExtArgs>
    _count?: boolean | OfficerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officerProfile"]>

  export type OfficerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    region?: boolean
    performanceScore?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officerProfile"]>

  export type OfficerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    region?: boolean
    performanceScore?: boolean
    status?: boolean
  }

  export type OfficerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | OfficerProfile$assignmentsArgs<ExtArgs>
    recommendations?: boolean | OfficerProfile$recommendationsArgs<ExtArgs>
    _count?: boolean | OfficerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfficerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OfficerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfficerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      region: string | null
      performanceScore: number
      status: string
    }, ExtArgs["result"]["officerProfile"]>
    composites: {}
  }

  type OfficerProfileGetPayload<S extends boolean | null | undefined | OfficerProfileDefaultArgs> = $Result.GetResult<Prisma.$OfficerProfilePayload, S>

  type OfficerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfficerProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfficerProfileCountAggregateInputType | true
    }

  export interface OfficerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfficerProfile'], meta: { name: 'OfficerProfile' } }
    /**
     * Find zero or one OfficerProfile that matches the filter.
     * @param {OfficerProfileFindUniqueArgs} args - Arguments to find a OfficerProfile
     * @example
     * // Get one OfficerProfile
     * const officerProfile = await prisma.officerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficerProfileFindUniqueArgs>(args: SelectSubset<T, OfficerProfileFindUniqueArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OfficerProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfficerProfileFindUniqueOrThrowArgs} args - Arguments to find a OfficerProfile
     * @example
     * // Get one OfficerProfile
     * const officerProfile = await prisma.officerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OfficerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerProfileFindFirstArgs} args - Arguments to find a OfficerProfile
     * @example
     * // Get one OfficerProfile
     * const officerProfile = await prisma.officerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficerProfileFindFirstArgs>(args?: SelectSubset<T, OfficerProfileFindFirstArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OfficerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerProfileFindFirstOrThrowArgs} args - Arguments to find a OfficerProfile
     * @example
     * // Get one OfficerProfile
     * const officerProfile = await prisma.officerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OfficerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfficerProfiles
     * const officerProfiles = await prisma.officerProfile.findMany()
     * 
     * // Get first 10 OfficerProfiles
     * const officerProfiles = await prisma.officerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officerProfileWithIdOnly = await prisma.officerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficerProfileFindManyArgs>(args?: SelectSubset<T, OfficerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OfficerProfile.
     * @param {OfficerProfileCreateArgs} args - Arguments to create a OfficerProfile.
     * @example
     * // Create one OfficerProfile
     * const OfficerProfile = await prisma.officerProfile.create({
     *   data: {
     *     // ... data to create a OfficerProfile
     *   }
     * })
     * 
     */
    create<T extends OfficerProfileCreateArgs>(args: SelectSubset<T, OfficerProfileCreateArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OfficerProfiles.
     * @param {OfficerProfileCreateManyArgs} args - Arguments to create many OfficerProfiles.
     * @example
     * // Create many OfficerProfiles
     * const officerProfile = await prisma.officerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficerProfileCreateManyArgs>(args?: SelectSubset<T, OfficerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfficerProfiles and returns the data saved in the database.
     * @param {OfficerProfileCreateManyAndReturnArgs} args - Arguments to create many OfficerProfiles.
     * @example
     * // Create many OfficerProfiles
     * const officerProfile = await prisma.officerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfficerProfiles and only return the `id`
     * const officerProfileWithIdOnly = await prisma.officerProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OfficerProfile.
     * @param {OfficerProfileDeleteArgs} args - Arguments to delete one OfficerProfile.
     * @example
     * // Delete one OfficerProfile
     * const OfficerProfile = await prisma.officerProfile.delete({
     *   where: {
     *     // ... filter to delete one OfficerProfile
     *   }
     * })
     * 
     */
    delete<T extends OfficerProfileDeleteArgs>(args: SelectSubset<T, OfficerProfileDeleteArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OfficerProfile.
     * @param {OfficerProfileUpdateArgs} args - Arguments to update one OfficerProfile.
     * @example
     * // Update one OfficerProfile
     * const officerProfile = await prisma.officerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficerProfileUpdateArgs>(args: SelectSubset<T, OfficerProfileUpdateArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OfficerProfiles.
     * @param {OfficerProfileDeleteManyArgs} args - Arguments to filter OfficerProfiles to delete.
     * @example
     * // Delete a few OfficerProfiles
     * const { count } = await prisma.officerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficerProfileDeleteManyArgs>(args?: SelectSubset<T, OfficerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfficerProfiles
     * const officerProfile = await prisma.officerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficerProfileUpdateManyArgs>(args: SelectSubset<T, OfficerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OfficerProfile.
     * @param {OfficerProfileUpsertArgs} args - Arguments to update or create a OfficerProfile.
     * @example
     * // Update or create a OfficerProfile
     * const officerProfile = await prisma.officerProfile.upsert({
     *   create: {
     *     // ... data to create a OfficerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfficerProfile we want to update
     *   }
     * })
     */
    upsert<T extends OfficerProfileUpsertArgs>(args: SelectSubset<T, OfficerProfileUpsertArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OfficerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerProfileCountArgs} args - Arguments to filter OfficerProfiles to count.
     * @example
     * // Count the number of OfficerProfiles
     * const count = await prisma.officerProfile.count({
     *   where: {
     *     // ... the filter for the OfficerProfiles we want to count
     *   }
     * })
    **/
    count<T extends OfficerProfileCountArgs>(
      args?: Subset<T, OfficerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfficerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfficerProfileAggregateArgs>(args: Subset<T, OfficerProfileAggregateArgs>): Prisma.PrismaPromise<GetOfficerProfileAggregateType<T>>

    /**
     * Group by OfficerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerProfileGroupByArgs} args - Group by arguments.
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
      T extends OfficerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficerProfileGroupByArgs['orderBy'] }
        : { orderBy?: OfficerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfficerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfficerProfile model
   */
  readonly fields: OfficerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfficerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignments<T extends OfficerProfile$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, OfficerProfile$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    recommendations<T extends OfficerProfile$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, OfficerProfile$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the OfficerProfile model
   */ 
  interface OfficerProfileFieldRefs {
    readonly id: FieldRef<"OfficerProfile", 'String'>
    readonly userId: FieldRef<"OfficerProfile", 'String'>
    readonly region: FieldRef<"OfficerProfile", 'String'>
    readonly performanceScore: FieldRef<"OfficerProfile", 'Float'>
    readonly status: FieldRef<"OfficerProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OfficerProfile findUnique
   */
  export type OfficerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OfficerProfile to fetch.
     */
    where: OfficerProfileWhereUniqueInput
  }

  /**
   * OfficerProfile findUniqueOrThrow
   */
  export type OfficerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OfficerProfile to fetch.
     */
    where: OfficerProfileWhereUniqueInput
  }

  /**
   * OfficerProfile findFirst
   */
  export type OfficerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OfficerProfile to fetch.
     */
    where?: OfficerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerProfiles to fetch.
     */
    orderBy?: OfficerProfileOrderByWithRelationInput | OfficerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficerProfiles.
     */
    cursor?: OfficerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficerProfiles.
     */
    distinct?: OfficerProfileScalarFieldEnum | OfficerProfileScalarFieldEnum[]
  }

  /**
   * OfficerProfile findFirstOrThrow
   */
  export type OfficerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OfficerProfile to fetch.
     */
    where?: OfficerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerProfiles to fetch.
     */
    orderBy?: OfficerProfileOrderByWithRelationInput | OfficerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficerProfiles.
     */
    cursor?: OfficerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficerProfiles.
     */
    distinct?: OfficerProfileScalarFieldEnum | OfficerProfileScalarFieldEnum[]
  }

  /**
   * OfficerProfile findMany
   */
  export type OfficerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OfficerProfiles to fetch.
     */
    where?: OfficerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerProfiles to fetch.
     */
    orderBy?: OfficerProfileOrderByWithRelationInput | OfficerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfficerProfiles.
     */
    cursor?: OfficerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerProfiles.
     */
    skip?: number
    distinct?: OfficerProfileScalarFieldEnum | OfficerProfileScalarFieldEnum[]
  }

  /**
   * OfficerProfile create
   */
  export type OfficerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a OfficerProfile.
     */
    data: XOR<OfficerProfileCreateInput, OfficerProfileUncheckedCreateInput>
  }

  /**
   * OfficerProfile createMany
   */
  export type OfficerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfficerProfiles.
     */
    data: OfficerProfileCreateManyInput | OfficerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfficerProfile createManyAndReturn
   */
  export type OfficerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OfficerProfiles.
     */
    data: OfficerProfileCreateManyInput | OfficerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfficerProfile update
   */
  export type OfficerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a OfficerProfile.
     */
    data: XOR<OfficerProfileUpdateInput, OfficerProfileUncheckedUpdateInput>
    /**
     * Choose, which OfficerProfile to update.
     */
    where: OfficerProfileWhereUniqueInput
  }

  /**
   * OfficerProfile updateMany
   */
  export type OfficerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfficerProfiles.
     */
    data: XOR<OfficerProfileUpdateManyMutationInput, OfficerProfileUncheckedUpdateManyInput>
    /**
     * Filter which OfficerProfiles to update
     */
    where?: OfficerProfileWhereInput
  }

  /**
   * OfficerProfile upsert
   */
  export type OfficerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the OfficerProfile to update in case it exists.
     */
    where: OfficerProfileWhereUniqueInput
    /**
     * In case the OfficerProfile found by the `where` argument doesn't exist, create a new OfficerProfile with this data.
     */
    create: XOR<OfficerProfileCreateInput, OfficerProfileUncheckedCreateInput>
    /**
     * In case the OfficerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficerProfileUpdateInput, OfficerProfileUncheckedUpdateInput>
  }

  /**
   * OfficerProfile delete
   */
  export type OfficerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
    /**
     * Filter which OfficerProfile to delete.
     */
    where: OfficerProfileWhereUniqueInput
  }

  /**
   * OfficerProfile deleteMany
   */
  export type OfficerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficerProfiles to delete
     */
    where?: OfficerProfileWhereInput
  }

  /**
   * OfficerProfile.assignments
   */
  export type OfficerProfile$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    where?: OfficerFarmerAssignmentWhereInput
    orderBy?: OfficerFarmerAssignmentOrderByWithRelationInput | OfficerFarmerAssignmentOrderByWithRelationInput[]
    cursor?: OfficerFarmerAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfficerFarmerAssignmentScalarFieldEnum | OfficerFarmerAssignmentScalarFieldEnum[]
  }

  /**
   * OfficerProfile.recommendations
   */
  export type OfficerProfile$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * OfficerProfile without action
   */
  export type OfficerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerProfile
     */
    select?: OfficerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerProfileInclude<ExtArgs> | null
  }


  /**
   * Model OfficerFarmerAssignment
   */

  export type AggregateOfficerFarmerAssignment = {
    _count: OfficerFarmerAssignmentCountAggregateOutputType | null
    _min: OfficerFarmerAssignmentMinAggregateOutputType | null
    _max: OfficerFarmerAssignmentMaxAggregateOutputType | null
  }

  export type OfficerFarmerAssignmentMinAggregateOutputType = {
    id: string | null
    officerId: string | null
    farmerId: string | null
    assignedAt: Date | null
  }

  export type OfficerFarmerAssignmentMaxAggregateOutputType = {
    id: string | null
    officerId: string | null
    farmerId: string | null
    assignedAt: Date | null
  }

  export type OfficerFarmerAssignmentCountAggregateOutputType = {
    id: number
    officerId: number
    farmerId: number
    assignedAt: number
    _all: number
  }


  export type OfficerFarmerAssignmentMinAggregateInputType = {
    id?: true
    officerId?: true
    farmerId?: true
    assignedAt?: true
  }

  export type OfficerFarmerAssignmentMaxAggregateInputType = {
    id?: true
    officerId?: true
    farmerId?: true
    assignedAt?: true
  }

  export type OfficerFarmerAssignmentCountAggregateInputType = {
    id?: true
    officerId?: true
    farmerId?: true
    assignedAt?: true
    _all?: true
  }

  export type OfficerFarmerAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficerFarmerAssignment to aggregate.
     */
    where?: OfficerFarmerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerFarmerAssignments to fetch.
     */
    orderBy?: OfficerFarmerAssignmentOrderByWithRelationInput | OfficerFarmerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficerFarmerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerFarmerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerFarmerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfficerFarmerAssignments
    **/
    _count?: true | OfficerFarmerAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficerFarmerAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficerFarmerAssignmentMaxAggregateInputType
  }

  export type GetOfficerFarmerAssignmentAggregateType<T extends OfficerFarmerAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateOfficerFarmerAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficerFarmerAssignment[P]>
      : GetScalarType<T[P], AggregateOfficerFarmerAssignment[P]>
  }




  export type OfficerFarmerAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerFarmerAssignmentWhereInput
    orderBy?: OfficerFarmerAssignmentOrderByWithAggregationInput | OfficerFarmerAssignmentOrderByWithAggregationInput[]
    by: OfficerFarmerAssignmentScalarFieldEnum[] | OfficerFarmerAssignmentScalarFieldEnum
    having?: OfficerFarmerAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficerFarmerAssignmentCountAggregateInputType | true
    _min?: OfficerFarmerAssignmentMinAggregateInputType
    _max?: OfficerFarmerAssignmentMaxAggregateInputType
  }

  export type OfficerFarmerAssignmentGroupByOutputType = {
    id: string
    officerId: string
    farmerId: string
    assignedAt: Date
    _count: OfficerFarmerAssignmentCountAggregateOutputType | null
    _min: OfficerFarmerAssignmentMinAggregateOutputType | null
    _max: OfficerFarmerAssignmentMaxAggregateOutputType | null
  }

  type GetOfficerFarmerAssignmentGroupByPayload<T extends OfficerFarmerAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficerFarmerAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficerFarmerAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficerFarmerAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], OfficerFarmerAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type OfficerFarmerAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officerId?: boolean
    farmerId?: boolean
    assignedAt?: boolean
    officer?: boolean | OfficerProfileDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officerFarmerAssignment"]>

  export type OfficerFarmerAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officerId?: boolean
    farmerId?: boolean
    assignedAt?: boolean
    officer?: boolean | OfficerProfileDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officerFarmerAssignment"]>

  export type OfficerFarmerAssignmentSelectScalar = {
    id?: boolean
    officerId?: boolean
    farmerId?: boolean
    assignedAt?: boolean
  }

  export type OfficerFarmerAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officer?: boolean | OfficerProfileDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerProfileDefaultArgs<ExtArgs>
  }
  export type OfficerFarmerAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officer?: boolean | OfficerProfileDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerProfileDefaultArgs<ExtArgs>
  }

  export type $OfficerFarmerAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfficerFarmerAssignment"
    objects: {
      officer: Prisma.$OfficerProfilePayload<ExtArgs>
      farmer: Prisma.$FarmerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      officerId: string
      farmerId: string
      assignedAt: Date
    }, ExtArgs["result"]["officerFarmerAssignment"]>
    composites: {}
  }

  type OfficerFarmerAssignmentGetPayload<S extends boolean | null | undefined | OfficerFarmerAssignmentDefaultArgs> = $Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload, S>

  type OfficerFarmerAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfficerFarmerAssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfficerFarmerAssignmentCountAggregateInputType | true
    }

  export interface OfficerFarmerAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfficerFarmerAssignment'], meta: { name: 'OfficerFarmerAssignment' } }
    /**
     * Find zero or one OfficerFarmerAssignment that matches the filter.
     * @param {OfficerFarmerAssignmentFindUniqueArgs} args - Arguments to find a OfficerFarmerAssignment
     * @example
     * // Get one OfficerFarmerAssignment
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficerFarmerAssignmentFindUniqueArgs>(args: SelectSubset<T, OfficerFarmerAssignmentFindUniqueArgs<ExtArgs>>): Prisma__OfficerFarmerAssignmentClient<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OfficerFarmerAssignment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfficerFarmerAssignmentFindUniqueOrThrowArgs} args - Arguments to find a OfficerFarmerAssignment
     * @example
     * // Get one OfficerFarmerAssignment
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficerFarmerAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficerFarmerAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficerFarmerAssignmentClient<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OfficerFarmerAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFarmerAssignmentFindFirstArgs} args - Arguments to find a OfficerFarmerAssignment
     * @example
     * // Get one OfficerFarmerAssignment
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficerFarmerAssignmentFindFirstArgs>(args?: SelectSubset<T, OfficerFarmerAssignmentFindFirstArgs<ExtArgs>>): Prisma__OfficerFarmerAssignmentClient<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OfficerFarmerAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFarmerAssignmentFindFirstOrThrowArgs} args - Arguments to find a OfficerFarmerAssignment
     * @example
     * // Get one OfficerFarmerAssignment
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficerFarmerAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficerFarmerAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficerFarmerAssignmentClient<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OfficerFarmerAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFarmerAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfficerFarmerAssignments
     * const officerFarmerAssignments = await prisma.officerFarmerAssignment.findMany()
     * 
     * // Get first 10 OfficerFarmerAssignments
     * const officerFarmerAssignments = await prisma.officerFarmerAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officerFarmerAssignmentWithIdOnly = await prisma.officerFarmerAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficerFarmerAssignmentFindManyArgs>(args?: SelectSubset<T, OfficerFarmerAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OfficerFarmerAssignment.
     * @param {OfficerFarmerAssignmentCreateArgs} args - Arguments to create a OfficerFarmerAssignment.
     * @example
     * // Create one OfficerFarmerAssignment
     * const OfficerFarmerAssignment = await prisma.officerFarmerAssignment.create({
     *   data: {
     *     // ... data to create a OfficerFarmerAssignment
     *   }
     * })
     * 
     */
    create<T extends OfficerFarmerAssignmentCreateArgs>(args: SelectSubset<T, OfficerFarmerAssignmentCreateArgs<ExtArgs>>): Prisma__OfficerFarmerAssignmentClient<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OfficerFarmerAssignments.
     * @param {OfficerFarmerAssignmentCreateManyArgs} args - Arguments to create many OfficerFarmerAssignments.
     * @example
     * // Create many OfficerFarmerAssignments
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficerFarmerAssignmentCreateManyArgs>(args?: SelectSubset<T, OfficerFarmerAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfficerFarmerAssignments and returns the data saved in the database.
     * @param {OfficerFarmerAssignmentCreateManyAndReturnArgs} args - Arguments to create many OfficerFarmerAssignments.
     * @example
     * // Create many OfficerFarmerAssignments
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfficerFarmerAssignments and only return the `id`
     * const officerFarmerAssignmentWithIdOnly = await prisma.officerFarmerAssignment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficerFarmerAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficerFarmerAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OfficerFarmerAssignment.
     * @param {OfficerFarmerAssignmentDeleteArgs} args - Arguments to delete one OfficerFarmerAssignment.
     * @example
     * // Delete one OfficerFarmerAssignment
     * const OfficerFarmerAssignment = await prisma.officerFarmerAssignment.delete({
     *   where: {
     *     // ... filter to delete one OfficerFarmerAssignment
     *   }
     * })
     * 
     */
    delete<T extends OfficerFarmerAssignmentDeleteArgs>(args: SelectSubset<T, OfficerFarmerAssignmentDeleteArgs<ExtArgs>>): Prisma__OfficerFarmerAssignmentClient<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OfficerFarmerAssignment.
     * @param {OfficerFarmerAssignmentUpdateArgs} args - Arguments to update one OfficerFarmerAssignment.
     * @example
     * // Update one OfficerFarmerAssignment
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficerFarmerAssignmentUpdateArgs>(args: SelectSubset<T, OfficerFarmerAssignmentUpdateArgs<ExtArgs>>): Prisma__OfficerFarmerAssignmentClient<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OfficerFarmerAssignments.
     * @param {OfficerFarmerAssignmentDeleteManyArgs} args - Arguments to filter OfficerFarmerAssignments to delete.
     * @example
     * // Delete a few OfficerFarmerAssignments
     * const { count } = await prisma.officerFarmerAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficerFarmerAssignmentDeleteManyArgs>(args?: SelectSubset<T, OfficerFarmerAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficerFarmerAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFarmerAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfficerFarmerAssignments
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficerFarmerAssignmentUpdateManyArgs>(args: SelectSubset<T, OfficerFarmerAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OfficerFarmerAssignment.
     * @param {OfficerFarmerAssignmentUpsertArgs} args - Arguments to update or create a OfficerFarmerAssignment.
     * @example
     * // Update or create a OfficerFarmerAssignment
     * const officerFarmerAssignment = await prisma.officerFarmerAssignment.upsert({
     *   create: {
     *     // ... data to create a OfficerFarmerAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfficerFarmerAssignment we want to update
     *   }
     * })
     */
    upsert<T extends OfficerFarmerAssignmentUpsertArgs>(args: SelectSubset<T, OfficerFarmerAssignmentUpsertArgs<ExtArgs>>): Prisma__OfficerFarmerAssignmentClient<$Result.GetResult<Prisma.$OfficerFarmerAssignmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OfficerFarmerAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFarmerAssignmentCountArgs} args - Arguments to filter OfficerFarmerAssignments to count.
     * @example
     * // Count the number of OfficerFarmerAssignments
     * const count = await prisma.officerFarmerAssignment.count({
     *   where: {
     *     // ... the filter for the OfficerFarmerAssignments we want to count
     *   }
     * })
    **/
    count<T extends OfficerFarmerAssignmentCountArgs>(
      args?: Subset<T, OfficerFarmerAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficerFarmerAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfficerFarmerAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFarmerAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfficerFarmerAssignmentAggregateArgs>(args: Subset<T, OfficerFarmerAssignmentAggregateArgs>): Prisma.PrismaPromise<GetOfficerFarmerAssignmentAggregateType<T>>

    /**
     * Group by OfficerFarmerAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFarmerAssignmentGroupByArgs} args - Group by arguments.
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
      T extends OfficerFarmerAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficerFarmerAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: OfficerFarmerAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfficerFarmerAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficerFarmerAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfficerFarmerAssignment model
   */
  readonly fields: OfficerFarmerAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfficerFarmerAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficerFarmerAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    officer<T extends OfficerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficerProfileDefaultArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    farmer<T extends FarmerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmerProfileDefaultArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OfficerFarmerAssignment model
   */ 
  interface OfficerFarmerAssignmentFieldRefs {
    readonly id: FieldRef<"OfficerFarmerAssignment", 'String'>
    readonly officerId: FieldRef<"OfficerFarmerAssignment", 'String'>
    readonly farmerId: FieldRef<"OfficerFarmerAssignment", 'String'>
    readonly assignedAt: FieldRef<"OfficerFarmerAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OfficerFarmerAssignment findUnique
   */
  export type OfficerFarmerAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which OfficerFarmerAssignment to fetch.
     */
    where: OfficerFarmerAssignmentWhereUniqueInput
  }

  /**
   * OfficerFarmerAssignment findUniqueOrThrow
   */
  export type OfficerFarmerAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which OfficerFarmerAssignment to fetch.
     */
    where: OfficerFarmerAssignmentWhereUniqueInput
  }

  /**
   * OfficerFarmerAssignment findFirst
   */
  export type OfficerFarmerAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which OfficerFarmerAssignment to fetch.
     */
    where?: OfficerFarmerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerFarmerAssignments to fetch.
     */
    orderBy?: OfficerFarmerAssignmentOrderByWithRelationInput | OfficerFarmerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficerFarmerAssignments.
     */
    cursor?: OfficerFarmerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerFarmerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerFarmerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficerFarmerAssignments.
     */
    distinct?: OfficerFarmerAssignmentScalarFieldEnum | OfficerFarmerAssignmentScalarFieldEnum[]
  }

  /**
   * OfficerFarmerAssignment findFirstOrThrow
   */
  export type OfficerFarmerAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which OfficerFarmerAssignment to fetch.
     */
    where?: OfficerFarmerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerFarmerAssignments to fetch.
     */
    orderBy?: OfficerFarmerAssignmentOrderByWithRelationInput | OfficerFarmerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficerFarmerAssignments.
     */
    cursor?: OfficerFarmerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerFarmerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerFarmerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficerFarmerAssignments.
     */
    distinct?: OfficerFarmerAssignmentScalarFieldEnum | OfficerFarmerAssignmentScalarFieldEnum[]
  }

  /**
   * OfficerFarmerAssignment findMany
   */
  export type OfficerFarmerAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which OfficerFarmerAssignments to fetch.
     */
    where?: OfficerFarmerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerFarmerAssignments to fetch.
     */
    orderBy?: OfficerFarmerAssignmentOrderByWithRelationInput | OfficerFarmerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfficerFarmerAssignments.
     */
    cursor?: OfficerFarmerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerFarmerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerFarmerAssignments.
     */
    skip?: number
    distinct?: OfficerFarmerAssignmentScalarFieldEnum | OfficerFarmerAssignmentScalarFieldEnum[]
  }

  /**
   * OfficerFarmerAssignment create
   */
  export type OfficerFarmerAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a OfficerFarmerAssignment.
     */
    data: XOR<OfficerFarmerAssignmentCreateInput, OfficerFarmerAssignmentUncheckedCreateInput>
  }

  /**
   * OfficerFarmerAssignment createMany
   */
  export type OfficerFarmerAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfficerFarmerAssignments.
     */
    data: OfficerFarmerAssignmentCreateManyInput | OfficerFarmerAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfficerFarmerAssignment createManyAndReturn
   */
  export type OfficerFarmerAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OfficerFarmerAssignments.
     */
    data: OfficerFarmerAssignmentCreateManyInput | OfficerFarmerAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfficerFarmerAssignment update
   */
  export type OfficerFarmerAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a OfficerFarmerAssignment.
     */
    data: XOR<OfficerFarmerAssignmentUpdateInput, OfficerFarmerAssignmentUncheckedUpdateInput>
    /**
     * Choose, which OfficerFarmerAssignment to update.
     */
    where: OfficerFarmerAssignmentWhereUniqueInput
  }

  /**
   * OfficerFarmerAssignment updateMany
   */
  export type OfficerFarmerAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfficerFarmerAssignments.
     */
    data: XOR<OfficerFarmerAssignmentUpdateManyMutationInput, OfficerFarmerAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which OfficerFarmerAssignments to update
     */
    where?: OfficerFarmerAssignmentWhereInput
  }

  /**
   * OfficerFarmerAssignment upsert
   */
  export type OfficerFarmerAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the OfficerFarmerAssignment to update in case it exists.
     */
    where: OfficerFarmerAssignmentWhereUniqueInput
    /**
     * In case the OfficerFarmerAssignment found by the `where` argument doesn't exist, create a new OfficerFarmerAssignment with this data.
     */
    create: XOR<OfficerFarmerAssignmentCreateInput, OfficerFarmerAssignmentUncheckedCreateInput>
    /**
     * In case the OfficerFarmerAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficerFarmerAssignmentUpdateInput, OfficerFarmerAssignmentUncheckedUpdateInput>
  }

  /**
   * OfficerFarmerAssignment delete
   */
  export type OfficerFarmerAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
    /**
     * Filter which OfficerFarmerAssignment to delete.
     */
    where: OfficerFarmerAssignmentWhereUniqueInput
  }

  /**
   * OfficerFarmerAssignment deleteMany
   */
  export type OfficerFarmerAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficerFarmerAssignments to delete
     */
    where?: OfficerFarmerAssignmentWhereInput
  }

  /**
   * OfficerFarmerAssignment without action
   */
  export type OfficerFarmerAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerFarmerAssignment
     */
    select?: OfficerFarmerAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerFarmerAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Farm
   */

  export type AggregateFarm = {
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  export type FarmAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    size: number | null
    healthScore: number | null
  }

  export type FarmSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    size: number | null
    healthScore: number | null
  }

  export type FarmMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    size: number | null
    cropType: string | null
    status: string | null
    healthScore: number | null
    createdAt: Date | null
  }

  export type FarmMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    size: number | null
    cropType: string | null
    status: string | null
    healthScore: number | null
    createdAt: Date | null
  }

  export type FarmCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    location: number
    latitude: number
    longitude: number
    size: number
    cropType: number
    status: number
    healthScore: number
    createdAt: number
    _all: number
  }


  export type FarmAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    size?: true
    healthScore?: true
  }

  export type FarmSumAggregateInputType = {
    latitude?: true
    longitude?: true
    size?: true
    healthScore?: true
  }

  export type FarmMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    latitude?: true
    longitude?: true
    size?: true
    cropType?: true
    status?: true
    healthScore?: true
    createdAt?: true
  }

  export type FarmMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    latitude?: true
    longitude?: true
    size?: true
    cropType?: true
    status?: true
    healthScore?: true
    createdAt?: true
  }

  export type FarmCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    latitude?: true
    longitude?: true
    size?: true
    cropType?: true
    status?: true
    healthScore?: true
    createdAt?: true
    _all?: true
  }

  export type FarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farm to aggregate.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farms
    **/
    _count?: true | FarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmMaxAggregateInputType
  }

  export type GetFarmAggregateType<T extends FarmAggregateArgs> = {
        [P in keyof T & keyof AggregateFarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarm[P]>
      : GetScalarType<T[P], AggregateFarm[P]>
  }




  export type FarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithAggregationInput | FarmOrderByWithAggregationInput[]
    by: FarmScalarFieldEnum[] | FarmScalarFieldEnum
    having?: FarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmCountAggregateInputType | true
    _avg?: FarmAvgAggregateInputType
    _sum?: FarmSumAggregateInputType
    _min?: FarmMinAggregateInputType
    _max?: FarmMaxAggregateInputType
  }

  export type FarmGroupByOutputType = {
    id: string
    userId: string
    name: string
    location: string | null
    latitude: number | null
    longitude: number | null
    size: number
    cropType: string | null
    status: string
    healthScore: number
    createdAt: Date
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  type GetFarmGroupByPayload<T extends FarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmGroupByOutputType[P]>
            : GetScalarType<T[P], FarmGroupByOutputType[P]>
        }
      >
    >


  export type FarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    size?: boolean
    cropType?: boolean
    status?: boolean
    healthScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    crops?: boolean | Farm$cropsArgs<ExtArgs>
    activities?: boolean | Farm$activitiesArgs<ExtArgs>
    diseaseAlerts?: boolean | Farm$diseaseAlertsArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    size?: boolean
    cropType?: boolean
    status?: boolean
    healthScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    size?: boolean
    cropType?: boolean
    status?: boolean
    healthScore?: boolean
    createdAt?: boolean
  }

  export type FarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    crops?: boolean | Farm$cropsArgs<ExtArgs>
    activities?: boolean | Farm$activitiesArgs<ExtArgs>
    diseaseAlerts?: boolean | Farm$diseaseAlertsArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farm"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      crops: Prisma.$CropPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      diseaseAlerts: Prisma.$DiseaseAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      location: string | null
      latitude: number | null
      longitude: number | null
      size: number
      cropType: string | null
      status: string
      healthScore: number
      createdAt: Date
    }, ExtArgs["result"]["farm"]>
    composites: {}
  }

  type FarmGetPayload<S extends boolean | null | undefined | FarmDefaultArgs> = $Result.GetResult<Prisma.$FarmPayload, S>

  type FarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FarmFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FarmCountAggregateInputType | true
    }

  export interface FarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farm'], meta: { name: 'Farm' } }
    /**
     * Find zero or one Farm that matches the filter.
     * @param {FarmFindUniqueArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmFindUniqueArgs>(args: SelectSubset<T, FarmFindUniqueArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Farm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FarmFindUniqueOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Farm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmFindFirstArgs>(args?: SelectSubset<T, FarmFindFirstArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Farm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farms
     * const farms = await prisma.farm.findMany()
     * 
     * // Get first 10 Farms
     * const farms = await prisma.farm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmWithIdOnly = await prisma.farm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmFindManyArgs>(args?: SelectSubset<T, FarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Farm.
     * @param {FarmCreateArgs} args - Arguments to create a Farm.
     * @example
     * // Create one Farm
     * const Farm = await prisma.farm.create({
     *   data: {
     *     // ... data to create a Farm
     *   }
     * })
     * 
     */
    create<T extends FarmCreateArgs>(args: SelectSubset<T, FarmCreateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Farms.
     * @param {FarmCreateManyArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmCreateManyArgs>(args?: SelectSubset<T, FarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Farms and returns the data saved in the database.
     * @param {FarmCreateManyAndReturnArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Farm.
     * @param {FarmDeleteArgs} args - Arguments to delete one Farm.
     * @example
     * // Delete one Farm
     * const Farm = await prisma.farm.delete({
     *   where: {
     *     // ... filter to delete one Farm
     *   }
     * })
     * 
     */
    delete<T extends FarmDeleteArgs>(args: SelectSubset<T, FarmDeleteArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Farm.
     * @param {FarmUpdateArgs} args - Arguments to update one Farm.
     * @example
     * // Update one Farm
     * const farm = await prisma.farm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmUpdateArgs>(args: SelectSubset<T, FarmUpdateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Farms.
     * @param {FarmDeleteManyArgs} args - Arguments to filter Farms to delete.
     * @example
     * // Delete a few Farms
     * const { count } = await prisma.farm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmDeleteManyArgs>(args?: SelectSubset<T, FarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmUpdateManyArgs>(args: SelectSubset<T, FarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farm.
     * @param {FarmUpsertArgs} args - Arguments to update or create a Farm.
     * @example
     * // Update or create a Farm
     * const farm = await prisma.farm.upsert({
     *   create: {
     *     // ... data to create a Farm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farm we want to update
     *   }
     * })
     */
    upsert<T extends FarmUpsertArgs>(args: SelectSubset<T, FarmUpsertArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCountArgs} args - Arguments to filter Farms to count.
     * @example
     * // Count the number of Farms
     * const count = await prisma.farm.count({
     *   where: {
     *     // ... the filter for the Farms we want to count
     *   }
     * })
    **/
    count<T extends FarmCountArgs>(
      args?: Subset<T, FarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmAggregateArgs>(args: Subset<T, FarmAggregateArgs>): Prisma.PrismaPromise<GetFarmAggregateType<T>>

    /**
     * Group by Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmGroupByArgs} args - Group by arguments.
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
      T extends FarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmGroupByArgs['orderBy'] }
        : { orderBy?: FarmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farm model
   */
  readonly fields: FarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    crops<T extends Farm$cropsArgs<ExtArgs> = {}>(args?: Subset<T, Farm$cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany"> | Null>
    activities<T extends Farm$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Farm$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany"> | Null>
    diseaseAlerts<T extends Farm$diseaseAlertsArgs<ExtArgs> = {}>(args?: Subset<T, Farm$diseaseAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Farm model
   */ 
  interface FarmFieldRefs {
    readonly id: FieldRef<"Farm", 'String'>
    readonly userId: FieldRef<"Farm", 'String'>
    readonly name: FieldRef<"Farm", 'String'>
    readonly location: FieldRef<"Farm", 'String'>
    readonly latitude: FieldRef<"Farm", 'Float'>
    readonly longitude: FieldRef<"Farm", 'Float'>
    readonly size: FieldRef<"Farm", 'Float'>
    readonly cropType: FieldRef<"Farm", 'String'>
    readonly status: FieldRef<"Farm", 'String'>
    readonly healthScore: FieldRef<"Farm", 'Int'>
    readonly createdAt: FieldRef<"Farm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Farm findUnique
   */
  export type FarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findUniqueOrThrow
   */
  export type FarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findFirst
   */
  export type FarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findFirstOrThrow
   */
  export type FarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findMany
   */
  export type FarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm create
   */
  export type FarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Farm.
     */
    data: XOR<FarmCreateInput, FarmUncheckedCreateInput>
  }

  /**
   * Farm createMany
   */
  export type FarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farm createManyAndReturn
   */
  export type FarmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Farm update
   */
  export type FarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Farm.
     */
    data: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
    /**
     * Choose, which Farm to update.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm updateMany
   */
  export type FarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
  }

  /**
   * Farm upsert
   */
  export type FarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Farm to update in case it exists.
     */
    where: FarmWhereUniqueInput
    /**
     * In case the Farm found by the `where` argument doesn't exist, create a new Farm with this data.
     */
    create: XOR<FarmCreateInput, FarmUncheckedCreateInput>
    /**
     * In case the Farm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
  }

  /**
   * Farm delete
   */
  export type FarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter which Farm to delete.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm deleteMany
   */
  export type FarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to delete
     */
    where?: FarmWhereInput
  }

  /**
   * Farm.crops
   */
  export type Farm$cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    where?: CropWhereInput
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    cursor?: CropWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Farm.activities
   */
  export type Farm$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Farm.diseaseAlerts
   */
  export type Farm$diseaseAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    where?: DiseaseAlertWhereInput
    orderBy?: DiseaseAlertOrderByWithRelationInput | DiseaseAlertOrderByWithRelationInput[]
    cursor?: DiseaseAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiseaseAlertScalarFieldEnum | DiseaseAlertScalarFieldEnum[]
  }

  /**
   * Farm without action
   */
  export type FarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
  }


  /**
   * Model Crop
   */

  export type AggregateCrop = {
    _count: CropCountAggregateOutputType | null
    _avg: CropAvgAggregateOutputType | null
    _sum: CropSumAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  export type CropAvgAggregateOutputType = {
    progress: number | null
  }

  export type CropSumAggregateOutputType = {
    progress: number | null
  }

  export type CropMinAggregateOutputType = {
    id: string | null
    farmId: string | null
    name: string | null
    variety: string | null
    plantingDate: Date | null
    expectedHarvest: Date | null
    growthStage: string | null
    healthStatus: string | null
    progress: number | null
  }

  export type CropMaxAggregateOutputType = {
    id: string | null
    farmId: string | null
    name: string | null
    variety: string | null
    plantingDate: Date | null
    expectedHarvest: Date | null
    growthStage: string | null
    healthStatus: string | null
    progress: number | null
  }

  export type CropCountAggregateOutputType = {
    id: number
    farmId: number
    name: number
    variety: number
    plantingDate: number
    expectedHarvest: number
    growthStage: number
    healthStatus: number
    progress: number
    _all: number
  }


  export type CropAvgAggregateInputType = {
    progress?: true
  }

  export type CropSumAggregateInputType = {
    progress?: true
  }

  export type CropMinAggregateInputType = {
    id?: true
    farmId?: true
    name?: true
    variety?: true
    plantingDate?: true
    expectedHarvest?: true
    growthStage?: true
    healthStatus?: true
    progress?: true
  }

  export type CropMaxAggregateInputType = {
    id?: true
    farmId?: true
    name?: true
    variety?: true
    plantingDate?: true
    expectedHarvest?: true
    growthStage?: true
    healthStatus?: true
    progress?: true
  }

  export type CropCountAggregateInputType = {
    id?: true
    farmId?: true
    name?: true
    variety?: true
    plantingDate?: true
    expectedHarvest?: true
    growthStage?: true
    healthStatus?: true
    progress?: true
    _all?: true
  }

  export type CropAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crop to aggregate.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crops
    **/
    _count?: true | CropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CropAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CropSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropMaxAggregateInputType
  }

  export type GetCropAggregateType<T extends CropAggregateArgs> = {
        [P in keyof T & keyof AggregateCrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrop[P]>
      : GetScalarType<T[P], AggregateCrop[P]>
  }




  export type CropGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropWhereInput
    orderBy?: CropOrderByWithAggregationInput | CropOrderByWithAggregationInput[]
    by: CropScalarFieldEnum[] | CropScalarFieldEnum
    having?: CropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropCountAggregateInputType | true
    _avg?: CropAvgAggregateInputType
    _sum?: CropSumAggregateInputType
    _min?: CropMinAggregateInputType
    _max?: CropMaxAggregateInputType
  }

  export type CropGroupByOutputType = {
    id: string
    farmId: string
    name: string
    variety: string | null
    plantingDate: Date
    expectedHarvest: Date | null
    growthStage: string
    healthStatus: string
    progress: number
    _count: CropCountAggregateOutputType | null
    _avg: CropAvgAggregateOutputType | null
    _sum: CropSumAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  type GetCropGroupByPayload<T extends CropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropGroupByOutputType[P]>
            : GetScalarType<T[P], CropGroupByOutputType[P]>
        }
      >
    >


  export type CropSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    name?: boolean
    variety?: boolean
    plantingDate?: boolean
    expectedHarvest?: boolean
    growthStage?: boolean
    healthStatus?: boolean
    progress?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crop"]>

  export type CropSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    name?: boolean
    variety?: boolean
    plantingDate?: boolean
    expectedHarvest?: boolean
    growthStage?: boolean
    healthStatus?: boolean
    progress?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crop"]>

  export type CropSelectScalar = {
    id?: boolean
    farmId?: boolean
    name?: boolean
    variety?: boolean
    plantingDate?: boolean
    expectedHarvest?: boolean
    growthStage?: boolean
    healthStatus?: boolean
    progress?: boolean
  }

  export type CropInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }
  export type CropIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }

  export type $CropPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crop"
    objects: {
      farm: Prisma.$FarmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      farmId: string
      name: string
      variety: string | null
      plantingDate: Date
      expectedHarvest: Date | null
      growthStage: string
      healthStatus: string
      progress: number
    }, ExtArgs["result"]["crop"]>
    composites: {}
  }

  type CropGetPayload<S extends boolean | null | undefined | CropDefaultArgs> = $Result.GetResult<Prisma.$CropPayload, S>

  type CropCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CropFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CropCountAggregateInputType | true
    }

  export interface CropDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crop'], meta: { name: 'Crop' } }
    /**
     * Find zero or one Crop that matches the filter.
     * @param {CropFindUniqueArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropFindUniqueArgs>(args: SelectSubset<T, CropFindUniqueArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Crop that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CropFindUniqueOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropFindUniqueOrThrowArgs>(args: SelectSubset<T, CropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Crop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropFindFirstArgs>(args?: SelectSubset<T, CropFindFirstArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Crop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropFindFirstOrThrowArgs>(args?: SelectSubset<T, CropFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crop.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropWithIdOnly = await prisma.crop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CropFindManyArgs>(args?: SelectSubset<T, CropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Crop.
     * @param {CropCreateArgs} args - Arguments to create a Crop.
     * @example
     * // Create one Crop
     * const Crop = await prisma.crop.create({
     *   data: {
     *     // ... data to create a Crop
     *   }
     * })
     * 
     */
    create<T extends CropCreateArgs>(args: SelectSubset<T, CropCreateArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Crops.
     * @param {CropCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropCreateManyArgs>(args?: SelectSubset<T, CropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crops and returns the data saved in the database.
     * @param {CropCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crops and only return the `id`
     * const cropWithIdOnly = await prisma.crop.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropCreateManyAndReturnArgs>(args?: SelectSubset<T, CropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Crop.
     * @param {CropDeleteArgs} args - Arguments to delete one Crop.
     * @example
     * // Delete one Crop
     * const Crop = await prisma.crop.delete({
     *   where: {
     *     // ... filter to delete one Crop
     *   }
     * })
     * 
     */
    delete<T extends CropDeleteArgs>(args: SelectSubset<T, CropDeleteArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Crop.
     * @param {CropUpdateArgs} args - Arguments to update one Crop.
     * @example
     * // Update one Crop
     * const crop = await prisma.crop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropUpdateArgs>(args: SelectSubset<T, CropUpdateArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Crops.
     * @param {CropDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropDeleteManyArgs>(args?: SelectSubset<T, CropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropUpdateManyArgs>(args: SelectSubset<T, CropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Crop.
     * @param {CropUpsertArgs} args - Arguments to update or create a Crop.
     * @example
     * // Update or create a Crop
     * const crop = await prisma.crop.upsert({
     *   create: {
     *     // ... data to create a Crop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crop we want to update
     *   }
     * })
     */
    upsert<T extends CropUpsertArgs>(args: SelectSubset<T, CropUpsertArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crop.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends CropCountArgs>(
      args?: Subset<T, CropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropAggregateArgs>(args: Subset<T, CropAggregateArgs>): Prisma.PrismaPromise<GetCropAggregateType<T>>

    /**
     * Group by Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropGroupByArgs} args - Group by arguments.
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
      T extends CropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropGroupByArgs['orderBy'] }
        : { orderBy?: CropGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crop model
   */
  readonly fields: CropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farm<T extends FarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmDefaultArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Crop model
   */ 
  interface CropFieldRefs {
    readonly id: FieldRef<"Crop", 'String'>
    readonly farmId: FieldRef<"Crop", 'String'>
    readonly name: FieldRef<"Crop", 'String'>
    readonly variety: FieldRef<"Crop", 'String'>
    readonly plantingDate: FieldRef<"Crop", 'DateTime'>
    readonly expectedHarvest: FieldRef<"Crop", 'DateTime'>
    readonly growthStage: FieldRef<"Crop", 'String'>
    readonly healthStatus: FieldRef<"Crop", 'String'>
    readonly progress: FieldRef<"Crop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Crop findUnique
   */
  export type CropFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findUniqueOrThrow
   */
  export type CropFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findFirst
   */
  export type CropFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findFirstOrThrow
   */
  export type CropFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findMany
   */
  export type CropFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop create
   */
  export type CropCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The data needed to create a Crop.
     */
    data: XOR<CropCreateInput, CropUncheckedCreateInput>
  }

  /**
   * Crop createMany
   */
  export type CropCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crop createManyAndReturn
   */
  export type CropCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crop update
   */
  export type CropUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The data needed to update a Crop.
     */
    data: XOR<CropUpdateInput, CropUncheckedUpdateInput>
    /**
     * Choose, which Crop to update.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop updateMany
   */
  export type CropUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crops.
     */
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropWhereInput
  }

  /**
   * Crop upsert
   */
  export type CropUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The filter to search for the Crop to update in case it exists.
     */
    where: CropWhereUniqueInput
    /**
     * In case the Crop found by the `where` argument doesn't exist, create a new Crop with this data.
     */
    create: XOR<CropCreateInput, CropUncheckedCreateInput>
    /**
     * In case the Crop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropUpdateInput, CropUncheckedUpdateInput>
  }

  /**
   * Crop delete
   */
  export type CropDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter which Crop to delete.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop deleteMany
   */
  export type CropDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crops to delete
     */
    where?: CropWhereInput
  }

  /**
   * Crop without action
   */
  export type CropDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    cost: number | null
  }

  export type ActivitySumAggregateOutputType = {
    cost: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    farmId: string | null
    type: string | null
    description: string | null
    date: Date | null
    status: string | null
    cost: number | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    farmId: string | null
    type: string | null
    description: string | null
    date: Date | null
    status: string | null
    cost: number | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    farmId: number
    type: number
    description: number
    date: number
    status: number
    cost: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    cost?: true
  }

  export type ActivitySumAggregateInputType = {
    cost?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    farmId?: true
    type?: true
    description?: true
    date?: true
    status?: true
    cost?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    farmId?: true
    type?: true
    description?: true
    date?: true
    status?: true
    cost?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    farmId?: true
    type?: true
    description?: true
    date?: true
    status?: true
    cost?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    farmId: string
    type: string
    description: string | null
    date: Date
    status: string
    cost: number
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    cost?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    cost?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    farmId?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    cost?: boolean
  }

  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      farm: Prisma.$FarmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      farmId: string
      type: string
      description: string | null
      date: Date
      status: string
      cost: number
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farm<T extends FarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmDefaultArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Activity model
   */ 
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly farmId: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly date: FieldRef<"Activity", 'DateTime'>
    readonly status: FieldRef<"Activity", 'String'>
    readonly cost: FieldRef<"Activity", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model DiseaseAlert
   */

  export type AggregateDiseaseAlert = {
    _count: DiseaseAlertCountAggregateOutputType | null
    _min: DiseaseAlertMinAggregateOutputType | null
    _max: DiseaseAlertMaxAggregateOutputType | null
  }

  export type DiseaseAlertMinAggregateOutputType = {
    id: string | null
    farmId: string | null
    diseaseName: string | null
    severity: string | null
    detectedAt: Date | null
    imageUrl: string | null
    status: string | null
    recommendation: string | null
  }

  export type DiseaseAlertMaxAggregateOutputType = {
    id: string | null
    farmId: string | null
    diseaseName: string | null
    severity: string | null
    detectedAt: Date | null
    imageUrl: string | null
    status: string | null
    recommendation: string | null
  }

  export type DiseaseAlertCountAggregateOutputType = {
    id: number
    farmId: number
    diseaseName: number
    severity: number
    detectedAt: number
    imageUrl: number
    status: number
    recommendation: number
    _all: number
  }


  export type DiseaseAlertMinAggregateInputType = {
    id?: true
    farmId?: true
    diseaseName?: true
    severity?: true
    detectedAt?: true
    imageUrl?: true
    status?: true
    recommendation?: true
  }

  export type DiseaseAlertMaxAggregateInputType = {
    id?: true
    farmId?: true
    diseaseName?: true
    severity?: true
    detectedAt?: true
    imageUrl?: true
    status?: true
    recommendation?: true
  }

  export type DiseaseAlertCountAggregateInputType = {
    id?: true
    farmId?: true
    diseaseName?: true
    severity?: true
    detectedAt?: true
    imageUrl?: true
    status?: true
    recommendation?: true
    _all?: true
  }

  export type DiseaseAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiseaseAlert to aggregate.
     */
    where?: DiseaseAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseAlerts to fetch.
     */
    orderBy?: DiseaseAlertOrderByWithRelationInput | DiseaseAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiseaseAlerts
    **/
    _count?: true | DiseaseAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseAlertMaxAggregateInputType
  }

  export type GetDiseaseAlertAggregateType<T extends DiseaseAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateDiseaseAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiseaseAlert[P]>
      : GetScalarType<T[P], AggregateDiseaseAlert[P]>
  }




  export type DiseaseAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseAlertWhereInput
    orderBy?: DiseaseAlertOrderByWithAggregationInput | DiseaseAlertOrderByWithAggregationInput[]
    by: DiseaseAlertScalarFieldEnum[] | DiseaseAlertScalarFieldEnum
    having?: DiseaseAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseAlertCountAggregateInputType | true
    _min?: DiseaseAlertMinAggregateInputType
    _max?: DiseaseAlertMaxAggregateInputType
  }

  export type DiseaseAlertGroupByOutputType = {
    id: string
    farmId: string
    diseaseName: string
    severity: string
    detectedAt: Date
    imageUrl: string | null
    status: string
    recommendation: string | null
    _count: DiseaseAlertCountAggregateOutputType | null
    _min: DiseaseAlertMinAggregateOutputType | null
    _max: DiseaseAlertMaxAggregateOutputType | null
  }

  type GetDiseaseAlertGroupByPayload<T extends DiseaseAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseAlertGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseAlertGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    diseaseName?: boolean
    severity?: boolean
    detectedAt?: boolean
    imageUrl?: boolean
    status?: boolean
    recommendation?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseaseAlert"]>

  export type DiseaseAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    diseaseName?: boolean
    severity?: boolean
    detectedAt?: boolean
    imageUrl?: boolean
    status?: boolean
    recommendation?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseaseAlert"]>

  export type DiseaseAlertSelectScalar = {
    id?: boolean
    farmId?: boolean
    diseaseName?: boolean
    severity?: boolean
    detectedAt?: boolean
    imageUrl?: boolean
    status?: boolean
    recommendation?: boolean
  }

  export type DiseaseAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }
  export type DiseaseAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }

  export type $DiseaseAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiseaseAlert"
    objects: {
      farm: Prisma.$FarmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      farmId: string
      diseaseName: string
      severity: string
      detectedAt: Date
      imageUrl: string | null
      status: string
      recommendation: string | null
    }, ExtArgs["result"]["diseaseAlert"]>
    composites: {}
  }

  type DiseaseAlertGetPayload<S extends boolean | null | undefined | DiseaseAlertDefaultArgs> = $Result.GetResult<Prisma.$DiseaseAlertPayload, S>

  type DiseaseAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiseaseAlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiseaseAlertCountAggregateInputType | true
    }

  export interface DiseaseAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiseaseAlert'], meta: { name: 'DiseaseAlert' } }
    /**
     * Find zero or one DiseaseAlert that matches the filter.
     * @param {DiseaseAlertFindUniqueArgs} args - Arguments to find a DiseaseAlert
     * @example
     * // Get one DiseaseAlert
     * const diseaseAlert = await prisma.diseaseAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseAlertFindUniqueArgs>(args: SelectSubset<T, DiseaseAlertFindUniqueArgs<ExtArgs>>): Prisma__DiseaseAlertClient<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DiseaseAlert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiseaseAlertFindUniqueOrThrowArgs} args - Arguments to find a DiseaseAlert
     * @example
     * // Get one DiseaseAlert
     * const diseaseAlert = await prisma.diseaseAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseAlertClient<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DiseaseAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAlertFindFirstArgs} args - Arguments to find a DiseaseAlert
     * @example
     * // Get one DiseaseAlert
     * const diseaseAlert = await prisma.diseaseAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseAlertFindFirstArgs>(args?: SelectSubset<T, DiseaseAlertFindFirstArgs<ExtArgs>>): Prisma__DiseaseAlertClient<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DiseaseAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAlertFindFirstOrThrowArgs} args - Arguments to find a DiseaseAlert
     * @example
     * // Get one DiseaseAlert
     * const diseaseAlert = await prisma.diseaseAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseAlertClient<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DiseaseAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiseaseAlerts
     * const diseaseAlerts = await prisma.diseaseAlert.findMany()
     * 
     * // Get first 10 DiseaseAlerts
     * const diseaseAlerts = await prisma.diseaseAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseAlertWithIdOnly = await prisma.diseaseAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseAlertFindManyArgs>(args?: SelectSubset<T, DiseaseAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DiseaseAlert.
     * @param {DiseaseAlertCreateArgs} args - Arguments to create a DiseaseAlert.
     * @example
     * // Create one DiseaseAlert
     * const DiseaseAlert = await prisma.diseaseAlert.create({
     *   data: {
     *     // ... data to create a DiseaseAlert
     *   }
     * })
     * 
     */
    create<T extends DiseaseAlertCreateArgs>(args: SelectSubset<T, DiseaseAlertCreateArgs<ExtArgs>>): Prisma__DiseaseAlertClient<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DiseaseAlerts.
     * @param {DiseaseAlertCreateManyArgs} args - Arguments to create many DiseaseAlerts.
     * @example
     * // Create many DiseaseAlerts
     * const diseaseAlert = await prisma.diseaseAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseAlertCreateManyArgs>(args?: SelectSubset<T, DiseaseAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiseaseAlerts and returns the data saved in the database.
     * @param {DiseaseAlertCreateManyAndReturnArgs} args - Arguments to create many DiseaseAlerts.
     * @example
     * // Create many DiseaseAlerts
     * const diseaseAlert = await prisma.diseaseAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiseaseAlerts and only return the `id`
     * const diseaseAlertWithIdOnly = await prisma.diseaseAlert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseaseAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseaseAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DiseaseAlert.
     * @param {DiseaseAlertDeleteArgs} args - Arguments to delete one DiseaseAlert.
     * @example
     * // Delete one DiseaseAlert
     * const DiseaseAlert = await prisma.diseaseAlert.delete({
     *   where: {
     *     // ... filter to delete one DiseaseAlert
     *   }
     * })
     * 
     */
    delete<T extends DiseaseAlertDeleteArgs>(args: SelectSubset<T, DiseaseAlertDeleteArgs<ExtArgs>>): Prisma__DiseaseAlertClient<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DiseaseAlert.
     * @param {DiseaseAlertUpdateArgs} args - Arguments to update one DiseaseAlert.
     * @example
     * // Update one DiseaseAlert
     * const diseaseAlert = await prisma.diseaseAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseAlertUpdateArgs>(args: SelectSubset<T, DiseaseAlertUpdateArgs<ExtArgs>>): Prisma__DiseaseAlertClient<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DiseaseAlerts.
     * @param {DiseaseAlertDeleteManyArgs} args - Arguments to filter DiseaseAlerts to delete.
     * @example
     * // Delete a few DiseaseAlerts
     * const { count } = await prisma.diseaseAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseAlertDeleteManyArgs>(args?: SelectSubset<T, DiseaseAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiseaseAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiseaseAlerts
     * const diseaseAlert = await prisma.diseaseAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseAlertUpdateManyArgs>(args: SelectSubset<T, DiseaseAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiseaseAlert.
     * @param {DiseaseAlertUpsertArgs} args - Arguments to update or create a DiseaseAlert.
     * @example
     * // Update or create a DiseaseAlert
     * const diseaseAlert = await prisma.diseaseAlert.upsert({
     *   create: {
     *     // ... data to create a DiseaseAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiseaseAlert we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseAlertUpsertArgs>(args: SelectSubset<T, DiseaseAlertUpsertArgs<ExtArgs>>): Prisma__DiseaseAlertClient<$Result.GetResult<Prisma.$DiseaseAlertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DiseaseAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAlertCountArgs} args - Arguments to filter DiseaseAlerts to count.
     * @example
     * // Count the number of DiseaseAlerts
     * const count = await prisma.diseaseAlert.count({
     *   where: {
     *     // ... the filter for the DiseaseAlerts we want to count
     *   }
     * })
    **/
    count<T extends DiseaseAlertCountArgs>(
      args?: Subset<T, DiseaseAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiseaseAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiseaseAlertAggregateArgs>(args: Subset<T, DiseaseAlertAggregateArgs>): Prisma.PrismaPromise<GetDiseaseAlertAggregateType<T>>

    /**
     * Group by DiseaseAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAlertGroupByArgs} args - Group by arguments.
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
      T extends DiseaseAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseAlertGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiseaseAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiseaseAlert model
   */
  readonly fields: DiseaseAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiseaseAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farm<T extends FarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmDefaultArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DiseaseAlert model
   */ 
  interface DiseaseAlertFieldRefs {
    readonly id: FieldRef<"DiseaseAlert", 'String'>
    readonly farmId: FieldRef<"DiseaseAlert", 'String'>
    readonly diseaseName: FieldRef<"DiseaseAlert", 'String'>
    readonly severity: FieldRef<"DiseaseAlert", 'String'>
    readonly detectedAt: FieldRef<"DiseaseAlert", 'DateTime'>
    readonly imageUrl: FieldRef<"DiseaseAlert", 'String'>
    readonly status: FieldRef<"DiseaseAlert", 'String'>
    readonly recommendation: FieldRef<"DiseaseAlert", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiseaseAlert findUnique
   */
  export type DiseaseAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseAlert to fetch.
     */
    where: DiseaseAlertWhereUniqueInput
  }

  /**
   * DiseaseAlert findUniqueOrThrow
   */
  export type DiseaseAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseAlert to fetch.
     */
    where: DiseaseAlertWhereUniqueInput
  }

  /**
   * DiseaseAlert findFirst
   */
  export type DiseaseAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseAlert to fetch.
     */
    where?: DiseaseAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseAlerts to fetch.
     */
    orderBy?: DiseaseAlertOrderByWithRelationInput | DiseaseAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiseaseAlerts.
     */
    cursor?: DiseaseAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiseaseAlerts.
     */
    distinct?: DiseaseAlertScalarFieldEnum | DiseaseAlertScalarFieldEnum[]
  }

  /**
   * DiseaseAlert findFirstOrThrow
   */
  export type DiseaseAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseAlert to fetch.
     */
    where?: DiseaseAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseAlerts to fetch.
     */
    orderBy?: DiseaseAlertOrderByWithRelationInput | DiseaseAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiseaseAlerts.
     */
    cursor?: DiseaseAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiseaseAlerts.
     */
    distinct?: DiseaseAlertScalarFieldEnum | DiseaseAlertScalarFieldEnum[]
  }

  /**
   * DiseaseAlert findMany
   */
  export type DiseaseAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseAlerts to fetch.
     */
    where?: DiseaseAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseAlerts to fetch.
     */
    orderBy?: DiseaseAlertOrderByWithRelationInput | DiseaseAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiseaseAlerts.
     */
    cursor?: DiseaseAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseAlerts.
     */
    skip?: number
    distinct?: DiseaseAlertScalarFieldEnum | DiseaseAlertScalarFieldEnum[]
  }

  /**
   * DiseaseAlert create
   */
  export type DiseaseAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a DiseaseAlert.
     */
    data: XOR<DiseaseAlertCreateInput, DiseaseAlertUncheckedCreateInput>
  }

  /**
   * DiseaseAlert createMany
   */
  export type DiseaseAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiseaseAlerts.
     */
    data: DiseaseAlertCreateManyInput | DiseaseAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiseaseAlert createManyAndReturn
   */
  export type DiseaseAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DiseaseAlerts.
     */
    data: DiseaseAlertCreateManyInput | DiseaseAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiseaseAlert update
   */
  export type DiseaseAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a DiseaseAlert.
     */
    data: XOR<DiseaseAlertUpdateInput, DiseaseAlertUncheckedUpdateInput>
    /**
     * Choose, which DiseaseAlert to update.
     */
    where: DiseaseAlertWhereUniqueInput
  }

  /**
   * DiseaseAlert updateMany
   */
  export type DiseaseAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiseaseAlerts.
     */
    data: XOR<DiseaseAlertUpdateManyMutationInput, DiseaseAlertUncheckedUpdateManyInput>
    /**
     * Filter which DiseaseAlerts to update
     */
    where?: DiseaseAlertWhereInput
  }

  /**
   * DiseaseAlert upsert
   */
  export type DiseaseAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the DiseaseAlert to update in case it exists.
     */
    where: DiseaseAlertWhereUniqueInput
    /**
     * In case the DiseaseAlert found by the `where` argument doesn't exist, create a new DiseaseAlert with this data.
     */
    create: XOR<DiseaseAlertCreateInput, DiseaseAlertUncheckedCreateInput>
    /**
     * In case the DiseaseAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseAlertUpdateInput, DiseaseAlertUncheckedUpdateInput>
  }

  /**
   * DiseaseAlert delete
   */
  export type DiseaseAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
    /**
     * Filter which DiseaseAlert to delete.
     */
    where: DiseaseAlertWhereUniqueInput
  }

  /**
   * DiseaseAlert deleteMany
   */
  export type DiseaseAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiseaseAlerts to delete
     */
    where?: DiseaseAlertWhereInput
  }

  /**
   * DiseaseAlert without action
   */
  export type DiseaseAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseAlert
     */
    select?: DiseaseAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseAlertInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationMinAggregateOutputType = {
    id: string | null
    officerId: string | null
    farmerId: string | null
    message: string | null
    sent: boolean | null
    createdAt: Date | null
  }

  export type RecommendationMaxAggregateOutputType = {
    id: string | null
    officerId: string | null
    farmerId: string | null
    message: string | null
    sent: boolean | null
    createdAt: Date | null
  }

  export type RecommendationCountAggregateOutputType = {
    id: number
    officerId: number
    farmerId: number
    message: number
    sent: number
    createdAt: number
    _all: number
  }


  export type RecommendationMinAggregateInputType = {
    id?: true
    officerId?: true
    farmerId?: true
    message?: true
    sent?: true
    createdAt?: true
  }

  export type RecommendationMaxAggregateInputType = {
    id?: true
    officerId?: true
    farmerId?: true
    message?: true
    sent?: true
    createdAt?: true
  }

  export type RecommendationCountAggregateInputType = {
    id?: true
    officerId?: true
    farmerId?: true
    message?: true
    sent?: true
    createdAt?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    id: string
    officerId: string
    farmerId: string
    message: string
    sent: boolean
    createdAt: Date
    _count: RecommendationCountAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officerId?: boolean
    farmerId?: boolean
    message?: boolean
    sent?: boolean
    createdAt?: boolean
    officer?: boolean | OfficerProfileDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officerId?: boolean
    farmerId?: boolean
    message?: boolean
    sent?: boolean
    createdAt?: boolean
    officer?: boolean | OfficerProfileDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    id?: boolean
    officerId?: boolean
    farmerId?: boolean
    message?: boolean
    sent?: boolean
    createdAt?: boolean
  }

  export type RecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officer?: boolean | OfficerProfileDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerProfileDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officer?: boolean | OfficerProfileDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerProfileDefaultArgs<ExtArgs>
  }

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {
      officer: Prisma.$OfficerProfilePayload<ExtArgs>
      farmer: Prisma.$FarmerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      officerId: string
      farmerId: string
      message: string
      sent: boolean
      createdAt: Date
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
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
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    officer<T extends OfficerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficerProfileDefaultArgs<ExtArgs>>): Prisma__OfficerProfileClient<$Result.GetResult<Prisma.$OfficerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    farmer<T extends FarmerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmerProfileDefaultArgs<ExtArgs>>): Prisma__FarmerProfileClient<$Result.GetResult<Prisma.$FarmerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Recommendation model
   */ 
  interface RecommendationFieldRefs {
    readonly id: FieldRef<"Recommendation", 'String'>
    readonly officerId: FieldRef<"Recommendation", 'String'>
    readonly farmerId: FieldRef<"Recommendation", 'String'>
    readonly message: FieldRef<"Recommendation", 'String'>
    readonly sent: FieldRef<"Recommendation", 'Boolean'>
    readonly createdAt: FieldRef<"Recommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
  }


  /**
   * Model CropType
   */

  export type AggregateCropType = {
    _count: CropTypeCountAggregateOutputType | null
    _min: CropTypeMinAggregateOutputType | null
    _max: CropTypeMaxAggregateOutputType | null
  }

  export type CropTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    variety: string | null
    season: string | null
  }

  export type CropTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    variety: string | null
    season: string | null
  }

  export type CropTypeCountAggregateOutputType = {
    id: number
    name: number
    variety: number
    season: number
    _all: number
  }


  export type CropTypeMinAggregateInputType = {
    id?: true
    name?: true
    variety?: true
    season?: true
  }

  export type CropTypeMaxAggregateInputType = {
    id?: true
    name?: true
    variety?: true
    season?: true
  }

  export type CropTypeCountAggregateInputType = {
    id?: true
    name?: true
    variety?: true
    season?: true
    _all?: true
  }

  export type CropTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CropType to aggregate.
     */
    where?: CropTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropTypes to fetch.
     */
    orderBy?: CropTypeOrderByWithRelationInput | CropTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CropTypes
    **/
    _count?: true | CropTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropTypeMaxAggregateInputType
  }

  export type GetCropTypeAggregateType<T extends CropTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateCropType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCropType[P]>
      : GetScalarType<T[P], AggregateCropType[P]>
  }




  export type CropTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropTypeWhereInput
    orderBy?: CropTypeOrderByWithAggregationInput | CropTypeOrderByWithAggregationInput[]
    by: CropTypeScalarFieldEnum[] | CropTypeScalarFieldEnum
    having?: CropTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropTypeCountAggregateInputType | true
    _min?: CropTypeMinAggregateInputType
    _max?: CropTypeMaxAggregateInputType
  }

  export type CropTypeGroupByOutputType = {
    id: string
    name: string
    variety: string | null
    season: string | null
    _count: CropTypeCountAggregateOutputType | null
    _min: CropTypeMinAggregateOutputType | null
    _max: CropTypeMaxAggregateOutputType | null
  }

  type GetCropTypeGroupByPayload<T extends CropTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropTypeGroupByOutputType[P]>
            : GetScalarType<T[P], CropTypeGroupByOutputType[P]>
        }
      >
    >


  export type CropTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    variety?: boolean
    season?: boolean
  }, ExtArgs["result"]["cropType"]>

  export type CropTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    variety?: boolean
    season?: boolean
  }, ExtArgs["result"]["cropType"]>

  export type CropTypeSelectScalar = {
    id?: boolean
    name?: boolean
    variety?: boolean
    season?: boolean
  }


  export type $CropTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CropType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      variety: string | null
      season: string | null
    }, ExtArgs["result"]["cropType"]>
    composites: {}
  }

  type CropTypeGetPayload<S extends boolean | null | undefined | CropTypeDefaultArgs> = $Result.GetResult<Prisma.$CropTypePayload, S>

  type CropTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CropTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CropTypeCountAggregateInputType | true
    }

  export interface CropTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CropType'], meta: { name: 'CropType' } }
    /**
     * Find zero or one CropType that matches the filter.
     * @param {CropTypeFindUniqueArgs} args - Arguments to find a CropType
     * @example
     * // Get one CropType
     * const cropType = await prisma.cropType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropTypeFindUniqueArgs>(args: SelectSubset<T, CropTypeFindUniqueArgs<ExtArgs>>): Prisma__CropTypeClient<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CropType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CropTypeFindUniqueOrThrowArgs} args - Arguments to find a CropType
     * @example
     * // Get one CropType
     * const cropType = await prisma.cropType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, CropTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropTypeClient<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CropType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropTypeFindFirstArgs} args - Arguments to find a CropType
     * @example
     * // Get one CropType
     * const cropType = await prisma.cropType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropTypeFindFirstArgs>(args?: SelectSubset<T, CropTypeFindFirstArgs<ExtArgs>>): Prisma__CropTypeClient<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CropType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropTypeFindFirstOrThrowArgs} args - Arguments to find a CropType
     * @example
     * // Get one CropType
     * const cropType = await prisma.cropType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, CropTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropTypeClient<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CropTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CropTypes
     * const cropTypes = await prisma.cropType.findMany()
     * 
     * // Get first 10 CropTypes
     * const cropTypes = await prisma.cropType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropTypeWithIdOnly = await prisma.cropType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CropTypeFindManyArgs>(args?: SelectSubset<T, CropTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CropType.
     * @param {CropTypeCreateArgs} args - Arguments to create a CropType.
     * @example
     * // Create one CropType
     * const CropType = await prisma.cropType.create({
     *   data: {
     *     // ... data to create a CropType
     *   }
     * })
     * 
     */
    create<T extends CropTypeCreateArgs>(args: SelectSubset<T, CropTypeCreateArgs<ExtArgs>>): Prisma__CropTypeClient<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CropTypes.
     * @param {CropTypeCreateManyArgs} args - Arguments to create many CropTypes.
     * @example
     * // Create many CropTypes
     * const cropType = await prisma.cropType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropTypeCreateManyArgs>(args?: SelectSubset<T, CropTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CropTypes and returns the data saved in the database.
     * @param {CropTypeCreateManyAndReturnArgs} args - Arguments to create many CropTypes.
     * @example
     * // Create many CropTypes
     * const cropType = await prisma.cropType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CropTypes and only return the `id`
     * const cropTypeWithIdOnly = await prisma.cropType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, CropTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CropType.
     * @param {CropTypeDeleteArgs} args - Arguments to delete one CropType.
     * @example
     * // Delete one CropType
     * const CropType = await prisma.cropType.delete({
     *   where: {
     *     // ... filter to delete one CropType
     *   }
     * })
     * 
     */
    delete<T extends CropTypeDeleteArgs>(args: SelectSubset<T, CropTypeDeleteArgs<ExtArgs>>): Prisma__CropTypeClient<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CropType.
     * @param {CropTypeUpdateArgs} args - Arguments to update one CropType.
     * @example
     * // Update one CropType
     * const cropType = await prisma.cropType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropTypeUpdateArgs>(args: SelectSubset<T, CropTypeUpdateArgs<ExtArgs>>): Prisma__CropTypeClient<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CropTypes.
     * @param {CropTypeDeleteManyArgs} args - Arguments to filter CropTypes to delete.
     * @example
     * // Delete a few CropTypes
     * const { count } = await prisma.cropType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropTypeDeleteManyArgs>(args?: SelectSubset<T, CropTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CropTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CropTypes
     * const cropType = await prisma.cropType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropTypeUpdateManyArgs>(args: SelectSubset<T, CropTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CropType.
     * @param {CropTypeUpsertArgs} args - Arguments to update or create a CropType.
     * @example
     * // Update or create a CropType
     * const cropType = await prisma.cropType.upsert({
     *   create: {
     *     // ... data to create a CropType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CropType we want to update
     *   }
     * })
     */
    upsert<T extends CropTypeUpsertArgs>(args: SelectSubset<T, CropTypeUpsertArgs<ExtArgs>>): Prisma__CropTypeClient<$Result.GetResult<Prisma.$CropTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CropTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropTypeCountArgs} args - Arguments to filter CropTypes to count.
     * @example
     * // Count the number of CropTypes
     * const count = await prisma.cropType.count({
     *   where: {
     *     // ... the filter for the CropTypes we want to count
     *   }
     * })
    **/
    count<T extends CropTypeCountArgs>(
      args?: Subset<T, CropTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CropType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropTypeAggregateArgs>(args: Subset<T, CropTypeAggregateArgs>): Prisma.PrismaPromise<GetCropTypeAggregateType<T>>

    /**
     * Group by CropType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropTypeGroupByArgs} args - Group by arguments.
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
      T extends CropTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropTypeGroupByArgs['orderBy'] }
        : { orderBy?: CropTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CropTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CropType model
   */
  readonly fields: CropTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CropType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CropType model
   */ 
  interface CropTypeFieldRefs {
    readonly id: FieldRef<"CropType", 'String'>
    readonly name: FieldRef<"CropType", 'String'>
    readonly variety: FieldRef<"CropType", 'String'>
    readonly season: FieldRef<"CropType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CropType findUnique
   */
  export type CropTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * Filter, which CropType to fetch.
     */
    where: CropTypeWhereUniqueInput
  }

  /**
   * CropType findUniqueOrThrow
   */
  export type CropTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * Filter, which CropType to fetch.
     */
    where: CropTypeWhereUniqueInput
  }

  /**
   * CropType findFirst
   */
  export type CropTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * Filter, which CropType to fetch.
     */
    where?: CropTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropTypes to fetch.
     */
    orderBy?: CropTypeOrderByWithRelationInput | CropTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CropTypes.
     */
    cursor?: CropTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CropTypes.
     */
    distinct?: CropTypeScalarFieldEnum | CropTypeScalarFieldEnum[]
  }

  /**
   * CropType findFirstOrThrow
   */
  export type CropTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * Filter, which CropType to fetch.
     */
    where?: CropTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropTypes to fetch.
     */
    orderBy?: CropTypeOrderByWithRelationInput | CropTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CropTypes.
     */
    cursor?: CropTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CropTypes.
     */
    distinct?: CropTypeScalarFieldEnum | CropTypeScalarFieldEnum[]
  }

  /**
   * CropType findMany
   */
  export type CropTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * Filter, which CropTypes to fetch.
     */
    where?: CropTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropTypes to fetch.
     */
    orderBy?: CropTypeOrderByWithRelationInput | CropTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CropTypes.
     */
    cursor?: CropTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropTypes.
     */
    skip?: number
    distinct?: CropTypeScalarFieldEnum | CropTypeScalarFieldEnum[]
  }

  /**
   * CropType create
   */
  export type CropTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * The data needed to create a CropType.
     */
    data: XOR<CropTypeCreateInput, CropTypeUncheckedCreateInput>
  }

  /**
   * CropType createMany
   */
  export type CropTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CropTypes.
     */
    data: CropTypeCreateManyInput | CropTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CropType createManyAndReturn
   */
  export type CropTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CropTypes.
     */
    data: CropTypeCreateManyInput | CropTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CropType update
   */
  export type CropTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * The data needed to update a CropType.
     */
    data: XOR<CropTypeUpdateInput, CropTypeUncheckedUpdateInput>
    /**
     * Choose, which CropType to update.
     */
    where: CropTypeWhereUniqueInput
  }

  /**
   * CropType updateMany
   */
  export type CropTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CropTypes.
     */
    data: XOR<CropTypeUpdateManyMutationInput, CropTypeUncheckedUpdateManyInput>
    /**
     * Filter which CropTypes to update
     */
    where?: CropTypeWhereInput
  }

  /**
   * CropType upsert
   */
  export type CropTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * The filter to search for the CropType to update in case it exists.
     */
    where: CropTypeWhereUniqueInput
    /**
     * In case the CropType found by the `where` argument doesn't exist, create a new CropType with this data.
     */
    create: XOR<CropTypeCreateInput, CropTypeUncheckedCreateInput>
    /**
     * In case the CropType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropTypeUpdateInput, CropTypeUncheckedUpdateInput>
  }

  /**
   * CropType delete
   */
  export type CropTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
    /**
     * Filter which CropType to delete.
     */
    where: CropTypeWhereUniqueInput
  }

  /**
   * CropType deleteMany
   */
  export type CropTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CropTypes to delete
     */
    where?: CropTypeWhereInput
  }

  /**
   * CropType without action
   */
  export type CropTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropType
     */
    select?: CropTypeSelect<ExtArgs> | null
  }


  /**
   * Model Disease
   */

  export type AggregateDisease = {
    _count: DiseaseCountAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  export type DiseaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    symptoms: string | null
    severity: string | null
  }

  export type DiseaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    symptoms: string | null
    severity: string | null
  }

  export type DiseaseCountAggregateOutputType = {
    id: number
    name: number
    symptoms: number
    severity: number
    _all: number
  }


  export type DiseaseMinAggregateInputType = {
    id?: true
    name?: true
    symptoms?: true
    severity?: true
  }

  export type DiseaseMaxAggregateInputType = {
    id?: true
    name?: true
    symptoms?: true
    severity?: true
  }

  export type DiseaseCountAggregateInputType = {
    id?: true
    name?: true
    symptoms?: true
    severity?: true
    _all?: true
  }

  export type DiseaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disease to aggregate.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diseases
    **/
    _count?: true | DiseaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseMaxAggregateInputType
  }

  export type GetDiseaseAggregateType<T extends DiseaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDisease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisease[P]>
      : GetScalarType<T[P], AggregateDisease[P]>
  }




  export type DiseaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseWhereInput
    orderBy?: DiseaseOrderByWithAggregationInput | DiseaseOrderByWithAggregationInput[]
    by: DiseaseScalarFieldEnum[] | DiseaseScalarFieldEnum
    having?: DiseaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseCountAggregateInputType | true
    _min?: DiseaseMinAggregateInputType
    _max?: DiseaseMaxAggregateInputType
  }

  export type DiseaseGroupByOutputType = {
    id: string
    name: string
    symptoms: string | null
    severity: string
    _count: DiseaseCountAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  type GetDiseaseGroupByPayload<T extends DiseaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symptoms?: boolean
    severity?: boolean
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symptoms?: boolean
    severity?: boolean
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectScalar = {
    id?: boolean
    name?: boolean
    symptoms?: boolean
    severity?: boolean
  }


  export type $DiseasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disease"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      symptoms: string | null
      severity: string
    }, ExtArgs["result"]["disease"]>
    composites: {}
  }

  type DiseaseGetPayload<S extends boolean | null | undefined | DiseaseDefaultArgs> = $Result.GetResult<Prisma.$DiseasePayload, S>

  type DiseaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiseaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiseaseCountAggregateInputType | true
    }

  export interface DiseaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disease'], meta: { name: 'Disease' } }
    /**
     * Find zero or one Disease that matches the filter.
     * @param {DiseaseFindUniqueArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseFindUniqueArgs>(args: SelectSubset<T, DiseaseFindUniqueArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Disease that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiseaseFindUniqueOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Disease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseFindFirstArgs>(args?: SelectSubset<T, DiseaseFindFirstArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Disease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diseases
     * const diseases = await prisma.disease.findMany()
     * 
     * // Get first 10 Diseases
     * const diseases = await prisma.disease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseWithIdOnly = await prisma.disease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseFindManyArgs>(args?: SelectSubset<T, DiseaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Disease.
     * @param {DiseaseCreateArgs} args - Arguments to create a Disease.
     * @example
     * // Create one Disease
     * const Disease = await prisma.disease.create({
     *   data: {
     *     // ... data to create a Disease
     *   }
     * })
     * 
     */
    create<T extends DiseaseCreateArgs>(args: SelectSubset<T, DiseaseCreateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Diseases.
     * @param {DiseaseCreateManyArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseCreateManyArgs>(args?: SelectSubset<T, DiseaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diseases and returns the data saved in the database.
     * @param {DiseaseCreateManyAndReturnArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseaseCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Disease.
     * @param {DiseaseDeleteArgs} args - Arguments to delete one Disease.
     * @example
     * // Delete one Disease
     * const Disease = await prisma.disease.delete({
     *   where: {
     *     // ... filter to delete one Disease
     *   }
     * })
     * 
     */
    delete<T extends DiseaseDeleteArgs>(args: SelectSubset<T, DiseaseDeleteArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Disease.
     * @param {DiseaseUpdateArgs} args - Arguments to update one Disease.
     * @example
     * // Update one Disease
     * const disease = await prisma.disease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseUpdateArgs>(args: SelectSubset<T, DiseaseUpdateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Diseases.
     * @param {DiseaseDeleteManyArgs} args - Arguments to filter Diseases to delete.
     * @example
     * // Delete a few Diseases
     * const { count } = await prisma.disease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseDeleteManyArgs>(args?: SelectSubset<T, DiseaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseUpdateManyArgs>(args: SelectSubset<T, DiseaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disease.
     * @param {DiseaseUpsertArgs} args - Arguments to update or create a Disease.
     * @example
     * // Update or create a Disease
     * const disease = await prisma.disease.upsert({
     *   create: {
     *     // ... data to create a Disease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disease we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseUpsertArgs>(args: SelectSubset<T, DiseaseUpsertArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseCountArgs} args - Arguments to filter Diseases to count.
     * @example
     * // Count the number of Diseases
     * const count = await prisma.disease.count({
     *   where: {
     *     // ... the filter for the Diseases we want to count
     *   }
     * })
    **/
    count<T extends DiseaseCountArgs>(
      args?: Subset<T, DiseaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiseaseAggregateArgs>(args: Subset<T, DiseaseAggregateArgs>): Prisma.PrismaPromise<GetDiseaseAggregateType<T>>

    /**
     * Group by Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseGroupByArgs} args - Group by arguments.
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
      T extends DiseaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiseaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disease model
   */
  readonly fields: DiseaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Disease model
   */ 
  interface DiseaseFieldRefs {
    readonly id: FieldRef<"Disease", 'String'>
    readonly name: FieldRef<"Disease", 'String'>
    readonly symptoms: FieldRef<"Disease", 'String'>
    readonly severity: FieldRef<"Disease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disease findUnique
   */
  export type DiseaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findUniqueOrThrow
   */
  export type DiseaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findFirst
   */
  export type DiseaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findFirstOrThrow
   */
  export type DiseaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findMany
   */
  export type DiseaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease create
   */
  export type DiseaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * The data needed to create a Disease.
     */
    data: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
  }

  /**
   * Disease createMany
   */
  export type DiseaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease createManyAndReturn
   */
  export type DiseaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease update
   */
  export type DiseaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * The data needed to update a Disease.
     */
    data: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
    /**
     * Choose, which Disease to update.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease updateMany
   */
  export type DiseaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
  }

  /**
   * Disease upsert
   */
  export type DiseaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * The filter to search for the Disease to update in case it exists.
     */
    where: DiseaseWhereUniqueInput
    /**
     * In case the Disease found by the `where` argument doesn't exist, create a new Disease with this data.
     */
    create: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
    /**
     * In case the Disease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
  }

  /**
   * Disease delete
   */
  export type DiseaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Filter which Disease to delete.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease deleteMany
   */
  export type DiseaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diseases to delete
     */
    where?: DiseaseWhereInput
  }

  /**
   * Disease without action
   */
  export type DiseaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
  }


  /**
   * Model ActivityType
   */

  export type AggregateActivityType = {
    _count: ActivityTypeCountAggregateOutputType | null
    _min: ActivityTypeMinAggregateOutputType | null
    _max: ActivityTypeMaxAggregateOutputType | null
  }

  export type ActivityTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    icon: string | null
  }

  export type ActivityTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    icon: string | null
  }

  export type ActivityTypeCountAggregateOutputType = {
    id: number
    name: number
    category: number
    icon: number
    _all: number
  }


  export type ActivityTypeMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    icon?: true
  }

  export type ActivityTypeMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    icon?: true
  }

  export type ActivityTypeCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    icon?: true
    _all?: true
  }

  export type ActivityTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityType to aggregate.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityTypes
    **/
    _count?: true | ActivityTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityTypeMaxAggregateInputType
  }

  export type GetActivityTypeAggregateType<T extends ActivityTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityType[P]>
      : GetScalarType<T[P], AggregateActivityType[P]>
  }




  export type ActivityTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityTypeWhereInput
    orderBy?: ActivityTypeOrderByWithAggregationInput | ActivityTypeOrderByWithAggregationInput[]
    by: ActivityTypeScalarFieldEnum[] | ActivityTypeScalarFieldEnum
    having?: ActivityTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityTypeCountAggregateInputType | true
    _min?: ActivityTypeMinAggregateInputType
    _max?: ActivityTypeMaxAggregateInputType
  }

  export type ActivityTypeGroupByOutputType = {
    id: string
    name: string
    category: string | null
    icon: string | null
    _count: ActivityTypeCountAggregateOutputType | null
    _min: ActivityTypeMinAggregateOutputType | null
    _max: ActivityTypeMaxAggregateOutputType | null
  }

  type GetActivityTypeGroupByPayload<T extends ActivityTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityTypeGroupByOutputType[P]>
        }
      >
    >


  export type ActivityTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    icon?: boolean
  }, ExtArgs["result"]["activityType"]>

  export type ActivityTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    icon?: boolean
  }, ExtArgs["result"]["activityType"]>

  export type ActivityTypeSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    icon?: boolean
  }


  export type $ActivityTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string | null
      icon: string | null
    }, ExtArgs["result"]["activityType"]>
    composites: {}
  }

  type ActivityTypeGetPayload<S extends boolean | null | undefined | ActivityTypeDefaultArgs> = $Result.GetResult<Prisma.$ActivityTypePayload, S>

  type ActivityTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityTypeCountAggregateInputType | true
    }

  export interface ActivityTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityType'], meta: { name: 'ActivityType' } }
    /**
     * Find zero or one ActivityType that matches the filter.
     * @param {ActivityTypeFindUniqueArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityTypeFindUniqueArgs>(args: SelectSubset<T, ActivityTypeFindUniqueArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActivityType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityTypeFindUniqueOrThrowArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActivityType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindFirstArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityTypeFindFirstArgs>(args?: SelectSubset<T, ActivityTypeFindFirstArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActivityType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindFirstOrThrowArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActivityTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityTypes
     * const activityTypes = await prisma.activityType.findMany()
     * 
     * // Get first 10 ActivityTypes
     * const activityTypes = await prisma.activityType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityTypeWithIdOnly = await prisma.activityType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityTypeFindManyArgs>(args?: SelectSubset<T, ActivityTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActivityType.
     * @param {ActivityTypeCreateArgs} args - Arguments to create a ActivityType.
     * @example
     * // Create one ActivityType
     * const ActivityType = await prisma.activityType.create({
     *   data: {
     *     // ... data to create a ActivityType
     *   }
     * })
     * 
     */
    create<T extends ActivityTypeCreateArgs>(args: SelectSubset<T, ActivityTypeCreateArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActivityTypes.
     * @param {ActivityTypeCreateManyArgs} args - Arguments to create many ActivityTypes.
     * @example
     * // Create many ActivityTypes
     * const activityType = await prisma.activityType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityTypeCreateManyArgs>(args?: SelectSubset<T, ActivityTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityTypes and returns the data saved in the database.
     * @param {ActivityTypeCreateManyAndReturnArgs} args - Arguments to create many ActivityTypes.
     * @example
     * // Create many ActivityTypes
     * const activityType = await prisma.activityType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityTypes and only return the `id`
     * const activityTypeWithIdOnly = await prisma.activityType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActivityType.
     * @param {ActivityTypeDeleteArgs} args - Arguments to delete one ActivityType.
     * @example
     * // Delete one ActivityType
     * const ActivityType = await prisma.activityType.delete({
     *   where: {
     *     // ... filter to delete one ActivityType
     *   }
     * })
     * 
     */
    delete<T extends ActivityTypeDeleteArgs>(args: SelectSubset<T, ActivityTypeDeleteArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActivityType.
     * @param {ActivityTypeUpdateArgs} args - Arguments to update one ActivityType.
     * @example
     * // Update one ActivityType
     * const activityType = await prisma.activityType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityTypeUpdateArgs>(args: SelectSubset<T, ActivityTypeUpdateArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActivityTypes.
     * @param {ActivityTypeDeleteManyArgs} args - Arguments to filter ActivityTypes to delete.
     * @example
     * // Delete a few ActivityTypes
     * const { count } = await prisma.activityType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityTypeDeleteManyArgs>(args?: SelectSubset<T, ActivityTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityTypes
     * const activityType = await prisma.activityType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityTypeUpdateManyArgs>(args: SelectSubset<T, ActivityTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityType.
     * @param {ActivityTypeUpsertArgs} args - Arguments to update or create a ActivityType.
     * @example
     * // Update or create a ActivityType
     * const activityType = await prisma.activityType.upsert({
     *   create: {
     *     // ... data to create a ActivityType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityType we want to update
     *   }
     * })
     */
    upsert<T extends ActivityTypeUpsertArgs>(args: SelectSubset<T, ActivityTypeUpsertArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeCountArgs} args - Arguments to filter ActivityTypes to count.
     * @example
     * // Count the number of ActivityTypes
     * const count = await prisma.activityType.count({
     *   where: {
     *     // ... the filter for the ActivityTypes we want to count
     *   }
     * })
    **/
    count<T extends ActivityTypeCountArgs>(
      args?: Subset<T, ActivityTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityTypeAggregateArgs>(args: Subset<T, ActivityTypeAggregateArgs>): Prisma.PrismaPromise<GetActivityTypeAggregateType<T>>

    /**
     * Group by ActivityType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeGroupByArgs} args - Group by arguments.
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
      T extends ActivityTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityTypeGroupByArgs['orderBy'] }
        : { orderBy?: ActivityTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityType model
   */
  readonly fields: ActivityTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ActivityType model
   */ 
  interface ActivityTypeFieldRefs {
    readonly id: FieldRef<"ActivityType", 'String'>
    readonly name: FieldRef<"ActivityType", 'String'>
    readonly category: FieldRef<"ActivityType", 'String'>
    readonly icon: FieldRef<"ActivityType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActivityType findUnique
   */
  export type ActivityTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType findUniqueOrThrow
   */
  export type ActivityTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType findFirst
   */
  export type ActivityTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityTypes.
     */
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType findFirstOrThrow
   */
  export type ActivityTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityTypes.
     */
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType findMany
   */
  export type ActivityTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Filter, which ActivityTypes to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType create
   */
  export type ActivityTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * The data needed to create a ActivityType.
     */
    data: XOR<ActivityTypeCreateInput, ActivityTypeUncheckedCreateInput>
  }

  /**
   * ActivityType createMany
   */
  export type ActivityTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityTypes.
     */
    data: ActivityTypeCreateManyInput | ActivityTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityType createManyAndReturn
   */
  export type ActivityTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActivityTypes.
     */
    data: ActivityTypeCreateManyInput | ActivityTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityType update
   */
  export type ActivityTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * The data needed to update a ActivityType.
     */
    data: XOR<ActivityTypeUpdateInput, ActivityTypeUncheckedUpdateInput>
    /**
     * Choose, which ActivityType to update.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType updateMany
   */
  export type ActivityTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityTypes.
     */
    data: XOR<ActivityTypeUpdateManyMutationInput, ActivityTypeUncheckedUpdateManyInput>
    /**
     * Filter which ActivityTypes to update
     */
    where?: ActivityTypeWhereInput
  }

  /**
   * ActivityType upsert
   */
  export type ActivityTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * The filter to search for the ActivityType to update in case it exists.
     */
    where: ActivityTypeWhereUniqueInput
    /**
     * In case the ActivityType found by the `where` argument doesn't exist, create a new ActivityType with this data.
     */
    create: XOR<ActivityTypeCreateInput, ActivityTypeUncheckedCreateInput>
    /**
     * In case the ActivityType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityTypeUpdateInput, ActivityTypeUncheckedUpdateInput>
  }

  /**
   * ActivityType delete
   */
  export type ActivityTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Filter which ActivityType to delete.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType deleteMany
   */
  export type ActivityTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityTypes to delete
     */
    where?: ActivityTypeWhereInput
  }

  /**
   * ActivityType without action
   */
  export type ActivityTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
  }


  /**
   * Model SystemLog
   */

  export type AggregateSystemLog = {
    _count: SystemLogCountAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  export type SystemLogMinAggregateOutputType = {
    id: string | null
    level: string | null
    message: string | null
    source: string | null
    timestamp: Date | null
  }

  export type SystemLogMaxAggregateOutputType = {
    id: string | null
    level: string | null
    message: string | null
    source: string | null
    timestamp: Date | null
  }

  export type SystemLogCountAggregateOutputType = {
    id: number
    level: number
    message: number
    source: number
    timestamp: number
    _all: number
  }


  export type SystemLogMinAggregateInputType = {
    id?: true
    level?: true
    message?: true
    source?: true
    timestamp?: true
  }

  export type SystemLogMaxAggregateInputType = {
    id?: true
    level?: true
    message?: true
    source?: true
    timestamp?: true
  }

  export type SystemLogCountAggregateInputType = {
    id?: true
    level?: true
    message?: true
    source?: true
    timestamp?: true
    _all?: true
  }

  export type SystemLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLog to aggregate.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemLogs
    **/
    _count?: true | SystemLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemLogMaxAggregateInputType
  }

  export type GetSystemLogAggregateType<T extends SystemLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemLog[P]>
      : GetScalarType<T[P], AggregateSystemLog[P]>
  }




  export type SystemLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithAggregationInput | SystemLogOrderByWithAggregationInput[]
    by: SystemLogScalarFieldEnum[] | SystemLogScalarFieldEnum
    having?: SystemLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemLogCountAggregateInputType | true
    _min?: SystemLogMinAggregateInputType
    _max?: SystemLogMaxAggregateInputType
  }

  export type SystemLogGroupByOutputType = {
    id: string
    level: string
    message: string
    source: string | null
    timestamp: Date
    _count: SystemLogCountAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  type GetSystemLogGroupByPayload<T extends SystemLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
            : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
        }
      >
    >


  export type SystemLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    source?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    source?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectScalar = {
    id?: boolean
    level?: boolean
    message?: boolean
    source?: boolean
    timestamp?: boolean
  }


  export type $SystemLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      level: string
      message: string
      source: string | null
      timestamp: Date
    }, ExtArgs["result"]["systemLog"]>
    composites: {}
  }

  type SystemLogGetPayload<S extends boolean | null | undefined | SystemLogDefaultArgs> = $Result.GetResult<Prisma.$SystemLogPayload, S>

  type SystemLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemLogCountAggregateInputType | true
    }

  export interface SystemLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemLog'], meta: { name: 'SystemLog' } }
    /**
     * Find zero or one SystemLog that matches the filter.
     * @param {SystemLogFindUniqueArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemLogFindUniqueArgs>(args: SelectSubset<T, SystemLogFindUniqueArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemLogFindUniqueOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemLogFindFirstArgs>(args?: SelectSubset<T, SystemLogFindFirstArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemLogs
     * const systemLogs = await prisma.systemLog.findMany()
     * 
     * // Get first 10 SystemLogs
     * const systemLogs = await prisma.systemLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemLogFindManyArgs>(args?: SelectSubset<T, SystemLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemLog.
     * @param {SystemLogCreateArgs} args - Arguments to create a SystemLog.
     * @example
     * // Create one SystemLog
     * const SystemLog = await prisma.systemLog.create({
     *   data: {
     *     // ... data to create a SystemLog
     *   }
     * })
     * 
     */
    create<T extends SystemLogCreateArgs>(args: SelectSubset<T, SystemLogCreateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemLogs.
     * @param {SystemLogCreateManyArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemLogCreateManyArgs>(args?: SelectSubset<T, SystemLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemLogs and returns the data saved in the database.
     * @param {SystemLogCreateManyAndReturnArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemLogs and only return the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SystemLog.
     * @param {SystemLogDeleteArgs} args - Arguments to delete one SystemLog.
     * @example
     * // Delete one SystemLog
     * const SystemLog = await prisma.systemLog.delete({
     *   where: {
     *     // ... filter to delete one SystemLog
     *   }
     * })
     * 
     */
    delete<T extends SystemLogDeleteArgs>(args: SelectSubset<T, SystemLogDeleteArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemLog.
     * @param {SystemLogUpdateArgs} args - Arguments to update one SystemLog.
     * @example
     * // Update one SystemLog
     * const systemLog = await prisma.systemLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemLogUpdateArgs>(args: SelectSubset<T, SystemLogUpdateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemLogs.
     * @param {SystemLogDeleteManyArgs} args - Arguments to filter SystemLogs to delete.
     * @example
     * // Delete a few SystemLogs
     * const { count } = await prisma.systemLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemLogDeleteManyArgs>(args?: SelectSubset<T, SystemLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemLogs
     * const systemLog = await prisma.systemLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemLogUpdateManyArgs>(args: SelectSubset<T, SystemLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemLog.
     * @param {SystemLogUpsertArgs} args - Arguments to update or create a SystemLog.
     * @example
     * // Update or create a SystemLog
     * const systemLog = await prisma.systemLog.upsert({
     *   create: {
     *     // ... data to create a SystemLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemLog we want to update
     *   }
     * })
     */
    upsert<T extends SystemLogUpsertArgs>(args: SelectSubset<T, SystemLogUpsertArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogCountArgs} args - Arguments to filter SystemLogs to count.
     * @example
     * // Count the number of SystemLogs
     * const count = await prisma.systemLog.count({
     *   where: {
     *     // ... the filter for the SystemLogs we want to count
     *   }
     * })
    **/
    count<T extends SystemLogCountArgs>(
      args?: Subset<T, SystemLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemLogAggregateArgs>(args: Subset<T, SystemLogAggregateArgs>): Prisma.PrismaPromise<GetSystemLogAggregateType<T>>

    /**
     * Group by SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogGroupByArgs} args - Group by arguments.
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
      T extends SystemLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemLogGroupByArgs['orderBy'] }
        : { orderBy?: SystemLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemLog model
   */
  readonly fields: SystemLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemLog model
   */ 
  interface SystemLogFieldRefs {
    readonly id: FieldRef<"SystemLog", 'String'>
    readonly level: FieldRef<"SystemLog", 'String'>
    readonly message: FieldRef<"SystemLog", 'String'>
    readonly source: FieldRef<"SystemLog", 'String'>
    readonly timestamp: FieldRef<"SystemLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemLog findUnique
   */
  export type SystemLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findUniqueOrThrow
   */
  export type SystemLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findFirst
   */
  export type SystemLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findFirstOrThrow
   */
  export type SystemLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findMany
   */
  export type SystemLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog create
   */
  export type SystemLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemLog.
     */
    data: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
  }

  /**
   * SystemLog createMany
   */
  export type SystemLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemLog createManyAndReturn
   */
  export type SystemLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemLog update
   */
  export type SystemLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemLog.
     */
    data: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
    /**
     * Choose, which SystemLog to update.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog updateMany
   */
  export type SystemLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogWhereInput
  }

  /**
   * SystemLog upsert
   */
  export type SystemLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemLog to update in case it exists.
     */
    where: SystemLogWhereUniqueInput
    /**
     * In case the SystemLog found by the `where` argument doesn't exist, create a new SystemLog with this data.
     */
    create: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
    /**
     * In case the SystemLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
  }

  /**
   * SystemLog delete
   */
  export type SystemLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter which SystemLog to delete.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog deleteMany
   */
  export type SystemLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLogs to delete
     */
    where?: SystemLogWhereInput
  }

  /**
   * SystemLog without action
   */
  export type SystemLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    role: 'role',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FarmerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    location: 'location',
    performanceScore: 'performanceScore',
    status: 'status'
  };

  export type FarmerProfileScalarFieldEnum = (typeof FarmerProfileScalarFieldEnum)[keyof typeof FarmerProfileScalarFieldEnum]


  export const OfficerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    region: 'region',
    performanceScore: 'performanceScore',
    status: 'status'
  };

  export type OfficerProfileScalarFieldEnum = (typeof OfficerProfileScalarFieldEnum)[keyof typeof OfficerProfileScalarFieldEnum]


  export const OfficerFarmerAssignmentScalarFieldEnum: {
    id: 'id',
    officerId: 'officerId',
    farmerId: 'farmerId',
    assignedAt: 'assignedAt'
  };

  export type OfficerFarmerAssignmentScalarFieldEnum = (typeof OfficerFarmerAssignmentScalarFieldEnum)[keyof typeof OfficerFarmerAssignmentScalarFieldEnum]


  export const FarmScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    size: 'size',
    cropType: 'cropType',
    status: 'status',
    healthScore: 'healthScore',
    createdAt: 'createdAt'
  };

  export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum]


  export const CropScalarFieldEnum: {
    id: 'id',
    farmId: 'farmId',
    name: 'name',
    variety: 'variety',
    plantingDate: 'plantingDate',
    expectedHarvest: 'expectedHarvest',
    growthStage: 'growthStage',
    healthStatus: 'healthStatus',
    progress: 'progress'
  };

  export type CropScalarFieldEnum = (typeof CropScalarFieldEnum)[keyof typeof CropScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    farmId: 'farmId',
    type: 'type',
    description: 'description',
    date: 'date',
    status: 'status',
    cost: 'cost'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const DiseaseAlertScalarFieldEnum: {
    id: 'id',
    farmId: 'farmId',
    diseaseName: 'diseaseName',
    severity: 'severity',
    detectedAt: 'detectedAt',
    imageUrl: 'imageUrl',
    status: 'status',
    recommendation: 'recommendation'
  };

  export type DiseaseAlertScalarFieldEnum = (typeof DiseaseAlertScalarFieldEnum)[keyof typeof DiseaseAlertScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    id: 'id',
    officerId: 'officerId',
    farmerId: 'farmerId',
    message: 'message',
    sent: 'sent',
    createdAt: 'createdAt'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


  export const CropTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    variety: 'variety',
    season: 'season'
  };

  export type CropTypeScalarFieldEnum = (typeof CropTypeScalarFieldEnum)[keyof typeof CropTypeScalarFieldEnum]


  export const DiseaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    symptoms: 'symptoms',
    severity: 'severity'
  };

  export type DiseaseScalarFieldEnum = (typeof DiseaseScalarFieldEnum)[keyof typeof DiseaseScalarFieldEnum]


  export const ActivityTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    icon: 'icon'
  };

  export type ActivityTypeScalarFieldEnum = (typeof ActivityTypeScalarFieldEnum)[keyof typeof ActivityTypeScalarFieldEnum]


  export const SystemLogScalarFieldEnum: {
    id: 'id',
    level: 'level',
    message: 'message',
    source: 'source',
    timestamp: 'timestamp'
  };

  export type SystemLogScalarFieldEnum = (typeof SystemLogScalarFieldEnum)[keyof typeof SystemLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    farmerProfile?: XOR<FarmerProfileNullableRelationFilter, FarmerProfileWhereInput> | null
    officerProfile?: XOR<OfficerProfileNullableRelationFilter, OfficerProfileWhereInput> | null
    farms?: FarmListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    farmerProfile?: FarmerProfileOrderByWithRelationInput
    officerProfile?: OfficerProfileOrderByWithRelationInput
    farms?: FarmOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    farmerProfile?: XOR<FarmerProfileNullableRelationFilter, FarmerProfileWhereInput> | null
    officerProfile?: XOR<OfficerProfileNullableRelationFilter, OfficerProfileWhereInput> | null
    farms?: FarmListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FarmerProfileWhereInput = {
    AND?: FarmerProfileWhereInput | FarmerProfileWhereInput[]
    OR?: FarmerProfileWhereInput[]
    NOT?: FarmerProfileWhereInput | FarmerProfileWhereInput[]
    id?: UuidFilter<"FarmerProfile"> | string
    userId?: UuidFilter<"FarmerProfile"> | string
    phone?: StringNullableFilter<"FarmerProfile"> | string | null
    location?: StringNullableFilter<"FarmerProfile"> | string | null
    performanceScore?: FloatFilter<"FarmerProfile"> | number
    status?: StringFilter<"FarmerProfile"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: OfficerFarmerAssignmentListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type FarmerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    assignments?: OfficerFarmerAssignmentOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type FarmerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FarmerProfileWhereInput | FarmerProfileWhereInput[]
    OR?: FarmerProfileWhereInput[]
    NOT?: FarmerProfileWhereInput | FarmerProfileWhereInput[]
    phone?: StringNullableFilter<"FarmerProfile"> | string | null
    location?: StringNullableFilter<"FarmerProfile"> | string | null
    performanceScore?: FloatFilter<"FarmerProfile"> | number
    status?: StringFilter<"FarmerProfile"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: OfficerFarmerAssignmentListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id" | "userId">

  export type FarmerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
    _count?: FarmerProfileCountOrderByAggregateInput
    _avg?: FarmerProfileAvgOrderByAggregateInput
    _max?: FarmerProfileMaxOrderByAggregateInput
    _min?: FarmerProfileMinOrderByAggregateInput
    _sum?: FarmerProfileSumOrderByAggregateInput
  }

  export type FarmerProfileScalarWhereWithAggregatesInput = {
    AND?: FarmerProfileScalarWhereWithAggregatesInput | FarmerProfileScalarWhereWithAggregatesInput[]
    OR?: FarmerProfileScalarWhereWithAggregatesInput[]
    NOT?: FarmerProfileScalarWhereWithAggregatesInput | FarmerProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FarmerProfile"> | string
    userId?: UuidWithAggregatesFilter<"FarmerProfile"> | string
    phone?: StringNullableWithAggregatesFilter<"FarmerProfile"> | string | null
    location?: StringNullableWithAggregatesFilter<"FarmerProfile"> | string | null
    performanceScore?: FloatWithAggregatesFilter<"FarmerProfile"> | number
    status?: StringWithAggregatesFilter<"FarmerProfile"> | string
  }

  export type OfficerProfileWhereInput = {
    AND?: OfficerProfileWhereInput | OfficerProfileWhereInput[]
    OR?: OfficerProfileWhereInput[]
    NOT?: OfficerProfileWhereInput | OfficerProfileWhereInput[]
    id?: UuidFilter<"OfficerProfile"> | string
    userId?: UuidFilter<"OfficerProfile"> | string
    region?: StringNullableFilter<"OfficerProfile"> | string | null
    performanceScore?: FloatFilter<"OfficerProfile"> | number
    status?: StringFilter<"OfficerProfile"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: OfficerFarmerAssignmentListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type OfficerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    region?: SortOrderInput | SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    assignments?: OfficerFarmerAssignmentOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type OfficerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: OfficerProfileWhereInput | OfficerProfileWhereInput[]
    OR?: OfficerProfileWhereInput[]
    NOT?: OfficerProfileWhereInput | OfficerProfileWhereInput[]
    region?: StringNullableFilter<"OfficerProfile"> | string | null
    performanceScore?: FloatFilter<"OfficerProfile"> | number
    status?: StringFilter<"OfficerProfile"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: OfficerFarmerAssignmentListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id" | "userId">

  export type OfficerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    region?: SortOrderInput | SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
    _count?: OfficerProfileCountOrderByAggregateInput
    _avg?: OfficerProfileAvgOrderByAggregateInput
    _max?: OfficerProfileMaxOrderByAggregateInput
    _min?: OfficerProfileMinOrderByAggregateInput
    _sum?: OfficerProfileSumOrderByAggregateInput
  }

  export type OfficerProfileScalarWhereWithAggregatesInput = {
    AND?: OfficerProfileScalarWhereWithAggregatesInput | OfficerProfileScalarWhereWithAggregatesInput[]
    OR?: OfficerProfileScalarWhereWithAggregatesInput[]
    NOT?: OfficerProfileScalarWhereWithAggregatesInput | OfficerProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OfficerProfile"> | string
    userId?: UuidWithAggregatesFilter<"OfficerProfile"> | string
    region?: StringNullableWithAggregatesFilter<"OfficerProfile"> | string | null
    performanceScore?: FloatWithAggregatesFilter<"OfficerProfile"> | number
    status?: StringWithAggregatesFilter<"OfficerProfile"> | string
  }

  export type OfficerFarmerAssignmentWhereInput = {
    AND?: OfficerFarmerAssignmentWhereInput | OfficerFarmerAssignmentWhereInput[]
    OR?: OfficerFarmerAssignmentWhereInput[]
    NOT?: OfficerFarmerAssignmentWhereInput | OfficerFarmerAssignmentWhereInput[]
    id?: UuidFilter<"OfficerFarmerAssignment"> | string
    officerId?: UuidFilter<"OfficerFarmerAssignment"> | string
    farmerId?: UuidFilter<"OfficerFarmerAssignment"> | string
    assignedAt?: DateTimeFilter<"OfficerFarmerAssignment"> | Date | string
    officer?: XOR<OfficerProfileRelationFilter, OfficerProfileWhereInput>
    farmer?: XOR<FarmerProfileRelationFilter, FarmerProfileWhereInput>
  }

  export type OfficerFarmerAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    assignedAt?: SortOrder
    officer?: OfficerProfileOrderByWithRelationInput
    farmer?: FarmerProfileOrderByWithRelationInput
  }

  export type OfficerFarmerAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    officerId_farmerId?: OfficerFarmerAssignmentOfficerIdFarmerIdCompoundUniqueInput
    AND?: OfficerFarmerAssignmentWhereInput | OfficerFarmerAssignmentWhereInput[]
    OR?: OfficerFarmerAssignmentWhereInput[]
    NOT?: OfficerFarmerAssignmentWhereInput | OfficerFarmerAssignmentWhereInput[]
    officerId?: UuidFilter<"OfficerFarmerAssignment"> | string
    farmerId?: UuidFilter<"OfficerFarmerAssignment"> | string
    assignedAt?: DateTimeFilter<"OfficerFarmerAssignment"> | Date | string
    officer?: XOR<OfficerProfileRelationFilter, OfficerProfileWhereInput>
    farmer?: XOR<FarmerProfileRelationFilter, FarmerProfileWhereInput>
  }, "id" | "officerId_farmerId">

  export type OfficerFarmerAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    assignedAt?: SortOrder
    _count?: OfficerFarmerAssignmentCountOrderByAggregateInput
    _max?: OfficerFarmerAssignmentMaxOrderByAggregateInput
    _min?: OfficerFarmerAssignmentMinOrderByAggregateInput
  }

  export type OfficerFarmerAssignmentScalarWhereWithAggregatesInput = {
    AND?: OfficerFarmerAssignmentScalarWhereWithAggregatesInput | OfficerFarmerAssignmentScalarWhereWithAggregatesInput[]
    OR?: OfficerFarmerAssignmentScalarWhereWithAggregatesInput[]
    NOT?: OfficerFarmerAssignmentScalarWhereWithAggregatesInput | OfficerFarmerAssignmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OfficerFarmerAssignment"> | string
    officerId?: UuidWithAggregatesFilter<"OfficerFarmerAssignment"> | string
    farmerId?: UuidWithAggregatesFilter<"OfficerFarmerAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"OfficerFarmerAssignment"> | Date | string
  }

  export type FarmWhereInput = {
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    id?: UuidFilter<"Farm"> | string
    userId?: UuidFilter<"Farm"> | string
    name?: StringFilter<"Farm"> | string
    location?: StringNullableFilter<"Farm"> | string | null
    latitude?: FloatNullableFilter<"Farm"> | number | null
    longitude?: FloatNullableFilter<"Farm"> | number | null
    size?: FloatFilter<"Farm"> | number
    cropType?: StringNullableFilter<"Farm"> | string | null
    status?: StringFilter<"Farm"> | string
    healthScore?: IntFilter<"Farm"> | number
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    crops?: CropListRelationFilter
    activities?: ActivityListRelationFilter
    diseaseAlerts?: DiseaseAlertListRelationFilter
  }

  export type FarmOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    size?: SortOrder
    cropType?: SortOrderInput | SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    crops?: CropOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    diseaseAlerts?: DiseaseAlertOrderByRelationAggregateInput
  }

  export type FarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    userId?: UuidFilter<"Farm"> | string
    name?: StringFilter<"Farm"> | string
    location?: StringNullableFilter<"Farm"> | string | null
    latitude?: FloatNullableFilter<"Farm"> | number | null
    longitude?: FloatNullableFilter<"Farm"> | number | null
    size?: FloatFilter<"Farm"> | number
    cropType?: StringNullableFilter<"Farm"> | string | null
    status?: StringFilter<"Farm"> | string
    healthScore?: IntFilter<"Farm"> | number
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    crops?: CropListRelationFilter
    activities?: ActivityListRelationFilter
    diseaseAlerts?: DiseaseAlertListRelationFilter
  }, "id">

  export type FarmOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    size?: SortOrder
    cropType?: SortOrderInput | SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    createdAt?: SortOrder
    _count?: FarmCountOrderByAggregateInput
    _avg?: FarmAvgOrderByAggregateInput
    _max?: FarmMaxOrderByAggregateInput
    _min?: FarmMinOrderByAggregateInput
    _sum?: FarmSumOrderByAggregateInput
  }

  export type FarmScalarWhereWithAggregatesInput = {
    AND?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    OR?: FarmScalarWhereWithAggregatesInput[]
    NOT?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Farm"> | string
    userId?: UuidWithAggregatesFilter<"Farm"> | string
    name?: StringWithAggregatesFilter<"Farm"> | string
    location?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Farm"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Farm"> | number | null
    size?: FloatWithAggregatesFilter<"Farm"> | number
    cropType?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    status?: StringWithAggregatesFilter<"Farm"> | string
    healthScore?: IntWithAggregatesFilter<"Farm"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
  }

  export type CropWhereInput = {
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    id?: UuidFilter<"Crop"> | string
    farmId?: UuidFilter<"Crop"> | string
    name?: StringFilter<"Crop"> | string
    variety?: StringNullableFilter<"Crop"> | string | null
    plantingDate?: DateTimeFilter<"Crop"> | Date | string
    expectedHarvest?: DateTimeNullableFilter<"Crop"> | Date | string | null
    growthStage?: StringFilter<"Crop"> | string
    healthStatus?: StringFilter<"Crop"> | string
    progress?: IntFilter<"Crop"> | number
    farm?: XOR<FarmRelationFilter, FarmWhereInput>
  }

  export type CropOrderByWithRelationInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    variety?: SortOrderInput | SortOrder
    plantingDate?: SortOrder
    expectedHarvest?: SortOrderInput | SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    progress?: SortOrder
    farm?: FarmOrderByWithRelationInput
  }

  export type CropWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    farmId?: UuidFilter<"Crop"> | string
    name?: StringFilter<"Crop"> | string
    variety?: StringNullableFilter<"Crop"> | string | null
    plantingDate?: DateTimeFilter<"Crop"> | Date | string
    expectedHarvest?: DateTimeNullableFilter<"Crop"> | Date | string | null
    growthStage?: StringFilter<"Crop"> | string
    healthStatus?: StringFilter<"Crop"> | string
    progress?: IntFilter<"Crop"> | number
    farm?: XOR<FarmRelationFilter, FarmWhereInput>
  }, "id">

  export type CropOrderByWithAggregationInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    variety?: SortOrderInput | SortOrder
    plantingDate?: SortOrder
    expectedHarvest?: SortOrderInput | SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    progress?: SortOrder
    _count?: CropCountOrderByAggregateInput
    _avg?: CropAvgOrderByAggregateInput
    _max?: CropMaxOrderByAggregateInput
    _min?: CropMinOrderByAggregateInput
    _sum?: CropSumOrderByAggregateInput
  }

  export type CropScalarWhereWithAggregatesInput = {
    AND?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    OR?: CropScalarWhereWithAggregatesInput[]
    NOT?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Crop"> | string
    farmId?: UuidWithAggregatesFilter<"Crop"> | string
    name?: StringWithAggregatesFilter<"Crop"> | string
    variety?: StringNullableWithAggregatesFilter<"Crop"> | string | null
    plantingDate?: DateTimeWithAggregatesFilter<"Crop"> | Date | string
    expectedHarvest?: DateTimeNullableWithAggregatesFilter<"Crop"> | Date | string | null
    growthStage?: StringWithAggregatesFilter<"Crop"> | string
    healthStatus?: StringWithAggregatesFilter<"Crop"> | string
    progress?: IntWithAggregatesFilter<"Crop"> | number
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: UuidFilter<"Activity"> | string
    farmId?: UuidFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    status?: StringFilter<"Activity"> | string
    cost?: FloatFilter<"Activity"> | number
    farm?: XOR<FarmRelationFilter, FarmWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    farmId?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    cost?: SortOrder
    farm?: FarmOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    farmId?: UuidFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    status?: StringFilter<"Activity"> | string
    cost?: FloatFilter<"Activity"> | number
    farm?: XOR<FarmRelationFilter, FarmWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    farmId?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    cost?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Activity"> | string
    farmId?: UuidWithAggregatesFilter<"Activity"> | string
    type?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    date?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    status?: StringWithAggregatesFilter<"Activity"> | string
    cost?: FloatWithAggregatesFilter<"Activity"> | number
  }

  export type DiseaseAlertWhereInput = {
    AND?: DiseaseAlertWhereInput | DiseaseAlertWhereInput[]
    OR?: DiseaseAlertWhereInput[]
    NOT?: DiseaseAlertWhereInput | DiseaseAlertWhereInput[]
    id?: UuidFilter<"DiseaseAlert"> | string
    farmId?: UuidFilter<"DiseaseAlert"> | string
    diseaseName?: StringFilter<"DiseaseAlert"> | string
    severity?: StringFilter<"DiseaseAlert"> | string
    detectedAt?: DateTimeFilter<"DiseaseAlert"> | Date | string
    imageUrl?: StringNullableFilter<"DiseaseAlert"> | string | null
    status?: StringFilter<"DiseaseAlert"> | string
    recommendation?: StringNullableFilter<"DiseaseAlert"> | string | null
    farm?: XOR<FarmRelationFilter, FarmWhereInput>
  }

  export type DiseaseAlertOrderByWithRelationInput = {
    id?: SortOrder
    farmId?: SortOrder
    diseaseName?: SortOrder
    severity?: SortOrder
    detectedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    recommendation?: SortOrderInput | SortOrder
    farm?: FarmOrderByWithRelationInput
  }

  export type DiseaseAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiseaseAlertWhereInput | DiseaseAlertWhereInput[]
    OR?: DiseaseAlertWhereInput[]
    NOT?: DiseaseAlertWhereInput | DiseaseAlertWhereInput[]
    farmId?: UuidFilter<"DiseaseAlert"> | string
    diseaseName?: StringFilter<"DiseaseAlert"> | string
    severity?: StringFilter<"DiseaseAlert"> | string
    detectedAt?: DateTimeFilter<"DiseaseAlert"> | Date | string
    imageUrl?: StringNullableFilter<"DiseaseAlert"> | string | null
    status?: StringFilter<"DiseaseAlert"> | string
    recommendation?: StringNullableFilter<"DiseaseAlert"> | string | null
    farm?: XOR<FarmRelationFilter, FarmWhereInput>
  }, "id">

  export type DiseaseAlertOrderByWithAggregationInput = {
    id?: SortOrder
    farmId?: SortOrder
    diseaseName?: SortOrder
    severity?: SortOrder
    detectedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    recommendation?: SortOrderInput | SortOrder
    _count?: DiseaseAlertCountOrderByAggregateInput
    _max?: DiseaseAlertMaxOrderByAggregateInput
    _min?: DiseaseAlertMinOrderByAggregateInput
  }

  export type DiseaseAlertScalarWhereWithAggregatesInput = {
    AND?: DiseaseAlertScalarWhereWithAggregatesInput | DiseaseAlertScalarWhereWithAggregatesInput[]
    OR?: DiseaseAlertScalarWhereWithAggregatesInput[]
    NOT?: DiseaseAlertScalarWhereWithAggregatesInput | DiseaseAlertScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DiseaseAlert"> | string
    farmId?: UuidWithAggregatesFilter<"DiseaseAlert"> | string
    diseaseName?: StringWithAggregatesFilter<"DiseaseAlert"> | string
    severity?: StringWithAggregatesFilter<"DiseaseAlert"> | string
    detectedAt?: DateTimeWithAggregatesFilter<"DiseaseAlert"> | Date | string
    imageUrl?: StringNullableWithAggregatesFilter<"DiseaseAlert"> | string | null
    status?: StringWithAggregatesFilter<"DiseaseAlert"> | string
    recommendation?: StringNullableWithAggregatesFilter<"DiseaseAlert"> | string | null
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    id?: UuidFilter<"Recommendation"> | string
    officerId?: UuidFilter<"Recommendation"> | string
    farmerId?: UuidFilter<"Recommendation"> | string
    message?: StringFilter<"Recommendation"> | string
    sent?: BoolFilter<"Recommendation"> | boolean
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    officer?: XOR<OfficerProfileRelationFilter, OfficerProfileWhereInput>
    farmer?: XOR<FarmerProfileRelationFilter, FarmerProfileWhereInput>
  }

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    message?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    officer?: OfficerProfileOrderByWithRelationInput
    farmer?: FarmerProfileOrderByWithRelationInput
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    officerId?: UuidFilter<"Recommendation"> | string
    farmerId?: UuidFilter<"Recommendation"> | string
    message?: StringFilter<"Recommendation"> | string
    sent?: BoolFilter<"Recommendation"> | boolean
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    officer?: XOR<OfficerProfileRelationFilter, OfficerProfileWhereInput>
    farmer?: XOR<FarmerProfileRelationFilter, FarmerProfileWhereInput>
  }, "id">

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    message?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Recommendation"> | string
    officerId?: UuidWithAggregatesFilter<"Recommendation"> | string
    farmerId?: UuidWithAggregatesFilter<"Recommendation"> | string
    message?: StringWithAggregatesFilter<"Recommendation"> | string
    sent?: BoolWithAggregatesFilter<"Recommendation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
  }

  export type CropTypeWhereInput = {
    AND?: CropTypeWhereInput | CropTypeWhereInput[]
    OR?: CropTypeWhereInput[]
    NOT?: CropTypeWhereInput | CropTypeWhereInput[]
    id?: UuidFilter<"CropType"> | string
    name?: StringFilter<"CropType"> | string
    variety?: StringNullableFilter<"CropType"> | string | null
    season?: StringNullableFilter<"CropType"> | string | null
  }

  export type CropTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    variety?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
  }

  export type CropTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_variety?: CropTypeNameVarietyCompoundUniqueInput
    AND?: CropTypeWhereInput | CropTypeWhereInput[]
    OR?: CropTypeWhereInput[]
    NOT?: CropTypeWhereInput | CropTypeWhereInput[]
    name?: StringFilter<"CropType"> | string
    variety?: StringNullableFilter<"CropType"> | string | null
    season?: StringNullableFilter<"CropType"> | string | null
  }, "id" | "name_variety">

  export type CropTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    variety?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    _count?: CropTypeCountOrderByAggregateInput
    _max?: CropTypeMaxOrderByAggregateInput
    _min?: CropTypeMinOrderByAggregateInput
  }

  export type CropTypeScalarWhereWithAggregatesInput = {
    AND?: CropTypeScalarWhereWithAggregatesInput | CropTypeScalarWhereWithAggregatesInput[]
    OR?: CropTypeScalarWhereWithAggregatesInput[]
    NOT?: CropTypeScalarWhereWithAggregatesInput | CropTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CropType"> | string
    name?: StringWithAggregatesFilter<"CropType"> | string
    variety?: StringNullableWithAggregatesFilter<"CropType"> | string | null
    season?: StringNullableWithAggregatesFilter<"CropType"> | string | null
  }

  export type DiseaseWhereInput = {
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    id?: UuidFilter<"Disease"> | string
    name?: StringFilter<"Disease"> | string
    symptoms?: StringNullableFilter<"Disease"> | string | null
    severity?: StringFilter<"Disease"> | string
  }

  export type DiseaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrderInput | SortOrder
    severity?: SortOrder
  }

  export type DiseaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    symptoms?: StringNullableFilter<"Disease"> | string | null
    severity?: StringFilter<"Disease"> | string
  }, "id" | "name">

  export type DiseaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrderInput | SortOrder
    severity?: SortOrder
    _count?: DiseaseCountOrderByAggregateInput
    _max?: DiseaseMaxOrderByAggregateInput
    _min?: DiseaseMinOrderByAggregateInput
  }

  export type DiseaseScalarWhereWithAggregatesInput = {
    AND?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    OR?: DiseaseScalarWhereWithAggregatesInput[]
    NOT?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Disease"> | string
    name?: StringWithAggregatesFilter<"Disease"> | string
    symptoms?: StringNullableWithAggregatesFilter<"Disease"> | string | null
    severity?: StringWithAggregatesFilter<"Disease"> | string
  }

  export type ActivityTypeWhereInput = {
    AND?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    OR?: ActivityTypeWhereInput[]
    NOT?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    id?: UuidFilter<"ActivityType"> | string
    name?: StringFilter<"ActivityType"> | string
    category?: StringNullableFilter<"ActivityType"> | string | null
    icon?: StringNullableFilter<"ActivityType"> | string | null
  }

  export type ActivityTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
  }

  export type ActivityTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    OR?: ActivityTypeWhereInput[]
    NOT?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    category?: StringNullableFilter<"ActivityType"> | string | null
    icon?: StringNullableFilter<"ActivityType"> | string | null
  }, "id" | "name">

  export type ActivityTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: ActivityTypeCountOrderByAggregateInput
    _max?: ActivityTypeMaxOrderByAggregateInput
    _min?: ActivityTypeMinOrderByAggregateInput
  }

  export type ActivityTypeScalarWhereWithAggregatesInput = {
    AND?: ActivityTypeScalarWhereWithAggregatesInput | ActivityTypeScalarWhereWithAggregatesInput[]
    OR?: ActivityTypeScalarWhereWithAggregatesInput[]
    NOT?: ActivityTypeScalarWhereWithAggregatesInput | ActivityTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ActivityType"> | string
    name?: StringWithAggregatesFilter<"ActivityType"> | string
    category?: StringNullableWithAggregatesFilter<"ActivityType"> | string | null
    icon?: StringNullableWithAggregatesFilter<"ActivityType"> | string | null
  }

  export type SystemLogWhereInput = {
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    id?: UuidFilter<"SystemLog"> | string
    level?: StringFilter<"SystemLog"> | string
    message?: StringFilter<"SystemLog"> | string
    source?: StringNullableFilter<"SystemLog"> | string | null
    timestamp?: DateTimeFilter<"SystemLog"> | Date | string
  }

  export type SystemLogOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    source?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type SystemLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    level?: StringFilter<"SystemLog"> | string
    message?: StringFilter<"SystemLog"> | string
    source?: StringNullableFilter<"SystemLog"> | string | null
    timestamp?: DateTimeFilter<"SystemLog"> | Date | string
  }, "id">

  export type SystemLogOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    source?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: SystemLogCountOrderByAggregateInput
    _max?: SystemLogMaxOrderByAggregateInput
    _min?: SystemLogMinOrderByAggregateInput
  }

  export type SystemLogScalarWhereWithAggregatesInput = {
    AND?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    OR?: SystemLogScalarWhereWithAggregatesInput[]
    NOT?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SystemLog"> | string
    level?: StringWithAggregatesFilter<"SystemLog"> | string
    message?: StringWithAggregatesFilter<"SystemLog"> | string
    source?: StringNullableWithAggregatesFilter<"SystemLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"SystemLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    farmerProfile?: FarmerProfileCreateNestedOneWithoutUserInput
    officerProfile?: OfficerProfileCreateNestedOneWithoutUserInput
    farms?: FarmCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    farmerProfile?: FarmerProfileUncheckedCreateNestedOneWithoutUserInput
    officerProfile?: OfficerProfileUncheckedCreateNestedOneWithoutUserInput
    farms?: FarmUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerProfile?: FarmerProfileUpdateOneWithoutUserNestedInput
    officerProfile?: OfficerProfileUpdateOneWithoutUserNestedInput
    farms?: FarmUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerProfile?: FarmerProfileUncheckedUpdateOneWithoutUserNestedInput
    officerProfile?: OfficerProfileUncheckedUpdateOneWithoutUserNestedInput
    farms?: FarmUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerProfileCreateInput = {
    id?: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
    user: UserCreateNestedOneWithoutFarmerProfileInput
    assignments?: OfficerFarmerAssignmentCreateNestedManyWithoutFarmerInput
    recommendations?: RecommendationCreateNestedManyWithoutFarmerInput
  }

  export type FarmerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
    assignments?: OfficerFarmerAssignmentUncheckedCreateNestedManyWithoutFarmerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFarmerProfileNestedInput
    assignments?: OfficerFarmerAssignmentUpdateManyWithoutFarmerNestedInput
    recommendations?: RecommendationUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: OfficerFarmerAssignmentUncheckedUpdateManyWithoutFarmerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerProfileCreateManyInput = {
    id?: string
    userId: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
  }

  export type FarmerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FarmerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OfficerProfileCreateInput = {
    id?: string
    region?: string | null
    performanceScore?: number
    status?: string
    user: UserCreateNestedOneWithoutOfficerProfileInput
    assignments?: OfficerFarmerAssignmentCreateNestedManyWithoutOfficerInput
    recommendations?: RecommendationCreateNestedManyWithoutOfficerInput
  }

  export type OfficerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    region?: string | null
    performanceScore?: number
    status?: string
    assignments?: OfficerFarmerAssignmentUncheckedCreateNestedManyWithoutOfficerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOfficerProfileNestedInput
    assignments?: OfficerFarmerAssignmentUpdateManyWithoutOfficerNestedInput
    recommendations?: RecommendationUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: OfficerFarmerAssignmentUncheckedUpdateManyWithoutOfficerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerProfileCreateManyInput = {
    id?: string
    userId: string
    region?: string | null
    performanceScore?: number
    status?: string
  }

  export type OfficerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OfficerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OfficerFarmerAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    officer: OfficerProfileCreateNestedOneWithoutAssignmentsInput
    farmer: FarmerProfileCreateNestedOneWithoutAssignmentsInput
  }

  export type OfficerFarmerAssignmentUncheckedCreateInput = {
    id?: string
    officerId: string
    farmerId: string
    assignedAt?: Date | string
  }

  export type OfficerFarmerAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerProfileUpdateOneRequiredWithoutAssignmentsNestedInput
    farmer?: FarmerProfileUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type OfficerFarmerAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficerFarmerAssignmentCreateManyInput = {
    id?: string
    officerId: string
    farmerId: string
    assignedAt?: Date | string
  }

  export type OfficerFarmerAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficerFarmerAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCreateInput = {
    id?: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFarmsInput
    crops?: CropCreateNestedManyWithoutFarmInput
    activities?: ActivityCreateNestedManyWithoutFarmInput
    diseaseAlerts?: DiseaseAlertCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    crops?: CropUncheckedCreateNestedManyWithoutFarmInput
    activities?: ActivityUncheckedCreateNestedManyWithoutFarmInput
    diseaseAlerts?: DiseaseAlertUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFarmsNestedInput
    crops?: CropUpdateManyWithoutFarmNestedInput
    activities?: ActivityUpdateManyWithoutFarmNestedInput
    diseaseAlerts?: DiseaseAlertUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropUncheckedUpdateManyWithoutFarmNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutFarmNestedInput
    diseaseAlerts?: DiseaseAlertUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmCreateManyInput = {
    id?: string
    userId: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
  }

  export type FarmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropCreateInput = {
    id?: string
    name: string
    variety?: string | null
    plantingDate: Date | string
    expectedHarvest?: Date | string | null
    growthStage?: string
    healthStatus?: string
    progress?: number
    farm: FarmCreateNestedOneWithoutCropsInput
  }

  export type CropUncheckedCreateInput = {
    id?: string
    farmId: string
    name: string
    variety?: string | null
    plantingDate: Date | string
    expectedHarvest?: Date | string | null
    growthStage?: string
    healthStatus?: string
    progress?: number
  }

  export type CropUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedHarvest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    farm?: FarmUpdateOneRequiredWithoutCropsNestedInput
  }

  export type CropUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedHarvest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type CropCreateManyInput = {
    id?: string
    farmId: string
    name: string
    variety?: string | null
    plantingDate: Date | string
    expectedHarvest?: Date | string | null
    growthStage?: string
    healthStatus?: string
    progress?: number
  }

  export type CropUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedHarvest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type CropUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedHarvest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityCreateInput = {
    id?: string
    type: string
    description?: string | null
    date: Date | string
    status?: string
    cost?: number
    farm: FarmCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    farmId: string
    type: string
    description?: string | null
    date: Date | string
    status?: string
    cost?: number
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    farm?: FarmUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityCreateManyInput = {
    id?: string
    farmId: string
    type: string
    description?: string | null
    date: Date | string
    status?: string
    cost?: number
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type DiseaseAlertCreateInput = {
    id?: string
    diseaseName: string
    severity: string
    detectedAt?: Date | string
    imageUrl?: string | null
    status?: string
    recommendation?: string | null
    farm: FarmCreateNestedOneWithoutDiseaseAlertsInput
  }

  export type DiseaseAlertUncheckedCreateInput = {
    id?: string
    farmId: string
    diseaseName: string
    severity: string
    detectedAt?: Date | string
    imageUrl?: string | null
    status?: string
    recommendation?: string | null
  }

  export type DiseaseAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diseaseName?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    farm?: FarmUpdateOneRequiredWithoutDiseaseAlertsNestedInput
  }

  export type DiseaseAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    diseaseName?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiseaseAlertCreateManyInput = {
    id?: string
    farmId: string
    diseaseName: string
    severity: string
    detectedAt?: Date | string
    imageUrl?: string | null
    status?: string
    recommendation?: string | null
  }

  export type DiseaseAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diseaseName?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiseaseAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    diseaseName?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecommendationCreateInput = {
    id?: string
    message: string
    sent?: boolean
    createdAt?: Date | string
    officer: OfficerProfileCreateNestedOneWithoutRecommendationsInput
    farmer: FarmerProfileCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateInput = {
    id?: string
    officerId: string
    farmerId: string
    message: string
    sent?: boolean
    createdAt?: Date | string
  }

  export type RecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerProfileUpdateOneRequiredWithoutRecommendationsNestedInput
    farmer?: FarmerProfileUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateManyInput = {
    id?: string
    officerId: string
    farmerId: string
    message: string
    sent?: boolean
    createdAt?: Date | string
  }

  export type RecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropTypeCreateInput = {
    id?: string
    name: string
    variety?: string | null
    season?: string | null
  }

  export type CropTypeUncheckedCreateInput = {
    id?: string
    name: string
    variety?: string | null
    season?: string | null
  }

  export type CropTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CropTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CropTypeCreateManyInput = {
    id?: string
    name: string
    variety?: string | null
    season?: string | null
  }

  export type CropTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CropTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiseaseCreateInput = {
    id?: string
    name: string
    symptoms?: string | null
    severity: string
  }

  export type DiseaseUncheckedCreateInput = {
    id?: string
    name: string
    symptoms?: string | null
    severity: string
  }

  export type DiseaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseCreateManyInput = {
    id?: string
    name: string
    symptoms?: string | null
    severity: string
  }

  export type DiseaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityTypeCreateInput = {
    id?: string
    name: string
    category?: string | null
    icon?: string | null
  }

  export type ActivityTypeUncheckedCreateInput = {
    id?: string
    name: string
    category?: string | null
    icon?: string | null
  }

  export type ActivityTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityTypeCreateManyInput = {
    id?: string
    name: string
    category?: string | null
    icon?: string | null
  }

  export type ActivityTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemLogCreateInput = {
    id?: string
    level: string
    message: string
    source?: string | null
    timestamp?: Date | string
  }

  export type SystemLogUncheckedCreateInput = {
    id?: string
    level: string
    message: string
    source?: string | null
    timestamp?: Date | string
  }

  export type SystemLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogCreateManyInput = {
    id?: string
    level: string
    message: string
    source?: string | null
    timestamp?: Date | string
  }

  export type SystemLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FarmerProfileNullableRelationFilter = {
    is?: FarmerProfileWhereInput | null
    isNot?: FarmerProfileWhereInput | null
  }

  export type OfficerProfileNullableRelationFilter = {
    is?: OfficerProfileWhereInput | null
    isNot?: OfficerProfileWhereInput | null
  }

  export type FarmListRelationFilter = {
    every?: FarmWhereInput
    some?: FarmWhereInput
    none?: FarmWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OfficerFarmerAssignmentListRelationFilter = {
    every?: OfficerFarmerAssignmentWhereInput
    some?: OfficerFarmerAssignmentWhereInput
    none?: OfficerFarmerAssignmentWhereInput
  }

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput
    some?: RecommendationWhereInput
    none?: RecommendationWhereInput
  }

  export type OfficerFarmerAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
  }

  export type FarmerProfileAvgOrderByAggregateInput = {
    performanceScore?: SortOrder
  }

  export type FarmerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
  }

  export type FarmerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
  }

  export type FarmerProfileSumOrderByAggregateInput = {
    performanceScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OfficerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    region?: SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
  }

  export type OfficerProfileAvgOrderByAggregateInput = {
    performanceScore?: SortOrder
  }

  export type OfficerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    region?: SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
  }

  export type OfficerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    region?: SortOrder
    performanceScore?: SortOrder
    status?: SortOrder
  }

  export type OfficerProfileSumOrderByAggregateInput = {
    performanceScore?: SortOrder
  }

  export type OfficerProfileRelationFilter = {
    is?: OfficerProfileWhereInput
    isNot?: OfficerProfileWhereInput
  }

  export type FarmerProfileRelationFilter = {
    is?: FarmerProfileWhereInput
    isNot?: FarmerProfileWhereInput
  }

  export type OfficerFarmerAssignmentOfficerIdFarmerIdCompoundUniqueInput = {
    officerId: string
    farmerId: string
  }

  export type OfficerFarmerAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    assignedAt?: SortOrder
  }

  export type OfficerFarmerAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    assignedAt?: SortOrder
  }

  export type OfficerFarmerAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    assignedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CropListRelationFilter = {
    every?: CropWhereInput
    some?: CropWhereInput
    none?: CropWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type DiseaseAlertListRelationFilter = {
    every?: DiseaseAlertWhereInput
    some?: DiseaseAlertWhereInput
    none?: DiseaseAlertWhereInput
  }

  export type CropOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiseaseAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    size?: SortOrder
    cropType?: SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    createdAt?: SortOrder
  }

  export type FarmAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    size?: SortOrder
    healthScore?: SortOrder
  }

  export type FarmMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    size?: SortOrder
    cropType?: SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    createdAt?: SortOrder
  }

  export type FarmMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    size?: SortOrder
    cropType?: SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    createdAt?: SortOrder
  }

  export type FarmSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    size?: SortOrder
    healthScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FarmRelationFilter = {
    is?: FarmWhereInput
    isNot?: FarmWhereInput
  }

  export type CropCountOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    variety?: SortOrder
    plantingDate?: SortOrder
    expectedHarvest?: SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    progress?: SortOrder
  }

  export type CropAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type CropMaxOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    variety?: SortOrder
    plantingDate?: SortOrder
    expectedHarvest?: SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    progress?: SortOrder
  }

  export type CropMinOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    variety?: SortOrder
    plantingDate?: SortOrder
    expectedHarvest?: SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    progress?: SortOrder
  }

  export type CropSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    cost?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    cost?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    cost?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type DiseaseAlertCountOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    diseaseName?: SortOrder
    severity?: SortOrder
    detectedAt?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    recommendation?: SortOrder
  }

  export type DiseaseAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    diseaseName?: SortOrder
    severity?: SortOrder
    detectedAt?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    recommendation?: SortOrder
  }

  export type DiseaseAlertMinOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    diseaseName?: SortOrder
    severity?: SortOrder
    detectedAt?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    recommendation?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    message?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    message?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    officerId?: SortOrder
    farmerId?: SortOrder
    message?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CropTypeNameVarietyCompoundUniqueInput = {
    name: string
    variety: string
  }

  export type CropTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    variety?: SortOrder
    season?: SortOrder
  }

  export type CropTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    variety?: SortOrder
    season?: SortOrder
  }

  export type CropTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    variety?: SortOrder
    season?: SortOrder
  }

  export type DiseaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrder
    severity?: SortOrder
  }

  export type DiseaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrder
    severity?: SortOrder
  }

  export type DiseaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrder
    severity?: SortOrder
  }

  export type ActivityTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    icon?: SortOrder
  }

  export type ActivityTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    icon?: SortOrder
  }

  export type ActivityTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    icon?: SortOrder
  }

  export type SystemLogCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type SystemLogMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type SystemLogMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type FarmerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<FarmerProfileCreateWithoutUserInput, FarmerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmerProfileCreateOrConnectWithoutUserInput
    connect?: FarmerProfileWhereUniqueInput
  }

  export type OfficerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<OfficerProfileCreateWithoutUserInput, OfficerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OfficerProfileCreateOrConnectWithoutUserInput
    connect?: OfficerProfileWhereUniqueInput
  }

  export type FarmCreateNestedManyWithoutUserInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type FarmerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FarmerProfileCreateWithoutUserInput, FarmerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmerProfileCreateOrConnectWithoutUserInput
    connect?: FarmerProfileWhereUniqueInput
  }

  export type OfficerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OfficerProfileCreateWithoutUserInput, OfficerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OfficerProfileCreateOrConnectWithoutUserInput
    connect?: OfficerProfileWhereUniqueInput
  }

  export type FarmUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FarmerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<FarmerProfileCreateWithoutUserInput, FarmerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmerProfileCreateOrConnectWithoutUserInput
    upsert?: FarmerProfileUpsertWithoutUserInput
    disconnect?: FarmerProfileWhereInput | boolean
    delete?: FarmerProfileWhereInput | boolean
    connect?: FarmerProfileWhereUniqueInput
    update?: XOR<XOR<FarmerProfileUpdateToOneWithWhereWithoutUserInput, FarmerProfileUpdateWithoutUserInput>, FarmerProfileUncheckedUpdateWithoutUserInput>
  }

  export type OfficerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<OfficerProfileCreateWithoutUserInput, OfficerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OfficerProfileCreateOrConnectWithoutUserInput
    upsert?: OfficerProfileUpsertWithoutUserInput
    disconnect?: OfficerProfileWhereInput | boolean
    delete?: OfficerProfileWhereInput | boolean
    connect?: OfficerProfileWhereUniqueInput
    update?: XOR<XOR<OfficerProfileUpdateToOneWithWhereWithoutUserInput, OfficerProfileUpdateWithoutUserInput>, OfficerProfileUncheckedUpdateWithoutUserInput>
  }

  export type FarmUpdateManyWithoutUserNestedInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutUserInput | FarmUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutUserInput | FarmUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutUserInput | FarmUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type FarmerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FarmerProfileCreateWithoutUserInput, FarmerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmerProfileCreateOrConnectWithoutUserInput
    upsert?: FarmerProfileUpsertWithoutUserInput
    disconnect?: FarmerProfileWhereInput | boolean
    delete?: FarmerProfileWhereInput | boolean
    connect?: FarmerProfileWhereUniqueInput
    update?: XOR<XOR<FarmerProfileUpdateToOneWithWhereWithoutUserInput, FarmerProfileUpdateWithoutUserInput>, FarmerProfileUncheckedUpdateWithoutUserInput>
  }

  export type OfficerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OfficerProfileCreateWithoutUserInput, OfficerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OfficerProfileCreateOrConnectWithoutUserInput
    upsert?: OfficerProfileUpsertWithoutUserInput
    disconnect?: OfficerProfileWhereInput | boolean
    delete?: OfficerProfileWhereInput | boolean
    connect?: OfficerProfileWhereUniqueInput
    update?: XOR<XOR<OfficerProfileUpdateToOneWithWhereWithoutUserInput, OfficerProfileUpdateWithoutUserInput>, OfficerProfileUncheckedUpdateWithoutUserInput>
  }

  export type FarmUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput> | FarmCreateWithoutUserInput[] | FarmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput | FarmCreateOrConnectWithoutUserInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutUserInput | FarmUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FarmCreateManyUserInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutUserInput | FarmUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutUserInput | FarmUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFarmerProfileInput = {
    create?: XOR<UserCreateWithoutFarmerProfileInput, UserUncheckedCreateWithoutFarmerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type OfficerFarmerAssignmentCreateNestedManyWithoutFarmerInput = {
    create?: XOR<OfficerFarmerAssignmentCreateWithoutFarmerInput, OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput> | OfficerFarmerAssignmentCreateWithoutFarmerInput[] | OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput | OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput[]
    createMany?: OfficerFarmerAssignmentCreateManyFarmerInputEnvelope
    connect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutFarmerInput = {
    create?: XOR<RecommendationCreateWithoutFarmerInput, RecommendationUncheckedCreateWithoutFarmerInput> | RecommendationCreateWithoutFarmerInput[] | RecommendationUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutFarmerInput | RecommendationCreateOrConnectWithoutFarmerInput[]
    createMany?: RecommendationCreateManyFarmerInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type OfficerFarmerAssignmentUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<OfficerFarmerAssignmentCreateWithoutFarmerInput, OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput> | OfficerFarmerAssignmentCreateWithoutFarmerInput[] | OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput | OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput[]
    createMany?: OfficerFarmerAssignmentCreateManyFarmerInputEnvelope
    connect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<RecommendationCreateWithoutFarmerInput, RecommendationUncheckedCreateWithoutFarmerInput> | RecommendationCreateWithoutFarmerInput[] | RecommendationUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutFarmerInput | RecommendationCreateOrConnectWithoutFarmerInput[]
    createMany?: RecommendationCreateManyFarmerInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFarmerProfileNestedInput = {
    create?: XOR<UserCreateWithoutFarmerProfileInput, UserUncheckedCreateWithoutFarmerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmerProfileInput
    upsert?: UserUpsertWithoutFarmerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFarmerProfileInput, UserUpdateWithoutFarmerProfileInput>, UserUncheckedUpdateWithoutFarmerProfileInput>
  }

  export type OfficerFarmerAssignmentUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<OfficerFarmerAssignmentCreateWithoutFarmerInput, OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput> | OfficerFarmerAssignmentCreateWithoutFarmerInput[] | OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput | OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput[]
    upsert?: OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutFarmerInput | OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: OfficerFarmerAssignmentCreateManyFarmerInputEnvelope
    set?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    disconnect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    delete?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    connect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    update?: OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutFarmerInput | OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: OfficerFarmerAssignmentUpdateManyWithWhereWithoutFarmerInput | OfficerFarmerAssignmentUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: OfficerFarmerAssignmentScalarWhereInput | OfficerFarmerAssignmentScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<RecommendationCreateWithoutFarmerInput, RecommendationUncheckedCreateWithoutFarmerInput> | RecommendationCreateWithoutFarmerInput[] | RecommendationUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutFarmerInput | RecommendationCreateOrConnectWithoutFarmerInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutFarmerInput | RecommendationUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: RecommendationCreateManyFarmerInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutFarmerInput | RecommendationUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutFarmerInput | RecommendationUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type OfficerFarmerAssignmentUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<OfficerFarmerAssignmentCreateWithoutFarmerInput, OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput> | OfficerFarmerAssignmentCreateWithoutFarmerInput[] | OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput | OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput[]
    upsert?: OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutFarmerInput | OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: OfficerFarmerAssignmentCreateManyFarmerInputEnvelope
    set?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    disconnect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    delete?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    connect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    update?: OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutFarmerInput | OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: OfficerFarmerAssignmentUpdateManyWithWhereWithoutFarmerInput | OfficerFarmerAssignmentUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: OfficerFarmerAssignmentScalarWhereInput | OfficerFarmerAssignmentScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<RecommendationCreateWithoutFarmerInput, RecommendationUncheckedCreateWithoutFarmerInput> | RecommendationCreateWithoutFarmerInput[] | RecommendationUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutFarmerInput | RecommendationCreateOrConnectWithoutFarmerInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutFarmerInput | RecommendationUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: RecommendationCreateManyFarmerInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutFarmerInput | RecommendationUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutFarmerInput | RecommendationUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOfficerProfileInput = {
    create?: XOR<UserCreateWithoutOfficerProfileInput, UserUncheckedCreateWithoutOfficerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutOfficerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type OfficerFarmerAssignmentCreateNestedManyWithoutOfficerInput = {
    create?: XOR<OfficerFarmerAssignmentCreateWithoutOfficerInput, OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput> | OfficerFarmerAssignmentCreateWithoutOfficerInput[] | OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput | OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput[]
    createMany?: OfficerFarmerAssignmentCreateManyOfficerInputEnvelope
    connect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutOfficerInput = {
    create?: XOR<RecommendationCreateWithoutOfficerInput, RecommendationUncheckedCreateWithoutOfficerInput> | RecommendationCreateWithoutOfficerInput[] | RecommendationUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutOfficerInput | RecommendationCreateOrConnectWithoutOfficerInput[]
    createMany?: RecommendationCreateManyOfficerInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type OfficerFarmerAssignmentUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: XOR<OfficerFarmerAssignmentCreateWithoutOfficerInput, OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput> | OfficerFarmerAssignmentCreateWithoutOfficerInput[] | OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput | OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput[]
    createMany?: OfficerFarmerAssignmentCreateManyOfficerInputEnvelope
    connect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: XOR<RecommendationCreateWithoutOfficerInput, RecommendationUncheckedCreateWithoutOfficerInput> | RecommendationCreateWithoutOfficerInput[] | RecommendationUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutOfficerInput | RecommendationCreateOrConnectWithoutOfficerInput[]
    createMany?: RecommendationCreateManyOfficerInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOfficerProfileNestedInput = {
    create?: XOR<UserCreateWithoutOfficerProfileInput, UserUncheckedCreateWithoutOfficerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutOfficerProfileInput
    upsert?: UserUpsertWithoutOfficerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOfficerProfileInput, UserUpdateWithoutOfficerProfileInput>, UserUncheckedUpdateWithoutOfficerProfileInput>
  }

  export type OfficerFarmerAssignmentUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<OfficerFarmerAssignmentCreateWithoutOfficerInput, OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput> | OfficerFarmerAssignmentCreateWithoutOfficerInput[] | OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput | OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput[]
    upsert?: OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutOfficerInput | OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: OfficerFarmerAssignmentCreateManyOfficerInputEnvelope
    set?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    disconnect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    delete?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    connect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    update?: OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutOfficerInput | OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: OfficerFarmerAssignmentUpdateManyWithWhereWithoutOfficerInput | OfficerFarmerAssignmentUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: OfficerFarmerAssignmentScalarWhereInput | OfficerFarmerAssignmentScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<RecommendationCreateWithoutOfficerInput, RecommendationUncheckedCreateWithoutOfficerInput> | RecommendationCreateWithoutOfficerInput[] | RecommendationUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutOfficerInput | RecommendationCreateOrConnectWithoutOfficerInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutOfficerInput | RecommendationUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: RecommendationCreateManyOfficerInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutOfficerInput | RecommendationUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutOfficerInput | RecommendationUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type OfficerFarmerAssignmentUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<OfficerFarmerAssignmentCreateWithoutOfficerInput, OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput> | OfficerFarmerAssignmentCreateWithoutOfficerInput[] | OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput | OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput[]
    upsert?: OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutOfficerInput | OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: OfficerFarmerAssignmentCreateManyOfficerInputEnvelope
    set?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    disconnect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    delete?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    connect?: OfficerFarmerAssignmentWhereUniqueInput | OfficerFarmerAssignmentWhereUniqueInput[]
    update?: OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutOfficerInput | OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: OfficerFarmerAssignmentUpdateManyWithWhereWithoutOfficerInput | OfficerFarmerAssignmentUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: OfficerFarmerAssignmentScalarWhereInput | OfficerFarmerAssignmentScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<RecommendationCreateWithoutOfficerInput, RecommendationUncheckedCreateWithoutOfficerInput> | RecommendationCreateWithoutOfficerInput[] | RecommendationUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutOfficerInput | RecommendationCreateOrConnectWithoutOfficerInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutOfficerInput | RecommendationUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: RecommendationCreateManyOfficerInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutOfficerInput | RecommendationUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutOfficerInput | RecommendationUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type OfficerProfileCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<OfficerProfileCreateWithoutAssignmentsInput, OfficerProfileUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: OfficerProfileCreateOrConnectWithoutAssignmentsInput
    connect?: OfficerProfileWhereUniqueInput
  }

  export type FarmerProfileCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<FarmerProfileCreateWithoutAssignmentsInput, FarmerProfileUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: FarmerProfileCreateOrConnectWithoutAssignmentsInput
    connect?: FarmerProfileWhereUniqueInput
  }

  export type OfficerProfileUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<OfficerProfileCreateWithoutAssignmentsInput, OfficerProfileUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: OfficerProfileCreateOrConnectWithoutAssignmentsInput
    upsert?: OfficerProfileUpsertWithoutAssignmentsInput
    connect?: OfficerProfileWhereUniqueInput
    update?: XOR<XOR<OfficerProfileUpdateToOneWithWhereWithoutAssignmentsInput, OfficerProfileUpdateWithoutAssignmentsInput>, OfficerProfileUncheckedUpdateWithoutAssignmentsInput>
  }

  export type FarmerProfileUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<FarmerProfileCreateWithoutAssignmentsInput, FarmerProfileUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: FarmerProfileCreateOrConnectWithoutAssignmentsInput
    upsert?: FarmerProfileUpsertWithoutAssignmentsInput
    connect?: FarmerProfileWhereUniqueInput
    update?: XOR<XOR<FarmerProfileUpdateToOneWithWhereWithoutAssignmentsInput, FarmerProfileUpdateWithoutAssignmentsInput>, FarmerProfileUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserCreateNestedOneWithoutFarmsInput = {
    create?: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmsInput
    connect?: UserWhereUniqueInput
  }

  export type CropCreateNestedManyWithoutFarmInput = {
    create?: XOR<CropCreateWithoutFarmInput, CropUncheckedCreateWithoutFarmInput> | CropCreateWithoutFarmInput[] | CropUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: CropCreateOrConnectWithoutFarmInput | CropCreateOrConnectWithoutFarmInput[]
    createMany?: CropCreateManyFarmInputEnvelope
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutFarmInput = {
    create?: XOR<ActivityCreateWithoutFarmInput, ActivityUncheckedCreateWithoutFarmInput> | ActivityCreateWithoutFarmInput[] | ActivityUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutFarmInput | ActivityCreateOrConnectWithoutFarmInput[]
    createMany?: ActivityCreateManyFarmInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type DiseaseAlertCreateNestedManyWithoutFarmInput = {
    create?: XOR<DiseaseAlertCreateWithoutFarmInput, DiseaseAlertUncheckedCreateWithoutFarmInput> | DiseaseAlertCreateWithoutFarmInput[] | DiseaseAlertUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: DiseaseAlertCreateOrConnectWithoutFarmInput | DiseaseAlertCreateOrConnectWithoutFarmInput[]
    createMany?: DiseaseAlertCreateManyFarmInputEnvelope
    connect?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
  }

  export type CropUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<CropCreateWithoutFarmInput, CropUncheckedCreateWithoutFarmInput> | CropCreateWithoutFarmInput[] | CropUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: CropCreateOrConnectWithoutFarmInput | CropCreateOrConnectWithoutFarmInput[]
    createMany?: CropCreateManyFarmInputEnvelope
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<ActivityCreateWithoutFarmInput, ActivityUncheckedCreateWithoutFarmInput> | ActivityCreateWithoutFarmInput[] | ActivityUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutFarmInput | ActivityCreateOrConnectWithoutFarmInput[]
    createMany?: ActivityCreateManyFarmInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type DiseaseAlertUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<DiseaseAlertCreateWithoutFarmInput, DiseaseAlertUncheckedCreateWithoutFarmInput> | DiseaseAlertCreateWithoutFarmInput[] | DiseaseAlertUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: DiseaseAlertCreateOrConnectWithoutFarmInput | DiseaseAlertCreateOrConnectWithoutFarmInput[]
    createMany?: DiseaseAlertCreateManyFarmInputEnvelope
    connect?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFarmsNestedInput = {
    create?: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmsInput
    upsert?: UserUpsertWithoutFarmsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFarmsInput, UserUpdateWithoutFarmsInput>, UserUncheckedUpdateWithoutFarmsInput>
  }

  export type CropUpdateManyWithoutFarmNestedInput = {
    create?: XOR<CropCreateWithoutFarmInput, CropUncheckedCreateWithoutFarmInput> | CropCreateWithoutFarmInput[] | CropUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: CropCreateOrConnectWithoutFarmInput | CropCreateOrConnectWithoutFarmInput[]
    upsert?: CropUpsertWithWhereUniqueWithoutFarmInput | CropUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: CropCreateManyFarmInputEnvelope
    set?: CropWhereUniqueInput | CropWhereUniqueInput[]
    disconnect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    delete?: CropWhereUniqueInput | CropWhereUniqueInput[]
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    update?: CropUpdateWithWhereUniqueWithoutFarmInput | CropUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: CropUpdateManyWithWhereWithoutFarmInput | CropUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: CropScalarWhereInput | CropScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutFarmNestedInput = {
    create?: XOR<ActivityCreateWithoutFarmInput, ActivityUncheckedCreateWithoutFarmInput> | ActivityCreateWithoutFarmInput[] | ActivityUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutFarmInput | ActivityCreateOrConnectWithoutFarmInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutFarmInput | ActivityUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: ActivityCreateManyFarmInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutFarmInput | ActivityUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutFarmInput | ActivityUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type DiseaseAlertUpdateManyWithoutFarmNestedInput = {
    create?: XOR<DiseaseAlertCreateWithoutFarmInput, DiseaseAlertUncheckedCreateWithoutFarmInput> | DiseaseAlertCreateWithoutFarmInput[] | DiseaseAlertUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: DiseaseAlertCreateOrConnectWithoutFarmInput | DiseaseAlertCreateOrConnectWithoutFarmInput[]
    upsert?: DiseaseAlertUpsertWithWhereUniqueWithoutFarmInput | DiseaseAlertUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: DiseaseAlertCreateManyFarmInputEnvelope
    set?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
    disconnect?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
    delete?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
    connect?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
    update?: DiseaseAlertUpdateWithWhereUniqueWithoutFarmInput | DiseaseAlertUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: DiseaseAlertUpdateManyWithWhereWithoutFarmInput | DiseaseAlertUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: DiseaseAlertScalarWhereInput | DiseaseAlertScalarWhereInput[]
  }

  export type CropUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<CropCreateWithoutFarmInput, CropUncheckedCreateWithoutFarmInput> | CropCreateWithoutFarmInput[] | CropUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: CropCreateOrConnectWithoutFarmInput | CropCreateOrConnectWithoutFarmInput[]
    upsert?: CropUpsertWithWhereUniqueWithoutFarmInput | CropUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: CropCreateManyFarmInputEnvelope
    set?: CropWhereUniqueInput | CropWhereUniqueInput[]
    disconnect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    delete?: CropWhereUniqueInput | CropWhereUniqueInput[]
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    update?: CropUpdateWithWhereUniqueWithoutFarmInput | CropUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: CropUpdateManyWithWhereWithoutFarmInput | CropUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: CropScalarWhereInput | CropScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<ActivityCreateWithoutFarmInput, ActivityUncheckedCreateWithoutFarmInput> | ActivityCreateWithoutFarmInput[] | ActivityUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutFarmInput | ActivityCreateOrConnectWithoutFarmInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutFarmInput | ActivityUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: ActivityCreateManyFarmInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutFarmInput | ActivityUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutFarmInput | ActivityUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type DiseaseAlertUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<DiseaseAlertCreateWithoutFarmInput, DiseaseAlertUncheckedCreateWithoutFarmInput> | DiseaseAlertCreateWithoutFarmInput[] | DiseaseAlertUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: DiseaseAlertCreateOrConnectWithoutFarmInput | DiseaseAlertCreateOrConnectWithoutFarmInput[]
    upsert?: DiseaseAlertUpsertWithWhereUniqueWithoutFarmInput | DiseaseAlertUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: DiseaseAlertCreateManyFarmInputEnvelope
    set?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
    disconnect?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
    delete?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
    connect?: DiseaseAlertWhereUniqueInput | DiseaseAlertWhereUniqueInput[]
    update?: DiseaseAlertUpdateWithWhereUniqueWithoutFarmInput | DiseaseAlertUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: DiseaseAlertUpdateManyWithWhereWithoutFarmInput | DiseaseAlertUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: DiseaseAlertScalarWhereInput | DiseaseAlertScalarWhereInput[]
  }

  export type FarmCreateNestedOneWithoutCropsInput = {
    create?: XOR<FarmCreateWithoutCropsInput, FarmUncheckedCreateWithoutCropsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutCropsInput
    connect?: FarmWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FarmUpdateOneRequiredWithoutCropsNestedInput = {
    create?: XOR<FarmCreateWithoutCropsInput, FarmUncheckedCreateWithoutCropsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutCropsInput
    upsert?: FarmUpsertWithoutCropsInput
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutCropsInput, FarmUpdateWithoutCropsInput>, FarmUncheckedUpdateWithoutCropsInput>
  }

  export type FarmCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<FarmCreateWithoutActivitiesInput, FarmUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: FarmCreateOrConnectWithoutActivitiesInput
    connect?: FarmWhereUniqueInput
  }

  export type FarmUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<FarmCreateWithoutActivitiesInput, FarmUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: FarmCreateOrConnectWithoutActivitiesInput
    upsert?: FarmUpsertWithoutActivitiesInput
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutActivitiesInput, FarmUpdateWithoutActivitiesInput>, FarmUncheckedUpdateWithoutActivitiesInput>
  }

  export type FarmCreateNestedOneWithoutDiseaseAlertsInput = {
    create?: XOR<FarmCreateWithoutDiseaseAlertsInput, FarmUncheckedCreateWithoutDiseaseAlertsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutDiseaseAlertsInput
    connect?: FarmWhereUniqueInput
  }

  export type FarmUpdateOneRequiredWithoutDiseaseAlertsNestedInput = {
    create?: XOR<FarmCreateWithoutDiseaseAlertsInput, FarmUncheckedCreateWithoutDiseaseAlertsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutDiseaseAlertsInput
    upsert?: FarmUpsertWithoutDiseaseAlertsInput
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutDiseaseAlertsInput, FarmUpdateWithoutDiseaseAlertsInput>, FarmUncheckedUpdateWithoutDiseaseAlertsInput>
  }

  export type OfficerProfileCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<OfficerProfileCreateWithoutRecommendationsInput, OfficerProfileUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: OfficerProfileCreateOrConnectWithoutRecommendationsInput
    connect?: OfficerProfileWhereUniqueInput
  }

  export type FarmerProfileCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<FarmerProfileCreateWithoutRecommendationsInput, FarmerProfileUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: FarmerProfileCreateOrConnectWithoutRecommendationsInput
    connect?: FarmerProfileWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OfficerProfileUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<OfficerProfileCreateWithoutRecommendationsInput, OfficerProfileUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: OfficerProfileCreateOrConnectWithoutRecommendationsInput
    upsert?: OfficerProfileUpsertWithoutRecommendationsInput
    connect?: OfficerProfileWhereUniqueInput
    update?: XOR<XOR<OfficerProfileUpdateToOneWithWhereWithoutRecommendationsInput, OfficerProfileUpdateWithoutRecommendationsInput>, OfficerProfileUncheckedUpdateWithoutRecommendationsInput>
  }

  export type FarmerProfileUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<FarmerProfileCreateWithoutRecommendationsInput, FarmerProfileUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: FarmerProfileCreateOrConnectWithoutRecommendationsInput
    upsert?: FarmerProfileUpsertWithoutRecommendationsInput
    connect?: FarmerProfileWhereUniqueInput
    update?: XOR<XOR<FarmerProfileUpdateToOneWithWhereWithoutRecommendationsInput, FarmerProfileUpdateWithoutRecommendationsInput>, FarmerProfileUncheckedUpdateWithoutRecommendationsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FarmerProfileCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
    assignments?: OfficerFarmerAssignmentCreateNestedManyWithoutFarmerInput
    recommendations?: RecommendationCreateNestedManyWithoutFarmerInput
  }

  export type FarmerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
    assignments?: OfficerFarmerAssignmentUncheckedCreateNestedManyWithoutFarmerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerProfileCreateOrConnectWithoutUserInput = {
    where: FarmerProfileWhereUniqueInput
    create: XOR<FarmerProfileCreateWithoutUserInput, FarmerProfileUncheckedCreateWithoutUserInput>
  }

  export type OfficerProfileCreateWithoutUserInput = {
    id?: string
    region?: string | null
    performanceScore?: number
    status?: string
    assignments?: OfficerFarmerAssignmentCreateNestedManyWithoutOfficerInput
    recommendations?: RecommendationCreateNestedManyWithoutOfficerInput
  }

  export type OfficerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    region?: string | null
    performanceScore?: number
    status?: string
    assignments?: OfficerFarmerAssignmentUncheckedCreateNestedManyWithoutOfficerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerProfileCreateOrConnectWithoutUserInput = {
    where: OfficerProfileWhereUniqueInput
    create: XOR<OfficerProfileCreateWithoutUserInput, OfficerProfileUncheckedCreateWithoutUserInput>
  }

  export type FarmCreateWithoutUserInput = {
    id?: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    crops?: CropCreateNestedManyWithoutFarmInput
    activities?: ActivityCreateNestedManyWithoutFarmInput
    diseaseAlerts?: DiseaseAlertCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    crops?: CropUncheckedCreateNestedManyWithoutFarmInput
    activities?: ActivityUncheckedCreateNestedManyWithoutFarmInput
    diseaseAlerts?: DiseaseAlertUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutUserInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
  }

  export type FarmCreateManyUserInputEnvelope = {
    data: FarmCreateManyUserInput | FarmCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FarmerProfileUpsertWithoutUserInput = {
    update: XOR<FarmerProfileUpdateWithoutUserInput, FarmerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<FarmerProfileCreateWithoutUserInput, FarmerProfileUncheckedCreateWithoutUserInput>
    where?: FarmerProfileWhereInput
  }

  export type FarmerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: FarmerProfileWhereInput
    data: XOR<FarmerProfileUpdateWithoutUserInput, FarmerProfileUncheckedUpdateWithoutUserInput>
  }

  export type FarmerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: OfficerFarmerAssignmentUpdateManyWithoutFarmerNestedInput
    recommendations?: RecommendationUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: OfficerFarmerAssignmentUncheckedUpdateManyWithoutFarmerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type OfficerProfileUpsertWithoutUserInput = {
    update: XOR<OfficerProfileUpdateWithoutUserInput, OfficerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<OfficerProfileCreateWithoutUserInput, OfficerProfileUncheckedCreateWithoutUserInput>
    where?: OfficerProfileWhereInput
  }

  export type OfficerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: OfficerProfileWhereInput
    data: XOR<OfficerProfileUpdateWithoutUserInput, OfficerProfileUncheckedUpdateWithoutUserInput>
  }

  export type OfficerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: OfficerFarmerAssignmentUpdateManyWithoutOfficerNestedInput
    recommendations?: RecommendationUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: OfficerFarmerAssignmentUncheckedUpdateManyWithoutOfficerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type FarmUpsertWithWhereUniqueWithoutUserInput = {
    where: FarmWhereUniqueInput
    update: XOR<FarmUpdateWithoutUserInput, FarmUncheckedUpdateWithoutUserInput>
    create: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
  }

  export type FarmUpdateWithWhereUniqueWithoutUserInput = {
    where: FarmWhereUniqueInput
    data: XOR<FarmUpdateWithoutUserInput, FarmUncheckedUpdateWithoutUserInput>
  }

  export type FarmUpdateManyWithWhereWithoutUserInput = {
    where: FarmScalarWhereInput
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyWithoutUserInput>
  }

  export type FarmScalarWhereInput = {
    AND?: FarmScalarWhereInput | FarmScalarWhereInput[]
    OR?: FarmScalarWhereInput[]
    NOT?: FarmScalarWhereInput | FarmScalarWhereInput[]
    id?: UuidFilter<"Farm"> | string
    userId?: UuidFilter<"Farm"> | string
    name?: StringFilter<"Farm"> | string
    location?: StringNullableFilter<"Farm"> | string | null
    latitude?: FloatNullableFilter<"Farm"> | number | null
    longitude?: FloatNullableFilter<"Farm"> | number | null
    size?: FloatFilter<"Farm"> | number
    cropType?: StringNullableFilter<"Farm"> | string | null
    status?: StringFilter<"Farm"> | string
    healthScore?: IntFilter<"Farm"> | number
    createdAt?: DateTimeFilter<"Farm"> | Date | string
  }

  export type UserCreateWithoutFarmerProfileInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    officerProfile?: OfficerProfileCreateNestedOneWithoutUserInput
    farms?: FarmCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFarmerProfileInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    officerProfile?: OfficerProfileUncheckedCreateNestedOneWithoutUserInput
    farms?: FarmUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFarmerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFarmerProfileInput, UserUncheckedCreateWithoutFarmerProfileInput>
  }

  export type OfficerFarmerAssignmentCreateWithoutFarmerInput = {
    id?: string
    assignedAt?: Date | string
    officer: OfficerProfileCreateNestedOneWithoutAssignmentsInput
  }

  export type OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput = {
    id?: string
    officerId: string
    assignedAt?: Date | string
  }

  export type OfficerFarmerAssignmentCreateOrConnectWithoutFarmerInput = {
    where: OfficerFarmerAssignmentWhereUniqueInput
    create: XOR<OfficerFarmerAssignmentCreateWithoutFarmerInput, OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput>
  }

  export type OfficerFarmerAssignmentCreateManyFarmerInputEnvelope = {
    data: OfficerFarmerAssignmentCreateManyFarmerInput | OfficerFarmerAssignmentCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutFarmerInput = {
    id?: string
    message: string
    sent?: boolean
    createdAt?: Date | string
    officer: OfficerProfileCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutFarmerInput = {
    id?: string
    officerId: string
    message: string
    sent?: boolean
    createdAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutFarmerInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutFarmerInput, RecommendationUncheckedCreateWithoutFarmerInput>
  }

  export type RecommendationCreateManyFarmerInputEnvelope = {
    data: RecommendationCreateManyFarmerInput | RecommendationCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFarmerProfileInput = {
    update: XOR<UserUpdateWithoutFarmerProfileInput, UserUncheckedUpdateWithoutFarmerProfileInput>
    create: XOR<UserCreateWithoutFarmerProfileInput, UserUncheckedCreateWithoutFarmerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFarmerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFarmerProfileInput, UserUncheckedUpdateWithoutFarmerProfileInput>
  }

  export type UserUpdateWithoutFarmerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officerProfile?: OfficerProfileUpdateOneWithoutUserNestedInput
    farms?: FarmUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFarmerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officerProfile?: OfficerProfileUncheckedUpdateOneWithoutUserNestedInput
    farms?: FarmUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutFarmerInput = {
    where: OfficerFarmerAssignmentWhereUniqueInput
    update: XOR<OfficerFarmerAssignmentUpdateWithoutFarmerInput, OfficerFarmerAssignmentUncheckedUpdateWithoutFarmerInput>
    create: XOR<OfficerFarmerAssignmentCreateWithoutFarmerInput, OfficerFarmerAssignmentUncheckedCreateWithoutFarmerInput>
  }

  export type OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutFarmerInput = {
    where: OfficerFarmerAssignmentWhereUniqueInput
    data: XOR<OfficerFarmerAssignmentUpdateWithoutFarmerInput, OfficerFarmerAssignmentUncheckedUpdateWithoutFarmerInput>
  }

  export type OfficerFarmerAssignmentUpdateManyWithWhereWithoutFarmerInput = {
    where: OfficerFarmerAssignmentScalarWhereInput
    data: XOR<OfficerFarmerAssignmentUpdateManyMutationInput, OfficerFarmerAssignmentUncheckedUpdateManyWithoutFarmerInput>
  }

  export type OfficerFarmerAssignmentScalarWhereInput = {
    AND?: OfficerFarmerAssignmentScalarWhereInput | OfficerFarmerAssignmentScalarWhereInput[]
    OR?: OfficerFarmerAssignmentScalarWhereInput[]
    NOT?: OfficerFarmerAssignmentScalarWhereInput | OfficerFarmerAssignmentScalarWhereInput[]
    id?: UuidFilter<"OfficerFarmerAssignment"> | string
    officerId?: UuidFilter<"OfficerFarmerAssignment"> | string
    farmerId?: UuidFilter<"OfficerFarmerAssignment"> | string
    assignedAt?: DateTimeFilter<"OfficerFarmerAssignment"> | Date | string
  }

  export type RecommendationUpsertWithWhereUniqueWithoutFarmerInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutFarmerInput, RecommendationUncheckedUpdateWithoutFarmerInput>
    create: XOR<RecommendationCreateWithoutFarmerInput, RecommendationUncheckedCreateWithoutFarmerInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutFarmerInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutFarmerInput, RecommendationUncheckedUpdateWithoutFarmerInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutFarmerInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutFarmerInput>
  }

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    OR?: RecommendationScalarWhereInput[]
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    id?: UuidFilter<"Recommendation"> | string
    officerId?: UuidFilter<"Recommendation"> | string
    farmerId?: UuidFilter<"Recommendation"> | string
    message?: StringFilter<"Recommendation"> | string
    sent?: BoolFilter<"Recommendation"> | boolean
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
  }

  export type UserCreateWithoutOfficerProfileInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    farmerProfile?: FarmerProfileCreateNestedOneWithoutUserInput
    farms?: FarmCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOfficerProfileInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    farmerProfile?: FarmerProfileUncheckedCreateNestedOneWithoutUserInput
    farms?: FarmUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOfficerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOfficerProfileInput, UserUncheckedCreateWithoutOfficerProfileInput>
  }

  export type OfficerFarmerAssignmentCreateWithoutOfficerInput = {
    id?: string
    assignedAt?: Date | string
    farmer: FarmerProfileCreateNestedOneWithoutAssignmentsInput
  }

  export type OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput = {
    id?: string
    farmerId: string
    assignedAt?: Date | string
  }

  export type OfficerFarmerAssignmentCreateOrConnectWithoutOfficerInput = {
    where: OfficerFarmerAssignmentWhereUniqueInput
    create: XOR<OfficerFarmerAssignmentCreateWithoutOfficerInput, OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput>
  }

  export type OfficerFarmerAssignmentCreateManyOfficerInputEnvelope = {
    data: OfficerFarmerAssignmentCreateManyOfficerInput | OfficerFarmerAssignmentCreateManyOfficerInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutOfficerInput = {
    id?: string
    message: string
    sent?: boolean
    createdAt?: Date | string
    farmer: FarmerProfileCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutOfficerInput = {
    id?: string
    farmerId: string
    message: string
    sent?: boolean
    createdAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutOfficerInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutOfficerInput, RecommendationUncheckedCreateWithoutOfficerInput>
  }

  export type RecommendationCreateManyOfficerInputEnvelope = {
    data: RecommendationCreateManyOfficerInput | RecommendationCreateManyOfficerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOfficerProfileInput = {
    update: XOR<UserUpdateWithoutOfficerProfileInput, UserUncheckedUpdateWithoutOfficerProfileInput>
    create: XOR<UserCreateWithoutOfficerProfileInput, UserUncheckedCreateWithoutOfficerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOfficerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOfficerProfileInput, UserUncheckedUpdateWithoutOfficerProfileInput>
  }

  export type UserUpdateWithoutOfficerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerProfile?: FarmerProfileUpdateOneWithoutUserNestedInput
    farms?: FarmUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOfficerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerProfile?: FarmerProfileUncheckedUpdateOneWithoutUserNestedInput
    farms?: FarmUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OfficerFarmerAssignmentUpsertWithWhereUniqueWithoutOfficerInput = {
    where: OfficerFarmerAssignmentWhereUniqueInput
    update: XOR<OfficerFarmerAssignmentUpdateWithoutOfficerInput, OfficerFarmerAssignmentUncheckedUpdateWithoutOfficerInput>
    create: XOR<OfficerFarmerAssignmentCreateWithoutOfficerInput, OfficerFarmerAssignmentUncheckedCreateWithoutOfficerInput>
  }

  export type OfficerFarmerAssignmentUpdateWithWhereUniqueWithoutOfficerInput = {
    where: OfficerFarmerAssignmentWhereUniqueInput
    data: XOR<OfficerFarmerAssignmentUpdateWithoutOfficerInput, OfficerFarmerAssignmentUncheckedUpdateWithoutOfficerInput>
  }

  export type OfficerFarmerAssignmentUpdateManyWithWhereWithoutOfficerInput = {
    where: OfficerFarmerAssignmentScalarWhereInput
    data: XOR<OfficerFarmerAssignmentUpdateManyMutationInput, OfficerFarmerAssignmentUncheckedUpdateManyWithoutOfficerInput>
  }

  export type RecommendationUpsertWithWhereUniqueWithoutOfficerInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutOfficerInput, RecommendationUncheckedUpdateWithoutOfficerInput>
    create: XOR<RecommendationCreateWithoutOfficerInput, RecommendationUncheckedCreateWithoutOfficerInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutOfficerInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutOfficerInput, RecommendationUncheckedUpdateWithoutOfficerInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutOfficerInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutOfficerInput>
  }

  export type OfficerProfileCreateWithoutAssignmentsInput = {
    id?: string
    region?: string | null
    performanceScore?: number
    status?: string
    user: UserCreateNestedOneWithoutOfficerProfileInput
    recommendations?: RecommendationCreateNestedManyWithoutOfficerInput
  }

  export type OfficerProfileUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    userId: string
    region?: string | null
    performanceScore?: number
    status?: string
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerProfileCreateOrConnectWithoutAssignmentsInput = {
    where: OfficerProfileWhereUniqueInput
    create: XOR<OfficerProfileCreateWithoutAssignmentsInput, OfficerProfileUncheckedCreateWithoutAssignmentsInput>
  }

  export type FarmerProfileCreateWithoutAssignmentsInput = {
    id?: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
    user: UserCreateNestedOneWithoutFarmerProfileInput
    recommendations?: RecommendationCreateNestedManyWithoutFarmerInput
  }

  export type FarmerProfileUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    userId: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerProfileCreateOrConnectWithoutAssignmentsInput = {
    where: FarmerProfileWhereUniqueInput
    create: XOR<FarmerProfileCreateWithoutAssignmentsInput, FarmerProfileUncheckedCreateWithoutAssignmentsInput>
  }

  export type OfficerProfileUpsertWithoutAssignmentsInput = {
    update: XOR<OfficerProfileUpdateWithoutAssignmentsInput, OfficerProfileUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<OfficerProfileCreateWithoutAssignmentsInput, OfficerProfileUncheckedCreateWithoutAssignmentsInput>
    where?: OfficerProfileWhereInput
  }

  export type OfficerProfileUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: OfficerProfileWhereInput
    data: XOR<OfficerProfileUpdateWithoutAssignmentsInput, OfficerProfileUncheckedUpdateWithoutAssignmentsInput>
  }

  export type OfficerProfileUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOfficerProfileNestedInput
    recommendations?: RecommendationUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerProfileUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    recommendations?: RecommendationUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type FarmerProfileUpsertWithoutAssignmentsInput = {
    update: XOR<FarmerProfileUpdateWithoutAssignmentsInput, FarmerProfileUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<FarmerProfileCreateWithoutAssignmentsInput, FarmerProfileUncheckedCreateWithoutAssignmentsInput>
    where?: FarmerProfileWhereInput
  }

  export type FarmerProfileUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: FarmerProfileWhereInput
    data: XOR<FarmerProfileUpdateWithoutAssignmentsInput, FarmerProfileUncheckedUpdateWithoutAssignmentsInput>
  }

  export type FarmerProfileUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFarmerProfileNestedInput
    recommendations?: RecommendationUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerProfileUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    recommendations?: RecommendationUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type UserCreateWithoutFarmsInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    farmerProfile?: FarmerProfileCreateNestedOneWithoutUserInput
    officerProfile?: OfficerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFarmsInput = {
    id?: string
    email: string
    password: string
    fullName: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    farmerProfile?: FarmerProfileUncheckedCreateNestedOneWithoutUserInput
    officerProfile?: OfficerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFarmsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
  }

  export type CropCreateWithoutFarmInput = {
    id?: string
    name: string
    variety?: string | null
    plantingDate: Date | string
    expectedHarvest?: Date | string | null
    growthStage?: string
    healthStatus?: string
    progress?: number
  }

  export type CropUncheckedCreateWithoutFarmInput = {
    id?: string
    name: string
    variety?: string | null
    plantingDate: Date | string
    expectedHarvest?: Date | string | null
    growthStage?: string
    healthStatus?: string
    progress?: number
  }

  export type CropCreateOrConnectWithoutFarmInput = {
    where: CropWhereUniqueInput
    create: XOR<CropCreateWithoutFarmInput, CropUncheckedCreateWithoutFarmInput>
  }

  export type CropCreateManyFarmInputEnvelope = {
    data: CropCreateManyFarmInput | CropCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutFarmInput = {
    id?: string
    type: string
    description?: string | null
    date: Date | string
    status?: string
    cost?: number
  }

  export type ActivityUncheckedCreateWithoutFarmInput = {
    id?: string
    type: string
    description?: string | null
    date: Date | string
    status?: string
    cost?: number
  }

  export type ActivityCreateOrConnectWithoutFarmInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutFarmInput, ActivityUncheckedCreateWithoutFarmInput>
  }

  export type ActivityCreateManyFarmInputEnvelope = {
    data: ActivityCreateManyFarmInput | ActivityCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type DiseaseAlertCreateWithoutFarmInput = {
    id?: string
    diseaseName: string
    severity: string
    detectedAt?: Date | string
    imageUrl?: string | null
    status?: string
    recommendation?: string | null
  }

  export type DiseaseAlertUncheckedCreateWithoutFarmInput = {
    id?: string
    diseaseName: string
    severity: string
    detectedAt?: Date | string
    imageUrl?: string | null
    status?: string
    recommendation?: string | null
  }

  export type DiseaseAlertCreateOrConnectWithoutFarmInput = {
    where: DiseaseAlertWhereUniqueInput
    create: XOR<DiseaseAlertCreateWithoutFarmInput, DiseaseAlertUncheckedCreateWithoutFarmInput>
  }

  export type DiseaseAlertCreateManyFarmInputEnvelope = {
    data: DiseaseAlertCreateManyFarmInput | DiseaseAlertCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFarmsInput = {
    update: XOR<UserUpdateWithoutFarmsInput, UserUncheckedUpdateWithoutFarmsInput>
    create: XOR<UserCreateWithoutFarmsInput, UserUncheckedCreateWithoutFarmsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFarmsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFarmsInput, UserUncheckedUpdateWithoutFarmsInput>
  }

  export type UserUpdateWithoutFarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerProfile?: FarmerProfileUpdateOneWithoutUserNestedInput
    officerProfile?: OfficerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerProfile?: FarmerProfileUncheckedUpdateOneWithoutUserNestedInput
    officerProfile?: OfficerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CropUpsertWithWhereUniqueWithoutFarmInput = {
    where: CropWhereUniqueInput
    update: XOR<CropUpdateWithoutFarmInput, CropUncheckedUpdateWithoutFarmInput>
    create: XOR<CropCreateWithoutFarmInput, CropUncheckedCreateWithoutFarmInput>
  }

  export type CropUpdateWithWhereUniqueWithoutFarmInput = {
    where: CropWhereUniqueInput
    data: XOR<CropUpdateWithoutFarmInput, CropUncheckedUpdateWithoutFarmInput>
  }

  export type CropUpdateManyWithWhereWithoutFarmInput = {
    where: CropScalarWhereInput
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyWithoutFarmInput>
  }

  export type CropScalarWhereInput = {
    AND?: CropScalarWhereInput | CropScalarWhereInput[]
    OR?: CropScalarWhereInput[]
    NOT?: CropScalarWhereInput | CropScalarWhereInput[]
    id?: UuidFilter<"Crop"> | string
    farmId?: UuidFilter<"Crop"> | string
    name?: StringFilter<"Crop"> | string
    variety?: StringNullableFilter<"Crop"> | string | null
    plantingDate?: DateTimeFilter<"Crop"> | Date | string
    expectedHarvest?: DateTimeNullableFilter<"Crop"> | Date | string | null
    growthStage?: StringFilter<"Crop"> | string
    healthStatus?: StringFilter<"Crop"> | string
    progress?: IntFilter<"Crop"> | number
  }

  export type ActivityUpsertWithWhereUniqueWithoutFarmInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutFarmInput, ActivityUncheckedUpdateWithoutFarmInput>
    create: XOR<ActivityCreateWithoutFarmInput, ActivityUncheckedCreateWithoutFarmInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutFarmInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutFarmInput, ActivityUncheckedUpdateWithoutFarmInput>
  }

  export type ActivityUpdateManyWithWhereWithoutFarmInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutFarmInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: UuidFilter<"Activity"> | string
    farmId?: UuidFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    status?: StringFilter<"Activity"> | string
    cost?: FloatFilter<"Activity"> | number
  }

  export type DiseaseAlertUpsertWithWhereUniqueWithoutFarmInput = {
    where: DiseaseAlertWhereUniqueInput
    update: XOR<DiseaseAlertUpdateWithoutFarmInput, DiseaseAlertUncheckedUpdateWithoutFarmInput>
    create: XOR<DiseaseAlertCreateWithoutFarmInput, DiseaseAlertUncheckedCreateWithoutFarmInput>
  }

  export type DiseaseAlertUpdateWithWhereUniqueWithoutFarmInput = {
    where: DiseaseAlertWhereUniqueInput
    data: XOR<DiseaseAlertUpdateWithoutFarmInput, DiseaseAlertUncheckedUpdateWithoutFarmInput>
  }

  export type DiseaseAlertUpdateManyWithWhereWithoutFarmInput = {
    where: DiseaseAlertScalarWhereInput
    data: XOR<DiseaseAlertUpdateManyMutationInput, DiseaseAlertUncheckedUpdateManyWithoutFarmInput>
  }

  export type DiseaseAlertScalarWhereInput = {
    AND?: DiseaseAlertScalarWhereInput | DiseaseAlertScalarWhereInput[]
    OR?: DiseaseAlertScalarWhereInput[]
    NOT?: DiseaseAlertScalarWhereInput | DiseaseAlertScalarWhereInput[]
    id?: UuidFilter<"DiseaseAlert"> | string
    farmId?: UuidFilter<"DiseaseAlert"> | string
    diseaseName?: StringFilter<"DiseaseAlert"> | string
    severity?: StringFilter<"DiseaseAlert"> | string
    detectedAt?: DateTimeFilter<"DiseaseAlert"> | Date | string
    imageUrl?: StringNullableFilter<"DiseaseAlert"> | string | null
    status?: StringFilter<"DiseaseAlert"> | string
    recommendation?: StringNullableFilter<"DiseaseAlert"> | string | null
  }

  export type FarmCreateWithoutCropsInput = {
    id?: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFarmsInput
    activities?: ActivityCreateNestedManyWithoutFarmInput
    diseaseAlerts?: DiseaseAlertCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutCropsInput = {
    id?: string
    userId: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutFarmInput
    diseaseAlerts?: DiseaseAlertUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutCropsInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutCropsInput, FarmUncheckedCreateWithoutCropsInput>
  }

  export type FarmUpsertWithoutCropsInput = {
    update: XOR<FarmUpdateWithoutCropsInput, FarmUncheckedUpdateWithoutCropsInput>
    create: XOR<FarmCreateWithoutCropsInput, FarmUncheckedCreateWithoutCropsInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutCropsInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutCropsInput, FarmUncheckedUpdateWithoutCropsInput>
  }

  export type FarmUpdateWithoutCropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFarmsNestedInput
    activities?: ActivityUpdateManyWithoutFarmNestedInput
    diseaseAlerts?: DiseaseAlertUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutCropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutFarmNestedInput
    diseaseAlerts?: DiseaseAlertUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmCreateWithoutActivitiesInput = {
    id?: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFarmsInput
    crops?: CropCreateNestedManyWithoutFarmInput
    diseaseAlerts?: DiseaseAlertCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutActivitiesInput = {
    id?: string
    userId: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    crops?: CropUncheckedCreateNestedManyWithoutFarmInput
    diseaseAlerts?: DiseaseAlertUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutActivitiesInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutActivitiesInput, FarmUncheckedCreateWithoutActivitiesInput>
  }

  export type FarmUpsertWithoutActivitiesInput = {
    update: XOR<FarmUpdateWithoutActivitiesInput, FarmUncheckedUpdateWithoutActivitiesInput>
    create: XOR<FarmCreateWithoutActivitiesInput, FarmUncheckedCreateWithoutActivitiesInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutActivitiesInput, FarmUncheckedUpdateWithoutActivitiesInput>
  }

  export type FarmUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFarmsNestedInput
    crops?: CropUpdateManyWithoutFarmNestedInput
    diseaseAlerts?: DiseaseAlertUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropUncheckedUpdateManyWithoutFarmNestedInput
    diseaseAlerts?: DiseaseAlertUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmCreateWithoutDiseaseAlertsInput = {
    id?: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFarmsInput
    crops?: CropCreateNestedManyWithoutFarmInput
    activities?: ActivityCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutDiseaseAlertsInput = {
    id?: string
    userId: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
    crops?: CropUncheckedCreateNestedManyWithoutFarmInput
    activities?: ActivityUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutDiseaseAlertsInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutDiseaseAlertsInput, FarmUncheckedCreateWithoutDiseaseAlertsInput>
  }

  export type FarmUpsertWithoutDiseaseAlertsInput = {
    update: XOR<FarmUpdateWithoutDiseaseAlertsInput, FarmUncheckedUpdateWithoutDiseaseAlertsInput>
    create: XOR<FarmCreateWithoutDiseaseAlertsInput, FarmUncheckedCreateWithoutDiseaseAlertsInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutDiseaseAlertsInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutDiseaseAlertsInput, FarmUncheckedUpdateWithoutDiseaseAlertsInput>
  }

  export type FarmUpdateWithoutDiseaseAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFarmsNestedInput
    crops?: CropUpdateManyWithoutFarmNestedInput
    activities?: ActivityUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutDiseaseAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropUncheckedUpdateManyWithoutFarmNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type OfficerProfileCreateWithoutRecommendationsInput = {
    id?: string
    region?: string | null
    performanceScore?: number
    status?: string
    user: UserCreateNestedOneWithoutOfficerProfileInput
    assignments?: OfficerFarmerAssignmentCreateNestedManyWithoutOfficerInput
  }

  export type OfficerProfileUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    userId: string
    region?: string | null
    performanceScore?: number
    status?: string
    assignments?: OfficerFarmerAssignmentUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerProfileCreateOrConnectWithoutRecommendationsInput = {
    where: OfficerProfileWhereUniqueInput
    create: XOR<OfficerProfileCreateWithoutRecommendationsInput, OfficerProfileUncheckedCreateWithoutRecommendationsInput>
  }

  export type FarmerProfileCreateWithoutRecommendationsInput = {
    id?: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
    user: UserCreateNestedOneWithoutFarmerProfileInput
    assignments?: OfficerFarmerAssignmentCreateNestedManyWithoutFarmerInput
  }

  export type FarmerProfileUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    userId: string
    phone?: string | null
    location?: string | null
    performanceScore?: number
    status?: string
    assignments?: OfficerFarmerAssignmentUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerProfileCreateOrConnectWithoutRecommendationsInput = {
    where: FarmerProfileWhereUniqueInput
    create: XOR<FarmerProfileCreateWithoutRecommendationsInput, FarmerProfileUncheckedCreateWithoutRecommendationsInput>
  }

  export type OfficerProfileUpsertWithoutRecommendationsInput = {
    update: XOR<OfficerProfileUpdateWithoutRecommendationsInput, OfficerProfileUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<OfficerProfileCreateWithoutRecommendationsInput, OfficerProfileUncheckedCreateWithoutRecommendationsInput>
    where?: OfficerProfileWhereInput
  }

  export type OfficerProfileUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: OfficerProfileWhereInput
    data: XOR<OfficerProfileUpdateWithoutRecommendationsInput, OfficerProfileUncheckedUpdateWithoutRecommendationsInput>
  }

  export type OfficerProfileUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOfficerProfileNestedInput
    assignments?: OfficerFarmerAssignmentUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerProfileUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: OfficerFarmerAssignmentUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type FarmerProfileUpsertWithoutRecommendationsInput = {
    update: XOR<FarmerProfileUpdateWithoutRecommendationsInput, FarmerProfileUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<FarmerProfileCreateWithoutRecommendationsInput, FarmerProfileUncheckedCreateWithoutRecommendationsInput>
    where?: FarmerProfileWhereInput
  }

  export type FarmerProfileUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: FarmerProfileWhereInput
    data: XOR<FarmerProfileUpdateWithoutRecommendationsInput, FarmerProfileUncheckedUpdateWithoutRecommendationsInput>
  }

  export type FarmerProfileUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFarmerProfileNestedInput
    assignments?: OfficerFarmerAssignmentUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerProfileUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: OfficerFarmerAssignmentUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmCreateManyUserInput = {
    id?: string
    name: string
    location?: string | null
    latitude?: number | null
    longitude?: number | null
    size: number
    cropType?: string | null
    status?: string
    healthScore?: number
    createdAt?: Date | string
  }

  export type FarmUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropUpdateManyWithoutFarmNestedInput
    activities?: ActivityUpdateManyWithoutFarmNestedInput
    diseaseAlerts?: DiseaseAlertUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropUncheckedUpdateManyWithoutFarmNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutFarmNestedInput
    diseaseAlerts?: DiseaseAlertUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: FloatFieldUpdateOperationsInput | number
    cropType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    healthScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficerFarmerAssignmentCreateManyFarmerInput = {
    id?: string
    officerId: string
    assignedAt?: Date | string
  }

  export type RecommendationCreateManyFarmerInput = {
    id?: string
    officerId: string
    message: string
    sent?: boolean
    createdAt?: Date | string
  }

  export type OfficerFarmerAssignmentUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerProfileUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type OfficerFarmerAssignmentUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficerFarmerAssignmentUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerProfileUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficerFarmerAssignmentCreateManyOfficerInput = {
    id?: string
    farmerId: string
    assignedAt?: Date | string
  }

  export type RecommendationCreateManyOfficerInput = {
    id?: string
    farmerId: string
    message: string
    sent?: boolean
    createdAt?: Date | string
  }

  export type OfficerFarmerAssignmentUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: FarmerProfileUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type OfficerFarmerAssignmentUncheckedUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficerFarmerAssignmentUncheckedUpdateManyWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: FarmerProfileUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropCreateManyFarmInput = {
    id?: string
    name: string
    variety?: string | null
    plantingDate: Date | string
    expectedHarvest?: Date | string | null
    growthStage?: string
    healthStatus?: string
    progress?: number
  }

  export type ActivityCreateManyFarmInput = {
    id?: string
    type: string
    description?: string | null
    date: Date | string
    status?: string
    cost?: number
  }

  export type DiseaseAlertCreateManyFarmInput = {
    id?: string
    diseaseName: string
    severity: string
    detectedAt?: Date | string
    imageUrl?: string | null
    status?: string
    recommendation?: string | null
  }

  export type CropUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedHarvest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type CropUncheckedUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedHarvest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type CropUncheckedUpdateManyWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    plantingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedHarvest?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityUncheckedUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityUncheckedUpdateManyWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type DiseaseAlertUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    diseaseName?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiseaseAlertUncheckedUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    diseaseName?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiseaseAlertUncheckedUpdateManyWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    diseaseName?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmerProfileCountOutputTypeDefaultArgs instead
     */
    export type FarmerProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmerProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfficerProfileCountOutputTypeDefaultArgs instead
     */
    export type OfficerProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfficerProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmCountOutputTypeDefaultArgs instead
     */
    export type FarmCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmerProfileDefaultArgs instead
     */
    export type FarmerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmerProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfficerProfileDefaultArgs instead
     */
    export type OfficerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfficerProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfficerFarmerAssignmentDefaultArgs instead
     */
    export type OfficerFarmerAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfficerFarmerAssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmDefaultArgs instead
     */
    export type FarmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CropDefaultArgs instead
     */
    export type CropArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CropDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityDefaultArgs instead
     */
    export type ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiseaseAlertDefaultArgs instead
     */
    export type DiseaseAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiseaseAlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecommendationDefaultArgs instead
     */
    export type RecommendationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecommendationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CropTypeDefaultArgs instead
     */
    export type CropTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CropTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiseaseDefaultArgs instead
     */
    export type DiseaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiseaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityTypeDefaultArgs instead
     */
    export type ActivityTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemLogDefaultArgs instead
     */
    export type SystemLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemLogDefaultArgs<ExtArgs>

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