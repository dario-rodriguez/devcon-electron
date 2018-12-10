import { Arguments, Argv } from 'yargs';
import { Devon4j } from '../../modules/devon4j/Devon4j';

export const command = 'build';
export const desc = 'This command will build the server project';

export const builder = (yargs: Argv) => yargs.version(false);

export const handler = (argv: Arguments) => {
  Devon4j.build();
};
