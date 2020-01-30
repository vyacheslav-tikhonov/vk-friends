import { Module } from 'vuex-smart-module';
import { vkAuth } from './vkAuth'

const root = new Module({
  modules: {
    vkAuth,
  },
});

export default root;
