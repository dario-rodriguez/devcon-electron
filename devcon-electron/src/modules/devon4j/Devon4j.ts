import { CommandModule } from '../../common/CommandModule';
export class Devon4j extends CommandModule {
  public static create(
    serverpath: string,
    servername: string,
    packagename: string,
    groupid: string,
    version: string,
    dbtype: string,
  ) {
    console.log('hey');
  }

  public static run(port: string) {
    console.log('jou' + port);
  }

  public static build() {
    console.log('drogas');
  }

  public static deploy(tomcatpath?: string) {}
}
