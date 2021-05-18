<template>
    <div class="首页">
        <div id="popLayer"></div>
        <div id="popBox"><Login/></div>
        <div class="navigation">
        <i class="el-icon-s-management" style="float:left; margin:15px;"></i>
         <el-dropdown size="small" style="float: left;">
            <el-button class="btn" size="medium" style="font-family: ">
                主页<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="width:80px;">
            <el-dropdown-item style="text-align:center;">主页</el-dropdown-item>
            <el-dropdown-item style="text-align:center;">登录</el-dropdown-item>
            <el-dropdown-item style="text-align:center;">注册</el-dropdown-item>
          
        </el-dropdown-menu>
        </el-dropdown>  
         <el-dropdown size="small" style="float: left;margin-left:0;">
            <el-button class="btn" size="medium">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="width:80px;">
            <el-dropdown-item style="text-align:center;">主页</el-dropdown-item>
            <el-dropdown-item style="text-align:center;">登录</el-dropdown-item>
            <el-dropdown-item style="text-align:center;">注册</el-dropdown-item>
          
        </el-dropdown-menu>
        </el-dropdown>  
            
           
            <el-button plain class="right btn" size="small" icon="iconfont myicon-wode" @click="login"> 登录</el-button>
            <el-button plain class="right btn" size="small" icon="iconfont myicon-zhuce"> 注册</el-button>
        
            <el-input placeholder="请输入内容" v-model="input1"  size="small"
                class="right" style="width:200px;margin-top:10px;margin-right:20px;">
               
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="title">
            HELLO BOOK
        </div>
        <div class="right main">
            <span style>书籍中自有命运</span><br>
            <span class="right">——米兰·昆德拉</span><br>
            <div style="height: 50px;"></div>
            <span>书籍是巨大的力量</span><br>
            <span class="right">——列宁</span><br>
            <div style="height: 50px;"></div>
            <span>和书籍生活,在一起，永远不会叹气</span><br>
            <span class="right">——罗曼·罗兰</span><br>
            <div style="height: 130px;"></div>
            <div class="right">
                <el-input type="text" placeholder="Your email..." style="width: 200px;" v-model="input2"/>
                <span>
                    <el-button class="btn" style="background-color: rgb(81, 143, 194); color: white;">Sign up with your email</el-button>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import Login from '@/components/Login.vue';

export default {
    data() {
        return {
            meal: '',
            input1: '',
            input2: ''
        }
    },
    methods: {
        getMeal() {
      
        },
        login () {

        },
        login () {
            var popBox = document.getElementById("popBox");
            var popLayer = document.getElementById("popLayer");
            popBox.style.display = "block";
            popLayer.style.display = "block";
            popBox.style.opacity = 0.8;
        },
        login_back () {
            var popBox = document.getElementById("popBox");
            var popLayer = document.getElementById("popLayer");
            popBox.style.display = "none";
            popLayer.style.display = "none";
        }
    },
    components: {
        Login
    }
}    
</script>

<style scoped>

.首页{
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
}

.navigation{
    background-color: #eee; 
    height: 52px; 
    position: fixed; 
    width: 100%;
}
.t{
    border: 1px solid black;
}
.group{
    display: inline;
}
.btn{
    padding: 8px 10px;
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
    margin-top: 84px;
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

#popLayer {
    display: none;
    background-color: #d4d4d4;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0.8;
    filter: alpha(opacity=80);
}

@keyframes fadeIn { /* 不用CSS动画实现,display会有影响 */
    0% { opacity: 0 }
    100% { opacity: 0.8 }
}
#popBox {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 11;
    animation-name: fadeIn;
    animation-duration: .6s;
}

</style>
