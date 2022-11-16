<template>
  <div class="pdf-box">
    <button v-if="!pdf" @click="getPdf">获取pdf</button>
    <!-- 不兼容移动端 -->
    <!-- <embed :src='pdf' width="100%" height="100%" type='application/pdf'/> -->
    <!-- 兼容移动PC,只是预览 -->
    <Pdf v-for="index in numPages" :key="index" :src="pdf" :page="index"></Pdf>
  </div>
</template>

<script>
import axios from 'axios';
import Pdf from 'vue3-pdf'//vue3用这个, vue2用vue-pdf,不然报错
export default {
  name: 'App',
  components: {
    Pdf
  },
  data(){
    return{
      pdf:'',
      numPages:null,
      loaded: false,
    }
  },
  created () {
  },
  methods:{
    getPdf(){
      let that = this;
        axios.request({
          method: 'GET',
          url: 'http://192.168.124.3:8082/api/getPdf',
          responseType:'blob'//asiox加上这句,不然都是空白页
        }).then(function(response){
          console.log(response);
          let blob = new Blob([response.data],{type:'application/pdf;chartset=utf-8'});
          that.pdf = window.URL.createObjectURL(blob);
          console.log(blob);
          that.loadPdf()
        }).catch(function(err){
          console.log(err);
        })
      // console.log(this.pdf);
    },
    loadPdf () {
      this.pdf = Pdf.createLoadingTask(this.pdf)
      console.log(this.pdf);
      this.pdf.promise.then(pdf => {
        this.$nextTick(() => {
          this.numPages = pdf.numPages // pdf总页数
          console.log(this.numPages);
          this.loaded = true
        })
      })
    }
  }
}
</script>

<style>
.pdf-box{
  width: 100vw;
  height: 100vh;
}
</style>
