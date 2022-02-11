<template>
  <div class="login-container">
      <div class="login-box">
          <div class="login-adminIcon">
              <img src="../assets/logo.png">
          </div>
        <el-form ref="form"  label-width="0px" class="login-form">
            
  <el-form-item >
    <el-input 
    prefix-icon="el-icon-setting" 
    v-model="form.username"
    ></el-input>
  </el-form-item>
    <el-form-item>
    <el-input
     prefix-icon="el-icon-setting"
      v-model="form.password"
      type="password"
      ></el-input>
    </el-form-item>
      <el-form-item class='btns'>
        <el-button type="primary" @click="login" >登陆</el-button>
        <el-button type="info" @click="toZero" >重置</el-button>
    </el-form-item>
        </el-form>
      </div>    
      </div>
</template>

<script>
export default {
    created(){
        console.log(this.$message)
    },
    data(){
        return{
            form:{
                username:"admin",
                password:"123456",
            }
        }
    },
    methods:{
        toZero(){
            this.form.username=''
            this.form.password=''
        },
        login(){
        
         this.$http.post('login', this.form).then(response=>{
             const res=response.data
              if (res.meta.status !== 200) {
          return this.$message.error('登录失败:' + res.meta.msg) //console.log("登录失败:"+res.meta.msg)
        }

        this.$message.success('登录成功')
        console.log(res)
        //保存token
        window.sessionStorage.setItem('token', res.data.token)
        // 导航至/home
        this.$router.push('/home')

         })
      
        
          
       

        }
    }


}
</script>

<style lang="less" scoped>
.login-container{
    background-color:aquamarine;
    height: 100%;
}
.login-box{
    width:450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    .login-adminIcon{
        border: 1px solid #eee;
        padding: 10px;
        border-radius: 50%;
        height: 130px;
        width: 130px;
        box-shadow:0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
        img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
            background-color: #eee;
        }
    }
}
.btns{
    display: flex;
    justify-content: flex-end;
}
.login-form{
    position:absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>