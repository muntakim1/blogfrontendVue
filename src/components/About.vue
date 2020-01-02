<template>
<v-row >
      <v-col
       
        background-color="transparent"
      >
      <h1 class="about">ABOUT ME</h1>
      <v-container grid-list-xs>
          <v-row>
            <v-col
        
        
        cols="7"
        md="2"
      ></v-col>
      
      <v-col
        
        
        cols="7"
        md="5"
      >
       I’m a Data science enthusiast with over 2 years of experience , driven by real world challenges, working in a fast-paced, digitally-oriented environment related to Data driven decision modeling. Operating in an environment driven by Data Science Methodology where I have the accountability to determine the best course of action to meet goals.
       <br>
       <br>
       <v-btn :href="linkedin" color="primary"> Linkedin profile </v-btn>
      </v-col>
      <v-col
        
        
        cols="7"
        md="2"
      >
      </v-col>
          </v-row>
         
      </v-container>
      </v-col>
</v-row>
        
    
</template>

<script>
export default {
    name: 'About',
    data(){
        return{
            linkedin:'https://www.linkedin.com/in/muntakimur-rahaman-36a555133/'
        }
    }
}
</script>

<style>
     @font-face {
    font-family: 'Teko';
    src: url('https://fonts.googleapis.com/css?family=Teko&display=swap');
  }
   @font-face {
      font-family: 'Titallium';
      src: url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
  }
   .about{
    margin: 100px;
    font-size: 3em;
    font-family: 'Teko',sans-serif;
  }
  .aboutText{
      font-size: 1.2em;
      margin: 100px;
      font-family: 'Titallium',sans-serif;
      justify-content: center;
      letter-spacing: 1px;
  }
  .linkedin{
          margin: 100px;
  }
  </style>