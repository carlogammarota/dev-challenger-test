import { ServiceAddons } from '@feathersjs/feathers';
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';
import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOauth } from '@feathersjs/authentication-oauth';

import { Application } from './declarations';




declare module './declarations' {
  interface ServiceTypes {
    'authentication': AuthenticationService & ServiceAddons<any>;
  }
}

export default function(app: Application): void {
  const authentication = new AuthenticationService(app);
  const local = require('feathers-authentication-local');
  const { RefreshTokenStrategy, addRefreshToken} =  require('@thesinding/authentication-refresh-token');

  authentication.register('jwt', new JWTStrategy());
  // authentication.register('refresh-token', new  RefreshTokenStrategy()); // add the strategy
  authentication.register('local', new LocalStrategy());
  
  // authentication.register('refresh-token', new  RefreshTokenStrategy()); // add the strategy

	
  

    // Set up authentication with the secret
  // const localConfig = {
  //     'entity': 'user',
  //     'service': 'users',
  //     'usernameField': 'username',
  //     'passwordField': 'password'
  //   }; 

  app.use('/authentication', authentication);
  // app.configure(local(localConfig));
  app.configure(expressOauth());

  
}



