<template>
<v-container>
    <v-row dense>

        <v-col
          v-for="item in posts"
          :key="item.key"
         :cols="3"
          
        >
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src= item.photo
    >
      <v-card-title>{{item.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{item.posted}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Author</div>

      <div>Muntakimur Rahaman</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>

import axios from 'axios';


export default {
  
  data(){
    return{
      posts: [],
      errors: []
    }
    
  },
  created() {
    axios.get(`http://secret-headland-91144.herokuapp.com/blog/`)
    .then(response => {  
      console.log(response.data)
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    }) 
   
}
}
</script>