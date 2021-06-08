<template>
   <section class="relative w-full h-screen top-40">
      <span class="absolute text-2xl left-6 -top-12">Hi, my name is</span>
      <div class="grid w-full grid-cols-2 select-none">
         <div class="relative w-full text-left">
            <div class="relative flex -top-14 text-primary">
               <div>
                  <h1 class="font-semibold ra">RA</h1>
               </div>
               <div class="relative space-y-6 ml-9 top-10 ex-col text-8xl">
                  <h1 class="phael">PHAEL</h1>
                  <h1 class="mirez">MIREZ</h1>
               </div>
            </div>
         </div>
         <div class="w-full space-y-16 text-right">
            <h2 class="text-4xl">
               A front-end web developer <br />
               based in <span class="text-red-400">Phil</span>ipp<span
                  class="text-blue-400"
                  >ines</span
               >
            </h2>
            <button class="px-12 py-4 text-xl bg-purple-700 rounded-full">
               view projects
            </button>
         </div>
         <div>
            <div
               class="relative bottom-0 ml-auto bg-white w-80 h-72 box opacity-5"
            ></div>
         </div>
         <div class="flex flex-col text-right">
            <div class="flex justify-end gap-x-8">
               <button>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="42.15"
                     height="42.15"
                     viewBox="0 0 42.15 42.15"
                  >
                     <g id="MDI_gmail" data-name="MDI / gmail" opacity="0.7">
                        <g
                           id="Boundary"
                           fill="#fff"
                           stroke="rgba(0,0,0,0)"
                           stroke-width="1"
                           opacity="0"
                        >
                           <rect width="42.15" height="42.15" stroke="none" />
                           <rect
                              x="0.5"
                              y="0.5"
                              width="41.15"
                              height="41.15"
                              fill="none"
                           />
                        </g>
                        <path
                           id="Path_gmail"
                           data-name="Path / gmail"
                           d="M36.335,33.881H32.52V15.205l-11.445,8-11.445-8V33.881H5.815V8.269H8.1L21.075,17.34,34.046,8.269h2.289m0-4.269H5.815A4.047,4.047,0,0,0,2,8.269V33.881A4.061,4.061,0,0,0,5.815,38.15h30.52a4.061,4.061,0,0,0,3.815-4.269V8.269A4.059,4.059,0,0,0,36.335,4Z"
                           transform="translate(0 0)"
                           fill="#fff"
                        />
                     </g>
                  </svg>
               </button>
               <button>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="42.15"
                     height="42.15"
                     viewBox="0 0 42.15 42.15"
                  >
                     <g id="MDI_github" data-name="MDI / github" opacity="0.7">
                        <g
                           id="Boundary"
                           fill="#fff"
                           stroke="rgba(0,0,0,0)"
                           stroke-width="1"
                           opacity="0"
                        >
                           <rect width="42.15" height="42.15" stroke="none" />
                           <rect
                              x="0.5"
                              y="0.5"
                              width="41.15"
                              height="41.15"
                              fill="none"
                           />
                        </g>
                        <path
                           id="Path_github"
                           data-name="Path / github"
                           d="M21.075,2a19.346,19.346,0,0,0-6.028,37.636c.954.154,1.259-.444,1.259-.965V35.409C11.022,36.567,9.9,32.823,9.9,32.823A5.177,5.177,0,0,0,7.78,29.985c-1.736-1.2.134-1.158.134-1.158a4.016,4.016,0,0,1,2.918,1.988c1.66,2.934,4.464,2.065,5.551,1.6a4.187,4.187,0,0,1,1.2-2.586c-4.235-.483-8.679-2.142-8.679-9.5A7.524,7.524,0,0,1,10.87,15.1a6.978,6.978,0,0,1,.191-5.1s1.6-.521,5.246,1.969a18.171,18.171,0,0,1,9.538,0c3.643-2.49,5.246-1.969,5.246-1.969a6.978,6.978,0,0,1,.191,5.1,7.524,7.524,0,0,1,1.965,5.23c0,7.373-4.464,8.994-8.717,9.476a4.633,4.633,0,0,1,1.316,3.571v5.288c0,.521.305,1.139,1.278.965A19.35,19.35,0,0,0,21.075,2Z"
                           fill="#fff"
                        />
                     </g>
                  </svg>
               </button>
               <button>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="42.15"
                     height="42.15"
                     viewBox="0 0 42.15 42.15"
                  >
                     <g
                        id="MDI_facebook"
                        data-name="MDI / facebook"
                        opacity="0.7"
                     >
                        <g
                           id="Boundary"
                           fill="#fff"
                           stroke="rgba(0,0,0,0)"
                           stroke-width="1"
                           opacity="0"
                        >
                           <rect width="42.15" height="42.15" stroke="none" />
                           <rect
                              x="0.5"
                              y="0.5"
                              width="41.15"
                              height="41.15"
                              fill="none"
                           />
                        </g>
                        <path
                           id="Path_facebook"
                           data-name="Path / facebook"
                           d="M21.075,2.04A19.158,19.158,0,0,0,18.1,40.11V26.732H13.254V21.19H18.1V16.966c0-4.8,2.842-7.434,7.21-7.434a29.847,29.847,0,0,1,4.254.363v4.721h-2.4A2.761,2.761,0,0,0,24.051,17.6V21.19h5.3L28.5,26.732H24.051V40.11A19.158,19.158,0,0,0,21.075,2.04Z"
                           transform="translate(0 -0.04)"
                           fill="#fff"
                        />
                     </g>
                  </svg>
               </button>
               <button>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="42.145"
                     height="42.145"
                     viewBox="0 0 42.145 42.145"
                  >
                     <g
                        id="MDI_linkedin"
                        data-name="MDI / linkedin"
                        opacity="0.7"
                     >
                        <g
                           id="Boundary"
                           fill="#fff"
                           stroke="rgba(0,0,0,0)"
                           stroke-width="1"
                           opacity="0"
                        >
                           <rect width="42.145" height="42.145" stroke="none" />
                           <rect
                              x="0.5"
                              y="0.5"
                              width="41.145"
                              height="41.145"
                              fill="none"
                           />
                        </g>
                        <path
                           id="Path_linkedin"
                           data-name="Path / linkedin"
                           d="M31.1,3a3.512,3.512,0,0,1,3.512,3.512V31.1A3.512,3.512,0,0,1,31.1,34.609H6.512A3.512,3.512,0,0,1,3,31.1V6.512A3.512,3.512,0,0,1,6.512,3H31.1m-.878,27.219V20.912a5.725,5.725,0,0,0-5.725-5.725A5.089,5.089,0,0,0,20.42,17.47V15.521h-4.9v14.7h4.9V21.561a2.45,2.45,0,1,1,4.9,0v8.657h4.9M9.813,12.764a2.959,2.959,0,1,0-2.968-2.95,2.95,2.95,0,0,0,2.968,2.95m2.441,17.455v-14.7H7.39v14.7Z"
                           transform="translate(2.268 2.268)"
                           fill="#fff"
                        />
                     </g>
                  </svg>
               </button>
            </div>
            <div class="relative w-full h-full top-12">
               <hr class="relative ml-auto w-80 top-16" />
               <hr class="relative ml-auto w-52 top-24" />
               <hr class="relative w-32 ml-auto top-32" />
               <hr class="relative w-10 ml-auto top-40" />
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ra {
   font-size: 17rem;
   line-height: 1em;
   letter-spacing: -0.1em;
}

.ra::before {
   content: 'RAPH';
   position: absolute;
   left: -0.75em;
   top: 0.94em;
   width: auto;
   height: auto;
   opacity: 8%;
   transform: rotate(90deg);
}
</style>
