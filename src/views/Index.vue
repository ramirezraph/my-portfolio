<template>
   <div>
      <nav
         class="absolute left-0 right-0 z-50 w-full p-6 px-32 space-x-6 top-8"
      >
         <ul class="flex justify-end" id="nav">
            <li data-menuanchor="project">
               <a href="#project" class="px-3 text-white active:text-primary">
                  my projects
               </a>
            </li>
            <li data-menuanchor="about">
               <a href="#about" class="px-3 text-white active:text-primary">
                  about me
               </a>
            </li>
            <li data-menuanchor="contact">
               <a href="#contact" class="px-3 text-white active:text-primary">
                  get in touch
               </a>
            </li>
         </ul>
      </nav>
      <full-page :options="options" id="fullpage" class="px-32">
         <hero data-menuanchor="hero" v-if="true" class="section active" />
         <project-one data-menuanchor="project" v-if="true" class="section" />
         <project-two data-menuanchor="project" v-if="true" class="section" />
         <project-three data-menuanchor="project" v-if="true" class="section" />
         <about-me data-menuanchor="about" v-if="true" class="section" />
         <contact data-menuanchor="contact" class="section" />
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
            anchors: [
               'hero',
               'project',
               'project',
               'project',
               'about',
               'contact',
               'footer',
            ],
            menu: '#nav',
         },
      };
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

li a {
   transition: all 500ms ease-in-out;

   &:before {
      content: '';
      position: absolute;
      width: 0%;
      height: 1px;
      bottom: -0.2em;
      background-color: #18f890;
      opacity: 0;

      transition: width 500ms ease-out;
   }
}

li.active a {
   @apply text-primary relative;

   &:before {
      content: '';
      position: absolute;
      width: 82%;
      height: 1px;
      bottom: -0.2em;
      background-color: #18f890;
      opacity: 1;
   }
}
</style>
