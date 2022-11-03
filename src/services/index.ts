import { Application } from '../declarations';
import users from './users/users.service';
import reAuth from './re-auth/re-auth.service';

import movies from './movies/movies.service';

import tvShow from './tv-show/tv-show.service';

import actors from './actors/actors.service';

import directors from './directors/directors.service';

// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(reAuth);
  app.configure(movies);
  app.configure(tvShow);
  app.configure(actors);
  app.configure(directors);
}


