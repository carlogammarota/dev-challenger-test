// Initializes the `directors` service on path `/directors`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Directors } from './directors.class';
import createModel from '../../models/directors.model';
import hooks from './directors.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'directors': Directors & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/directors', new Directors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('directors');

  service.hooks(hooks);
}
