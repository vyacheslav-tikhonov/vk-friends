import { Module } from 'vuex-smart-module';
import VkUserState from './state';
import VkUserGetters from './getters';
import VkUserMutations from './mutations';
import VkUserActions from './actions';

export const vkUser = new Module({
  state: VkUserState,
  getters: VkUserGetters,
  mutations: VkUserMutations,
  actions: VkUserActions,
  namespaced: true,
});
