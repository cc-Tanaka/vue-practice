<template>
  <div>
    <!-- preventでpostする事を防ぐ -->
    <form v-on:submit.prevent="sendTodo">
      <input v-model="todo">
      <input type="submit" val="追加">
    </form>
    <ul v-for="item in list" :key="item">
      <li v-on:click="doneTodo(item)">
        <span>{{item.status}}</span>
        <span v-if="item.status == 'done'">
          {{item.text}}
        </span>
        <span v-else>
          {{item.text}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      todo: "",
      list: []
    }
  },
  methods: {
    sendTodo: function () {
      this.list.push({
        text: this.todo,
        status: 'todo'
      })
      this.todo = ""
    },
    doneTodo: function (item) {
      if(item.status == 'done') {
        item.status = 'todo'
      } else {
        item.status = 'done'
      }
    }
  }
}
</script>

<style>
</style>
