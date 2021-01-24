export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};

export type DeleteDomainPayload = {
  __typename?: 'DeleteDomainPayload';
  domain?: Maybe<Array<Maybe<Domain>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteDomainPayloadDomainArgs = {
  filter?: Maybe<DomainFilter>;
  order?: Maybe<DomainOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum PageOrderable {
  Title = 'title',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export type AddPageInput = {
  title: Scalars['String'];
  domain: DomainRef;
  author: UserRef;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type AddPagePayload = {
  __typename?: 'AddPagePayload';
  page?: Maybe<Array<Maybe<Page>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type AddPagePayloadPageArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE',
}

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export enum TestOrderable {
  Test = 'test',
}

export type UserOrder = {
  asc?: Maybe<UserOrderable>;
  desc?: Maybe<UserOrderable>;
  then?: Maybe<UserOrder>;
};

export type TestFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<TestHasFilter>;
  and?: Maybe<Array<Maybe<TestFilter>>>;
  or?: Maybe<Array<Maybe<TestFilter>>>;
  not?: Maybe<TestFilter>;
};

export type UserRef = {
  username?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  domains?: Maybe<Array<Maybe<DomainRef>>>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type UpdateTestPayload = {
  __typename?: 'UpdateTestPayload';
  test?: Maybe<Array<Maybe<Test>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type UpdateTestPayloadTestArgs = {
  filter?: Maybe<TestFilter>;
  order?: Maybe<TestOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DomainRef = {
  domain?: Maybe<Scalars['String']>;
  admins?: Maybe<Array<Maybe<UserRef>>>;
  pages?: Maybe<Array<Maybe<PageRef>>>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type PageFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<PageHasFilter>;
  and?: Maybe<Array<Maybe<PageFilter>>>;
  or?: Maybe<Array<Maybe<PageFilter>>>;
  not?: Maybe<PageFilter>;
};

export type TestPatch = {
  test?: Maybe<Scalars['String']>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type DomainOrder = {
  asc?: Maybe<DomainOrderable>;
  desc?: Maybe<DomainOrderable>;
  then?: Maybe<DomainOrder>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DomainAggregateResult = {
  __typename?: 'DomainAggregateResult';
  count?: Maybe<Scalars['Int']>;
  domainMin?: Maybe<Scalars['String']>;
  domainMax?: Maybe<Scalars['String']>;
};

export type TestRef = {
  id?: Maybe<Scalars['ID']>;
  test?: Maybe<Scalars['String']>;
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum TestHasFilter {
  Test = 'test',
}

export type PageOrder = {
  asc?: Maybe<PageOrderable>;
  desc?: Maybe<PageOrderable>;
  then?: Maybe<PageOrder>;
};

export type User = {
  __typename?: 'User';
  username: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  domains?: Maybe<Array<Maybe<Domain>>>;
  domainsAggregate?: Maybe<DomainAggregateResult>;
};

export type UserDomainsArgs = {
  filter?: Maybe<DomainFilter>;
  order?: Maybe<DomainOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UserDomainsAggregateArgs = {
  filter?: Maybe<DomainFilter>;
};

export type Page = {
  __typename?: 'Page';
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  domain: Domain;
  author: User;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageDomainArgs = {
  filter?: Maybe<DomainFilter>;
};

export type PageAuthorArgs = {
  filter?: Maybe<UserFilter>;
};

export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export type Mutation = {
  __typename?: 'Mutation';
  addTest?: Maybe<AddTestPayload>;
  updateTest?: Maybe<UpdateTestPayload>;
  deleteTest?: Maybe<DeleteTestPayload>;
  addUser?: Maybe<AddUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  addDomain?: Maybe<AddDomainPayload>;
  updateDomain?: Maybe<UpdateDomainPayload>;
  deleteDomain?: Maybe<DeleteDomainPayload>;
  addPage?: Maybe<AddPagePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  deletePage?: Maybe<DeletePagePayload>;
};

export type MutationAddTestArgs = {
  input: Array<AddTestInput>;
};

export type MutationUpdateTestArgs = {
  input: UpdateTestInput;
};

export type MutationDeleteTestArgs = {
  filter: TestFilter;
};

export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationDeleteUserArgs = {
  filter: UserFilter;
};

export type MutationAddDomainArgs = {
  input: Array<AddDomainInput>;
};

export type MutationUpdateDomainArgs = {
  input: UpdateDomainInput;
};

export type MutationDeleteDomainArgs = {
  filter: DomainFilter;
};

export type MutationAddPageArgs = {
  input: Array<AddPageInput>;
};

export type MutationUpdatePageArgs = {
  input: UpdatePageInput;
};

export type MutationDeletePageArgs = {
  filter: PageFilter;
};

export type Test = {
  __typename?: 'Test';
  id?: Maybe<Scalars['ID']>;
  test: Scalars['String'];
};

export type TestAggregateResult = {
  __typename?: 'TestAggregateResult';
  count?: Maybe<Scalars['Int']>;
  testMin?: Maybe<Scalars['String']>;
  testMax?: Maybe<Scalars['String']>;
};

export type UpdateDomainInput = {
  filter: DomainFilter;
  set?: Maybe<DomainPatch>;
  remove?: Maybe<DomainPatch>;
};

export type AddTestPayload = {
  __typename?: 'AddTestPayload';
  test?: Maybe<Array<Maybe<Test>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type AddTestPayloadTestArgs = {
  filter?: Maybe<TestFilter>;
  order?: Maybe<TestOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PageAggregateResult = {
  __typename?: 'PageAggregateResult';
  count?: Maybe<Scalars['Int']>;
  titleMin?: Maybe<Scalars['String']>;
  titleMax?: Maybe<Scalars['String']>;
  createdAtMin?: Maybe<Scalars['DateTime']>;
  createdAtMax?: Maybe<Scalars['DateTime']>;
  updatedAtMin?: Maybe<Scalars['DateTime']>;
  updatedAtMax?: Maybe<Scalars['DateTime']>;
};

export type PageRef = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainRef>;
  author?: Maybe<UserRef>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};

export enum UserHasFilter {
  Username = 'username',
  DisplayName = 'displayName',
  Picture = 'picture',
  Domains = 'domains',
}

export enum UserOrderable {
  Username = 'username',
  DisplayName = 'displayName',
  Picture = 'picture',
}

export type AddTestInput = {
  test: Scalars['String'];
};

export type UpdateDomainPayload = {
  __typename?: 'UpdateDomainPayload';
  domain?: Maybe<Array<Maybe<Domain>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type UpdateDomainPayloadDomainArgs = {
  filter?: Maybe<DomainFilter>;
  order?: Maybe<DomainOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']>;
  usernameMin?: Maybe<Scalars['String']>;
  usernameMax?: Maybe<Scalars['String']>;
  displayNameMin?: Maybe<Scalars['String']>;
  displayNameMax?: Maybe<Scalars['String']>;
  pictureMin?: Maybe<Scalars['String']>;
  pictureMax?: Maybe<Scalars['String']>;
};

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export type AddDomainPayload = {
  __typename?: 'AddDomainPayload';
  domain?: Maybe<Array<Maybe<Domain>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type AddDomainPayloadDomainArgs = {
  filter?: Maybe<DomainFilter>;
  order?: Maybe<DomainOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type AddDomainInput = {
  domain: Scalars['String'];
  admins?: Maybe<Array<Maybe<UserRef>>>;
  pages?: Maybe<Array<Maybe<PageRef>>>;
};

export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo',
}

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  page?: Maybe<Array<Maybe<Page>>>;
  numUids?: Maybe<Scalars['Int']>;
};

export type UpdatePagePayloadPageArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddUserInput = {
  username: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  domains?: Maybe<Array<Maybe<DomainRef>>>;
};

export type DomainPatch = {
  admins?: Maybe<Array<Maybe<UserRef>>>;
  pages?: Maybe<Array<Maybe<PageRef>>>;
};

export type Query = {
  __typename?: 'Query';
  getTest?: Maybe<Test>;
  queryTest?: Maybe<Array<Maybe<Test>>>;
  aggregateTest?: Maybe<TestAggregateResult>;
  getUser?: Maybe<User>;
  queryUser?: Maybe<Array<Maybe<User>>>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getDomain?: Maybe<Domain>;
  queryDomain?: Maybe<Array<Maybe<Domain>>>;
  aggregateDomain?: Maybe<DomainAggregateResult>;
  getPage?: Maybe<Page>;
  queryPage?: Maybe<Array<Maybe<Page>>>;
  aggregatePage?: Maybe<PageAggregateResult>;
};

export type QueryGetTestArgs = {
  id: Scalars['ID'];
};

export type QueryQueryTestArgs = {
  filter?: Maybe<TestFilter>;
  order?: Maybe<TestOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryAggregateTestArgs = {
  filter?: Maybe<TestFilter>;
};

export type QueryGetUserArgs = {
  username: Scalars['String'];
};

export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryAggregateUserArgs = {
  filter?: Maybe<UserFilter>;
};

export type QueryGetDomainArgs = {
  domain: Scalars['String'];
};

export type QueryQueryDomainArgs = {
  filter?: Maybe<DomainFilter>;
  order?: Maybe<DomainOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryAggregateDomainArgs = {
  filter?: Maybe<DomainFilter>;
};

export type QueryGetPageArgs = {
  id: Scalars['ID'];
};

export type QueryQueryPageArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryAggregatePageArgs = {
  filter?: Maybe<PageFilter>;
};

export type TestOrder = {
  asc?: Maybe<TestOrderable>;
  desc?: Maybe<TestOrderable>;
  then?: Maybe<TestOrder>;
};

export type UpdatePageInput = {
  filter: PageFilter;
  set?: Maybe<PagePatch>;
  remove?: Maybe<PagePatch>;
};

export type UserFilter = {
  username?: Maybe<StringHashFilter>;
  has?: Maybe<UserHasFilter>;
  and?: Maybe<Array<Maybe<UserFilter>>>;
  or?: Maybe<Array<Maybe<UserFilter>>>;
  not?: Maybe<UserFilter>;
};

export type Domain = {
  __typename?: 'Domain';
  domain: Scalars['String'];
  admins?: Maybe<Array<Maybe<User>>>;
  pages?: Maybe<Array<Maybe<Page>>>;
  adminsAggregate?: Maybe<UserAggregateResult>;
  pagesAggregate?: Maybe<PageAggregateResult>;
};

export type DomainAdminsArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DomainPagesArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DomainAdminsAggregateArgs = {
  filter?: Maybe<UserFilter>;
};

export type DomainPagesAggregateArgs = {
  filter?: Maybe<PageFilter>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export enum DomainHasFilter {
  Domain = 'domain',
  Admins = 'admins',
  Pages = 'pages',
}

export type PagePatch = {
  title?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainRef>;
  author?: Maybe<UserRef>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserPatch = {
  displayName?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  domains?: Maybe<Array<Maybe<DomainRef>>>;
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type DomainFilter = {
  domain?: Maybe<StringHashFilter>;
  has?: Maybe<DomainHasFilter>;
  and?: Maybe<Array<Maybe<DomainFilter>>>;
  or?: Maybe<Array<Maybe<DomainFilter>>>;
  not?: Maybe<DomainFilter>;
};

export enum DomainOrderable {
  Domain = 'domain',
}

export enum PageHasFilter {
  Title = 'title',
  Domain = 'domain',
  Author = 'author',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export type UpdateTestInput = {
  filter: TestFilter;
  set?: Maybe<TestPatch>;
  remove?: Maybe<TestPatch>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  page?: Maybe<Array<Maybe<Page>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeletePagePayloadPageArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteTestPayload = {
  __typename?: 'DeleteTestPayload';
  test?: Maybe<Array<Maybe<Test>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteTestPayloadTestArgs = {
  filter?: Maybe<TestFilter>;
  order?: Maybe<TestOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  set?: Maybe<UserPatch>;
  remove?: Maybe<UserPatch>;
};
