<template>
  <v-app>
      <v-content>
      <Portfolio/>
    </v-content>
  </v-app>
</template>

<script>
import Portfolio from './components/Portfolio';

export default {
  name: 'App',

  components: {
    Portfolio,
  },

  data: () => ({
    //
  }),
};
</script>
