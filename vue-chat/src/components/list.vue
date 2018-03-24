<template>
<div class="list">
    <ul>
        <li v-for="item in sessions" :class="{ active: item.id === currentSessionId }">
            <img class="avatar"  :src="item.user.img">
            <p class="name">{{item.user.name}}</p>
        </li>
        <!-- <li >
            <img src="./../assets/logo.png" alt="" class="avatar">
            <p class="name">{{item.user.name}}</p>
        </li> -->
    </ul>
</div>
</template>
<script>
import store from '../store';

export default {
    name: 'list',
    computed: {
        sessions: function(){
            return this.$store.state.sessions
        },
        currentSessionId: function(){
            return this.$store.state.currentSessionId
        }
    },
    store
}
</script>

<style scoped lang="less">
.list {
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;
        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
}
</style>