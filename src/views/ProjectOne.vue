<template>
   <section class="text-left">
      <h1 class="text-8xl">
         <span class="text-primary">$ cd</span> my project
      </h1>
      <project-view :project="projects[0]" class="mt-20" />
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
