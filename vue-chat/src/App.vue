<template>
<div id="app">
    <div class="sidebar">
        <card></card>
        <list></list>
    </div>
    <div class="main">
        <Message></Message>
        <Chatarea></Chatarea>
    </div>
</div>
</template>

<script>
import card from './components/card';
import list from './components/list';
import Message from './components/Message';
import Chatarea from './components/Chatarea';

export default {
  name: 'App',
  components: {
    card,
    list,
    Message,
    Chatarea
  }
}
</script>

<style lang="less" scoped>
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;
    overflow: hidden;
    border-radius: 3px;
}
    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
</style>
