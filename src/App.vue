<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <h1 class="mx-1">Test task</h1>
      <a
          href="https://bank.gov.ua/admin_uploads/article/Technical_instructions_f_REST_API_OpenData.pdf"
          target="_blank"
          class="mr-0 ml-auto"
      >
        For use app will read
      </a>
    </v-app-bar>

    <v-main>
      <HomeView />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HomeView from "@/views/HomeView";

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    HomeView
  }
};
</script>
