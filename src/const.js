const AppRoute = {
  GAME: `/game`,
  LOGIN: `/login`,
  LOSE: `/lose`,
  RESULT: `/result`,
  ROOT: `/`
};

const APIRoute = {
  QUESTIONS: `/questions`,
  LOGIN: `/login`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const GameType = {
  ARTIST: `artist`,
  GENRE: `genre`,
};

const MAX_MISTAKES_COUNT = 30;


export {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  GameType,
  MAX_MISTAKES_COUNT,
};
