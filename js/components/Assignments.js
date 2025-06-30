import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import Card from './Card.js';

export default {
  components: { AssignmentList, AssignmentCreate, Card },
  template: `
    <section class="flex gap-8 space-y-6">
      <assignment-list :assignments="filters.inProgress" title="In Progress Assignments">
        <assignment-create @add="add"></assignment-create>
      </assignment-list>
      <div v-show="showCompleted">
        <assignment-list
          :assignments="filters.completed"
          title="Completed Assignments"
          can-toggle
          @toggle="showCompleted = !showCompleted">
          </assignment-list>
      </div>
    </section>
    <card>
      <template v-slot:heading>
        Heading Uno
      </template>
      <template v-slot:default>
        My first Card!
      </template>
    </card>

    <card>
      <template v-slot:heading>
        Heading Duee
      </template>
      <template v-slot:default>
        My first Card!
      </template>
    </card>

    <card>
      <template v-slot:heading>
        Heading Tree
      </template>
      <template v-slot:footer>
        My footer utter!
      </template>
    </card>

    <card theme="light">
      <template v-slot:heading>
        Heading Quattro
      </template>
      <template v-slot:default>
        My lajt card.
      </template>
    </card>
  `,
  data() {
    return {
      assignments: [],
      showCompleted: true,
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
  created() {
    fetch('http://localhost:3001/assignments')
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
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
