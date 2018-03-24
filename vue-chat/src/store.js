import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const now = new Date().toLocaleString();
const store = new Vuex.Store({
    state: {
        // 当前用户
        user: {
            name: 'coffce',
            img: 'src/assets'
        },
        // 会话列表
        sessions: [
            {
                id: 2,
                user: {
                    name: '示例介绍',
                    img: 'C:\\Users\\杨阳\\Desktop\\vue\\vue-chat\\src\\assets\\1.jpg'
                },
                messages: [
                    {
                        content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                        date: now
                    }, {
                        content: '项目地址: https://github.com/coffcer/vue-chat',
                        date: now
                    }
                ]
            },
            {
                id: 1,
                user: {
                    name: 'webpack',
                    img: './../assets/2.png'
                },
                messages: [
                    {
                        content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                        date: now
                    }, {
                        content: '项目地址: https://github.com/coffcer/vue-chat',
                        date: now
                    }
                ]
            }
        ],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
});

export default store;