import assert from 'assert';
import app from '../../src/app';

describe('\'reAuth\' service', () => {
  it('registered the service', () => {
    const service = app.service('re-auth');

    assert.ok(service, 'Registered the service');
  });
});
