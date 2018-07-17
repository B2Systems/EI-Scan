<template>
  <div id="app">
    <el-container>
      <el-main><router-view/></el-main>
      <el-footer id="footer">
        <el-row>
          <el-col :span="8"><h3>Scan</h3></el-col>
          <el-col :span="8"><h3>Location</h3></el-col>
          <el-col :span="8"><h3>Account</h3></el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
@import "@/sass/variables.scss";

body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#footer {
    position: fixed;
    width: 100%;
    bottom: 0px;
    background: $--color-primary;
    .el-row {
      .el-col {
        height: 100%;
      }
    }
}
</style>
