<template>
<div>
      <v-parallax
       height="500"

    src="@/assets/contact.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Contact Me</h1>
        <h4 class="subheading">Ask me anything about DS or Django!</h4>
      </v-col>
    </v-row>
  </v-parallax>
  <v-form v-model="valid">
    <v-container centered>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
        <h1>Contact Form</h1>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Full name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :counter="100"
            label="Message"
            required
          ></v-text-field>
        </v-col>
        
      </v-row>
      <v-btn color="primary">Send</v-btn>
    </v-container>
  </v-form>

</div>
</template>

<script>
export default {
     data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
}
</script>