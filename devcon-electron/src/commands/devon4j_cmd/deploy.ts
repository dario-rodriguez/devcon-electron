import { Arguments, Argv } from 'yargs';
import { Devon4j } from '../../modules/devon4j/Devon4j';

export const command = 'deploy';
export const desc = 'This command will deploy the server project on tomcat';

export const builder = (yargs: Argv) =>
  yargs
    .options({
      tomcatpath: {
        type: 'string',
        nargs: 1,
        desc:
          'Path to tomcat folder (if not provided and the project is in a ' +
          'Devonfw distribution the default software/tomcat folder will be used)',
      },
    })
    .version(false);

export const handler = (argv: Arguments) => {
  Devon4j.deploy(argv.tomcatpath);
};
