<template>
<div class="text1">
    <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" @keyup="onKeyup"></textarea>
</div>
</template>
<script>
import store from './../store';

export default {
  name: 'Chatarea',
  data () {
      return {
          content: ''
      }
  },
  methods: {
      onKeyup (e) {
          if(e.ctrlKey && e.keyCode === 13 && this.content.length){
              store.commit('sendMsg', this.content)
              this.content = ''
          }
      }
  },
  store
}
</script>

<style lang="less" scoped>
.text1 {
    height: 160px;
    border-top: solid 1px #ddd;
    textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: "Micrsofot Yahei";
        resize: none;
    }
}
</style>