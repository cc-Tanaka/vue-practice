<template>
  <div>
    <h4>{{ $store.state.message }}</h4>
    <!-- preventでpostする事を防ぐ -->
    <form>
      <input v-model="todo">
      <button @click="submit" val="追加"/>
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
      <h4>Ky_Universal</h4>
      <div>
        {{ this.result }}
      </div>
    </div>
  </div>
</template>

<script>
// import Feacher from './lib/ky.js'
// import { hoge, fuga } from './lib/test.js'
import Feacher from './lib/ky.js'


export default {
  data() {
    return {
      todo: "",
      list: [],
      result: ""
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
    },
    submit() {
      this.sendTodo()
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  async mounted() {
    const feacher = new Feacher()
    try {
      this.result = await feacher.feach()
    } catch (error) {
      this.result = error.message
    }
  }
}
</script>

<style>
</style>
