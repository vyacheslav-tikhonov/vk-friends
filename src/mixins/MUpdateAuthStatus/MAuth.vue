<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import { Action, Mutation, namespace } from 'vuex-class';

const vkAuthStore = namespace('vkAuth');
const vkUserStore = namespace('vkUser');

@Component({})
export default class MUpdateAuthStatus extends Vue {
  @vkAuthStore.Action('getLoginStatus') private getLoginStatus!: any;
  @vkAuthStore.Mutation('setLoginStatus') private setLoginStatus!: any;
  @vkAuthStore.Action('revokeGrants') private revokeGrants!: any;
  @vkUserStore.Action('getCurrentUser') private getCurrentUser: any;
  @vkUserStore.Action('getUserFriends') private getUserFriends: any;
  @vkUserStore.Mutation('clearState') private clearState!: any;

  protected loaderActive: boolean = true;

  protected updateStatus() {
    this.getLoginStatus()
      .then((data: IAuthAuthorizedResponse | IAuthUnauthorizedResponse) => {
        this.loaderActive = false;
        if (data.status === 'connected') {
          this.getData(data);
        }
      })
      .catch(() => {
        this.loaderActive = false;
      });
  }

  protected getData(data: IAuthAuthorizedResponse) {
    const userId = data.session.mid;
    this.getCurrentUser(userId);
    this.getUserFriends(userId);
    this.sessionSubscriber();
  }

  protected sessionSubscriber() {
    VK.Observer.subscribe('auth.sessionChange', (data) => {
      this.setLoginStatus(data);
    });
  }

  protected deleteSessionSubscriber() {
    VK.Observer.unsubscribe('auth.sessionChange');
  }

  @Provide()
  protected onLogout() {
    this.clearState();
    this.revokeGrants();
  }

  @Provide()
  protected onLogin(settings: number = 2) {
    VK.Auth.login((data) => {
      this.setLoginStatus(data);
      if (data.status === 'connected') {
        this.getData(data);
      }
    }, settings);
  }

  protected created() {
    this.updateStatus();
  }

  protected beforeDestroy() {
    delete this.deleteSessionSubscriber;
  }
}
</script>

<style scoped>

</style>
