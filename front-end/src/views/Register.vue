<template>
  <div class="register">
    <router-link to="/homepage">
      <el-button style="margin-top: 100px">返回</el-button>
    </router-link>
    <el-button @click="test">test</el-button>
    <p>{{ i }}</p>
    <el-button @click="test2">test2</el-button>
    <p>{{ mes }}</p>
  </div> 
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data () {
    return {
      i: '',
      mes: ''
    }
  },
  methods: {
    test () {
      axios.get('http://localhost:3000/test')
        .then((res) => {
          this.i = res.data
        })
    },
    test2 () {
      axios.post('http://localhost:3000/admin/login',{
        username: 'admin',
        password: '123456'
      }).then((res) => {
        let code = res.data.code;
        if (code == 200) {
          this.mes = 'omo'
        }
        else {
          this.mes = 'Wrong'
        }
      })
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
    0% { opacity: 0.5 }
    100% { opacity: 1 }
}
.register {
  background-image: url("../assets/register-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  animation-name: fadeIn;
  animation-duration: .6s;
}
</style>
