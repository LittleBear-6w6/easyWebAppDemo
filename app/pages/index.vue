<template>
  <section class="container">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
        <span>ログイン</span>
      </div>
      <form>
        <div class="form-content">
          <span>ユーザID</span>
          <el-input placeholder="" v-model="formData.id" />
          <span>パスワード</span>
          <el-input placeholder="" v-model="formData.passwd" show-password />
        </div>
        <div class="text-right">
          <el-button type="primary" @click="submit">ログイン</el-button>
        </div>
      </form>
    </el-card>
  </section>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import Cookies from 'universal-cookie'
export default {
  asyncData({redirect, store}){
    if(store.getters['user']){
      redirect('/top')
    }
    return{
      formData: {
      id:'',
      passwd: ''
      }
    }
  },
  computed:{
    ...mapGetters(['user'])
  },
  methods:{
    async submit(){
      const cookies = new Cookies()
      try{
        await this.login({...this.formData})
        this.$notify({
          type:'success',
          title:'ログイン成功',
          message:`こんにちは、${this.formData.id}さん`,
          position:'bottom-right',
          duration: 2000
        })
        cookies.set('user', JSON.stringify(this.user))
        this.$router.push('/top')
      }catch(e){
        this.$notify.error({
          title:'ログイン失敗',
          message:'ユーザIDもしくはパスワードを確認してください',
          position:'bottom-right',
          duration: 2000
        })
      }
    },
  ...mapActions(['login'])
  }
}
</script>

<style scoped>
.form-content{
  margin:16px 0;
  width: 240px;
}
.el-input{
  margin-bottom: 20px;
}
</style>