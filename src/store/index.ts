import Vue from 'vue';
import * as Vuex from 'vuex';
import { createStore } from 'vuex-smart-module';
import root from './modules/root';

Vue.use(Vuex);

// The 1st argument is root module.
// Vuex store options should be passed to the 2nd argument.
export const store = createStore(
  // Root module
  root,

  // Vuex store options
  {
    strict: process.env.NODE_ENV === 'production',
  },
);
