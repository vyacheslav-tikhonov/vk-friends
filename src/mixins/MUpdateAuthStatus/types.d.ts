interface IMUpdateAuthStatus {
  loaderActive: boolean;
  updateStatus: () => void;
  sessionSubscriber: () => void;
  deleteSessionSubscriber: () => void;
  created: () => void;
  beforeDestroy: () => void;
  getData: (data: IAuthAuthorizedResponse) => void;
}
