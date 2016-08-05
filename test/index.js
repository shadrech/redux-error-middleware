import chai from 'chai';
import errorMiddleware from '../lib/index';

describe('error middleware', () => {
  const doDispatch = () => {};
  const doGetState = () => {};
  const nextHandler = errorMiddleware({dispatch: doDispatch, getState: doGetState});

  it('must return a function to handle next', () => {
    chai.assert.isFunction(nextHandler);
    chai.assert.strictEqual(nextHandler.length, 1);
  });

  describe('handle next', () => {
    it('must return a function to handle action', () => {
      const actionHandler = nextHandler();

      chai.assert.isFunction(actionHandler);
      chai.assert.strictEqual(actionHandler.length, 1);
    });
  });
});
