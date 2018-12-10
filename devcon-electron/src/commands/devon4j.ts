import { Argv } from 'yargs';

export const command = 'devon4j <command>';
export const desc = 'Devon4j(server project) related commands';

export const builder = (yargs: Argv) =>
  yargs
    .commandDir('devon4j_cmd')
    .demandCommand()
    .version(false);
