<template>
  <div>
    <v-btn
      block
      text
      @click="onButtonClick()">
      Выход
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator';

@Component({})
export default class LogOutButton extends Vue {
  @Inject('onLogout') private logout!: any;

  private onButtonClick() {
    this.logout();
  }
}
</script>

<style scoped>
</style>
