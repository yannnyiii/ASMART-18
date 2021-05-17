<template>
  <div class="login">
    <div class="title">
      HELLO BOOK
    </div>
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <router-link to="/N" class="back">
          <i class="iconfont myicon-cha" style="font-size: 20px"></i>
        </router-link>
        <h2 class="login-title">
          <i class="el-icon-s-management"></i>
        登录</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
          >
            <span slot="prefix">
              <i class="iconfont myicon-wode"></i>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="请输入密码"
          >
            <span slot="prefix">
              <i class="iconfont myicon-mima1"></i>
            </span>
            <span slot="suffix" @click="showPwd" style="margin-right: 10px">
              <i class="iconfont myicon-ai-eye"></i>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="width: 100%; font-weight: bold; font-size: 14px"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
          >登录</el-button>
        </el-form-item>
        <div class="new_user">  
          <router-link to="/register" style="color: black">注册新用户</router-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(response => {
              this.loading = false;
              let code = response.data.code;
              if (code == 200) {
                this.$router.push({
                  path: "/success",
                  query: { data: response.data.data }
                });
              } else {
                this.$router.push({
                  path: "/error",
                  query: { message: response.data.message }
                });
              }
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          // eslint-disable-next-line no-console
          console.log("参数验证不合法！");
          return false;
        }
      });
    },
  }
};
</script>
 
<style scoped>

.login {
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}
.title {   
    font-family: S B;
    color: rgb(59, 59, 59);
    text-align: center;
    font-weight: bold;
    font-size: 100px;
    padding-top: 84px;
    letter-spacing: 9px;
}
.back {
  margin-left: 340px;
  text-decoration:none;
}
.login-form-layout {
  left: 0;
  right: 0;
  width: 400px;
  margin: 50px auto;
  background:hsla(0,0%,100%,.6);
}
.login-title {
  margin-top: 10px;
  margin-left: -10px;
  font-size: 25px;
}
.new_user {
  margin-bottom: 40px;
}

</style>
