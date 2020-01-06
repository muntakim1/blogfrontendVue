<template>
    <div>
      <v-container>
      <h1>{{post.title}}</h1>
      <router-link to='/blog' style="text-decoration:none;color:grey">Blog</router-link> | {{post.slug}}
      <br/>
      <hr/>
       <v-row dense class="d-flex justify-center">
         <v-col md="3" sm="2" style="height:50%">
           <v-card
           flat
           >
          
             <img src="../assets/logo.jpg" alt="profile" style="border-radius: 50%; height:70px;">
             <v-card-title primary-title>
               <div>
                 <h3 class="title">Muntakimur Rahaman</h3>
                 <div class="subtitle-1">Published on {{post.posted}}</div>
               </div>
             </v-card-title>
           </v-card>
         </v-col>
         <v-col md="3" sm="2" style="height:25%">
           <img :src=post.photo alt="" style='height:250px;width:auto;position:relative;display:flex'>
         </v-col>
         <p>{{post.body}}</p>
       </v-row>
      
         
      
      </v-container>
      
    </div>
</template>

<script>

import axios from 'axios';


export default {
  
 props: ['id'],
  data(){
    return{

      post: [],
      errors: [],
      category:[]
    }
    
  },
  created() {
    
    axios.get('http://secret-headland-91144.herokuapp.com/blog/'+this.id)
    .then(response => {
      
      this.post = response.data
      console.log(response.data)
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
