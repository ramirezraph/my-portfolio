<template>
   <div>
      <nav
         class="absolute z-10 w-full px-6 left-3 lg:p-6 md:px-16 lg:px-32 top-8 md:top-12 xl:px-32 2xl:px-60 3xl:px-96"
      >
         <ul class="justify-end hidden lg:flex" id="nav">
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

         <!-- mobile nav -->
         <div class="flex items-center lg:hidden">
            <button @click="toggleNav">
               <svg
                  id="MDI_menu"
                  data-name="MDI / menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  class="md:w-10 md:h-10"
               >
                  <g
                     id="Boundary"
                     fill="#fff"
                     stroke="rgba(0,0,0,0)"
                     stroke-width="1"
                     opacity="0"
                  >
                     <rect width="32" height="32" stroke="none" />
                     <rect x="0.5" y="0.5" width="31" height="31" fill="none" />
                  </g>
                  <path
                     id="Path_menu"
                     data-name="Path / menu"
                     d="M3,6H26.919V8.694H3V6m0,6.734H26.919v2.694H3V12.734m0,6.734H26.919v2.694H3Z"
                     transform="translate(1.04 1.919)"
                     fill="#fff"
                  />
               </svg>
            </button>
         </div>
      </nav>
      <!-- mobile full navigation -->
      <transition-group name="slide" mode="out-in">
         <div
            class="absolute z-20 grid w-screen h-screen lg:hidden bg-primary opacity-95 place-items-center"
            v-show="showMobileNav"
            key="nav"
         >
            <div class="flex flex-col justify-center w-4/5 gap-y-6">
               <span class="menu-text opacity-80">menu</span>
               <ul class="space-y-8" id="nav">
                  <li data-menuanchor="project">
                     <a
                        href="#project"
                        class="px-3 text-3xl text-white active:text-primary"
                        @click="toggleNav"
                     >
                        my projects
                     </a>
                  </li>
                  <li data-menuanchor="about">
                     <a
                        href="#about"
                        class="px-3 text-3xl text-white active:text-primary"
                        @click="toggleNav"
                     >
                        about me
                     </a>
                  </li>
                  <li data-menuanchor="contact">
                     <a
                        href="#contact"
                        class="px-3 text-3xl text-white active:text-primary"
                        @click="toggleNav"
                     >
                        get in touch
                     </a>
                  </li>
               </ul>
               <button class="p-8 mx-auto my-12" @click="toggleNav">
                  <svg
                     id="MDI_window-close"
                     data-name="MDI / window-close"
                     xmlns="http://www.w3.org/2000/svg"
                     width="31.221"
                     height="31.221"
                     viewBox="0 0 31.221 31.221"
                  >
                     <g
                        id="Boundary"
                        fill="#fff"
                        stroke="rgba(0,0,0,0)"
                        stroke-width="1"
                        opacity="0"
                     >
                        <rect width="31.221" height="31.221" stroke="none" />
                        <rect
                           x="0.5"
                           y="0.5"
                           width="30.221"
                           height="30.221"
                           fill="none"
                        />
                     </g>
                     <path
                        id="Path_window-close"
                        data-name="Path / window-close"
                        d="M16.005,14.106l7.207,7.207v1.9h-1.9l-7.207-7.207L6.9,23.212H5v-1.9l7.207-7.207L5,6.9V5H6.9l7.207,7.207L21.313,5h1.9V6.9Z"
                        transform="translate(1.504 1.504)"
                        fill="#fff"
                     />
                  </svg>
               </button>
            </div>
         </div>
      </transition-group>
      <full-page
         :options="options"
         id="fullpage"
         class="px-6 md:px-16 lg:px-32 xl:px-32 2xl:px-60 3xl:px-96"
      >
         <hero data-menuanchor="hero" v-if="true" class="section active" />
         <project-one data-menuanchor="project" v-if="true" class="section" />
         <project-two data-menuanchor="project" v-if="true" class="section" />
         <project-three data-menuanchor="project" v-if="true" class="section" />
         <about-me data-menuanchor="about" v-if="true" class="section" />
         <contact v-if="true" data-menuanchor="contact" class="section" />
         <footer
            v-if="true"
            data-anchor="footer"
            class="pt-6 pb-16 text-left section fp-auto-height"
         >
            <div class="flex flex-col md:flex-row md:items-end">
               <div>
                  <span class="text-sm opacity-40">portfolio</span>
                  <a href="#hero" class="block text-xl name">
                     Ra<span class="text-primary">phael Ra</span>mirez
                  </a>
               </div>
               <div class="pr-3 mt-10 md:text-right md:ml-auto">
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
         showMobileNav: false,

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
   methods: {
      toggleNav() {
         this.showMobileNav = !this.showMobileNav;
      },
   },
};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
   transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.slide-enter,
.slide-leave-to {
   opacity: 0;
   transform: translateY(-50px);
   transition: opacity 300ms ease-in, transform 300ms ease-in;
}

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
