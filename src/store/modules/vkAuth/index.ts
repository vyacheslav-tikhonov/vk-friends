import { Module } from 'vuex-smart-module';
import VkAuthState from './state';
import VkAuthGetters from './getters';
import VkAuthMutations from './mutations';
import VkAuthActions from './actions';

export const vkAuth = new Module({
  state: VkAuthState,
  getters: VkAuthGetters,
  mutations: VkAuthMutations,
  actions: VkAuthActions,
  namespaced: true,
});
