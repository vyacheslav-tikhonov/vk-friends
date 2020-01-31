<template>
  <div>
    <v-progress-linear
      indeterminate
      :active="active"
    ></v-progress-linear>
    <div
      :class="{'wrapper': active}">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({})
export default class ContentLoader extends Vue {
  @Prop(Boolean) private active!: boolean;
}
</script>

<style scoped lang="scss">
.wrapper {
  z-index: 1000;
  height: 100%;
  width: 100%;
  position: fixed;
  background: #ffffff;
}
</style>
