<template>
  <div>
    <div class="d-flex flex-row">
      <div class="title mt-4 hidden-xs-only">
          <span>{{ username }}</span>
      </div>
      <div class="ml-4 mt-3">
        <user-icon :photoUrl="photoUrl"/>
      </div>
      <div class="mt-4">
        <logout-button/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import UserIcon from "@/components/user/UserIcon/UserIcon.vue";
import LogoutButton from "@/components/buttons/LogoutButton/LogoutButton.vue";

@Component({
  components: {LogoutButton, UserIcon}
})
export default class ToolbarMenu extends Vue {
  @Prop(String) private readonly username!: string;
  @Prop(String) private readonly photoUrl!: string;
}
</script>

<style scoped>
</style>
