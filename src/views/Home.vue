<template>
  <div>
    <content-loader :active="loaderActive"/>
    <toolbar color="secondary" v-if="isLogin">
    </toolbar>

    <v-container>
      <friends-list
        v-if="isLogin"
        :friends="friends"
      ></friends-list>
    </v-container>

    <unauthorized-message v-if="!isLogin"/>

  </div>
</template>

<script lang="ts">
import { Mixins, Component} from 'vue-property-decorator';
import { Action, Getter, namespace } from 'vuex-class';
import MUpdateAuthStatus from '@/mixins/MUpdateAuthStatus/MAuth.vue';
import ContentLoader from '@/components/ContentLoader/ContentLoader.vue';
import UnauthorizedMessage from '@/components/messages/UnautorizedMessage/UnauthorizedMessage.vue';
import Toolbar from '@/components/toolbar/Toolbar/Toolbar.vue';
import FriendsList from "@/components/friends/FriendsList.vue";

const vkAuthStore = namespace('vkAuth');
const vkUserStore = namespace('vkUser');


@Component({
  components: {FriendsList, Toolbar, UnauthorizedMessage, ContentLoader}
})
export default class Home extends Mixins<IMUpdateAuthStatus>(MUpdateAuthStatus) {
  @vkAuthStore.Getter('status') private status!: TStatus;
  @vkAuthStore.Getter('session') private session!: ISession;
  @vkUserStore.Getter('currentUser') private currentUser: any;
  @vkUserStore.Getter('friends') private friends!: any;

  private get isLogin() {
    return this.status === 'connected';
  }

  private onConnect(data: IAuthAuthorizedResponse) {
    this.getData(data);
  }
}
</script>

<style>
</style>
