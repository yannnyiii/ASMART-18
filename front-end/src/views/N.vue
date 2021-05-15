<template>
<html>
    <body>
        <div style="background-color: #eee; height:52px;">
        <i class="el-icon-s-management" style="float:left; margin:15px;"></i>
         <el-dropdown size="small" style="float: left;">
            <el-button class="btn" size="small">
                主页<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="width:80px;">
            <el-dropdown-item style="text-align:center;">主页</el-dropdown-item>
            <el-dropdown-item style="text-align:center;">登录</el-dropdown-item>
            <el-dropdown-item style="text-align:center;">注册</el-dropdown-item>
          
        </el-dropdown-menu>
        </el-dropdown>  
         <el-dropdown size="small" style="float: left;margin-left:0;">
            <el-button class="btn" size="small">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="width:80px;">
            <el-dropdown-item style="text-align:center;">主页</el-dropdown-item>
            <el-dropdown-item style="text-align:center;">登录</el-dropdown-item>
            <el-dropdown-item style="text-align:center;">注册</el-dropdown-item>
          
        </el-dropdown-menu>
        </el-dropdown>  
            
           
  
  
            <el-button plain class="right btn" size="small">登录</el-button>
            <el-button plain class="border right btn" size="small">注册</el-button>
        
            <el-input placeholder="请输入内容" v-model="input3"  size="small"
                class="right" style="width:200px;margin-top:9px;margin-right:20px;">
               
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            
          
        </div>





    </body>
</html>
</template>
<script>
export default {
    data() {
        return {
            meal: ''
        }
    },
  methods: {
    getMeal() {
      
    }
  }
}    
</script>
<style scoped>

*{
    margin: 0;
    padding: 0;
}

.t{
    border: 1px solid black;
}
.group{
   
    display: inline;
}
.btn{
  padding: 8px 15px;
 
  vertical-align: center;
  margin: 10px;
    border: 1px solid #eee;
    background-color: #eee;

}
.btn:hover{
     border: 1px solid black;
    background-color: #eee;
    color: black;
}
.border{
    border: 1px solid black;
}
body,html{
    
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 1000px;
}

hr{
    margin-top: 0;
	height: 1px;
	background-color: #4e4e4e;
}
.right{
    float: right;
}

.title{   
    font-family: S B;
    color: rgb(59, 59, 59);
    text-align: center;
    font-weight: bold;
    font-size: 100px;
    margin-top: 30px;
    letter-spacing: 9px;
}
.main{
    
    width: 35%;
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-right: 30px;

    
}

  .el-dropdown {
    vertical-align: center;
    height: 50px;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>