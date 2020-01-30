interface IUser {
  domain: string; // user's page domain.
  first_name: string; // name.
  href: string; // page URL ([https://vk.com/domain)];
  id: string; // user ID.
  last_name: string; // last name.
  nickname: string; // nickname (if set).
}

interface ISession {
  expire: number; // time when session to be expired in Unixtime.
  mid: number; // user ID.
  secret: string; // service parameter for the checking authorization on a remote side.
  sid: string; // service parameter for the checking authorization on a remote side.
  sig: string; // service parameter for the checking authorization on a remote side;
  user: IUser; // user info.
}

type TStatus = 'connected' | 'not_authorized' | 'unknown';
/*
  current user authorization status. Possible values:
  *  connected — user is authorized in VK and granted the application access;
  *  not_authorized — user is authorized in VK but not granted the application access;
  *  unknown — user is not authorized in VK.
*/

interface IInitPayload {
  apiId: number; // application ID.
  status?: boolean;
  /*
    true : to automatically refresh session ans status data
    with VK.Auth.getLoginStatus method when initialized.
  */
  onlyWidgets?: boolean; //  true: to initialize Open API for widgets.
}

interface IAuthAuthorizedResponse {
  session: ISession; // Session data.
  status: TStatus; // Current user authorization status.
}

interface IAuthUnauthorizedResponse {
  session: null;
  status: 'unknown';
  settings: undefined;
}

interface IAuth {
  login: (callback?: (response: IAuthAuthorizedResponse | IAuthUnauthorizedResponse) => any, settings?: number) => void;
  /*
    Opens a pop-up window for user authorization with its VK account.
  */
  logout: (callback?: (response: IAuthUnauthorizedResponse) => any) => void;
  /*
    When succeed terminates the user session in Open API platform. Generates auth.logout event.
  */
  revokeGrants: (callback?: (response: IAuthUnauthorizedResponse) => any) => void;
  /*
    When succeed revokes the application grants for current user. Generates auth.statusChange event.
  */
  getLoginStatus: (callback?: (response: IAuthAuthorizedResponse | IAuthUnauthorizedResponse) => any) => void;
  /*
    Gets the current status and session data if user is authorized in VK and installed the application to his/her page.
  */
  getSession: (callback?: (response: ISession) => any) => void;
  /*
    Returns user session data. We recommend you to use this method to get user session data when
    you know for sure that the user is authorized in VK and in the application to avoid delays in
    case of asynchronous call of VK.Auth.getLoginStatus.
  */
}

interface IApi {
  call: (
    method: string, //  API method name.
    params: {[key: string]: string | number | any[]}, // method parameters.
    callback: () => any, // callback function.
  ) => any;
}

interface IUi {
  button: (id: string) => void;
  /*
    To create stylized button "Login with VK" use VK.UI.button method.
    It takes conatiner id as a parameter.
  */
}

type TSubscribeIvent =
  'auth.login' | // Occurs during user authorization using VK.Auth.login method.
  'auth.logout' | // Occurs during user logout using VK.Auth.logout method.
  'auth.statusChange' | // Occurs when user status is changed.
  'auth.sessionChange' | // Occurs when any data related to user authorization are changed.
  'widgets.comments.new_comment' | // Occurs when the new comment in Comments widget is added.
  'widgets.comments.delete_comment' | // Occurs when the comment in Comments widget is deleted.
  'widgets.groups.joined' | // New join in Community widget.
  'widgets.groups.leaved' | // User left the community in Community widget.
  'widgets.like.liked' | // New like in Like widget.
  'widgets.like.unliked' | // Like is deleted in Like widget.
  'widgets.like.shared'	| // New repost in Like widget.
  'widgets.like.unshared' | // Repost is deleted in Like widget.
  'widgets.subscribed	' | // New follower in Subscribe widget.
  'widgets.unsubscribed'; // Follower is deleted in Subscribe widget.

interface IObserver {
  subscribe: (event: TSubscribeIvent, handler: () => any) => any;
  /*
    Adds a function passed in handler parameter to the list of recipients of the event
    which is specified in event parameter.
  */
  unsubscribe: (event: TSubscribeIvent, handler?: () => any) => any;
  /*
    Deletes a function passed in handler parameter from the list of recipients of
    the event which is specified in event parameter. If handler parameter is not set,
    all handlers for the event specified in event parameter are deleted.
  */
}

interface IOpenApi {
  init: (payload: IInitPayload) => void;
  /*
    Method is used for the platform initialization.
  */
  Auth: IAuth; // Authorization methods.
  UI: IUi; // UI Elements.
  Api: IApi; // API Requests.
  Observer: IObserver; // Events Handling.
}

declare const VK: IOpenApi;
