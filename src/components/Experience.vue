<template>
<v-row >
      <v-col
       
        background-color="transparent"
      >
      <h1 class="about">Work Experience</h1>
      <v-container grid-list-xs>
          <v-row>
      <v-col
        
        
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-title class="customHeadline">Kaggle Competitor.</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>Kaggle -  05/2019</v-card-subtitle> 
            <v-card-text class="customText">Kaggle is a platform for data science and machine learning domain, 
                Here people solve different data-related problems and compete with each other for better result.<br> <br></v-card-text>
       
        </v-card>
      </v-col>
      <v-col
        
        
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-title class="customHeadline">Contest Programmer.</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>Team lead / Oct 2016 - Jul 2018</v-card-subtitle> 
            <v-card-text class="customText">I was a team leader of my team baiust-pizraki and have participate in the CUET programming contest and also inter-university programming contests and ACM ICPC.<br> <br></v-card-text>
       
        </v-card>
      </v-col>
      <v-col
        
        
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-title class="customHeadline">PROBLEM SETTER OF INTER UNIVERSITY CONTESTS.</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>BAIUST PROGRAMMERS ALLIANCE / JUN 2018 - May 2019</v-card-subtitle> 
            <v-card-text class="customText">I was a problem setter in the inter-university programming contest in hackerrank platform. <br> <br><br></v-card-text>
       
        </v-card>
      </v-col>
    </v-row>
    
      </v-container>
      </v-col>
   
    </v-row>
        
    
</template>

<script>
export default {
    name: 'Experience'
}
</script>

<style>
     @font-face {
    font-family: 'Teko';
    src: url('https://fonts.googleapis.com/css?family=Teko&display=swap');
  }
   .about{
    margin: 100px;
    font-size: 3em;
    font-family: 'Teko',sans-serif;
  }
  .aboutText{
      font-size: 1.2em;
      margin: 100px;
      font-family: 'Teko',sans-serif;
      letter-spacing: 1px;
  }
  .customHeadline{
      color: blue;
       font-size: 20px;
      font-family: 'Teko',sans-serif;

  }
  .customText{
    font-size: 14px;
    font-family: 'Titallium',sans-serif;
  }
</style>