<template>
  <div class="footer" v-show="Alltodo">
    <label>
      <input class="checkbox-footer" :checked="changeAlltodo" type="checkbox" @change="CheckAll">
    </label>
    <span class="Donetips">
      <span id="Donespan">已完成 {{DoneTodo}} 项 </span> / 全部 {{Alltodo}} 项
    </span>
    <button id="btn" @click="CleanAlltodo" ref="footerbtn">
        <lord-icon
            src="https://cdn.lordicon.com/jmkrnisz.json"
            trigger="click"
            colors="primary:#ffffff"
            state="intro-empty"
            style="width:120px;height:35px;"
            class="del">
        </lord-icon>
    </button>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:['TabList'],
  data() {
    return {
    }
  },
  methods: {

    CheckAll(e){
      this.$bus.$emit('CheckAll',e.target.checked)
    },
    //删除所有已完成的待办事项
    CleanAlltodo(){
      if(this.DoneTodo == 0){
        this.$message({
          message: '当前无完成待办事项',
          type: 'warning',
          duration:1000
          });
      }else{
        this.$bus.$emit('Clean')
      }

    }
  },
  mounted(){

  },

  computed:{

    //总共有多少个待办事项
    Alltodo(){
      return this.TabList.length
    },

    //已经完成了多少个待办事项
    DoneTodo(){
      //使用Array.reduce()函数,数组中的每个值从左到右开始计算，最终计算为一个值
      //pre 为初始值过着计算后的返回值，item 为当前元素
      return this.TabList.reduce((pre,item)=> pre + (item.change ? 1:0 ),0)
    },

    //changeAlltodo计算属性与checkbox绑定
    //当已完成待办事项与全部待办事项相等时且待办事项>0,checkbox将被选中
    changeAlltodo(){
      return this.DoneTodo === this.Alltodo && this.Alltodo > 0
    }
  }
}
</script>

<style scoped>
  .footer{
    height: 70px;
    padding: 0;
    margin: 20px 0 0 0;
  }
  label {
    display: inline-block;
    margin-right: 20px;
    margin-top: 1px;
  }
  .checkbox1{
    cursor: pointer;
  }
  
  input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    margin-left: 5px;
    opacity: 0;
    transition: all 1s;
  }

  span{
    padding: 0;
    margin: 0;
    /* font-size: 14px; */
  }

  .del{
    position: relative;
    right: 5px;
    top: 1px;
  }

  /* img{
    position: relative;
    top: 1px;
    width: 30px;
    height: 35px;
    opacity: 1;
    transition: all 0.5s;
  } */

  /* span标签 */
  .Donetips {
    margin: 0;
    padding: 0;
    color: rgb(221, 210, 210);
    font-size: 15px;
    transition: all 1s;
  }
  #Donespan {
    color: rgb(221, 210, 210);
    font-size: 15px;
    transition: all 1s;
  }
</style>