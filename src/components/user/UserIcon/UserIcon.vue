<template>
  <div>
    <v-skeleton-loader
      :loading="!photoUrl"
      rounded
      transition="fade-transition"
      height="50px"
      type="avatar"
    >
      <v-avatar>
        <v-img
          class="v-avatar"
          rounded
          :src="photoUrl"/>
      </v-avatar>
    </v-skeleton-loader>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class UserIcon extends Vue {
  @Prop(String) private readonly photoUrl!: string;
}
</script>

<style scoped>
</style>
