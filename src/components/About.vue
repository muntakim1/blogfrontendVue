<template>
<div>
<v-row >
      <v-col
       
        background-color="transparent"
      >
     
      <v-container>
         <h1 class="about">ABOUT ME</h1>
          <v-row>
         
      <v-card> <v-img class="image" :src="require('../assets/logo.jpg')">
          </v-img>
      </v-card>
      <p class="aboutText"> I’m a Data science enthusiast with over 2 years of experience , driven by real world challenges, working in a fast-paced, digitally-oriented environment related to Data driven decision modeling. Operating in an environment driven by Data Science Methodology where I have the accountability to determine the best course of action to meet goals.</p>
       <br>
       <br>
       <v-btn :href="linkedin" color="primary"> Linkedin profile </v-btn>
      
    </v-row>
         
      </v-container>
      </v-col>
      

</v-row>
      <v-container>
    <Myskill></Myskill>
  </v-container>

<!-- Working Experience -->

 <v-container>
      <Experience></Experience>
    </v-container>


    <!-- Certification -->

     <v-container>
      <Certification></Certification>
    </v-container>
  <!-- My Education -->

    <v-container>
      <Education></Education>
    </v-container>
</div>
    
</template>

<script>
import Myskill from './Myskil';
import Education from './Education';
import Experience from './Experience';
import Certification from './Certification';
export default {
    name: 'About',
    components:{
      Myskill,
      Education,
      Certification,
      Experience,
    },
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
    font-size: 40px;
    font-family: 'Teko',sans-serif;
  }
  .aboutText{
      font-size: 20px;
      font-family: 'Titallium',sans-serif;
      justify-content: center;
      letter-spacing: 1px;
  }
  .linkedin{
          margin: 100px;
  }
  .image{
    transform: scaleX(-1)
  }
  </style>