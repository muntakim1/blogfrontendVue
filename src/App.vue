<template>
  <v-app>
    <v-app-bar app dark>
      
      <v-toolbar-title style="text-shadow: 1px 1px 2px black; ">
        Muntakim's Blog
        </v-toolbar-title>
         <v-spacer></v-spacer>
        <v-toolbar-items>
        
        <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
        >
          Resume
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in resume_items"
          :key="index"
          @click="1"
          :href=item.link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        </v-toolbar-items>
       
  <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-content>
    <router-view>

    </router-view>
    </v-content>
     <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="./assets/logo.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Muntakimur Rahaman</v-list-item-title>
          <v-list-item-subtitle>My dreams worth billions</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
         <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Footer
  },
  data: () => ({
   drawer: null,
   items: [
          { title: 'Home', link: '/' },
          { title: 'About', link: '/about' },
          { title: 'Portfolio', link: '/portfolio' },
          { title: 'Blog', link: '/blog' },
          { title: 'Contact', link: '/contact' },
        ],
    resume_items: [
        { title: 'Data Scientist/Analyst',link:"https://drive.google.com/file/d/1JX-quyN4Y5veHJWIO5n-mLKLqvSk2vpu/view?usp=sharing" },
        { title: 'Fullstack Developer',link:"https://drive.google.com/file/d/1fr3lIicJRK4I2Kxf0VERYdhA01P7cAqu/view?usp=sharing" },
       
      ],
  }),
};
</script>
