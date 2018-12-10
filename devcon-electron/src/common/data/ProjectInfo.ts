import { readJsonSync } from 'fs-extra';
import { sep } from 'path';
import { DevonConfig, IProjectInfo, ProjectType } from '../types';

export class ProjectInfo implements IProjectInfo {
  /* TODO: Check if we need to create a path class */
  /**
   * Path of Project folder
   *
   * @type {string}
   * @memberof ProjectInfo
   */
  private _path!: string;

  /* TODO: Check if we need to create a version class*/
  /**
   * Get version as specified in the devon.json file (does NOT refer to version in particular project artifact itself)
   *
   * @type {string}
   * @memberof ProjectInfo
   */
  private _version!: string;

  /**
   * JSON representations of the devon.json file itself
   *
   * @type {DevonConfig}
   * @memberof ProjectInfo
   */
  private _config!: DevonConfig;

  /**
   * whether is Combined project, oasp4j, oasp4js or devon4secha
   *
   * @type {ProjectType}
   * @memberof ProjectInfo
   */
  private _projectType!: ProjectType;

  /**
   * In case of projecType == Combined, contains subprojects as defined in the devon.json file
   *
   * @type {ProjectInfo[]}
   * @memberof ProjectInfo
   */
  private _subProjects!: ProjectInfo[];

  /**
   * Private constructor.
   */
  private constructor() {}

  /**
   * Getter for path
   *
   * @type {string} actual path value
   * @memberof ProjectInfo
   */
  public get path(): string {
    return this._path;
  }

  /**
   * Setter for path
   *
   * @memberof ProjectInfo
   */
  public set path(path: string) {
    this._path = path;
  }

  /**
   * Getter for version
   *
   * @type {string} actual version value
   * @memberof ProjectInfo
   */
  public get version(): string {
    return this._version;
  }

  /**
   * Setter for version
   *
   * @memberof ProjectInfo
   */
  public set version(version: string) {
    this._version = version;
  }

  /**
   * Getter for config
   *
   * @type {DevonConfig} actual config value
   * @memberof ProjectInfo
   */
  public get config(): DevonConfig {
    return this._config;
  }

  /**
   * Setter for config
   *
   * @memberof ProjectInfo
   */
  public set config(config: DevonConfig) {
    this._config = config;
  }

  /**
   * Getter for projectType
   *
   * @type {ProjectType} actual projectType value
   * @memberof ProjectInfo
   */
  public get projectType(): ProjectType {
    return this._projectType;
  }

  /**
   * Setter for projectType
   *
   * @memberof ProjectInfo
   */
  public set projectType(projectType: ProjectType) {
    this._projectType = projectType;
  }

  /**
   * Getter for subProjects
   *
   * @type {ProjectInfo[]} actual subProjects value
   * @memberof ProjectInfo
   */
  public get subProjects(): ProjectInfo[] {
    return this._subProjects;
  }

  /**
   * Setter for subProjects
   *
   * @memberof ProjectInfo
   */
  public set subProjects(subProjects: ProjectInfo[]) {
    this._subProjects = subProjects;
  }

  public getProjectInfo(newPath?: string): ProjectInfo | undefined {
    const projectInfo = new ProjectInfo();

    try {
      projectInfo._path = newPath || process.cwd();
      projectInfo._config = readJsonSync(
        projectInfo._path + sep + 'devon.json',
      );
      projectInfo._version = projectInfo._config.version;
      projectInfo._projectType = ProjectType[projectInfo._config.type];

      // TODO: set the subProjects

      return projectInfo;
    } catch (error) {
      console.log(error);
    }

    return undefined;
  }
}
