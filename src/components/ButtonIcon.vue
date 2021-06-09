<template>
   <button
      class="flex content-center px-12 py-3 justify-items-center rounded-xl gap-x-3"
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
