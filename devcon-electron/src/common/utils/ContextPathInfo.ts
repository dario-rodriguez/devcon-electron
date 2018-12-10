import { normalize, join } from 'path';
import { DistributionInfo } from '../data/DistributionInfo';
import { homedir } from 'os';
import { readJsonSync, existsSync } from 'fs-extra';
import { DistributionType } from '../types';
import { InvalidConfigurationStateException } from '../exceptions/InvalidConfigurationStateException';

/**
 * This class is to be used as a service/singleton, to obtain the Distribution and ProjectInfo types from paths on the
 * file system
 */
export class ContextPathInfo {
  public static readonly INSTANCE: ContextPathInfo = new ContextPathInfo();

  private static readonly OASP_IDE: string = 'oasp-ide';

  private static readonly DEVON_DIST: string = 'devon-dist';

  private static readonly TYPE: string = 'type';

  private static readonly VERSION: string = 'version';

  private static readonly CONF_SETTINGS_JSON: string = 'conf/settings.json';

  private static readonly DEVON_JSON: string = 'devon.json';

  private static readonly COMBINED: string = 'combined';

  private static readonly OASP4JS: string = 'oasp4js';

  private static readonly OASP4J: string = 'oasp4j';

  /**
   *
   * @param path get the normalized path from string
   */
  private getPath(path: string): string {
    return normalize(path);
  }

  /**
   * @returns CWD - Current working directory as string
   */
  public getCurrentWorkingDirectory(): string {
    return this.getPath(process.cwd());
  }

  /**
   *
   * @returns {string} the user home directory
   * @memberof ContextPathInfo
   */
  public getHomeDirectory(): string {
    return homedir();
  }

  /**
   *
   * @param {string} [path]
   * @returns {(DistributionInfo | undefined)} Distribution Info if currentDir within a Devon Distrubution or OASP IDE
   * @memberof ContextPathInfo
   */
  public getDistributionRoot(path?: string): DistributionInfo | undefined {
    let rootPath: string = path || this.getPath(process.cwd());
    let prevPath = rootPath;

    do {
      if (
        existsSync(join(rootPath as string, ContextPathInfo.CONF_SETTINGS_JSON))
      ) {
        break;
      }

      prevPath = rootPath;
      rootPath = join(rootPath as string, '..');
    } while (rootPath !== prevPath);

    if (
      existsSync(join(rootPath as string, ContextPathInfo.CONF_SETTINGS_JSON))
    ) {
      return this.getDistributionInfo(rootPath as string);
    }

    return undefined;
  }

  public getDistributionInfo(path: string): DistributionInfo {
    const settingsPath = join(path, ContextPathInfo.CONF_SETTINGS_JSON);
    let distType: DistributionType;
    const settings: any = readJsonSync(settingsPath, {
      encoding: 'UTF8',
    });

    if (settings.version === '2.0') {
      settings.version = '2.0.0';
    }

    if (
      settings[ContextPathInfo.TYPE].toLowerCase() ===
      ContextPathInfo.DEVON_DIST
    ) {
      distType = DistributionType.DevonDist;
    } else if (
      settings[ContextPathInfo.TYPE].toLowerCase() === ContextPathInfo.OASP_IDE
    ) {
      distType = DistributionType.OASPIDE;
    } else {
      throw new InvalidConfigurationStateException(
        'type property does not contain either "devon-dist" nor "oasp-ide"',
      );
    }

    return new DistributionInfo(path, settings.version, distType);
  }
}
