// Initializes the `movies` service on path `/movies`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Movies } from './movies.class';
import createModel from '../../models/movies.model';
import hooks from './movies.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'movies': Movies & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/movies', new Movies(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('movies');

  service.hooks(hooks);
}
