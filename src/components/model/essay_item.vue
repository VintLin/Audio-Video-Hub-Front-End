<template>
  <el-card class="essay-item card">
      <div class="item-title"><strong><a href="#">{{title}}</a></strong><small> {{author}}</small></div>
      <div>
        <el-row class="item-content">
          <el-col :span="6" :style="{backgroundImage:`url(${image_url})`}" class="item-image-cover"></el-col>
          <el-col :span="16">
            {{content}}
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row>
          <el-col :span="5">
            <el-button-group>
              <el-button type="primary" icon="el-icon-caret-top">{{thumb}}</el-button>
              <el-button type="primary" icon="el-icon-caret-bottom"></el-button>
            </el-button-group>
          </el-col>
          <el-col :span="7" :offset="12">
            <el-button type="text" icon="el-icon-edit" class="item-footer">评论</el-button>
            <el-button type="text" icon="el-icon-share" class="item-footer">分享</el-button>
            <el-button type="text" icon="el-icon-star-off" class="item-footer">收藏</el-button>
          </el-col> 
        </el-row>
      </div>
  </el-card>
  
</template>
<script>
export default {
  name:"essay_item",
  data() {
    return {
      title: "流浪地球啦啦啦啦啦啦",
      image_url: require('../../assets/login-background.png'),
      content: "相信大家面试都遇到过类似问题,因为源手动阀手动阀撒旦发射点发生·码解析网上很多,很多人考前突击一下,但是遇到喜欢问细节的面试官",
      author: "啊手动阀",
      thumb: 0,
      create_time: "2019.12.01 12:21"
    }
  }
}
</script>

