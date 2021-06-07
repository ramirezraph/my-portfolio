<template>
   <div class="w-screen h-auto px-32 bg-primary">
      <navbar />
      <hero />
      <projects />
   </div>
</template>

<script>
import Hero from './Hero.vue';
import Navbar from './Navbar.vue';
import Projects from './Projects.vue';
// @ is an alias to /src

export default {
   name: 'Index',
   components: {
      Navbar,
      Hero,
      Projects,
   },
};
</script>
