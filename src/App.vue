<template>
  <div id="app" class="container">
    <div class="main-icon">
      <lord-icon
          src="https://cdn.lordicon.com/rzdoyang.json"
          trigger="loop"
          colors="primary:#121331,secondary:#2ca58d,tertiary:#ffc738,quaternary:#b26836"
          style="width:75px;height:75px">
      </lord-icon>
    </div>
    <h1>备忘录</h1>
    <MyHeader></MyHeader>
    <MyLists :TabList="TabList"></MyLists>
    <MyFooter :TabList="TabList"></MyFooter>
    <MyTime></MyTime>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader';
  import MyLists from './components/MyLists';
  import MyFooter from './components/MyFooter';
  import MyTime from './components/MyTime';
export default {
  components: {MyHeader,MyLists,MyFooter,MyTime},
  name: 'App',
  data() {
    return {
      TabList: JSON.parse(localStorage.getItem('TabList')) || []
    }
  },
  methods: {

        //添加一个待办事项
        Addtodo(data){
          this.$message({
          message: '添加成功',
          type: 'success'
          });
          //将data移到TabList最前面(unshift)  最后面 (push)
          this.TabList.unshift(data)
        },

        //checkbox勾选或取消待办事项
        CheckTodo(id){
          this.TabList.forEach((item) =>{
            //循环TabList中的每一个对象,将id与传过来的id作比较,相同的则进行下一步
          if(id === item.id){
            item.change = !item.change
              }
          })
        },

        //删除对应id的待办事项
        DelTodo(id){
          this.$message({
          message: '删除成功',
          type: 'success'
          });
          this.TabList = this.TabList.filter(item => {
            return item.id != id
          })
        },

        //选择或者取消所有待办事项
        changeAll(data){
          this.TabList.forEach(item =>{
              item.change = data
          })
        },
        //删除所有已完成的待办事项
        cleanAlltodo(){
          this.$message({
          message: '删除成功',
          type: 'success'
          });
          this.TabList = this.TabList.filter(item =>{
              return !item.change
          })
        }
      },
  
  mounted() {
        this.$bus.$on('Add',this.Addtodo)

        this.$bus.$on('check',this.CheckTodo)

        this.$bus.$on('Del',this.DelTodo)

        this.$bus.$on('CheckAll',this.changeAll)

        this.$bus.$on('Clean',this.cleanAlltodo)
      },
  beforeDestroy(){
          this.$bus.$off('Add')
          this.$bus.$off('check')
          this.$bus.$off('Del')
          this.$bus.$off('Clean')
      },
  watch:{
    TabList:{
      deep:true,
      handler(value){
        localStorage.setItem('TabList',JSON.stringify(value))
      }
    }
  }
}
</script>

<style>

  h1{
    position: relative;
    padding: 0;
    margin: 0;
    left:80px;
    font-size:20px;
    color: rgb(152, 207, 255);
    letter-spacing: 2px;
    transition: all 1s;
    cursor:none;
  }

  .container:hover h1{
    font-size:40px;
    color: #5080ef;
    left: 415px;
  }

  .container{
    position: absolute;
    width:240px;
    /* height: 300px; */
    height: 350px;
    margin: 200px 400px;
    padding: 0;
    border: 2px solid rgb(221, 210, 210);
    border-radius: 15px;
    transition: all 1s;
  }

  .container:hover{
    width: 600px;
  }

  .main-icon{
    position: relative;
    width: 0;
    height: 0;
    bottom: 4px;
    right: 20px;
    opacity: 0;
    transition: all 1.5s;
  }
  .container:hover .main-icon{
    width: 2px;
    height: 2px;
    right: 0;
    opacity: 1;
    transform: translateX(100%);
  }
  /* header区域input框 */
  #header_input{
    width: 220px;
    /* width: 580px; */
    /* height: 35px; */
    height: 20px;
    margin: 5px 8px;
    padding:0;
    border: 2px solid rgb(221, 210, 210);
    font-size: 14px;
    color: rgb(157, 148, 148);
    border-radius: 5px;
    transition: all 1s;
    /* transition-property: width,height,border;
    transition-duration: 0.75s; */
    /* transition: width 1s; */
  }

  .container:hover #header_input{
    width: 580px;
    height: 40px;
    font-size: 18px;
  }
/* footer按钮区域 */
  #btn{
    /* content: none; */
    position: relative;
    top: 8px;
    padding: 0;
    width: 0;
    height: 0;
    margin: 8px 0 0 10px;
    background-color: #5080ef;
    color: #fff;
    border: 1px solid #718acb;
    border-radius: 20px;
    cursor: pointer;
    transition: all 1s;
    overflow: hidden;
    /* 透明度 */
    opacity: 0;
  }
  /* MyFooter按钮浮动 */
  .container:hover #btn{
    width: 110px;
    height: 40px;
    margin-bottom: 20px;
    margin-left: 170px;
    opacity: 1;
  }

  /* Myfooter勾选框浮动 */
  .container :hover .checkbox-footer{
    margin-left: 20px;
    opacity: 1;
  }

    /* MyFooter待办事项总计显示 */
    .container:hover .Donetips{
    color: #5080ef;
    font-size: 18px;
  }
  .container:hover #Donespan{
    color: #5080ef;
    font-size: 18px;
  }

  /* MyList勾选框浮动 */
  .container :hover ul .checkbox-list{
    right: 0;
    opacity: 1;
  }
  /* list字体颜色变化  */
  .container:hover .list-span{
    left: 0;
    font-size: 18px;
    color: #7295e5;
  }
  /* Mylists li边框 */
  .container:hover li{
    border: 2px solid #96aee7;
  }
  /* MyLists div中的span标签控制 */
  .container:hover .tips{
    color: #5080ef;
    font-size: 25px;
  }
  /* MyTime组件时间显示 */
  .container:hover .time{
    opacity: 0;
  }
  /* MyTime组件gif显示 */
  .container:hover .icon{
    opacity: 0;
  }

</style>
