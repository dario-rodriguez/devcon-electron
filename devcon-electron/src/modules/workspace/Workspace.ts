import { CommandModule } from '../../common/CommandModule';

/**
 * This class contains command to generate a new workspace with default configuration.
 */
export class Workspace extends CommandModule {
  /**
   * The constructor
   */
  constructor() {
    super();
  }

  /**
   * This command allow to create a new workspace with default configuration.
   * @param workspace Path to Devon Distribution
   * @param distribution Name of the workspace folder
   */
  public static create(workspace: string, distribution?: string) {}
}
