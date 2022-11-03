import assert from 'assert';
import app from '../../src/app';

describe('\'tv-show\' service', () => {
  it('registered the service', () => {
    const service = app.service('tv-show');

    assert.ok(service, 'Registered the service');
  });
});
