import { Arguments, Argv } from 'yargs';
import { Workspace } from '../../modules/workspace/Workspace';

export const command = 'create';
export const desc = 'This command creates a new workspace with all default configuration in a Devonfw distribution.';

export const builder = (yargs: Argv) =>
  yargs
    .options({
      workspace: {
        type: 'string',
        nargs: 1,
        desc:
          'This is the name of workspace to create',
      },
      distribution: {
        type: 'string',
        nargs: 1,
        desc:
          'This is the location of the devon distribution (default: from current dir)',
      },
    })
    .demandOption([
      'workspace',
    ])
    .version(false);

export const handler = (argv: Arguments) => {
  Workspace.create(argv.workspace, argv.distribution);
};
