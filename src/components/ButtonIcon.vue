<template>
   <button
      class="flex items-center px-8 py-3 space-x-3 text-xs md:text-base rounded-xl"
      :class="tailwindColor"
      @click="$emit('button-icon-clicked')"
   >
      <slot />
   </button>
</template>

<script>
export default {
   props: {
      tailwindColor: {
         type: String,
         required: true,
      },
   },
};
</script>
