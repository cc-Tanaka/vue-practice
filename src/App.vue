<template>
  <div>
    <h4>Vue Router</h4>
    <p><router-link to="/form_01">フォーム画面へ</router-link></p>
    <div><router-view></router-view></div>
    <a href="/">トップへ戻る</a>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style>
</style>
