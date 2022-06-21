<template>
  <v-app>
    <v-main>
      <Search/>
    </v-main>
  </v-app>
</template>

<script>
import Search from './components/SearchView.vue'

export default {
  name: 'App',

  components: {
    Search,
  },

  data: () => ({
    //
  }),
}
</script>
