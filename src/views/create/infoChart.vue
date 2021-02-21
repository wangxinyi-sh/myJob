<template>
  <div class="infochart">
    <div style="border:1px solid red;margin-top:15px;">
      <el-steps :active="active" finish-status="success" :align-center='true'>
        <el-step title="步骤 1" description="导入数据"></el-step>
        <el-step title="步骤 2" description="筛选数据"></el-step>
        <el-step title="步骤 3" description="完成"></el-step>
      </el-steps>
    </div>
    <div style="border:1px solid green;">
      <div v-if="active === 0">
        上传您想要生成图表的数据 只能是exl格式 大小不能超过10M
        <div>下载模板</div>
        <div>
          el-upload
        </div>
      </div>
      <div v-if="active === 1">
        this is active1
      </div>
      <div v-if="active === 2">
        this is active2
      </div>
      <div v-if="active === 3">
        this is active3
      </div>
    </div>
    <div style="border:1px solid blue;padding:10px 20px 10px 20px;">
      <el-button v-if="!isOk" @click="next">下一步</el-button>
      <el-button v-if="isOk" @click="finish">完成</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        isOk:false,
      };
    },

    methods: {
      next() {
        console.log(this.active)
        if (this.active++ > 1){
          this.isOk = true
        }
      },
      finish() {
        console.log('thats ok!')
      },
    }
  }
</script>

<style scoped>
</style>
