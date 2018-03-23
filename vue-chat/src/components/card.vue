<template>
<div class="card">
  <header>
      <!-- <img class="avatar" :src="$store.state.user.img" :alt="$store.state.user.img"> -->
      <!-- <p class="name">{{$store.state.user.name}}</p> -->
      <img src="./../assets/logo.png" alt="" class="avatar">
      <p class="name">youngyang</p>
  </header>
  <footer>
      <input class="search" type="text" placeholder="search user...">
  </footer>
</div>
</template>
<script>
// import srore from '../store';

// export default {
  
// }
</script>
<style scoped>
    .card {
        padding: 12px;
        border-bottom: solid 1px #24272C;
    }
    header > .avatar{
        width: 40px;
        height: 40px;
    }
    footer {
        margin-top: 10px;
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
        font-size: 16px;
    }
    .search {
        width: 150px;
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: solid 1px #3a3a3a;
        border-radius: 4px;
        outline: none;
        background-color: #26292E;
    }
</style>
