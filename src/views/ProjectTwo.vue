<template>
   <section>
      <project-view class="mt-12" :project="projects[1]" :reverse="true" />
   </section>
</template>

<script>
import ProjectView from '../components/ProjectView.vue';
export default {
   components: {
      ProjectView,
   },
   computed: {
      projects() {
         return this.$store.getters['projects'];
      },
   },
};
</script>

<style lang="scss" scoped>
section::before {
   content: 'coding is fun';
   font-size: 10rem;
   position: absolute;
   color: white;
   opacity: 0.015;
   top: -3rem;
   left: -5rem;
}
</style>
