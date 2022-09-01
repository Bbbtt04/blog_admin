<template>
  <div class="index">
    <div class="index-card">
      <el-form
          ref="FormRef"
          :loading="isloading"
          :model="loginData"
          :rules="rules"
          label-position="left"
          label-width="4vw"
          size="large"
      >
        <div class="title">REGISTER</div>
        <div class="content">
          <el-form-item class="username" prop="username">
            <el-input v-model="loginData.username" :prefix-icon="`User`" placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item class="password" prop="password">
            <el-input
                v-model="loginData.password"
                :prefix-icon="`Lock`"
                placeholder="请输入密码"
                show-password
            ></el-input>
          </el-form-item>
          <el-form-item class="password" prop="confirmPwd">
            <el-input
                v-model="loginData.confirmPwd"
                :prefix-icon="`Lock`"
                placeholder="请输入密码"
                show-password
            ></el-input>
          </el-form-item>
          <el-button :loading="isloading" class="loginBtn" type="primary"
                     @click='handleLogin(FormRef)'>
            注册
          </el-button>
        </div>
      </el-form>
      <span class="ToRegister" @click="ToLogin">Or Login</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, Ref} from 'vue'
import {ElForm, ElMessage} from 'element-plus'
import {useUserStore} from "@/store/modules/user";
import {router} from "@/router";


const loginData = ref({
  username: '',
  password: '',
  confirmPwd: ''
})
//验证信息
const rules = {
  username: {required: true, message: '请输入用户名', trigger: 'blur'},
  password: {required: true, message: '请输入密码'},
  confirmPwd: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['input', 'blur']
    },
    {
      validator: validatePasswordStartWith,
      message: '两次密码输入不一致',
      trigger: 'input'
    },
    {
      validator: validatePasswordSame,
      message: '两次密码输入不一致',
      trigger: ['blur', 'password-input']
    }
  ],
};

function validatePasswordStartWith(rule, value) {
  return (
      loginData.value.password &&
      loginData.value.password.startsWith(value) &&
      loginData.value.password.length >= value.length
  )
}

function validatePasswordSame(rule, value) {
  return value === loginData.value.password
}

//登录逻辑
const FormRef = ref(null)
let isloading: Ref<boolean> = ref(false)
const userStore = useUserStore()

async function handleLogin(forEl: InstanceType<typeof ElForm> | undefined) {
  forEl.validate((valid: any) => {
    if (valid) {
      handleRegister();
    }
  })
}

async function handleRegister() {
  isloading.value = true
  let data = await userStore.handleRisgter(loginData.value)
  if (data?.status === 0) {
    ElMessage.success("注册成功,快去登录吧")
    router.push('/login')
  }
  isloading.value = false
}

//页面跳转
async function ToLogin() {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  background-color: $loginBg;
  display: flex;
  justify-content: center;
  align-items: center;

  &-card {
    display: flex;
    width: 40vw;
    height: 40vh;
    background-color: $loginCardBg;
    position: relative;

    .el-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .content {
        width: 20vw;
        height: 20vh;
        margin: 5vw 8vw;
      }

      .title {
        width: 100%;
        left: 30px;
        top: 25px;
        float: left;
        line-height: 46px;
        font-size: 34px;
        font-weight: 700;
        letter-spacing: 2px;
        color: #1f2d3d;
        position: relative;

        &:before {
          content: "";
          width: 5px;
          height: 100%;
          position: absolute;
          top: 0;
          left: -50px;
          background: #1f2d3d;
        }
      }

      .loginBtn {
        width: 10vw;
        margin-left: 6vw;
        background-color: #1f2d3d;
      }
    }
  }

  .ToRegister {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    font-size: 1rem;
    font-family: "microsoft yahei";
  }
}
</style>
