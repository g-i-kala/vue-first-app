import AssignmentList from './AssignmentList.js';

export default {
  components: { AssignmentList },
  template: `
    <section class="space-y-6"> 
      <assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
        <form @submit.prevent="add">
        <div class="flex flex-col my-4 border border-white space-y-2 p-2 text-black ">
          <input v-model="newAssignment" type="text" name="newAssignment" placeholder="New Assignment" class="bg-white px-2 py-1">
          <button class="bg-white px-2 size-fit rounded">Add</button>
        </div>
        </form>
    </section>
  `,
  data() {
    return {
      assignments: [
        { name: 'Finish project', complete: false, id: 1 },
        { name: 'Read chapter', complete: false, id: 2 },
        { name: 'Turn in homework', complete: false, id: 3 },
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
    add() {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1,
      });

      this.newAssignment = '';
    },
  },
};
