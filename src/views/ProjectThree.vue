<template>
   <section>
      <project-view class="mt-12 lg:mt-24" :project="projects[2]" />
      <div class="w-full mt-6 visit lg:block">
         <div
            class="flex items-center justify-center lg:justify-end gap-x-3 lg:gap-x-6"
         >
            <h2 class="text-xs opacity-80">Still interested to see more?</h2>
            <button
               class="flex items-center px-5 py-2 text-sm bg-purple-700 rounded-full lg:text-base lg:px-10 lg:py-4 gap-x-2"
               @click="goToLink('https://github.com/ramirezraph')"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 21 21"
               >
                  <g
                     id="MDI_github"
                     data-name="MDI / github"
                     transform="translate(-0.009 0.339)"
                  >
                     <g
                        id="Boundary"
                        transform="translate(0.009 -0.339)"
                        fill="#fff"
                        stroke="rgba(0,0,0,0)"
                        stroke-width="1"
                        opacity="0"
                     >
                        <rect width="21" height="21" stroke="none" />
                        <rect
                           x="0.5"
                           y="0.5"
                           width="20"
                           height="20"
                           fill="none"
                        />
                     </g>
                     <path
                        id="Path_github"
                        data-name="Path / github"
                        d="M9.933,2A7.873,7.873,0,0,0,2,9.811a7.844,7.844,0,0,0,5.426,7.42c.4.062.524-.18.524-.391v-1.32c-2.2.469-2.665-1.047-2.665-1.047A2.11,2.11,0,0,0,4.4,13.326c-.722-.484.056-.469.056-.469a1.665,1.665,0,0,1,1.214.8,1.719,1.719,0,0,0,2.308.648,1.677,1.677,0,0,1,.5-1.047c-1.761-.2-3.609-.867-3.609-3.843A3,3,0,0,1,5.689,7.3a2.754,2.754,0,0,1,.079-2.062s.666-.211,2.182.8a7.758,7.758,0,0,1,3.966,0c1.515-1.008,2.182-.8,2.182-.8A2.754,2.754,0,0,1,14.177,7.3a3,3,0,0,1,.817,2.117c0,2.984-1.856,3.64-3.625,3.835a1.849,1.849,0,0,1,.547,1.445v2.14c0,.211.127.461.531.391a7.845,7.845,0,0,0,5.418-7.42A7.873,7.873,0,0,0,9.933,2Z"
                        transform="translate(0.567 0.567)"
                        fill="#fff"
                     />
                  </g>
               </svg>

               Visit my Github
            </button>
         </div>
      </div>
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
   methods: {
      goToLink(link) {
         window.open(link, '_blank');
      },
   },
};
</script>

<style lang="scss" scoped>
@media (min-height: 700px) {
   .visit {
      @apply mt-12;
   }
}
</style>
