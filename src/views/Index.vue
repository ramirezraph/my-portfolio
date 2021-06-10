<template>
   <div>
      <navbar class="z-50" />
      <full-page :options="options" id="fullpage" class="px-32">
         <hero v-if="true" class="section active" />
         <project-one v-if="true" class="section" />
         <project-two v-if="true" class="section" />
         <project-three v-if="true" class="section" />
         <about-me v-if="true" class="section" />
         <contact class="section" />
         <footer class="pt-6 pb-16 text-left section fp-auto-height">
            <div class="flex items-end">
               <div>
                  <span class="text-sm opacity-40">portfolio</span>
                  <h5 class="text-xl name">
                     Ra<span class="text-primary">phael Ra</span>mirez
                  </h5>
               </div>
               <div class="ml-auto text-sm opacity-50">
                  &copy; All rights reserved. 2021.
               </div>
            </div>
         </footer>
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
import Contact from './Contact.vue';

export default {
   name: 'Index',
   components: {
      Navbar,
      Hero,
      ProjectOne,
      ProjectTwo,
      ProjectThree,
      AboutMe,
      Contact,
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

<style lang="scss">
// .name {
//    position: relative;

//    &:before {
//       content: '';
//       width: 20ch;
//       height: 3px;
//       background: #18f890;
//       position: absolute;
//       left: 0;
//       bottom: -0.5em;
//    }
// }
</style>
