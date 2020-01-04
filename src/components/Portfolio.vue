<template>
 
    <v-app light>

      <section>
        <v-parallax src="../assets/hero.jpeg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
           <h1 display-1 style="text-shadow: 1px 1px 2px black; ">Welcome to My Portfolio</h1>
             <em>Knowledge-Seeker. Workaholic. Passionate.</em>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Let me help you with my Development and Analytical Experience</h2>
              <span class="subheading">
               I am a Data Science enthuasiat and fullstack django developer.
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-chart-line</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Data and Quantitative Analysis</div>
                    </v-card-title>
                    <v-card-text>
                      Solving a business problem using Quantitative analysis to take profitable decisions using machine learning and statistical method. 
                      And create a generalized model for solving this type of problems in future.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Faster and Quicker dashboard generation using modern tools like power BI and tableau. 
                      Making pictorial data representation using Seaborn or Matplotlib for taking better decision and developing data products.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Big data and Machine learning</div>
                    </v-card-title>
                    <v-card-text>
                      Automated Data collection process and big data analysis using different machine learning algorithms 
                      and optimize mapreduce using python. And also Analyz data with Apache pyspark,impala,hiveql.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="../assets/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center" style="text-shadow: 1px 1px 2px black; ">Web development and Data Analysis have never been easier</div>
            <em style="text-shadow: 1px 1px 2px black; ">Kick-start your application today</em>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
              href="mailto:khalifabdullah7@gmail.com"
            >
              Hire Me
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">My info</div>
                </v-card-title>
                <v-card-text>
                 I am a Data Science Enthuasiat and Django Developer. I love to write clean code and also love to do analysis data to make decisions. 

                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact Me</div>
                </v-card-title>
                <v-card-text>
                  .
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>+8801914480233</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Kaliajury, Comilla, Bangladesh</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>khalifabdullah7@gmail.com</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
  </v-app>
 
</template>

<script>
export default {
  name: 'Portfolio',

  data: () => ({
   title:"Muntakim's Portfolio"
  }),
};
</script>
