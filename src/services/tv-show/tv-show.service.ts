// Initializes the `tv-show` service on path `/tv-show`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { TvShow } from './tv-show.class';
import createModel from '../../models/tv-show.model';
import hooks from './tv-show.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'tv-show': TvShow & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tv-show', new TvShow(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tv-show');

  service.hooks(hooks);
}
