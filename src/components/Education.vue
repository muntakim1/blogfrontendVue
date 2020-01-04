<template>
<v-row >
      <v-col
       
        background-color="transparent"
      >
      <h1 class="about">Education</h1>
      <v-container grid-list-xs>
          <v-row>
             
      <v-col
        
        
      cols="6"
      md="4"
      >
        <v-card
           shaped         
        >
         <v-card-title class="customHeadline">B.Sc. COMPUTER SCIENCE AND ENGINEERING </v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>Sept 2016 - Sept 2020</v-card-subtitle>
            <v-card-text class="customText">BANGLADESH ARMY INTERNATIONAL UNIVERSITY OF SCIENCE AND TECHNOLOGY.<br><br> </v-card-text>
        
        </v-card>
      </v-col>
    <v-col
      cols="6"
      md="4"
      ></v-col>
      <v-col
      cols="6"
      md="4"
      ></v-col>
    </v-row>
      </v-container>
      </v-col>
</v-row>
    
</template>

<script>
export default {
    name: 'Education'
}
</script>

<style>
     @font-face {
    font-family: 'Teko';
    src: url('https://fonts.googleapis.com/css?family=Teko&display=swap');
  }
   .about{
    margin: 100px;
     font-size: 20px;
    font-family: 'Teko',sans-serif;
  }
  .aboutText{
       font-size: 14px;
      margin: 100px;
      font-family: 'Teko',sans-serif;
      letter-spacing: 1px;
  }
</style>