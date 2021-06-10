<template>
   <div>
      <navbar class="z-50" />
      <full-page :options="options" id="fullpage" class="px-32">
         <hero v-if="true" class="section active" />
         <project-one v-if="true" class="section" />
         <project-two v-if="true" class="section" />
         <project-three v-if="true" class="section" />
         <about-me class="section" />
      </full-page>
   </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Hero from './Hero.vue';
import ProjectOne from './ProjectOne.vue';
import ProjectTwo from './ProjectTwo.vue';
import ProjectThree from './ProjectThree.vue';
import AboutMe from './AboutMe.vue';

export default {
   name: 'Index',
   components: {
      Navbar,
      Hero,
      ProjectOne,
      ProjectTwo,
      ProjectThree,
      AboutMe,
   },
   data() {
      return {
         options: {
            licenseKey: 'AsdasSDasd',
            autoScrolling: true,
            verticalCentered: true,
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
