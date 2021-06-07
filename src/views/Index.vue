<template>
   <div class="w-screen h-screen px-32">
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
