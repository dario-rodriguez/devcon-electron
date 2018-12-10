import { IDistributionInfo, DistributionType } from '../types';

/**
 * Contains information about OASP-IDE or Devon Distribution
 *
 * @export
 * @class DistributionInfo
 * @implements {IDistributionInfo}
 */
export class DistributionInfo implements IDistributionInfo {
  constructor(
    private _path: string,
    private _version: string,
    private _distributionType: DistributionType,
  ) {}

  /**
   * Getter for path
   *
   * @type {string}
   * @memberof DistributionInfo
   */
  public get path(): string {
    return this._path;
  }

  /**
   * Change value of path is not allowed
   *
   * @memberof DistributionInfo
   */
  public set path(path: string) {}

  /**
   * Getter for version
   *
   * @type {string}
   * @memberof DistributionInfo
   */
  public get version(): string {
    return this._version;
  }

  /**
   * Change value of version is not allowed
   *
   * @memberof DistributionInfo
   */
  public set version(version: string) {}

  /**
   * Getter for distributionType
   *
   * @type {DistributionType}
   * @memberof DistributionInfo
   */
  public get distributionType(): DistributionType {
    return this._distributionType;
  }

  /**
   * Change value of distributionType is not allowed
   *
   * @memberof DistributionInfo
   */
  public set distributionType(distributionType: DistributionType) {}
}
