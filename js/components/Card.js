export default {
  template: `
    <div
      :class="{
      'border rounded-lg p-4 my-4': true,
      'bg-gray-200 border-gray-400 text-black': theme == 'light',
      'bg-gray-700 border-gray-400': theme == 'dark',
      }">
      <h2 v-if="$slots.heading" class="font-bold my-2 text-lg">
        <slot name="heading"/>
      </h2>
      <slot name="default" />

      <footer v-if="$slots.footer" class="border-gray-200 border-t mt-4 pt-4 text-sm">
        <slot name="footer" /> 
      </footer>

    </div>   
  `,
  props: {
    heading: String,
    theme: {
      type: String,
      default: 'dark',
    },
  },
};
