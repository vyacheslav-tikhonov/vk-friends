<template>
  <div>
    <v-btn
      color="primary"
      @click="onButtonClick()">
      Войти с помощью VK
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject} from 'vue-property-decorator';

@Component({})
export default class LoginButton extends Vue {
  @Inject('onLogin') private login!: any;

  private onButtonClick() {
    this.login();
  }
}
</script>

<style scoped>
</style>
