import { emptySplitApi as api } from "./emptySplitApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postApiAccountRegister: build.mutation<
      PostApiAccountRegisterApiResponse,
      PostApiAccountRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/register`,
        method: "POST",
        body: queryArg.moviesContractsRequestsRegisterRequest,
      }),
    }),
    postApiAccountLogin: build.mutation<
      PostApiAccountLoginApiResponse,
      PostApiAccountLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/login`,
        method: "POST",
        body: queryArg.moviesContractsRequestsLoginRequest,
      }),
    }),
    postApiMoviesCreateMovie: build.mutation<
      PostApiMoviesCreateMovieApiResponse,
      PostApiMoviesCreateMovieApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies`,
        method: "POST",
        body: queryArg.moviesContractsRequestsCreateMovieRequest,
      }),
    }),
    getApiMoviesGetById: build.query<
      GetApiMoviesGetByIdApiResponse,
      GetApiMoviesGetByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/${queryArg.id}`,
        params: { id: queryArg.id },
      }),
    }),
    getApiMoviesMoviesList: build.query<
      GetApiMoviesMoviesListApiResponse,
      GetApiMoviesMoviesListApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies`,
        params: {
          Title: queryArg.title,
          Year: queryArg.year,
          SortBy: queryArg.sortBy,
          Page: queryArg.page,
          PageSize: queryArg.pageSize,
        },
      }),
    }),
    getApiMoviesAdminMoviesList: build.query<
      GetApiMoviesAdminMoviesListApiResponse,
      GetApiMoviesAdminMoviesListApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/admin`,
        params: {
          Title: queryArg.title,
          Year: queryArg.year,
          SortBy: queryArg.sortBy,
          Page: queryArg.page,
          PageSize: queryArg.pageSize,
        },
      }),
    }),
    getApiMoviesFavoriteMoviesList: build.query<
      GetApiMoviesFavoriteMoviesListApiResponse,
      GetApiMoviesFavoriteMoviesListApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/favorites`,
        params: {
          Title: queryArg.title,
          Year: queryArg.year,
          SortBy: queryArg.sortBy,
          Page: queryArg.page,
          PageSize: queryArg.pageSize,
        },
      }),
    }),
    putApiMoviesUpdateById: build.mutation<
      PutApiMoviesUpdateByIdApiResponse,
      PutApiMoviesUpdateByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/${queryArg.moviesContractsRequestsUpdateMovieRequest.id}`,
        method: "PUT",
        body: queryArg.moviesContractsRequestsUpdateMovieRequest,
      }),
    }),
    deleteApiMoviesDeleteMovie: build.mutation<
      DeleteApiMoviesDeleteMovieApiResponse,
      DeleteApiMoviesDeleteMovieApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/${queryArg.id}`,
        method: "DELETE",
        params: { id: queryArg.id },
      }),
    }),
    getApiMoviesSearchMovie: build.query<
      GetApiMoviesSearchMovieApiResponse,
      GetApiMoviesSearchMovieApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/search`,
        params: { textToSearchMovie: queryArg.textToSearchMovie },
      }),
    }),
    getApiMoviesAddMovieWatchList: build.query<
      GetApiMoviesAddMovieWatchListApiResponse,
      GetApiMoviesAddMovieWatchListApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/watchlist/${queryArg.movieId}`,
        params: { movieId: queryArg.movieId },
      }),
    }),
    deleteApiMoviesDeleteMovieWatchList: build.mutation<
      DeleteApiMoviesDeleteMovieWatchListApiResponse,
      DeleteApiMoviesDeleteMovieWatchListApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/watchlist/${queryArg.userWatchlistId}`,
        method: "DELETE",
        params: { userWatchlistId: queryArg.userWatchlistId },
      }),
    }),
    getApiMoviesAllMovieWatchList: build.query<
      GetApiMoviesAllMovieWatchListApiResponse,
      GetApiMoviesAllMovieWatchListApiArg
    >({
      query: () => ({ url: `/api/movies/watchlist` }),
    }),
    getApiMoviesTopMoviesList: build.query<
      GetApiMoviesTopMoviesListApiResponse,
      GetApiMoviesTopMoviesListApiArg
    >({
      query: () => ({ url: `/api/movies/top` }),
    }),
    postApiMoviesCreateTopMoviesList: build.mutation<
      PostApiMoviesCreateTopMoviesListApiResponse,
      PostApiMoviesCreateTopMoviesListApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/top`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getApiMoviesMostRecentMoviesList: build.query<
      GetApiMoviesMostRecentMoviesListApiResponse,
      GetApiMoviesMostRecentMoviesListApiArg
    >({
      query: () => ({ url: `/api/movies/recent` }),
    }),
    getApiMoviesCreateRatings: build.query<
      GetApiMoviesCreateRatingsApiResponse,
      GetApiMoviesCreateRatingsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/${queryArg.movieId}/ratings`,
        params: {
          ratingId: queryArg.ratingId,
          movieId: queryArg.movieId,
          rating: queryArg.rating,
          userId: queryArg.userId,
        },
      }),
    }),
    deleteApiMoviesDeleteRatings: build.mutation<
      DeleteApiMoviesDeleteRatingsApiResponse,
      DeleteApiMoviesDeleteRatingsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/movies/${queryArg.id}/ratings`,
        method: "DELETE",
        params: { id: queryArg.id },
      }),
    }),
    getApiMoviesMe: build.query<
      GetApiMoviesMeApiResponse,
      GetApiMoviesMeApiArg
    >({
      query: () => ({ url: `/api/movies/me` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as MovuesApi };
export type PostApiAccountRegisterApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type PostApiAccountRegisterApiArg = {
  moviesContractsRequestsRegisterRequest: MoviesContractsRequestsRegisterRequest;
};
export type PostApiAccountLoginApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesLoginDto20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type PostApiAccountLoginApiArg = {
  moviesContractsRequestsLoginRequest: MoviesContractsRequestsLoginRequest;
};
export type PostApiMoviesCreateMovieApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type PostApiMoviesCreateMovieApiArg = {
  moviesContractsRequestsCreateMovieRequest: MoviesContractsRequestsCreateMovieRequest;
};
export type GetApiMoviesGetByIdApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesMovieResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type GetApiMoviesGetByIdApiArg = {
  id?: string;
};
export type GetApiMoviesMoviesListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type GetApiMoviesMoviesListApiArg = {
  title?: string;
  year?: string;
  sortBy?: string;
  page?: number;
  pageSize?: number;
};
export type GetApiMoviesAdminMoviesListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type GetApiMoviesAdminMoviesListApiArg = {
  title?: string;
  year?: string;
  sortBy?: string;
  page?: number;
  pageSize?: number;
};
export type GetApiMoviesFavoriteMoviesListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type GetApiMoviesFavoriteMoviesListApiArg = {
  title?: string;
  year?: string;
  sortBy?: string;
  page?: number;
  pageSize?: number;
};
export type PutApiMoviesUpdateByIdApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesMovieResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type PutApiMoviesUpdateByIdApiArg = {
  moviesContractsRequestsUpdateMovieRequest: MoviesContractsRequestsUpdateMovieRequest;
};
export type DeleteApiMoviesDeleteMovieApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type DeleteApiMoviesDeleteMovieApiArg = {
  id?: string;
};
export type GetApiMoviesSearchMovieApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemCollectionsGenericIEnumerable601MoviesApplicationModelsMovie20MoviesApplication20Version100020CultureNeutral20PublicKeyTokenNull20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type GetApiMoviesSearchMovieApiArg = {
  textToSearchMovie?: string;
};
export type GetApiMoviesAddMovieWatchListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type GetApiMoviesAddMovieWatchListApiArg = {
  movieId?: string;
};
export type DeleteApiMoviesDeleteMovieWatchListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type DeleteApiMoviesDeleteMovieWatchListApiArg = {
  userWatchlistId?: string;
};
export type GetApiMoviesAllMovieWatchListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponseDto20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type GetApiMoviesAllMovieWatchListApiArg = void;
export type GetApiMoviesTopMoviesListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type GetApiMoviesTopMoviesListApiArg = void;
export type PostApiMoviesCreateTopMoviesListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type PostApiMoviesCreateTopMoviesListApiArg = {
  body: string[];
};
export type GetApiMoviesMostRecentMoviesListApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead;
export type GetApiMoviesMostRecentMoviesListApiArg = void;
export type GetApiMoviesCreateRatingsApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type GetApiMoviesCreateRatingsApiArg = {
  ratingId?: string;
  movieId?: string;
  rating?: number;
  userId?: string;
};
export type DeleteApiMoviesDeleteRatingsApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type DeleteApiMoviesDeleteRatingsApiArg = {
  id?: string;
};
export type GetApiMoviesMeApiResponse =
  /** status 200 Success */ MoviesApplicationModelsResponseModel601SystemCollectionsGenericIEnumerable601MoviesApplicationModelsMovieRating20MoviesApplication20Version100020CultureNeutral20PublicKeyTokenNull20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead;
export type GetApiMoviesMeApiArg = void;
export type SystemReflectionMemberTypes =
  | 1
  | 2
  | 4
  | 8
  | 16
  | 32
  | 64
  | 128
  | 191;
export type SystemModuleHandle = {};
export type SystemModuleHandleRead = {
  mdStreamVersion?: number;
};
export type SystemReflectionModule = {
  assembly?: SystemReflectionAssembly;
  moduleHandle?: SystemModuleHandle;
};
export type SystemReflectionMethodAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 2048
  | 4096
  | 8192
  | 16384
  | 32768
  | 53248;
export type SystemReflectionMethodImplAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 4096
  | 65535;
export type SystemReflectionCallingConventions = 1 | 2 | 3 | 32 | 64;
export type SystemIntPtr = object;
export type SystemRuntimeMethodHandle = {
  value?: SystemIntPtr;
};
export type SystemReflectionConstructorInfo = {
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModule;
  attributes?: SystemReflectionMethodAttributes;
  methodImplementationFlags?: SystemReflectionMethodImplAttributes;
  callingConvention?: SystemReflectionCallingConventions;
  methodHandle?: SystemRuntimeMethodHandle;
  memberType?: SystemReflectionMemberTypes;
};
export type SystemReflectionConstructorInfoRead = {
  name?: string | null;
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModuleRead;
  customAttributes?: SystemReflectionCustomAttributeData[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
  attributes?: SystemReflectionMethodAttributes;
  methodImplementationFlags?: SystemReflectionMethodImplAttributes;
  callingConvention?: SystemReflectionCallingConventions;
  isAbstract?: boolean;
  isConstructor?: boolean;
  isFinal?: boolean;
  isHideBySig?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isVirtual?: boolean;
  isAssembly?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isConstructedGenericMethod?: boolean;
  isGenericMethod?: boolean;
  isGenericMethodDefinition?: boolean;
  containsGenericParameters?: boolean;
  methodHandle?: SystemRuntimeMethodHandle;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  memberType?: SystemReflectionMemberTypes;
};
export type SystemReflectionCustomAttributeData = {
  attributeType?: SystemType;
  constructor?: SystemReflectionConstructorInfo;
};
export type SystemReflectionCustomAttributeTypedArgument = {
  argumentType?: SystemType;
  value?: any | null;
};
export type SystemReflectionCustomAttributeTypedArgumentRead = {
  argumentType?: SystemType;
  value?: any | null;
};
export type SystemReflectionMemberInfo = {
  memberType?: SystemReflectionMemberTypes;
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModule;
};
export type SystemReflectionMemberInfoRead = {
  memberType?: SystemReflectionMemberTypes;
  name?: string | null;
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModuleRead;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
};
export type SystemReflectionCustomAttributeNamedArgument = {
  memberInfo?: SystemReflectionMemberInfo;
  typedValue?: SystemReflectionCustomAttributeTypedArgument;
};
export type SystemReflectionCustomAttributeNamedArgumentRead = {
  memberInfo?: SystemReflectionMemberInfoRead;
  typedValue?: SystemReflectionCustomAttributeTypedArgumentRead;
  memberName?: string | null;
  isField?: boolean;
};
export type SystemReflectionCustomAttributeDataRead = {
  attributeType?: SystemType;
  constructor?: SystemReflectionConstructorInfoRead;
  constructorArguments?:
    | SystemReflectionCustomAttributeTypedArgumentRead[]
    | null;
  namedArguments?: SystemReflectionCustomAttributeNamedArgumentRead[] | null;
};
export type SystemReflectionModuleRead = {
  assembly?: SystemReflectionAssembly;
  fullyQualifiedName?: string | null;
  name?: string | null;
  mdStreamVersion?: number;
  moduleVersionId?: string;
  scopeName?: string | null;
  moduleHandle?: SystemModuleHandleRead;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  metadataToken?: number;
};
export type SystemReflectionParameterAttributes =
  | 0
  | 1
  | 2
  | 4
  | 8
  | 16
  | 4096
  | 8192
  | 16384
  | 32768
  | 61440;
export type SystemReflectionParameterInfo = {
  attributes?: SystemReflectionParameterAttributes;
  member?: SystemReflectionMemberInfo;
  parameterType?: SystemType;
};
export type SystemReflectionParameterInfoRead = {
  attributes?: SystemReflectionParameterAttributes;
  member?: SystemReflectionMemberInfoRead;
  name?: string | null;
  parameterType?: SystemType;
  position?: number;
  isIn?: boolean;
  isLcid?: boolean;
  isOptional?: boolean;
  isOut?: boolean;
  isRetval?: boolean;
  defaultValue?: any | null;
  rawDefaultValue?: any | null;
  hasDefaultValue?: boolean;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  metadataToken?: number;
};
export type SystemReflectionICustomAttributeProvider = object;
export type SystemReflectionMethodInfo = {
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModule;
  attributes?: SystemReflectionMethodAttributes;
  methodImplementationFlags?: SystemReflectionMethodImplAttributes;
  callingConvention?: SystemReflectionCallingConventions;
  methodHandle?: SystemRuntimeMethodHandle;
  memberType?: SystemReflectionMemberTypes;
  returnParameter?: SystemReflectionParameterInfo;
  returnType?: SystemType;
  returnTypeCustomAttributes?: SystemReflectionICustomAttributeProvider;
};
export type SystemReflectionMethodInfoRead = {
  name?: string | null;
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModuleRead;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
  attributes?: SystemReflectionMethodAttributes;
  methodImplementationFlags?: SystemReflectionMethodImplAttributes;
  callingConvention?: SystemReflectionCallingConventions;
  isAbstract?: boolean;
  isConstructor?: boolean;
  isFinal?: boolean;
  isHideBySig?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isVirtual?: boolean;
  isAssembly?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isConstructedGenericMethod?: boolean;
  isGenericMethod?: boolean;
  isGenericMethodDefinition?: boolean;
  containsGenericParameters?: boolean;
  methodHandle?: SystemRuntimeMethodHandle;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  memberType?: SystemReflectionMemberTypes;
  returnParameter?: SystemReflectionParameterInfoRead;
  returnType?: SystemType;
  returnTypeCustomAttributes?: SystemReflectionICustomAttributeProvider;
};
export type SystemSecuritySecurityRuleSet = 0 | 1 | 2;
export type SystemReflectionAssembly = {
  entryPoint?: SystemReflectionMethodInfo;
  manifestModule?: SystemReflectionModule;
  securityRuleSet?: SystemSecuritySecurityRuleSet;
};
export type SystemReflectionGenericParameterAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 8
  | 16
  | 28;
export type SystemReflectionTypeAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 16
  | 24
  | 32
  | 128
  | 256
  | 1024
  | 2048
  | 4096
  | 8192
  | 16384
  | 65536
  | 131072
  | 196608
  | 262144
  | 264192
  | 1048576
  | 12582912;
export type SystemRuntimeInteropServicesLayoutKind = 0 | 2 | 3;
export type SystemRuntimeInteropServicesStructLayoutAttribute = {
  value?: SystemRuntimeInteropServicesLayoutKind;
};
export type SystemRuntimeInteropServicesStructLayoutAttributeRead = {
  typeId?: any | null;
  value?: SystemRuntimeInteropServicesLayoutKind;
};
export type SystemRuntimeTypeHandle = {
  value?: SystemIntPtr;
};
export type SystemReflectionTypeInfo = {
  memberType?: SystemReflectionMemberTypes;
  assembly?: SystemReflectionAssembly;
  module?: SystemReflectionModule;
  declaringType?: SystemType;
  declaringMethod?: SystemReflectionMethodBase;
  reflectedType?: SystemType;
  underlyingSystemType?: SystemType;
  genericParameterAttributes?: SystemReflectionGenericParameterAttributes;
  attributes?: SystemReflectionTypeAttributes;
  structLayoutAttribute?: SystemRuntimeInteropServicesStructLayoutAttribute;
  typeInitializer?: SystemReflectionConstructorInfo;
  typeHandle?: SystemRuntimeTypeHandle;
  baseType?: SystemType;
};
export type SystemReflectionEventAttributes = 0 | 512 | 1024;
export type SystemReflectionEventInfo = {
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModule;
  memberType?: SystemReflectionMemberTypes;
  attributes?: SystemReflectionEventAttributes;
  addMethod?: SystemReflectionMethodInfo;
  removeMethod?: SystemReflectionMethodInfo;
  raiseMethod?: SystemReflectionMethodInfo;
  eventHandlerType?: SystemType;
};
export type SystemReflectionEventInfoRead = {
  name?: string | null;
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModuleRead;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
  memberType?: SystemReflectionMemberTypes;
  attributes?: SystemReflectionEventAttributes;
  isSpecialName?: boolean;
  addMethod?: SystemReflectionMethodInfoRead;
  removeMethod?: SystemReflectionMethodInfoRead;
  raiseMethod?: SystemReflectionMethodInfoRead;
  isMulticast?: boolean;
  eventHandlerType?: SystemType;
};
export type SystemReflectionFieldAttributes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 4096
  | 8192
  | 32768
  | 38144;
export type SystemRuntimeFieldHandle = {
  value?: SystemIntPtr;
};
export type SystemReflectionFieldInfo = {
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModule;
  memberType?: SystemReflectionMemberTypes;
  attributes?: SystemReflectionFieldAttributes;
  fieldType?: SystemType;
  fieldHandle?: SystemRuntimeFieldHandle;
};
export type SystemReflectionFieldInfoRead = {
  name?: string | null;
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModuleRead;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
  memberType?: SystemReflectionMemberTypes;
  attributes?: SystemReflectionFieldAttributes;
  fieldType?: SystemType;
  isInitOnly?: boolean;
  isLiteral?: boolean;
  isNotSerialized?: boolean;
  isPinvokeImpl?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isAssembly?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  fieldHandle?: SystemRuntimeFieldHandle;
};
export type SystemReflectionPropertyAttributes =
  | 0
  | 512
  | 1024
  | 4096
  | 8192
  | 16384
  | 32768
  | 62464;
export type SystemReflectionPropertyInfo = {
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModule;
  memberType?: SystemReflectionMemberTypes;
  propertyType?: SystemType;
  attributes?: SystemReflectionPropertyAttributes;
  getMethod?: SystemReflectionMethodInfo;
  setMethod?: SystemReflectionMethodInfo;
};
export type SystemReflectionPropertyInfoRead = {
  name?: string | null;
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModuleRead;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
  memberType?: SystemReflectionMemberTypes;
  propertyType?: SystemType;
  attributes?: SystemReflectionPropertyAttributes;
  isSpecialName?: boolean;
  canRead?: boolean;
  canWrite?: boolean;
  getMethod?: SystemReflectionMethodInfoRead;
  setMethod?: SystemReflectionMethodInfoRead;
};
export type SystemReflectionTypeInfoRead = {
  name?: string | null;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
  isInterface?: boolean;
  memberType?: SystemReflectionMemberTypes;
  namespace?: string | null;
  assemblyQualifiedName?: string | null;
  fullName?: string | null;
  assembly?: SystemReflectionAssemblyRead;
  module?: SystemReflectionModuleRead;
  isNested?: boolean;
  declaringType?: SystemType;
  declaringMethod?: SystemReflectionMethodBase;
  reflectedType?: SystemType;
  underlyingSystemType?: SystemType;
  isTypeDefinition?: boolean;
  isArray?: boolean;
  isByRef?: boolean;
  isPointer?: boolean;
  isConstructedGenericType?: boolean;
  isGenericParameter?: boolean;
  isGenericTypeParameter?: boolean;
  isGenericMethodParameter?: boolean;
  isGenericType?: boolean;
  isGenericTypeDefinition?: boolean;
  isSZArray?: boolean;
  isVariableBoundArray?: boolean;
  isByRefLike?: boolean;
  hasElementType?: boolean;
  genericTypeArguments?: SystemType[] | null;
  genericParameterPosition?: number;
  genericParameterAttributes?: SystemReflectionGenericParameterAttributes;
  attributes?: SystemReflectionTypeAttributes;
  isAbstract?: boolean;
  isImport?: boolean;
  isSealed?: boolean;
  isSpecialName?: boolean;
  isClass?: boolean;
  isNestedAssembly?: boolean;
  isNestedFamANDAssem?: boolean;
  isNestedFamily?: boolean;
  isNestedFamORAssem?: boolean;
  isNestedPrivate?: boolean;
  isNestedPublic?: boolean;
  isNotPublic?: boolean;
  isPublic?: boolean;
  isAutoLayout?: boolean;
  isExplicitLayout?: boolean;
  isLayoutSequential?: boolean;
  isAnsiClass?: boolean;
  isAutoClass?: boolean;
  isUnicodeClass?: boolean;
  isCOMObject?: boolean;
  isContextful?: boolean;
  isEnum?: boolean;
  isMarshalByRef?: boolean;
  isPrimitive?: boolean;
  isValueType?: boolean;
  isSignatureType?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  structLayoutAttribute?: SystemRuntimeInteropServicesStructLayoutAttributeRead;
  typeInitializer?: SystemReflectionConstructorInfoRead;
  typeHandle?: SystemRuntimeTypeHandle;
  guid?: string;
  baseType?: SystemType;
  isSerializable?: boolean;
  containsGenericParameters?: boolean;
  isVisible?: boolean;
  genericTypeParameters?: SystemType[] | null;
  declaredConstructors?: SystemReflectionConstructorInfoRead[] | null;
  declaredEvents?: SystemReflectionEventInfoRead[] | null;
  declaredFields?: SystemReflectionFieldInfoRead[] | null;
  declaredMembers?: SystemReflectionMemberInfoRead[] | null;
  declaredMethods?: SystemReflectionMethodInfoRead[] | null;
  declaredNestedTypes?: SystemReflectionTypeInfoRead[] | null;
  declaredProperties?: SystemReflectionPropertyInfoRead[] | null;
  implementedInterfaces?: SystemType[] | null;
};
export type SystemReflectionAssemblyRead = {
  definedTypes?: SystemReflectionTypeInfoRead[] | null;
  exportedTypes?: SystemType[] | null;
  codeBase?: string | null;
  entryPoint?: SystemReflectionMethodInfoRead;
  fullName?: string | null;
  imageRuntimeVersion?: string | null;
  isDynamic?: boolean;
  location?: string | null;
  reflectionOnly?: boolean;
  isCollectible?: boolean;
  isFullyTrusted?: boolean;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  escapedCodeBase?: string | null;
  manifestModule?: SystemReflectionModuleRead;
  modules?: SystemReflectionModuleRead[] | null;
  globalAssemblyCache?: boolean;
  hostContext?: number;
  securityRuleSet?: SystemSecuritySecurityRuleSet;
};
export type SystemType = {
  memberType?: SystemReflectionMemberTypes;
  assembly?: SystemReflectionAssembly;
  module?: SystemReflectionModule;
  declaringType?: SystemType;
  declaringMethod?: SystemReflectionMethodBase;
  reflectedType?: SystemType;
  underlyingSystemType?: SystemType;
  genericParameterAttributes?: SystemReflectionGenericParameterAttributes;
  attributes?: SystemReflectionTypeAttributes;
  structLayoutAttribute?: SystemRuntimeInteropServicesStructLayoutAttribute;
  typeInitializer?: SystemReflectionConstructorInfo;
  typeHandle?: SystemRuntimeTypeHandle;
  baseType?: SystemType;
};
export type SystemTypeRead = {
  name?: string | null;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
  isInterface?: boolean;
  memberType?: SystemReflectionMemberTypes;
  namespace?: string | null;
  assemblyQualifiedName?: string | null;
  fullName?: string | null;
  assembly?: SystemReflectionAssemblyRead;
  module?: SystemReflectionModuleRead;
  isNested?: boolean;
  declaringType?: SystemTypeRead;
  declaringMethod?: SystemReflectionMethodBase;
  reflectedType?: SystemTypeRead;
  underlyingSystemType?: SystemTypeRead;
  isTypeDefinition?: boolean;
  isArray?: boolean;
  isByRef?: boolean;
  isPointer?: boolean;
  isConstructedGenericType?: boolean;
  isGenericParameter?: boolean;
  isGenericTypeParameter?: boolean;
  isGenericMethodParameter?: boolean;
  isGenericType?: boolean;
  isGenericTypeDefinition?: boolean;
  isSZArray?: boolean;
  isVariableBoundArray?: boolean;
  isByRefLike?: boolean;
  hasElementType?: boolean;
  genericTypeArguments?: SystemTypeRead[] | null;
  genericParameterPosition?: number;
  genericParameterAttributes?: SystemReflectionGenericParameterAttributes;
  attributes?: SystemReflectionTypeAttributes;
  isAbstract?: boolean;
  isImport?: boolean;
  isSealed?: boolean;
  isSpecialName?: boolean;
  isClass?: boolean;
  isNestedAssembly?: boolean;
  isNestedFamANDAssem?: boolean;
  isNestedFamily?: boolean;
  isNestedFamORAssem?: boolean;
  isNestedPrivate?: boolean;
  isNestedPublic?: boolean;
  isNotPublic?: boolean;
  isPublic?: boolean;
  isAutoLayout?: boolean;
  isExplicitLayout?: boolean;
  isLayoutSequential?: boolean;
  isAnsiClass?: boolean;
  isAutoClass?: boolean;
  isUnicodeClass?: boolean;
  isCOMObject?: boolean;
  isContextful?: boolean;
  isEnum?: boolean;
  isMarshalByRef?: boolean;
  isPrimitive?: boolean;
  isValueType?: boolean;
  isSignatureType?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  structLayoutAttribute?: SystemRuntimeInteropServicesStructLayoutAttributeRead;
  typeInitializer?: SystemReflectionConstructorInfoRead;
  typeHandle?: SystemRuntimeTypeHandle;
  guid?: string;
  baseType?: SystemTypeRead;
  isSerializable?: boolean;
  containsGenericParameters?: boolean;
  isVisible?: boolean;
};
export type SystemReflectionMethodBase = {
  memberType?: SystemReflectionMemberTypes;
  declaringType?: SystemType;
  reflectedType?: SystemType;
  module?: SystemReflectionModule;
  attributes?: SystemReflectionMethodAttributes;
  methodImplementationFlags?: SystemReflectionMethodImplAttributes;
  callingConvention?: SystemReflectionCallingConventions;
  methodHandle?: SystemRuntimeMethodHandle;
};
export type SystemReflectionMethodBaseRead = {
  memberType?: SystemReflectionMemberTypes;
  name?: string | null;
  declaringType?: SystemTypeRead;
  reflectedType?: SystemTypeRead;
  module?: SystemReflectionModuleRead;
  customAttributes?: SystemReflectionCustomAttributeDataRead[] | null;
  isCollectible?: boolean;
  metadataToken?: number;
  attributes?: SystemReflectionMethodAttributes;
  methodImplementationFlags?: SystemReflectionMethodImplAttributes;
  callingConvention?: SystemReflectionCallingConventions;
  isAbstract?: boolean;
  isConstructor?: boolean;
  isFinal?: boolean;
  isHideBySig?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isVirtual?: boolean;
  isAssembly?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isConstructedGenericMethod?: boolean;
  isGenericMethod?: boolean;
  isGenericMethodDefinition?: boolean;
  containsGenericParameters?: boolean;
  methodHandle?: SystemRuntimeMethodHandle;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
};
export type SystemException = {
  targetSite?: SystemReflectionMethodBase;
  innerException?: SystemException;
  helpLink?: string | null;
  source?: string | null;
  hResult?: number;
};
export type SystemExceptionRead = {
  targetSite?: SystemReflectionMethodBaseRead;
  message?: string | null;
  data?: {
    [key: string]: any;
  } | null;
  innerException?: SystemExceptionRead;
  helpLink?: string | null;
  source?: string | null;
  hResult?: number;
  stackTrace?: string | null;
};
export type MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798E =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemException;
    content?: string | null;
  };
export type MoviesApplicationModelsResponseModel601SystemString20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemExceptionRead;
    content?: string | null;
  };
export type MoviesContractsRequestsRegisterRequest = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
};
export type MoviesContractsResponsesLoginDto = {
  token?: string | null;
  isAdmin?: boolean;
  name?: string | null;
  email?: string | null;
};
export type MoviesApplicationModelsResponseModel601MoviesContractsResponsesLoginDto20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNull =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemException;
    content?: MoviesContractsResponsesLoginDto;
  };
export type MoviesApplicationModelsResponseModel601MoviesContractsResponsesLoginDto20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemExceptionRead;
    content?: MoviesContractsResponsesLoginDto;
  };
export type MoviesContractsRequestsLoginRequest = {
  email?: string | null;
  password?: string | null;
};
export type MoviesContractsRequestsResetPasswordRequest = {
  token?: string | null;
  newPassword?: string | null;
  userId?: string | null;
};
export type MoviesContractsRequestsCreateMovieRequest = {
  title?: string | null;
  yearOfRelease?: string | null;
};
export type MoviesContractsResponsesCastResponse = {
  id?: string;
  name?: string | null;
  role?: string | null;
  updatedAt?: string | null;
};
export type MoviesContractsResponsesGenreResponse = {
  id?: string;
  createdAt?: string;
  updatedAt?: string | null;
  name?: string | null;
};
export type MoviesContractsResponsesExternalRatingResponse = {
  id?: string;
  rating?: string | null;
  source?: string | null;
};
export type MoviesContractsResponsesOmdbRatingResponse = {
  id?: string;
  source?: string | null;
  value?: string | null;
};
export type MoviesContractsResponsesMovieRatingResponse = {
  id?: string;
  movieId?: string;
  rating?: number;
  userId?: string | null;
  isUserRated?: boolean;
  updatedAt?: string | null;
};
export type MoviesContractsResponsesUserWatchlistResponse = {
  id?: string;
  movieId?: string;
  userId?: string | null;
  createdAt?: string;
  updatedAt?: string | null;
  isActive?: boolean;
};
export type MoviesContractsResponsesMovieResponse = {
  id?: string;
  title?: string | null;
  released?: string | null;
  runtime?: string | null;
  yearOfRelease?: string | null;
  rated?: string | null;
  plot?: string | null;
  awards?: string | null;
  poster?: string | null;
  totalSeasons?: string | null;
  isActive?: boolean;
  cast?: MoviesContractsResponsesCastResponse[] | null;
  genres?: MoviesContractsResponsesGenreResponse[] | null;
  externalRatings?: MoviesContractsResponsesExternalRatingResponse[] | null;
  omdbRatings?: MoviesContractsResponsesOmdbRatingResponse[] | null;
  movieRatings?: MoviesContractsResponsesMovieRatingResponse[] | null;
  userWatchlists?: MoviesContractsResponsesUserWatchlistResponse[] | null;
  rating?: number | null;
  isUserRated?: boolean;
  userWatchlistId?: string;
  isMovieWatchlist?: boolean;
  userRating?: number | null;
  firstAddedToWatchlistAt?: string | null;
  createdAt?: string;
  updatedAt?: string | null;
};
export type MoviesApplicationModelsResponseModel601MoviesContractsResponsesMovieResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNull =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemException;
    content?: MoviesContractsResponsesMovieResponse;
  };
export type MoviesApplicationModelsResponseModel601MoviesContractsResponsesMovieResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemExceptionRead;
    content?: MoviesContractsResponsesMovieResponse;
  };
export type MoviesContractsResponsesMoviesResponse = {
  items?: MoviesContractsResponsesMovieResponse[] | null;
  pageSize?: number;
  page?: number;
  total?: number;
};
export type MoviesContractsResponsesMoviesResponseRead = {
  items?: MoviesContractsResponsesMovieResponse[] | null;
  pageSize?: number;
  page?: number;
  total?: number;
  hasNextPage?: boolean;
};
export type MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNull =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemException;
    content?: MoviesContractsResponsesMoviesResponse;
  };
export type MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponse20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemExceptionRead;
    content?: MoviesContractsResponsesMoviesResponseRead;
  };
export type MoviesContractsRequestsUpdateMovieRequest = {
  id?: string;
  runtime?: string | null;
  rated?: string | null;
  plot?: string | null;
  awards?: string | null;
  poster?: string | null;
  totalSeasons?: string | null;
  isActive?: boolean;
  rating?: number | null;
  userRating?: number | null;
  createdAt?: string;
  updatedAt?: string | null;
  cast?: MoviesContractsResponsesCastResponse[] | null;
  genres?: MoviesContractsResponsesGenreResponse[] | null;
  externalRatings?: MoviesContractsResponsesExternalRatingResponse[] | null;
  omdbRatings?: MoviesContractsResponsesOmdbRatingResponse[] | null;
  movieRatings?: MoviesContractsResponsesMovieRatingResponse[] | null;
};
export type MoviesApplicationModelsMovieRating = {
  id?: string;
  movieId?: string;
  rating?: number;
  userId?: string | null;
  isUserRated?: boolean;
  createdAt?: string;
  updatedAt?: string | null;
  user?: MoviesContractsModelsApplicationUser;
  movie?: MoviesApplicationModelsMovie;
};
export type MoviesContractsModelsApplicationUser = {
  id?: string | null;
  userName?: string | null;
  normalizedUserName?: string | null;
  email?: string | null;
  normalizedEmail?: string | null;
  emailConfirmed?: boolean;
  passwordHash?: string | null;
  securityStamp?: string | null;
  concurrencyStamp?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  lockoutEnd?: string | null;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
  firstName?: string | null;
  lastName?: string | null;
  isTrustedMember?: boolean;
  isAdmin?: boolean;
  firstAddedToWatchlistAt?: string | null;
  movieRatings?: MoviesApplicationModelsMovieRating[] | null;
};
export type MoviesApplicationModelsGenre = {
  id?: string;
  createdAt?: string;
  updatedAt?: string | null;
  name?: string | null;
  movies?: MoviesApplicationModelsMovie[] | null;
};
export type MoviesApplicationModelsCast = {
  id?: string;
  name?: string | null;
  role?: string | null;
  movies?: MoviesApplicationModelsMovie[] | null;
};
export type MoviesApplicationModelsUserWatchlist = {
  id?: string;
  movieId?: string;
  movie?: MoviesApplicationModelsMovie;
  userId?: string | null;
  user?: MoviesContractsModelsApplicationUser;
  createdAt?: string;
  updatedAt?: string | null;
  isActive?: boolean;
};
export type MoviesApplicationModelsExternalRating = {
  id?: string;
  rating?: string | null;
  source?: string | null;
  movieId?: string;
  movie?: MoviesApplicationModelsMovie;
};
export type MoviesApplicationModelsOmdbRating = {
  id?: string;
  movieId?: string;
  source?: string | null;
  value?: string | null;
};
export type MoviesApplicationModelsMovie = {
  id?: string;
  title?: string | null;
  released?: string | null;
  runtime?: string | null;
  yearOfRelease?: string | null;
  rated?: string | null;
  plot?: string | null;
  awards?: string | null;
  poster?: string | null;
  totalSeasons?: string | null;
  isActive?: boolean;
  rating?: number | null;
  userRating?: number | null;
  createdAt?: string;
  updatedAt?: string | null;
  appUser?: MoviesContractsModelsApplicationUser;
  genres?: MoviesApplicationModelsGenre[] | null;
  cast?: MoviesApplicationModelsCast[] | null;
  userWatchlists?: MoviesApplicationModelsUserWatchlist[] | null;
  externalRatings?: MoviesApplicationModelsExternalRating[] | null;
  omdbRatings?: MoviesApplicationModelsOmdbRating[] | null;
  movieRatings?: MoviesApplicationModelsMovieRating[] | null;
};
export type MoviesApplicationModelsResponseModel601SystemCollectionsGenericIEnumerable601MoviesApplicationModelsMovie20MoviesApplication20Version100020CultureNeutral20PublicKeyTokenNull20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798E =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemException;
    content?: MoviesApplicationModelsMovie[] | null;
  };
export type MoviesApplicationModelsResponseModel601SystemCollectionsGenericIEnumerable601MoviesApplicationModelsMovie20MoviesApplication20Version100020CultureNeutral20PublicKeyTokenNull20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemExceptionRead;
    content?: MoviesApplicationModelsMovie[] | null;
  };
export type MoviesContractsResponsesCastResponseDto = {
  id?: string;
  name?: string | null;
  role?: string | null;
};
export type MoviesContractsResponsesGenreResponseDto = {
  id?: string;
  name?: string | null;
};
export type MoviesContractsResponsesExternalRatingResponseDto = {
  id?: string;
  source?: string | null;
  rating?: string | null;
};
export type MoviesContractsResponsesOmdbRatingResponseDto = {
  id?: string;
  source?: string | null;
  value?: string | null;
};
export type MoviesContractsResponsesMovieRatingResponseDto = {
  id?: string;
  rating?: number;
};
export type MoviesContractsResponsesMovieResponseDto = {
  id?: string;
  userId?: string | null;
  userWatchlistId?: string;
  title?: string | null;
  released?: string | null;
  runtime?: string | null;
  yearOfRelease?: string | null;
  rated?: string | null;
  plot?: string | null;
  awards?: string | null;
  poster?: string | null;
  totalSeasons?: string | null;
  isActive?: boolean;
  rating?: number | null;
  userRating?: number | null;
  createdAt?: string;
  updatedAt?: string | null;
  isMovieWatchlist?: boolean;
  firstAddedToWatchlistAt?: string | null;
  cast?: MoviesContractsResponsesCastResponseDto[] | null;
  genres?: MoviesContractsResponsesGenreResponseDto[] | null;
  externalRatings?: MoviesContractsResponsesExternalRatingResponseDto[] | null;
  omdbRatings?: MoviesContractsResponsesOmdbRatingResponseDto[] | null;
  movieRatings?: MoviesContractsResponsesMovieRatingResponseDto[] | null;
};
export type MoviesContractsResponsesMoviesResponseDto = {
  items?: MoviesContractsResponsesMovieResponseDto[] | null;
  pageSize?: number;
  page?: number;
  total?: number;
};
export type MoviesContractsResponsesMoviesResponseDtoRead = {
  items?: MoviesContractsResponsesMovieResponseDto[] | null;
  pageSize?: number;
  page?: number;
  total?: number;
  hasNextPage?: boolean;
};
export type MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponseDto20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNull =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemException;
    content?: MoviesContractsResponsesMoviesResponseDto;
  };
export type MoviesApplicationModelsResponseModel601MoviesContractsResponsesMoviesResponseDto20MoviesContracts20Version100020CultureNeutral20PublicKeyTokenNullRead =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemExceptionRead;
    content?: MoviesContractsResponsesMoviesResponseDtoRead;
  };
export type MoviesApplicationModelsResponseModel601SystemCollectionsGenericIEnumerable601MoviesApplicationModelsMovieRating20MoviesApplication20Version100020CultureNeutral20PublicKeyTokenNull20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798E =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemException;
    content?: MoviesApplicationModelsMovieRating[] | null;
  };
export type MoviesApplicationModelsResponseModel601SystemCollectionsGenericIEnumerable601MoviesApplicationModelsMovieRating20MoviesApplication20Version100020CultureNeutral20PublicKeyTokenNull20SystemPrivateCoreLib20Version700020CultureNeutral20PublicKeyToken7Cec85D7Bea7798ERead =
  {
    success?: boolean;
    title?: string | null;
    description?: string | null;
    exceptionMessage?: SystemExceptionRead;
    content?: MoviesApplicationModelsMovieRating[] | null;
  };
export const {
  usePostApiAccountRegisterMutation,
  usePostApiAccountLoginMutation,
  usePostApiMoviesCreateMovieMutation,
  useGetApiMoviesGetByIdQuery,
  useGetApiMoviesMoviesListQuery,
  useGetApiMoviesAdminMoviesListQuery,
  useGetApiMoviesFavoriteMoviesListQuery,
  usePutApiMoviesUpdateByIdMutation,
  useDeleteApiMoviesDeleteMovieMutation,
  useGetApiMoviesSearchMovieQuery,
  useGetApiMoviesAddMovieWatchListQuery,
  useDeleteApiMoviesDeleteMovieWatchListMutation,
  useGetApiMoviesAllMovieWatchListQuery,
  useGetApiMoviesTopMoviesListQuery,
  usePostApiMoviesCreateTopMoviesListMutation,
  useGetApiMoviesMostRecentMoviesListQuery,
  useGetApiMoviesCreateRatingsQuery,
  useDeleteApiMoviesDeleteRatingsMutation,
  useGetApiMoviesMeQuery,
  useLazyGetApiMoviesAddMovieWatchListQuery,
  useLazyGetApiMoviesAdminMoviesListQuery,
  useLazyGetApiMoviesAllMovieWatchListQuery,
  useLazyGetApiMoviesCreateRatingsQuery,
  useLazyGetApiMoviesFavoriteMoviesListQuery,
  useLazyGetApiMoviesGetByIdQuery,
  useLazyGetApiMoviesMeQuery,
  useLazyGetApiMoviesMostRecentMoviesListQuery,
  useLazyGetApiMoviesMoviesListQuery,
  useLazyGetApiMoviesSearchMovieQuery,
  useLazyGetApiMoviesTopMoviesListQuery,
} = injectedRtkApi;
