export class InvalidConfigurationStateException extends Error {
  constructor(error: string | Error) {
    if (typeof error === 'string') {
      super(error);
    } else if (Error.isPrototypeOf(error)) {
      this.message = error.message;
      this.name = error.name;
      this.stack = error.stack;
    }
  }
}
