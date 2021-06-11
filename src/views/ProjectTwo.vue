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

@media (min-width: 1440px) {
   section::before {
      top: 0rem;
   }
}

@media (min-width: 1680px) {
   section::before {
      font-size: 14rem;
      top: 0rem;
      left: -12rem;
   }
}
</style>
