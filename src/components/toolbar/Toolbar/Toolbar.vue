<template>
  <v-toolbar
    flat
    dark
    height="70px"
    color="primaryDark">
    <v-toolbar-title  class="headline hidden-xs-only">VK Friends</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <toolbar-menu
        :username="username"
        :photo-url="photoUrl"
      >
      </toolbar-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {Getter, namespace} from 'vuex-class';
import ToolbarMenu from "@/components/toolbar/ToolbarMenu/ToolbarMenu.vue";

const vkUserStore = namespace('vkUser');

@Component({
  components: {ToolbarMenu},
})
export default class Toolbar extends Vue {
  @vkUserStore.Getter('currentUser') private currentUser!: any;

  private get username() {
    const user = this.currentUser;
    return user ? user.first_name : '';
  }

  private get photoUrl() {
    const user = this.currentUser;
    return user ? this.currentUser.photo_50 : user;
  }
}
</script>

<style scoped>

</style>
