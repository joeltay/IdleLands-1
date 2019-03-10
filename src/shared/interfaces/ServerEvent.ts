
export enum ServerEventName {
  GameMessage = 'gamemessage',

  AuthSignIn = 'auth:signin',
  AuthSignOut = 'auth:signout',
  AuthRegister = 'auth:register',
  AuthDelete = 'auth:delete',
  AuthNeedsName = 'auth:needsname',
  AuthSyncAccount = 'auth:syncaccount',
  AuthUnsyncAccount = 'auth:unsyncaccount',
  PlayGame = 'auth:playgame',

  CharacterSync = 'character:sync',

  CharacterGender = 'character:gender'
}

export interface ServerEvent {
  event: string;
  description: string;
  args: string;

  callback: (args) => void;
}
