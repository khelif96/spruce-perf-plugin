export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: Date;
  Duration: number;
  StringMap: { [key: string]: any };
};

export type Query = {
  userPatches: UserPatches;
  task?: Maybe<Task>;
  taskAllExecutions: Array<Task>;
  patch: Patch;
  projects: Projects;
  patchTasks: PatchTasks;
  taskTests: TaskTestResult;
  taskFiles: TaskFiles;
  user: User;
  taskLogs: RecentTaskLogs;
  patchBuildVariants: Array<PatchBuildVariant>;
  commitQueue: CommitQueue;
  userSettings?: Maybe<UserSettings>;
  awsRegions?: Maybe<Array<Scalars['String']>>;
  userConfig?: Maybe<UserConfig>;
  clientConfig?: Maybe<ClientConfig>;
  siteBanner: SiteBanner;
  host?: Maybe<Host>;
  hostEvents: HostEvents;
  hosts: HostsResponse;
  myHosts: Array<Host>;
  myVolumes: Array<Volume>;
  myPublicKeys: Array<PublicKey>;
  distros: Array<Maybe<Distro>>;
  instanceTypes: Array<Scalars['String']>;
  distroTaskQueue: Array<TaskQueueItem>;
  taskQueueDistros: Array<TaskQueueDistro>;
  buildBaron: BuildBaron;
  bbGetCreatedTickets: Array<JiraTicket>;
};


export type QueryUserPatchesArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  patchName?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Scalars['String']>>;
  userId?: Maybe<Scalars['String']>;
  includeCommitQueue?: Maybe<Scalars['Boolean']>;
};


export type QueryTaskArgs = {
  taskId: Scalars['String'];
  execution?: Maybe<Scalars['Int']>;
};


export type QueryTaskAllExecutionsArgs = {
  taskId: Scalars['String'];
};


export type QueryPatchArgs = {
  id: Scalars['String'];
};


export type QueryPatchTasksArgs = {
  patchId: Scalars['String'];
  sortBy?: Maybe<TaskSortCategory>;
  sortDir?: Maybe<SortDirection>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  statuses?: Maybe<Array<Scalars['String']>>;
  baseStatuses?: Maybe<Array<Scalars['String']>>;
  variant?: Maybe<Scalars['String']>;
  taskName?: Maybe<Scalars['String']>;
};


export type QueryTaskTestsArgs = {
  taskId: Scalars['String'];
  execution?: Maybe<Scalars['Int']>;
  sortCategory?: Maybe<TestSortCategory>;
  sortDirection?: Maybe<SortDirection>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  testName?: Maybe<Scalars['String']>;
  statuses?: Array<Scalars['String']>;
};


