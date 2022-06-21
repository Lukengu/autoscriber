<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
          <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />

      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome Autoscriber test
        </h1>


        <p class="subheading font-weight-regular">
          Please type a keyword on the  input below
  
        </p>
      </v-col>
       <v-col
        class="mb-1"
        cols="12"
      >
       <v-text-field v-model="keyword"  :rules="requiredRules"> </v-text-field>
      </v-col>
       <v-col
        class="mb-2"
        cols="12"
      >
          <v-btn
        block
        elevation="2" @click="performSearch">Search </v-btn>

      </v-col>
       <v-col
        class="mb-2"
        cols="12"
        v-if="response"
      >
      <ul>
        <li v-for="r in response" v-bind:key="r"> 
          {{r}}
        </li>
      </ul>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapState} from "vuex";
export default {
  name: 'SearchView',
  data() {
    return {
      keyword: "",
      requiredRules: [
         (v) => !!v || "the field is required",
       ],
    }
  },
  methods:{
    performSearch() {
      let param = {keyword:this.keyword}
      this.$store.dispatch('search', param);
    }
  },
  computed: {
    ...mapState({
      response : (state) => state.response,
       loading: (state) => state.loading,
    })
  }
}

</script>