<template>
<div class="list">
    <ul>
        <!-- <li :class="{ active: $store.state.sessions.id === currentId }">
            <img class="avatar"  width="30" height="30" :alt="$store.state.sessions.user.name" :src="$store.state.sessions.user.img">
            <p class="name">{{$store.state.sessions.user.name}}</p>
        </li> -->
        <li>
            <img src="./../assets/logo.png" alt="" class="avatar">
            <p class="name">头头</p>
        </li>
    </ul>
</div>
</template>
<script>
// import store from '../store';

// export default {
  
// }
</script>

<style scoped>
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;
    }
    li:hover{
        background-color: rgba(255, 255, 255, 0.03);
    }
    li:active{
        background-color: rgba(255, 255, 255, 0.1);
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
</style>