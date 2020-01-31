<template>
  <div>
    <v-list-item class="d-flex align-content-center">
      <v-list-item-avatar>
        <v-img
          :src="friend.photo_50"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        {{ friendName }}
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon
          v-if="friend.online"
          small
          light
          color="success">
          radio_button_checked
        </v-icon>
        <v-icon
          v-else
          small
          light
          color="error">
          radio_button_checked
        </v-icon>
      </v-list-item-icon>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Friend extends Vue {
  @Prop(Object) private readonly friend!: IVKUser;

  private get friendName() {
    return `${this.friend.first_name} ${this.friend.last_name}`;
  }
}
</script>

<style scoped>
</style>
