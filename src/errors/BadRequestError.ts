export default class BadRequestError extends Error {
  name = this.constructor.name;

  constructor(message: string) {
    super(message);
  }
}
