/**
 * Denotes project type
 */
export enum ProjectType {
  COMBINED,
  DEVON4J,
  DEVON4NG,
}

/**
 * Denotes OASP-IDE or Devon Distribution
 */
export enum DistributionType {
  DevonDist,
  OASPIDE,
}

/**
 * Type definition of devon.json file
 */
export interface DevonConfig {
  version: string;
  type: keyof typeof ProjectType;
}

/**
 * Contains information about the Devon project
 */
export interface IProjectInfo {
  path: string;

  version: string;

  projectType: ProjectType;

  config: DevonConfig;

  subProjects: IProjectInfo[];
}

/**
 * Contains information about OASP-IDE or Devon Distribution
 */
export interface IDistributionInfo {
  path: string;

  version: string;

  distributionType: DistributionType;
}
