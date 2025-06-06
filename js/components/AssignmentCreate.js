export default {
  template: `
    <form @submit.prevent="add">
      <div class="flex flex-col my-4 border border-white space-y-2 p-2 text-black ">
        <input v-model="newAssignment" type="text" name="newAssignment" placeholder="New Assignment" class="bg-white px-2 py-1">
        <button class="bg-white px-2 size-fit rounded">Add</button>
      </div>
    </form>
  `,
  data() {
    return {
      newAssignment: '',
    };
  },
  methods: {
    add() {
      this.$emit('add', this.newAssignment);
      this.newAssignment = '';
    },
  },
};
