import { Argv } from 'yargs';

export const command = 'workspace <command>';
export const desc =
  'Module to create a new workspace with all default configuration';

export const builder = (yargs: Argv) =>
  yargs
    .usage('Usage: $0 workspace <command> [Options]')
    .commandDir('workspace_cmd')
    .demandCommand()
    .version(false);
