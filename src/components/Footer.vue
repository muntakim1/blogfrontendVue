<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.key"
          class="mx-4"
          dark
          icon
        :href="icon.link"
        >
          <v-icon size="24px" >{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">CopyRight ©
        {{ new Date().getFullYear() }} — <strong>Muntakimur Rahaman</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
    name:'Footer',
    data() {
        return {
            icons: [
                {icon:' fa-facebook',link:'https://www.facebook.com/caliph.bin.kabir'},
        {icon:' fa-twitter',link:"https://mobile.twitter.com/MuntakimurR"},
        {icon:' fa-github',link:"https://github.com/muntakim1"},
        {icon:' fa-linkedin',link:"https://www.linkedin.com/in/muntakimur-rahaman-36a555133/"},
        {icon: ' fa-instagram',link:"https://www.instagram.com/munta_insta/?hl=tr"},
      ],
        }
    },
  }
</script>