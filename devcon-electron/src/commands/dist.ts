import { Argv } from 'yargs';

export const command = 'dist <command>';
export const desc =
  'Module with general tasks related to the distribution itself';

export const builder = (yargs: Argv) =>
  yargs
    .usage('Usage: $0 dist <command> [Options]')
    .commandDir('dist_cmd')
    .demandCommand()
    .version(false);
