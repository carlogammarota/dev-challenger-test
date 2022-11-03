import assert from 'assert';
import app from '../../src/app';

describe('\'directors\' service', () => {
  it('registered the service', () => {
    const service = app.service('directors');

    assert.ok(service, 'Registered the service');
  });
});
