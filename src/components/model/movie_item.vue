<template>
  <el-card shadow="hover" class="small-card">
    <div class="item-movie-content" :style="{backgroundImage:`url(${image_url})`}">
      <div class="item-movie-box">
        <transition name="el-zoom-in-top" >
          <div v-show="show" class="item-movie-background transition-box">
            <el-row>
              <el-col :span="6">
              电影: <br/>
              导演: <br/>
              类型: <br/>
              地区: <br/>
              语言: <br/>
              时长: <br/>
              </el-col>
              <el-col :span="18" style="text-align: center">
              {{title}}<br/>
              {{author}}<br/>
              {{type}}<br/>
              {{area}}<br/>
              {{language}}<br/>
              {{long}}<br/>
              </el-col>
            </el-row>
          </div>  
        </transition>
      </div>
      <div class="item-movie-footer">
        <el-button type="text" @click="show = !show" style="padding: 0px;">
          <el-rate
            v-model="score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-button>
      </div>  
    </div>
    <div class="item-movie-title">
      {{title}}
    </div>
  </el-card>
</template>
<script>
export default {
  name:"movie_item",
  data() {
    return {
      title: "life is bed",
      image_url: require('../../assets/login-background.png'),
      author: "voter",
      type: "love",
      area: "china",
      language: "zh",
      long: "100",
      score: 3.1,
      show: false
    }
  }
}
</script>