export default {
  template: `
    <div class="flex gap-2 mb-4">
        <button 
          @click="$emit('update:currentTag', tag)"
          v-for="tag in tags" 
          class="border border-white rounded px-2 text-xs hover:bg-white hover:text-black"
          :class="{
            'bg-white/20': tag === currentTag
          }">
          {{ tag }}
        </button>
      </div>
  `,
  props: {
    initialTags: Array,
    currentTag: String,
  },
  emits: ['update:currentTag'],
  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)];
    },
  },
};
