import { Actions } from 'vuex-smart-module';
import VkUserState from './state';
import VkUserGetters from './getters';
import VkUserMutations from './mutations';

const defaultFields: string[] = [
  'photo_50',
  'domain',
  'online',
];

class VkUserActions extends Actions<
  VkUserState,
  VkUserGetters,
  VkUserMutations,
  VkUserActions
> {
  public getCurrentUser(userId: string, fields = defaultFields) {
      return new Promise((resolve, reject) => {
      VK.Api.call(
        'users.get',
        {
          v: '5.73',
          fields,
          user_ids: [userId],
        },
        (data: any) => {
        if (data && data.response) {
          console.log(data.response);
          this.commit('setCurrentUser', data.response[0]);
          resolve(data.response);
        } else {
          reject();
        }
      });
    });
  }

  public getUserFriends(userId: string, fields = defaultFields) {
    return new Promise((resolve, reject) => {
      VK.Api.call(
        'friends.get',
        {
          v: '5.73',
          fields,
          user_id: [userId],
        },
        (data: any) => {
          if (data && data.response) {
            this.commit('setUserFriends', data.response);
            console.log(data.response.items);
            resolve(data.response.items);
          } else {
            reject();
          }
        });
    });
  }
}

export default VkUserActions;
