<template>
   <div>
      <navbar class="z-50" />
      <full-page :options="options" id="fullpage" class="px-32">
         <hero class="section active" />
         <project-one class="section" />
         <project-two class="section" />
         <project-three class="section" />
      </full-page>
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
   data() {
      return {
         options: {
            licenseKey: 'AsdasSDasd',
            autoScrolling: true,
         },
      };
   },
   methods: {
      toggleNavigation() {
         this.options.navigation = !this.options.navigation;
      },
      toggleScrollbar() {
         console.log('Changing scrollbar...');
         this.options.scrollBar = !this.options.scrollBar;
      },
   },
};
</script>

<style lang="scss"></style>
