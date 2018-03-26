import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const now = new Date().toLocaleString();
const state = {
    // 当前用户
    user: {
        name: 'coffce',
        img: './assets/3.jpg'
    },
    // 会话列表
    sessions: [
        {
            id: 1,
            user: {
                name: '示例介绍',
                img: './assets/1.jpg'
            },
            messages: [
                {
                    content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 是我在GitHub上发现的一个小项目，重新实现了一遍。下面是原GitHub的作品链接。',
                    date: now
                }, {
                    content: '项目地址: https://github.com/coffcer/vue-chat',
                    date: now
                }
            ]
        },
        {
            id: 2,
            user: {
                name: 'webpack',
                img: './assets/2.png'
            },
            messages: [
                {
                    content: 'Hello，我是杨阳，这是我的第一个GitHub小项目。',
                    date: now
                }, {
                    content: '项目地址: https://github.com/yangyangshasha/vue-demon/tree/master/vue-chat',
                    date: now
                }
            ]
        }
    ],
    // 当前选中的会话
    currentSessionId: 1,
    // 过滤出只包含这个key的会话
    filterKey: ''
}
const mutations = {
    // 发送消息
    sendMsg(state, content){
        let session = state.sessions.filter((val, index, arr)=>{
            return val.id === state.currentSessionId
        })
        session[0].messages.push({
            content: content,
            date: new Date().toLocaleString(),
            self: true
        })
    },
    // 选择不同的用户
    filterPeople(state, filterKeyStr){
        state.filterKey = filterKeyStr
    },
    // 切换弹框
    filterMsg(state, id){
        state.currentSessionId = id
    }
}
export default new Vuex.Store({
    state,
    mutations
});