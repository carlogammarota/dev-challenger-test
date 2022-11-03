// Initializes the `actors` service on path `/actors`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Actors } from './actors.class';
import createModel from '../../models/actors.model';
import hooks from './actors.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'actors': Actors & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/actors', new Actors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('actors');

  service.hooks(hooks);
}
