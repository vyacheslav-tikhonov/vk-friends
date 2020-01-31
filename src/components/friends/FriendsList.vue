<template>
  <v-flex class="ma-4 xs9 sm8 md5 lg4 xl3">
    <div class="ma-8">
      <span class="title">Друзья {{ friendAmount }}</span>
    </div>
    <v-form
      class="xs8">
      <v-text-field
        rounded
        placeholder="поиск"
        v-model="searchValue"
        filled
        append-icon="search"
      ></v-text-field>
    </v-form>
      <v-list
        :key="id"
        v-for="(friend, id) in sortedFriends">
        <friend
          :friend="friend"
        ></friend>
      </v-list>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Friend from "@/components/friends/Friend/Friend.vue";

@Component({
  components: {Friend}
})
export default class FriendsList extends Vue {
  @Prop(Array) private readonly friends!: any;

  private searchValue: string = '';

  private get sortedFriends() {
    if (this.searchValue.length > 0) {
      return this.friends.filter((friend: IVKUser) => {
        return `${friend.first_name} ${friend.last_name}`
            .toLowerCase().indexOf(this.searchValue.toLowerCase())!== -1 ||
          `${friend.last_name} ${friend.first_name}`.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1;
      })
    }
    return this.friends;
  }

  private get friendAmount() {
    return this.friends.length;
  }
}
</script>

<style scoped>
</style>
