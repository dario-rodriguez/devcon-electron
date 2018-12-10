import { Arguments, Argv } from 'yargs';
import { Devon4j } from '../../modules/devon4j/Devon4j';

export const command = 'create';
export const desc = 'This creates a new server project based on OASP template';

export const builder = (yargs: Argv) =>
  yargs
    .options({
      serverpath: {
        type: 'string',
        nargs: 1,
        desc: 'Where to create',
      },
      servername: {
        type: 'string',
        nargs: 1,
        desc: 'Name of project',
      },
      packagename: {
        type: 'string',
        nargs: 1,
        desc: 'package name in server project',
      },
      groupid: {
        type: 'string',
        nargs: 1,
        desc: 'groupid for server project',
      },
      version: {
        type: 'string',
        nargs: 1,
        desc: 'version of server project',
      },
      dbtype: {
        nargs: 1,
        choices: [
          'h2',
          'postgresql',
          'mysql',
          'mariadb',
          'oracle',
          'hana',
          'db2',
        ],
        desc:
          'database type in server project(h2|postgresql|mysql|mariadb|oracle|hana|db2)',
      },
    })
    .demandOption(
      [
        'serverpath',
        'servername',
        'packagename',
        'groupid',
        'version',
        'dbtype',
      ],
      'Please introduce all parameters',
    )
    .version(false);

export const handler = (argv: Arguments) => {
  Devon4j.create(
    argv.serverpath,
    argv.servername,
    argv.packagename,
    argv.groupid,
    argv.version,
    argv.dbtype,
  );
};
