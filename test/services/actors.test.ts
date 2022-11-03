import assert from 'assert';
import app from '../../src/app';

describe('\'actors\' service', () => {
  it('registered the service', () => {
    const service = app.service('actors');

    assert.ok(service, 'Registered the service');
  });
});
