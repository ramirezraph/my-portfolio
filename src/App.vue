<template>
   <div id="app">
      <router-view />
   </div>
</template>

<style lang="scss">
#app {
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-size: 18px;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: whitesmoke;
   width: 100vw;
   max-height: 100vh;
   overflow-y: scroll;

   scroll-snap-type: y mandatory;

   div section {
      scroll-snap-align: start;
   }
}
</style>
