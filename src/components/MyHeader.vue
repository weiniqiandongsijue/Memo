<template>
  <div class="Header">
    <input 
    id="header_input" 
    type="text"  
    placeholder="请输入待办事项,回车键确认"
    maxlength="30"
    v-model="Text"
    @keyup.enter="Addthing">
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  name:'MyHeader',
  data() {
    return {
      Text:''
    }
  },
  methods:{
    Addthing(){
      // string.trim()  去除两端空白部分
      if(!this.Text.trim()){
        this.$message({
          message: '输入不能为空',
          type: 'error',
          duration:1000
          });
      }else{
        //封装一个TodoObj对象
        const TodoObj = {id:nanoid(),value:this.Text,change:false}
        //通过全局事件总线将TodoObj传给App
        this.$bus.$emit('Add',TodoObj)
        this.Text =''
      }
    }
  }
}
</script>

<style scoped>
  .Header{
    border-radius: 5px;
    padding: 0;
  }
  /* 修改input框里面placeholder的字体颜色 */
  input::-webkit-input-placeholder{
        text-align: center;
        color: rgb(221, 210, 210);
  }
  #header_input:focus{
    outline: 0; 
    border: 2px solid #5080ef;
  }
</style>