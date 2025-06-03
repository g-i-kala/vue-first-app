export default {
  template: `
              <button 
                :class="{
                'relative px-5 py-2 rounded disabled:cursor-not-allowed': true,
                'bg-blue-200 hover:bg-blue-400': type === 'primary',
                'bg-green-200 hover:bg-green-400': type === 'secondary',
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'is-loading': processing === true
                }" 
                :disabled="processing" 
                @click="toggle">
                  <slot />
              </button>
             `,
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {
      processing: false,
    };
  },
  methods: {
    toggle() {
      this.processing = !this.processing;
      setTimeout(() => {
        this.processing = !this.processing;
      }, 3000);
    },
  },
};
