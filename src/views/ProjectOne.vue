<template>
   <section class="text-left">
      <h1 class="mt-3 text-4xl md:text-7xl lg:text-8xl 3xl:mb-32">
         <span class="text-primary">$ cd</span> my project
      </h1>
      <project-view :project="projects[0]" class="mt-6 md:mt-16" />
   </section>
</template>

<script>
import ProjectView from '../components/ProjectView.vue';
export default {
   components: { ProjectView },
   data() {
      return {};
   },
   computed: {
      projects() {
         return this.$store.getters['projects'];
      },
   },
};
</script>
