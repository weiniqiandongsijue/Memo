<template>
  <div class="Main">
    <ul  class="Middle" v-show="TabList.length">
      <MyList
      v-for="item in TabList"
      :key="item.id"
      :item="item"
      />
    </ul>
    <!-- 通过TabList.length来控制ul的显示 -->
    <div v-show="!TabList.length" class="tips">
    <span>当前没有待办事项</span>
  </div>
  </div>
</template>

<script>
import MyList from './MyList'
export default {
    name:'MyLists',
    props:['TabList'],
    components:{MyList},
    methods:{
    },
    mounted(){
    }
  }
</script>

<style scoped>

  .Middle{
    padding: 0;
    margin: 5px 9px;
    height: 137px;
    /* border: 1px solid #5080ef; */
    border: 2px solid rgb(221, 210, 210);
    border-radius: 5px;
    overflow-y: auto;
  }

  .Middle::-webkit-scrollbar {
	display: none;
}
  .tips{
    margin-top:90px;
    text-align: center;
    color: rgb(221, 210, 210);
    font-size: 18px;
    transition: all 0.75s;
  }

</style>