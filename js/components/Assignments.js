import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
    <section class="space-y-6"> 
      <assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
      <assignment-create @add="add"></assignment-create>  
    </section>
  `,
  data() {
    return {
      assignments: [
        { name: 'Finish project', complete: false, id: 1, tag: 'science' },
        { name: 'Read chapter', complete: false, id: 2, tag: 'math' },
        { name: 'Turn in homework', complete: false, id: 3, tag: 'math' },
      ],
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((assignment) => !assignment.complete),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
