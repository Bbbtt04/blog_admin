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
        <div class="title">LOGIN</div>
        <div class="content">
          <el-form-item class="username" prop="username">
            <el-input v-model="loginData.username" :prefix-icon="`User`"
                      placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item class="password" prop="password">
            <el-input
                v-model="loginData.password"
                :prefix-icon="`Lock`"
                placeholder="请输入密码"
                show-password
            ></el-input>
          </el-form-item>
          <el-button
              :loading="isloading" auto-insert-space class="loginBtn"
              @click='handleSubmit(FormRef)'>
            登录
          </el-button>
        </div>
      </el-form>
      <span class="ToRegister" @click="ToRegister">Or Register</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {rules} from './rules'
import {reactive, ref, Ref} from 'vue'
import {ElForm, ElMessage} from 'element-plus'
import {router} from '@/router'
import lStorage from "@/utils/cache";
import {useUserStore} from "@/store/modules/user";


const loginData = reactive({
  username: lStorage.getCache('username') || '',
  password: lStorage.getCache('password') || '',
})

//页面跳转
function ToRegister() {
  router.push('/register')
}

//login
const FormRef = ref(null)
let isloading: Ref<boolean> = ref(false)
const savaCache = () => {
  lStorage.setCache('username', loginData.username)
  lStorage.setCache('password', loginData.password)
}
const userStore = useUserStore();

function handleSubmit(forEl: InstanceType<typeof ElForm> | undefined) {
  forEl.validate((valid: any) => {
    if (valid) {
      handleLogin(valid)
    }
  })
}

async function handleLogin(payload) {
  isloading.value = true
  try {
    lStorage.clearCache()
    savaCache()
    const res = await userStore.handleLogin(loginData)
    if (res.success === true) {
      const {data, message} = res
      lStorage.setCache('token', data.token)
      ElMessage.success('登录成功')
      router.push('/')
    } else {
      ElMessage.error(res.message || '登录异常')
    }
  } finally {
    isloading.value = false
  }
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
        float: left;
        top: 20px;
        left: 30px;
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
        color: white;
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
