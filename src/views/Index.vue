<template>
   <div class="w-full h-full px-32 bg-primary">
      <navbar />
      <hero />
      <project-one />
      <project-two />
      <project-three />
   </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Hero from './Hero.vue';
import ProjectOne from './ProjectOne.vue';
import ProjectTwo from './ProjectTwo.vue';
import ProjectThree from './ProjectThree.vue';
// @ is an alias to /src

export default {
   name: 'Index',
   components: {
      Navbar,
      Hero,
      ProjectOne,
      ProjectTwo,
      ProjectThree,
   },
};
</script>

<style lang="scss"></style>
