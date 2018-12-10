import { Arguments, Argv } from 'yargs';
import { Devon4j } from '../../modules/devon4j/Devon4j';

export const command = 'run';
export const desc =
  'This command runs the application from spring boot embedded tomcat';

export const builder = (yargs: Argv) =>
  yargs
    .options({
      port: {
        type: 'string',
        nargs: 1,
        default: '8081',
        desc: 'Port to start Spring boot app (port 8081 by default)',
      },
    })
    .version(false);

export const handler = (argv: Arguments) => {
  Devon4j.run(argv.port);
};
