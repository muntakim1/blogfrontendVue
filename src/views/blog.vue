<template>
<b-container>
    <v-row dense>

        <v-col
          v-for="(item,id) in posts"
          :key="item.key"
         :cols="6"
          
        >
        <div
        v-if="item.category"
        >
        <h1>{{category[item.category-1].title}}</h1>
        </div>
  <v-card
    class="mx-auto"
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
       
        href= "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmuntakim.ml%2Fblog&amp;src=sdkpreparse"
      >
        Share
      </v-btn>

      
      <v-btn
        color="orange"
        text
        @click="mymethod(item.slug,id+1)"
        >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
    </v-row>
</b-container>
</template>

<script>

import axios from 'axios';

export default {
    
  data(){
    return{
      posts: [],
      errors: [],
      category:[]
    }
    
  },
  methods:{
    mymethod(val,i){
      this.$router.push('/single-blog/'+i+'-'+val)
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
    }),
    axios.get(`http://secret-headland-91144.herokuapp.com/cateogry/`).then(response=>{
      console.log(response.data[0])
      this.category = response.data
    }).catch(e=>{
      this.errors.push(e)
    })
   
}
}
</script>