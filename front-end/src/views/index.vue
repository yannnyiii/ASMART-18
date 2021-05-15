<template>
    <body>
    <div style="background-color: #eee; height:52px;">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-button size="small">个人中心</el-button>
        <el-button size="small">购物车</el-button>


        <el-button size="small" class="exit">退出登录</el-button>


    </div>
    <div class="main">

        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
       <div class="main-left">
           <div style="height:100px;" class="card">图书分类</div>
                    <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="小说" name="1" style="background-color: #eee;">
                <br>
                <div>历史小说</div>
                <div>武侠小说</div>
            </el-collapse-item>
             <hr>
            <el-collapse-item title="教育" name="2">
                
            </el-collapse-item>
              <hr>
            <el-collapse-item title="历史" name="3">
                
            </el-collapse-item>
              <hr>
            <el-collapse-item title="流行" name="4">
                
            </el-collapse-item>
             <hr>
            </el-collapse>


       </div>
       <div class="main-right">
           <el-row :gutter="20">
               <el-col :span="6"><p class="t">
                   <el-card class="box-card">


                   </el-card>
                   
                   </p></el-col>
               <el-col :span="6"><p class="t"></p></el-col>
               <el-col :span="6"><p class="t"></p></el-col>
               <el-col :span="6"><p class="t"></p></el-col>
             

           </el-row>
            
           
       </div>
    </div>
    </body>
</template>
<style >
 
.card{
    font-size: 20px;
    padding: 8px 15px;
    line-height:100px;
}
.t{
    border: 1px solid black;
    height: 20px;
   
}
.el-collapse-item__header,.el-collapse-item__content  {
    background-color: #eee;
}
.el-collapse-item__header{
    margin-left: 50px;
}
.main-left{
    float: left;
    width: 15%;
    height: 500px;
   
}
.main-right{
     float: right;
    width: 80%;
    height: 500px;
    border: 1px solid;
}
.el-avatar{
    float: left;
    margin: 5px;
}
.el-tabs__header.is-left {
    width: 200px;
}
.el-tabs--left .el-tabs__item.is-left {
    text-align: center;
   
}
.el-button{
     float: left;
    margin-top: 10px;
    background: #eee;
    border: 1px solid #eee;
    margin-left: 15px;
    
}
.el-button:hover{
    background: #eee;
    color: black;
}
.exit{
    float: right;
    margin-right: 15px;
    border: 1px solid red;
}
.exit:hover{
    color: red;
}
.main{
    width: 90%;
    height: 1000px;
    margin-left: 5%;
    background: #eee;
}
body{
    margin: 0;
    padding: 0;
}
.el-carousel{
   height: 400px;

}
.el-carousel__item{
   height: 400px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 1;
    line-height: 300px;
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
        tabPosition: 'left'
      };
    }
  };
</script>
