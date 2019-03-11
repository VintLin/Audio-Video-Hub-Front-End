<template>
  <div>
    <el-row :style="{backgroundImage:`url(${img})`}" style="background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: 0;">
      <el-col :span="8" :offset="16">
        <login></login>
      </el-col> 
    </el-row>
    <essay></essay>
    <movie></movie>
  </div>
  
</template>

<script>
import login from "../components/login.vue"
import essay from "../components/model/essay_item.vue"
import movie from "../components/model/movie_item.vue"

export default {
  name: 'home',
  data () {
      return {
          img: require('../assets/login-background.png')
      }
  },
  components: {
    login,
    essay,
    movie,
  }
}
</script>

