import { Module } from 'vuex-smart-module';
import { vkAuth } from './vkAuth'
import { vkUser } from '@/store/modules/vkUser';

const root = new Module({
  modules: {
    vkAuth,
    vkUser,
  },
});

export default root;
