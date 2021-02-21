<template>
  <div class="header">
     <el-header>
       <el-menu :default-active="activeIndex" class="el-menu-demo"
       mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to="/">
            首页
          </router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title"><span>例子</span></template>
          <el-menu-item index="2-1">
            <router-link to="/demo/infoChart">
              信息图表
            </router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/demo/infoPaper">
              信息报
            </router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/demo/map">
              地图
            </router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template class="font" slot="title"><span>创建</span></template>
          <el-menu-item index="3-1">
            <router-link to="/create/infoChart">
              信息图表
            </router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/create/infoPaper">
              信息报
            </router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/create/map">
              地图
            </router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
          <router-link to="/Help">
            教程
          </router-link>
        </el-menu-item>
      </el-menu>
     </el-header>
  </div>
</template>
<style scoped>
  .header{
    min-width: 500px;
  }
  .font {
    font-size: 20px;
  }
 .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  a {
    font-size: 20px;
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  span {
    font-size: 20px;
  }
</style>
