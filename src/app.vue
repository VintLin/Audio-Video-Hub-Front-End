<template>
  <div id="app">
    <div class="header-bar">
      <el-row class="inner">
        <el-col :span="8" :style="{backgroundImage:`url(${logo_img})`}" class="header-logo">
        </el-col>
        <el-col :span="17" :offset="0">
          <el-menu
            :default-active="activeIndex"
            id="base-bar"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#2CB8FF"
            active-text-color="#00A9FF">
            <el-menu-item  class="header-text">
                <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
                  <el-select v-model="search_select" slot="prepend" placeholder="请选择">
                    <el-option label="综合" value="1"></el-option>
                    <el-option label="文章" value="2"></el-option>
                    <el-option label="电影" value="3"></el-option>
                    <el-option label="音乐" value="4"></el-option>
                  </el-select>
                  <el-button slot="append" @click="searchResource" icon="el-icon-search"></el-button>
                </el-input>
            </el-menu-item>
            <el-menu-item index="1" class="header-text">首页</el-menu-item>
            <el-menu-item index="2" class="header-text">电影</el-menu-item>
            <el-menu-item index="3" class="header-text">音乐</el-menu-item>
            <el-menu-item index="4" class="header-text">小组</el-menu-item>
            <el-menu-item index="5" class="header-text"><a href="#" target="_blank">热门</a></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view class="inner"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        search: '',
        search_select: '',
        logo_img: require('./assets/logo.png')
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      searchResource() {
        this.$notify({
          title: 'It works!',
          type: 'success',
          message: this.search,
          duration: 5000
        })
      }
    }
  }
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif;
  text-align: left;
  margin: 0px;
  background-color: #d4d4d4;
}

body {
  margin: 0px;
}
</style>
