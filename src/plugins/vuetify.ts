import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#29b6f6',
        primaryDark: '#0086c3',
        primaryLight: '#73e8ff',
        secondary: '#80d8ff',
        secondaryDark: '#49a7cc',
        secondaryLight: '#b5ffff',
        primaryText: '#fff',
        secondaryText: '#000',
        error: '#e53935',
        warning: '#ffeb3b',
        success: '#0086c3',
        accent: '#F6FFFA',
      },
    }
  }
});
