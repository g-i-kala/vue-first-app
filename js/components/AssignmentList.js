import Assignment from './Assignment.js';

export default {
  components: { Assignment },
  template: `
    <section v-show="assignments.length">
      <h2 class="font-bold mb-2">{{ title }}
      <span>({{ assignments.length }})</span>
      </h2>
      <div class="flex gap-2 mb -4">
        <button 
          @click="currentTag = tag"
          v-for="tag in tags" 
          class="border border-white rounded px-2 text-xs hover:bg-white hover:text-black"
          :class="{
            'bg-white/20': tag === currentTag
          }">
          {{ tag }}
        </button>
      </div>
      <ul class="border border-gray-600 divide-gray-600">
        <assignment 
          v-for="assignment in filteredAssignments" 
          :key="assignment.id"
          :assignment="assignment">
        </assignment>
      </ul>
    </section>
  `,
  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: 'all',
    };
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map((a) => a.tag))];
    },
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
