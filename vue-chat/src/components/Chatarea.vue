<template>
<div class="text1">
    <textarea placeholder="按 Ctrl + Enter 发送"></textarea>
</div>
</template>
<script>
import store from './../store';

export default {
  name: 'text',
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