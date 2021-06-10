<template>
   <div>
      <nav
         class="absolute left-0 right-0 z-50 w-full p-6 px-32 space-x-6 text-right top-8"
      >
         <a href="#project-1" class="px-3 text-white">
            my projects
         </a>
         <a href="#about" class="px-3 text-white">
            about me
         </a>
         <a href="#contact" class="px-3 text-white">
            get in touch
         </a>
      </nav>
      <full-page :options="options" id="fullpage" class="px-32">
         <hero data-anchor="hero" v-if="true" class="section active" />
         <project-one data-anchor="project-1" v-if="true" class="section" />
         <project-two data-anchor="project-2" v-if="true" class="section" />
         <project-three data-anchor="project-3" v-if="true" class="section" />
         <about-me data-anchor="about" v-if="true" class="section" />
         <contact data-anchor="contact" class="section" />
         <footer
            data-anchor="footer"
            class="pt-6 pb-16 text-left section fp-auto-height"
         >
            <div class="flex items-end">
               <div>
                  <span class="text-sm opacity-40">portfolio</span>
                  <a href="#hero" class="block text-xl name">
                     Ra<span class="text-primary">phael Ra</span>mirez
                  </a>
               </div>
               <div class="pr-3 ml-auto text-right">
                  <a href="#hero" class="ml-auto">
                     back to top
                  </a>
                  <p class="mt-2 text-sm opacity-50">
                     &copy; All rights reserved. 2021.
                  </p>
               </div>
            </div>
         </footer>
      </full-page>
   </div>
</template>

<script>
import Hero from './Hero.vue';
import ProjectOne from './ProjectOne.vue';
import ProjectTwo from './ProjectTwo.vue';
import ProjectThree from './ProjectThree.vue';
import AboutMe from './AboutMe.vue';
import Contact from './Contact.vue';

export default {
   name: 'Index',
   components: {
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
