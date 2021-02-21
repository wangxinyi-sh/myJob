<template>
 <div class="homePage">
    <Carousel />
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>信息图表</span>
      </div>
      <div>
        <p>导入数据，选择想要的图表，你将会获得一张静态的图片。
          图片里包含了你所选择的图标样式，同样你可以通过编辑让它更美观。
          信息图表适用于插入在PPT,Word等用来演示的地方。
        </p>
        <p>想要了解更多，你可以查看例子或教程。</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>信息报</span>
      </div>
      <div>
        <p>这是信息报的具体介绍</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>地图</span>
      </div>
      <div>
        这是地图的具体介绍
      </div>
    </el-card>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
  }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 50px;
  }
  p {
    text-align: left;
    line-height: 30px;
  }
</style>

