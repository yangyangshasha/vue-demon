<template>
<div class="message">
    <ul v-if="session">
        <li v-for="(item, index) in currentSession[0].messages">
            <p class="time">
                <span>{{ item.date }}</span>
            </p>
            <div class="main" :class="{self: item.self}">
                <img class="avatar" width="30" height="30" :src="item.self ? $store.state.user.img :currentSession[0].user.img"/>
                <div class="text">{{ item.content }}</div>
            </div>
        </li>
    </ul>
</div>
</template>
<script>
import store from './../store';

export default {
    name: 'message',
    computed: {
        session: function(){
            return this.$store.state.sessions
        },
        currentSession: function(){
            return this.$store.state.sessions.filter((val, index, arr)=>{
                return val.id === this.$store.state.currentSessionId
            })
        }
    },
    store
}
</script>

<style lang="less" scoped>
ul{
    list-style: none;
    padding: 0;
}
.message {
    padding: 10px 15px;
    overflow-y: scroll;
    li {
        margin-bottom: 15px;
    }
    .time {
        margin: 7px 0;
        text-align: center;
        > span {
            display: inline-block;
            padding: 0 18px;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
            background-color: #dcdcdc;
        }
    }
    .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: ~'calc(100% - 63px)';
        min-height: 30px;
        line-height: 2.5;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #fafafa;
        border-radius: 4px;
        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #fafafa;
        }
    }
    .self {
        text-align: right;
        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }
        .text {
            background-color: #b2e281;
            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #b2e281;
            }
        }
    }
}
</style>