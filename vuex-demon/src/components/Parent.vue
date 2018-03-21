<template>
  <div class="parent">
      <h3>父组件</h3>
      <button type="button" @click="clickHandler">修改自己的文本</button>
      <button type="button" @click="clickHandlerOther">修改其它人文本</button>
      <div>Test:{{msg}}</div>
      <div>Test:{{$store.state.testMsg}}</div>
      <Child />
  </div>
</template>

<script>
    import store from '../store'
    import Child from './Child.vue'

    export default {
        name: 'Parent',
        components: {
            Child
        },
        computed: {
            msg(){
                return store.state.testMsg
            }
        },
        methods: {
            clickHandler(){
                store.commit('changeTestMsg', '父组件修改后的文本')
            },
            clickHandlerOther(){
                store.commit('changeChildText', '父组件修改子组件后的文本')
            }
        },
        store
    }
</script>

<style scoped>
    .parent{
        background-color: #00BBFF;
        height: 400px;
    }
</style>