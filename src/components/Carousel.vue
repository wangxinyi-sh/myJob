<template><!--这是首页的lunbotu-->
  <div class="block">
    <el-carousel height="280px">
      <el-carousel-item v-for="item in items" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 280px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
<script>
export default {
  data() {
    return {
      items: ['信息图表', '信息报', '地图'],
    };
  },
};
</script>
