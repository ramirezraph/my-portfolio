<template>
   <div
      class="flex flex-col-reverse xl:flex-row xl:gap-x-8 2xl:gap-x-10"
      :class="reverse ? 'xl:flex-row-reverse' : ''"
   >
      <div class="w-full">
         <div class="mt-6 xl:mt-0">
            <h2
               class="text-2xl font-semibold md:text-3xl lg:text-4xl"
               :class="reverse ? 'text-left' : 'text-left'"
            >
               {{ project.title }}
            </h2>
            <p
               v-for="(p, index) in project.description"
               :key="index"
               class="mt-3 text-sm leading-normal md:leading-relaxed md:text-base lg:text-base opacity-80 xl:leading-loose"
               :class="reverse ? 'text-left' : 'text-left'"
            >
               {{ p }}
            </p>

            <div
               class="flex flex-wrap mt-6 gap-y-3 lg:mt-24 md:gap-y-5 chips md:gap-x-3 gap-x-1.5"
            >
               <chips-technology
                  v-for="(technology, index) in project.technologies"
                  :key="index"
               >
                  {{ technology }}
               </chips-technology>
            </div>
         </div>
         <div class="flex mt-6 space-x-3 md:mt-12">
            <button-icon
               tailwindColor="bg-green-700"
               @button-icon-clicked="goToLink(project.demoLink)"
            >
               <svg
                  id="MDI_monitor-screenshot"
                  data-name="MDI / monitor-screenshot"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16.359 16.359"
               >
                  <g
                     id="Boundary"
                     fill="#fff"
                     stroke="rgba(0,0,0,0)"
                     stroke-width="1"
                     opacity="0"
                  >
                     <rect width="16.359" height="16.359" stroke="none" />
                     <rect
                        x="0.5"
                        y="0.5"
                        width="15.359"
                        height="15.359"
                        fill="none"
                     />
                  </g>
                  <path
                     id="Path_monitor-screenshot"
                     data-name="Path / monitor-screenshot"
                     d="M6.453,4.726H3.726V7.453H5.09V6.09H6.453m6.816,1.363H11.906V8.816H10.543v1.363h2.726m1.363,1.363H2.363V3.363H14.632m0-1.363H2.363A1.359,1.359,0,0,0,1,3.363v8.179a1.363,1.363,0,0,0,1.363,1.363H7.135v1.363H5.771v1.363h5.453V14.269H9.861V12.906h4.771A1.363,1.363,0,0,0,16,11.543V3.363A1.363,1.363,0,0,0,14.632,2"
                     transform="translate(-0.318 -0.637)"
                     fill="#fff"
                  />
               </svg>
               <span class="hidden md:inline">Live Demo</span>
            </button-icon>
            <button-icon
               tailwindColor="bg-gray-800"
               @button-icon-clicked="goToLink(project.githubLink)"
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
               <span class="hidden md:inline">Github Repository</span>
            </button-icon>
         </div>
      </div>
      <div class="w-full">
         <carousel
            :per-page="1"
            :autoplay="true"
            :center-mode="true"
            :loop="true"
            :autoplay-timeout="5000"
            class="w-full"
            :paginationEnabled="carouselPagination"
            pagination-color="#9a9a9a"
            pagination-active-color="#fff"
            :paginationSize="8"
         >
            <slide v-for="(image, index) in project.imageLinks" :key="index">
               <img :src="getImgUrl(image)" alt="" class="bg-cover" />
            </slide>
         </carousel>
      </div>
   </div>
</template>

<script>
import ChipsTechnology from '@/components/ChipsTechnology.vue';
import ButtonIcon from '../components/ButtonIcon.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
   components: {
      ChipsTechnology,
      ButtonIcon,
      Carousel,
      Slide,
   },
   props: {
      project: {
         type: Object,
         required: true,
      },
      reverse: {
         type: Boolean,
         default: false,
      },
   },
   data() {
      return {
         carouselPagination: false,
      };
   },
   methods: {
      getImgUrl(img) {
         return require('../assets/images/' + img);
      },
      goToLink(link) {
         window.open(link, '_blank');
      },
      onResize() {
         if (window.innerWidth >= 768) {
            this.carouselPagination = true;
         } else {
            this.carouselPagination = false;
         }
      },
   },

   created() {
      this.onResize();
      window.addEventListener('resize', this.onResize);
   },

   beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
   },
};
</script>

<style lang="scss" scoped></style>
