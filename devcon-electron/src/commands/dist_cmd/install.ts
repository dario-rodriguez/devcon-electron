import { Arguments, Argv } from 'yargs';

export const command = 'new [project-name]';
export const aliases: string[] = ['n'];
export const desc = 'Create a new nestjs project based on template';

export const builder = (yargs: Argv) =>
  yargs
    .usage('Usage: $0 new [project-name] [Options]')
    .positional('project-name', {
      desc: 'The name of the project that you want to create',
      type: 'string',
    })
    .options({
      path: {
        alias: 'p',
        type: 'string',
        nargs: 1,
        desc:
          'The destination path where the project will be created. If not given the actual folder will be used',
      },
      force: {
        alias: 'f',
        type: 'boolean',
        desc: 'Force to create a new project',
      },
    })
    .version(false);

export const handler = (argv: Arguments) => {};
