// Initializes the `reAuth` service on path `/re-auth`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ReAuth } from './re-auth.class';
import hooks from './re-auth.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    're-auth': ReAuth & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/re-auth', new ReAuth(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('re-auth');

  service.hooks(hooks);
}
