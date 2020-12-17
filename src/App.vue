<template>
  <div>
    <h4>{{ $store.state.message }}</h4>
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
    <div>
      <h4>Count</h4>
      {{ count }}
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
    <div>
      <h4>VueRouter</h4>
      <ul>
        <li>
          <router-link to="/a">page A</router-link>
        </li>
        <li>
          <router-link to="/b">page B</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
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
    },
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>
</style>
