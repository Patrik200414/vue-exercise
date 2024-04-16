<template>
  <Header :language="language" :onLanguageChange="handleChangeLanguage"></Header>
  <RouterView></RouterView>
</template>

<script>
import Header from './components/language/Header.vue';

import language from './assets/language.json';

export default{
  name: 'App',
  data(){
    return {
      language: 'en',
    }
  },
  methods: {
    handleChangeLanguage(event){
      this.language = event.target.value
    }
  },
  components: {
    Header: Header
  }
}
</script>

<style scoped>

</style>