export type QueryTaskFilesArgs = {
  taskId: Scalars['String'];
  execution?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryTaskLogsArgs = {
  taskId: Scalars['String'];
};


export type QueryPatchBuildVariantsArgs = {
  patchId: Scalars['String'];
};


export type QueryCommitQueueArgs = {
  id: Scalars['String'];
};


export type QueryHostArgs = {
  hostId: Scalars['String'];
};


export type QueryHostEventsArgs = {
  hostId: Scalars['String'];
  hostTag?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryHostsArgs = {
  hostId?: Maybe<Scalars['String']>;
  distroId?: Maybe<Scalars['String']>;
  currentTaskId?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Scalars['String']>>;
  startedBy?: Maybe<Scalars['String']>;
  sortBy?: Maybe<HostSortBy>;
  sortDir?: Maybe<SortDirection>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDistrosArgs = {
  onlySpawnable: Scalars['Boolean'];
};


export type QueryDistroTaskQueueArgs = {
  distroId: Scalars['String'];
};


export type QueryBuildBaronArgs = {
  taskId: Scalars['String'];
  execution: Scalars['Int'];
};


export type QueryBbGetCreatedTicketsArgs = {
  taskId: Scalars['String'];
};

export type Mutation = {
  addFavoriteProject: Project;
  removeFavoriteProject: Project;
  schedulePatch: Patch;
  schedulePatchTasks?: Maybe<Scalars['String']>;
  unschedulePatchTasks?: Maybe<Scalars['String']>;
  restartPatch?: Maybe<Scalars['String']>;
  enqueuePatch: Patch;
  setPatchPriority?: Maybe<Scalars['String']>;
  scheduleTask: Task;
  unscheduleTask: Task;
  abortTask: Task;
  setTaskPriority: Task;
  restartTask: Task;
  saveSubscription: Scalars['Boolean'];
  removePatchFromCommitQueue?: Maybe<Scalars['String']>;
  updateUserSettings: Scalars['Boolean'];
  restartJasper: Scalars['Int'];
  updateHostStatus: Scalars['Int'];
  createPublicKey: Array<PublicKey>;
  spawnHost: Host;
  spawnVolume: Scalars['Boolean'];
  updateVolume: Scalars['Boolean'];
  updateSpawnHostStatus: Host;
  removePublicKey: Array<PublicKey>;
  updatePublicKey: Array<PublicKey>;
  attachVolumeToHost: Scalars['Boolean'];
  detachVolumeFromHost: Scalars['Boolean'];
  removeVolume: Scalars['Boolean'];
  editSpawnHost: Host;
  bbCreateTicket: Scalars['Boolean'];
};


export type MutationAddFavoriteProjectArgs = {
  identifier: Scalars['String'];
};


export type MutationRemoveFavoriteProjectArgs = {
  identifier: Scalars['String'];
};


export type MutationSchedulePatchArgs = {
  patchId: Scalars['String'];
  reconfigure: PatchReconfigure;
};


export type MutationSchedulePatchTasksArgs = {
  patchId: Scalars['String'];
};


export type MutationUnschedulePatchTasksArgs = {
  patchId: Scalars['String'];
  abort: Scalars['Boolean'];
};


export type MutationRestartPatchArgs = {
  patchId: Scalars['String'];
  abort: Scalars['Boolean'];
  taskIds: Array<Scalars['String']>;
};


export type MutationEnqueuePatchArgs = {
  patchId: Scalars['String'];
};


export type MutationSetPatchPriorityArgs = {
  patchId: Scalars['String'];
  priority: Scalars['Int'];
};


export type MutationScheduleTaskArgs = {
  taskId: Scalars['String'];
};


export type MutationUnscheduleTaskArgs = {
  taskId: Scalars['String'];
};


export type MutationAbortTaskArgs = {
  taskId: Scalars['String'];
};


export type MutationSetTaskPriorityArgs = {
  taskId: Scalars['String'];
  priority: Scalars['Int'];
};


export type MutationRestartTaskArgs = {
  taskId: Scalars['String'];
};


export type MutationSaveSubscriptionArgs = {
  subscription: SubscriptionInput;
};


export type MutationRemovePatchFromCommitQueueArgs = {
  commitQueueId: Scalars['String'];
  patchId: Scalars['String'];
};


export type MutationUpdateUserSettingsArgs = {
  userSettings?: Maybe<UserSettingsInput>;
};


export type MutationRestartJasperArgs = {
  hostIds: Array<Scalars['String']>;
};


export type MutationUpdateHostStatusArgs = {
  hostIds: Array<Scalars['String']>;
  status: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
};


export type MutationCreatePublicKeyArgs = {
  publicKeyInput: PublicKeyInput;
};


export type MutationSpawnHostArgs = {
  spawnHostInput?: Maybe<SpawnHostInput>;
};


export type MutationSpawnVolumeArgs = {
  spawnVolumeInput: SpawnVolumeInput;
};


export type MutationUpdateVolumeArgs = {
  updateVolumeInput: UpdateVolumeInput;
};


export type MutationUpdateSpawnHostStatusArgs = {
  hostId: Scalars['String'];
  action: SpawnHostStatusActions;
};


export type MutationRemovePublicKeyArgs = {
  keyName: Scalars['String'];
};


export type MutationUpdatePublicKeyArgs = {
  targetKeyName: Scalars['String'];
  updateInfo: PublicKeyInput;
};


export type MutationAttachVolumeToHostArgs = {
  volumeAndHost: VolumeHost;
};


export type MutationDetachVolumeFromHostArgs = {
  volumeId: Scalars['String'];
};


export type MutationRemoveVolumeArgs = {
  volumeId: Scalars['String'];
};


export type MutationEditSpawnHostArgs = {
  spawnHost?: Maybe<EditSpawnHostInput>;
};


export type MutationBbCreateTicketArgs = {
  taskId: Scalars['String'];
};

export enum SpawnHostStatusActions {
  Start = 'START',
  Stop = 'STOP',
  Terminate = 'TERMINATE'
}

export enum TaskSortCategory {
  Name = 'NAME',
  Status = 'STATUS',
  BaseStatus = 'BASE_STATUS',
  Variant = 'VARIANT'
}

export enum TestSortCategory {
  Status = 'STATUS',
  Duration = 'DURATION',
  TestName = 'TEST_NAME'
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum MetStatus {
  Unmet = 'UNMET',
  Met = 'MET',
  Pending = 'PENDING'
}

export enum RequiredStatus {
  MustFail = 'MUST_FAIL',
  MustFinish = 'MUST_FINISH',
  MustSucceed = 'MUST_SUCCEED'
}

export enum HostSortBy {
  Id = 'ID',
  Distro = 'DISTRO',
  CurrentTask = 'CURRENT_TASK',
  Status = 'STATUS',
  Elapsed = 'ELAPSED',
  Uptime = 'UPTIME',
  IdleTime = 'IDLE_TIME',
  Owner = 'OWNER'
}

export enum TaskQueueItemType {
  Commit = 'COMMIT',
  Patch = 'PATCH'
}

export type VolumeHost = {
  volumeId: Scalars['String'];
  hostId: Scalars['String'];
};

export type PatchReconfigure = {
  description: Scalars['String'];
  variantsTasks: Array<VariantTasks>;
};

export type VariantTasks = {
  variant: Scalars['String'];
  tasks: Array<Scalars['String']>;
  displayTasks: Array<DisplayTask>;
};

export type DisplayTask = {
  Name: Scalars['String'];
  ExecTasks: Array<Scalars['String']>;
};

export type SubscriptionInput = {
  resource_type?: Maybe<Scalars['String']>;
  trigger?: Maybe<Scalars['String']>;
  selectors: Array<SelectorInput>;
  regex_selectors: Array<SelectorInput>;
  subscriber: SubscriberInput;
  owner_type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  trigger_data: Scalars['StringMap'];
};

export type UserSettingsInput = {
  timezone?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  githubUser?: Maybe<GithubUserInput>;
  slackUsername?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationsInput>;
  useSpruceOptions?: Maybe<UseSpruceOptionsInput>;
};

export type SelectorInput = {
  type: Scalars['String'];
  data: Scalars['String'];
};

export type SubscriberInput = {
  type: Scalars['String'];
  target: Scalars['String'];
};

export type UseSpruceOptionsInput = {
  hasUsedSpruceBefore?: Maybe<Scalars['Boolean']>;
  spruceV1?: Maybe<Scalars['Boolean']>;
};

export type SpawnHostInput = {
  distroId: Scalars['String'];
  region: Scalars['String'];
  savePublicKey: Scalars['Boolean'];
  publicKey: PublicKeyInput;
  userDataScript?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['Time']>;
  noExpiration: Scalars['Boolean'];
  setUpScript?: Maybe<Scalars['String']>;
  isVirtualWorkStation: Scalars['Boolean'];
  homeVolumeSize?: Maybe<Scalars['Int']>;
};

export type EditSpawnHostInput = {
  hostId: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['Time']>;
  noExpiration?: Maybe<Scalars['Boolean']>;
  instanceType?: Maybe<Scalars['String']>;
  addedInstanceTags?: Maybe<Array<InstanceTagInput>>;
  deletedInstanceTags?: Maybe<Array<InstanceTagInput>>;
  volume?: Maybe<Scalars['String']>;
};

export type SpawnVolumeInput = {
  availabilityZone: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  expiration?: Maybe<Scalars['Time']>;
  noExpiration?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
};

export type UpdateVolumeInput = {
  expiration?: Maybe<Scalars['Time']>;
  noExpiration?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  volumeId: Scalars['String'];
};

export type TaskQueueItem = {
  id: Scalars['ID'];
  displayName: Scalars['String'];
  project: Scalars['String'];
  buildVariant: Scalars['String'];
  expectedDuration: Scalars['Duration'];
  priority: Scalars['Int'];
  revision: Scalars['String'];
  requester: TaskQueueItemType;
  version: Scalars['String'];
};

export type TaskQueueDistro = {
  id: Scalars['ID'];
  queueCount: Scalars['Int'];
};

export type Host = {
  id: Scalars['ID'];
  hostUrl: Scalars['String'];
  tag: Scalars['String'];
  distroId?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  runningTask?: Maybe<TaskInfo>;
  totalIdleTime?: Maybe<Scalars['Duration']>;
  uptime?: Maybe<Scalars['Time']>;
  elapsed?: Maybe<Scalars['Time']>;
  startedBy: Scalars['String'];
  provider: Scalars['String'];
  lastCommunicationTime?: Maybe<Scalars['Time']>;
  noExpiration: Scalars['Boolean'];
  instanceType?: Maybe<Scalars['String']>;
  homeVolumeID?: Maybe<Scalars['String']>;
  volumes: Array<Volume>;
  user?: Maybe<Scalars['String']>;
  distro?: Maybe<DistroInfo>;
  availabilityZone?: Maybe<Scalars['String']>;
  instanceTags: Array<InstanceTag>;
  expiration?: Maybe<Scalars['Time']>;
  displayName?: Maybe<Scalars['String']>;
};

export type InstanceTag = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  canBeModified?: Maybe<Scalars['Boolean']>;
};

export type InstanceTagInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type DistroInfo = {
  id?: Maybe<Scalars['String']>;
  workDir?: Maybe<Scalars['String']>;
  isVirtualWorkStation?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Scalars['String']>;
};

export type Distro = {
  name?: Maybe<Scalars['String']>;
  userSpawnAllowed?: Maybe<Scalars['Boolean']>;
  workDir?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  isVirtualWorkStation: Scalars['Boolean'];
};

export type TaskInfo = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type HostsResponse = {
  filteredHostsCount?: Maybe<Scalars['Int']>;
  totalHostsCount: Scalars['Int'];
  hosts: Array<Host>;
};

export type PatchTasks = {
  tasks: Array<TaskResult>;
  count: Scalars['Int'];
};

export type PatchBuildVariant = {
  variant: Scalars['String'];
  displayName: Scalars['String'];
  tasks?: Maybe<Array<Maybe<PatchBuildVariantTask>>>;
};

export type PatchBuildVariantTask = {
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type TaskFiles = {
  fileCount: Scalars['Int'];
  groupedFiles: Array<GroupedFiles>;
};

export type GroupedFiles = {
  taskName?: Maybe<Scalars['String']>;
  files?: Maybe<Array<File>>;
};

export type ModuleCodeChange = {
  branchName: Scalars['String'];
  htmlLink: Scalars['String'];
  rawLink: Scalars['String'];
  fileDiffs: Array<FileDiff>;
};

export type FileDiff = {
  fileName: Scalars['String'];
  additions: Scalars['Int'];
  deletions: Scalars['Int'];
  diffLink: Scalars['String'];
};

export type UserPatches = {
  patches: Array<Patch>;
  filteredPatchCount: Scalars['Int'];
};

export type Patch = {
  createTime?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  description: Scalars['String'];
  projectID: Scalars['String'];
  githash: Scalars['String'];
  patchNumber: Scalars['Int'];
  author: Scalars['String'];
  version: Scalars['String'];
  status: Scalars['String'];
  variants: Array<Scalars['String']>;
  tasks: Array<Scalars['String']>;
  variantsTasks: Array<Maybe<VariantTask>>;
  activated: Scalars['Boolean'];
  alias: Scalars['String'];
  duration?: Maybe<PatchDuration>;
  time?: Maybe<PatchTime>;
  taskCount?: Maybe<Scalars['Int']>;
  baseVersionID?: Maybe<Scalars['String']>;
  moduleCodeChanges: Array<ModuleCodeChange>;
  project?: Maybe<PatchProject>;
  builds: Array<Build>;
  commitQueuePosition?: Maybe<Scalars['Int']>;
  taskStatuses: Array<Scalars['String']>;
  baseTaskStatuses: Array<Scalars['String']>;
  canEnqueueToCommitQueue: Scalars['Boolean'];
};

export type Build = {
  id: Scalars['String'];
  buildVariant: Scalars['String'];
  status: Scalars['String'];
  predictedMakespan: Scalars['Duration'];
  actualMakespan: Scalars['Duration'];
};

export type Volume = {
  id: Scalars['String'];
  displayName: Scalars['String'];
  createdBy: Scalars['String'];
  type: Scalars['String'];
  availabilityZone: Scalars['String'];
  size: Scalars['Int'];
  expiration?: Maybe<Scalars['Time']>;
  deviceName?: Maybe<Scalars['String']>;
  hostID: Scalars['String'];
  noExpiration: Scalars['Boolean'];
  homeVolume: Scalars['Boolean'];
  host?: Maybe<Host>;
};

export type PatchProject = {
  variants: Array<ProjectBuildVariant>;
  tasks: Array<Scalars['String']>;
};

export type ProjectBuildVariant = {
  name: Scalars['String'];
  displayName: Scalars['String'];
  tasks: Array<Scalars['String']>;
};

export type TaskResult = {
  id: Scalars['ID'];
  displayName: Scalars['String'];
  version: Scalars['String'];
  status: Scalars['String'];
  baseStatus: Scalars['String'];
  buildVariant: Scalars['String'];
  blocked: Scalars['Boolean'];
};

export type PatchDuration = {
  makespan?: Maybe<Scalars['String']>;
  timeTaken?: Maybe<Scalars['String']>;
  time?: Maybe<PatchTime>;
};

export type PatchTime = {
  started?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['String']>;
  submittedAt: Scalars['String'];
};

export type VariantTask = {
  name: Scalars['String'];
  tasks: Array<Scalars['String']>;
};

export type TaskLogLinks = {
  allLogLink?: Maybe<Scalars['String']>;
  agentLogLink?: Maybe<Scalars['String']>;
  systemLogLink?: Maybe<Scalars['String']>;
  taskLogLink?: Maybe<Scalars['String']>;
  eventLogLink?: Maybe<Scalars['String']>;
};

export type TaskEndDetail = {
  status: Scalars['String'];
  type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  timedOut?: Maybe<Scalars['Boolean']>;
};

export type TaskTestResult = {
  totalTestCount: Scalars['Int'];
  filteredTestCount: Scalars['Int'];
  testResults: Array<TestResult>;
};

export type TestResult = {
  id: Scalars['String'];
  status: Scalars['String'];
  testFile: Scalars['String'];
  logs: TestLog;
  exitCode?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Time']>;
  duration?: Maybe<Scalars['Float']>;
  endTime?: Maybe<Scalars['Time']>;
};

export type TestLog = {
  htmlDisplayURL?: Maybe<Scalars['String']>;
  rawDisplayURL?: Maybe<Scalars['String']>;
};

export type Dependency = {
  name: Scalars['String'];
  metStatus: MetStatus;
  requiredStatus: RequiredStatus;
  buildVariant: Scalars['String'];
  uiLink: Scalars['String'];
};

export type PatchMetadata = {
  author: Scalars['String'];
};

export type BaseTaskMetadata = {
  baseTaskDuration?: Maybe<Scalars['Duration']>;
  baseTaskLink: Scalars['String'];
};

export type Task = {
  aborted?: Maybe<Scalars['Boolean']>;
  activated: Scalars['Boolean'];
  activatedBy?: Maybe<Scalars['String']>;
  activatedTime?: Maybe<Scalars['Time']>;
  ami?: Maybe<Scalars['String']>;
  blocked: Scalars['Boolean'];
  baseTaskMetadata?: Maybe<BaseTaskMetadata>;
  buildId: Scalars['String'];
  buildVariant: Scalars['String'];
  canAbort: Scalars['Boolean'];
  canRestart: Scalars['Boolean'];
  canSchedule: Scalars['Boolean'];
  canSetPriority: Scalars['Boolean'];
  canUnschedule: Scalars['Boolean'];
  createTime?: Maybe<Scalars['Time']>;
  details?: Maybe<TaskEndDetail>;
  dispatchTime?: Maybe<Scalars['Time']>;
  displayName: Scalars['String'];
  displayOnly?: Maybe<Scalars['Boolean']>;
  distroId: Scalars['String'];
  estimatedStart?: Maybe<Scalars['Duration']>;
  execution?: Maybe<Scalars['Int']>;
  executionTasks?: Maybe<Array<Scalars['String']>>;
  expectedDuration?: Maybe<Scalars['Duration']>;
  failedTestCount: Scalars['Int'];
  finishTime?: Maybe<Scalars['Time']>;
  generatedBy?: Maybe<Scalars['String']>;
  generatedByName?: Maybe<Scalars['String']>;
  generateTask?: Maybe<Scalars['Boolean']>;
  hostId?: Maybe<Scalars['String']>;
  hostLink?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ingestTime?: Maybe<Scalars['Time']>;
  latestExecution: Scalars['Int'];
  logs: TaskLogLinks;
  patchMetadata: PatchMetadata;
  patchNumber?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  projectId: Scalars['String'];
  reliesOn: Array<Dependency>;
  requester: Scalars['String'];
  restarts?: Maybe<Scalars['Int']>;
  revision?: Maybe<Scalars['String']>;
  scheduledTime?: Maybe<Scalars['Time']>;
  spawnHostLink?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Time']>;
  status: Scalars['String'];
  taskGroup?: Maybe<Scalars['String']>;
  taskGroupMaxHosts?: Maybe<Scalars['Int']>;
  timeTaken?: Maybe<Scalars['Duration']>;
  version: Scalars['String'];
  minQueuePosition: Scalars['Int'];
  isPerfPluginEnabled: Scalars['Boolean'];
};

export type Projects = {
  favorites: Array<Project>;
  otherProjects: Array<GroupedProjects>;
};

export type GroupedProjects = {
  name: Scalars['String'];
  projects: Array<Project>;
};

export type Project = {
  identifier: Scalars['String'];
  displayName: Scalars['String'];
  repo: Scalars['String'];
  owner: Scalars['String'];
};

export type File = {
  name: Scalars['String'];
  link: Scalars['String'];
  visibility: Scalars['String'];
};

export type User = {
  displayName: Scalars['String'];
  userId: Scalars['String'];
};

export type RecentTaskLogs = {
  eventLogs: Array<TaskEventLogEntry>;
  taskLogs: Array<LogMessage>;
  systemLogs: Array<LogMessage>;
  agentLogs: Array<LogMessage>;
};

export type TaskEventLogData = {
  hostId?: Maybe<Scalars['String']>;
  jiraIssue?: Maybe<Scalars['String']>;
  jiraLink?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Time']>;
  userId?: Maybe<Scalars['String']>;
};

export type TaskEventLogEntry = {
  id: Scalars['String'];
  resourceType: Scalars['String'];
  processedAt: Scalars['Time'];
  timestamp?: Maybe<Scalars['Time']>;
  eventType?: Maybe<Scalars['String']>;
  data: TaskEventLogData;
  resourceId: Scalars['String'];
};

export type LogMessage = {
  type?: Maybe<Scalars['String']>;
  severity?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Time']>;
  version?: Maybe<Scalars['Int']>;
};

export type CommitQueue = {
  projectId?: Maybe<Scalars['String']>;
  queue?: Maybe<Array<CommitQueueItem>>;
};

export type CommitQueueItem = {
  issue?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  enqueueTime?: Maybe<Scalars['Time']>;
  patch?: Maybe<Patch>;
  modules?: Maybe<Array<Module>>;
};

export type Module = {
  module?: Maybe<Scalars['String']>;
  issue?: Maybe<Scalars['String']>;
};

export type UserSettings = {
  timezone?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  githubUser?: Maybe<GithubUser>;
  slackUsername?: Maybe<Scalars['String']>;
  notifications?: Maybe<Notifications>;
  useSpruceOptions?: Maybe<UseSpruceOptions>;
};

export type UseSpruceOptions = {
  hasUsedSpruceBefore?: Maybe<Scalars['Boolean']>;
  spruceV1?: Maybe<Scalars['Boolean']>;
};

export type GithubUserInput = {
  lastKnownAs?: Maybe<Scalars['String']>;
};

export type GithubUser = {
  uid?: Maybe<Scalars['Int']>;
  lastKnownAs?: Maybe<Scalars['String']>;
};

export type NotificationsInput = {
  buildBreak?: Maybe<Scalars['String']>;
  patchFinish?: Maybe<Scalars['String']>;
  patchFirstFailure?: Maybe<Scalars['String']>;
  spawnHostExpiration?: Maybe<Scalars['String']>;
  spawnHostOutcome?: Maybe<Scalars['String']>;
  commitQueue?: Maybe<Scalars['String']>;
};

export type Notifications = {
  buildBreak?: Maybe<Scalars['String']>;
  patchFinish?: Maybe<Scalars['String']>;
  patchFirstFailure?: Maybe<Scalars['String']>;
  spawnHostExpiration?: Maybe<Scalars['String']>;
  spawnHostOutcome?: Maybe<Scalars['String']>;
  commitQueue?: Maybe<Scalars['String']>;
};

export type UserConfig = {
  user: Scalars['String'];
  api_key: Scalars['String'];
  api_server_host: Scalars['String'];
  ui_server_host: Scalars['String'];
};

export type PublicKeyInput = {
  name: Scalars['String'];
  key: Scalars['String'];
};

export type PublicKey = {
  name: Scalars['String'];
  key: Scalars['String'];
};

export type ClientConfig = {
  clientBinaries?: Maybe<Array<ClientBinary>>;
  latestRevision?: Maybe<Scalars['String']>;
};

export type ClientBinary = {
  arch?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type SiteBanner = {
  text: Scalars['String'];
  theme: Scalars['String'];
};

export type HostEvents = {
  eventLogEntries: Array<HostEventLogEntry>;
  count: Scalars['Int'];
};

export type HostEventLogEntry = {
  id: Scalars['String'];
  resourceType: Scalars['String'];
  processedAt: Scalars['Time'];
  timestamp?: Maybe<Scalars['Time']>;
  eventType?: Maybe<Scalars['String']>;
  data: HostEventLogData;
  resourceId: Scalars['String'];
};

export type HostEventLogData = {
  agentRevision: Scalars['String'];
  agentBuild: Scalars['String'];
  jasperRevision: Scalars['String'];
  oldStatus: Scalars['String'];
  newStatus: Scalars['String'];
  logs: Scalars['String'];
  hostname: Scalars['String'];
  provisioningMethod: Scalars['String'];
  taskId: Scalars['String'];
  taskPid: Scalars['String'];
  taskStatus: Scalars['String'];
  execution: Scalars['String'];
  monitorOp: Scalars['String'];
  user: Scalars['String'];
  successful: Scalars['Boolean'];
  duration: Scalars['Duration'];
};

export type BuildBaron = {
  searchReturnInfo?: Maybe<SearchReturnInfo>;
  buildBaronConfigured: Scalars['Boolean'];
};

export type SearchReturnInfo = {
  issues: Array<JiraTicket>;
  search: Scalars['String'];
  source: Scalars['String'];
  featuresURL: Scalars['String'];
};

export type JiraTicket = {
  key: Scalars['String'];
  fields: TicketFields;
};

export type TicketFields = {
  summary: Scalars['String'];
  assigneeDisplayName?: Maybe<Scalars['String']>;
  resolutionName?: Maybe<Scalars['String']>;
  created: Scalars['String'];
  updated: Scalars['String'];
  status: JiraStatus;
};

export type JiraStatus = {
  id: Scalars['String'];
  name: Scalars['String'];
};




export type AwsRegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AwsRegionsQuery = { awsRegions?: Maybe<Array<string>> };
