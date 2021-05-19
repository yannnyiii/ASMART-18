<template>
  <div class="login">
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <div class="back">
          <i class="iconfont myicon-cha" style="font-size: 20px" @click="back"></i>
        </div>
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
  name: "Login",
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
    back () {
      this.$parent.login_back();
    }
  }
};
</script>
 
<style scoped>

.back {
  margin-left: 340px;
  text-decoration: none;
  cursor: pointer;
}
.login-form-layout {
  left: 0;
  right: 0;
  width: 400px;
  margin: 100px auto;
  z-index: 2000;
  background:hsla(0,0%,100%,1);
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
