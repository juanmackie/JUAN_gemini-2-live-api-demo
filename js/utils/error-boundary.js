// js/utils/error-boundary.js
export class ApplicationError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

export const ErrorCodes = {
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
};