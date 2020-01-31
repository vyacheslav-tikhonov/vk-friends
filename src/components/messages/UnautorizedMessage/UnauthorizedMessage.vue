<template>
  <v-dialog
    max-width="400px"
    persistent
    v-model="di"
  >
    <slot>
    <v-card
    >
      <v-card-title>
        Авторизация
      </v-card-title>
      <v-card-text>
        Для работы приложения необходим доступ к Вашей странице сервиса vk.com.
        Для продолжения работы, пожалуйста, авторизуйтесь.
      </v-card-text>
      <v-card-actions>
        <login-button/>
      </v-card-actions>
    </v-card>
    </slot>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import LoginButton from '@/components/buttons/LoginButton/LoginButton.vue';

@Component({
  components: {LoginButton},
})
export default class UnathorizedMessage extends Vue {
  @Prop(Boolean) private readonly dialog!: boolean;
  private di: boolean = true;
}
</script>

<style scoped>

</style>
