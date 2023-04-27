<template>
  <div>
        <li>
          <label>
            <!-- :checked 将TabList的chenge绑定到与input框绑定 -->
            <input type="checkbox" class="checkbox-list" :checked="item.change" @change="checkTodo">
              <span class="list-span">
                  {{item.value}}
              </span>
          </label>
          <button class="Mid_btn" @click="delTodo">删除</button>
        </li>
  </div>
</template>

<script>
export default {
  name:'MyLists',
  props:['item'],
  data() {
    return {
    }
  },
  methods:{
    //checkbox选取或取消待办事项
    checkTodo(){
      this.$bus.$emit('check',this.item.id)
    },
    //删除待办事项
    delTodo(){
      this.isView = !this.isView
      this.$bus.$emit('Del',this.item.id)
    },
  },
  mounted() {
    },
}
</script>

<style scoped>

  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    list-style: none;
    padding: 0;
    padding: 0 5px;
    margin: 5px 3px;
    overflow: hidden;
    text-overflow:ellipsis;
    /* 禁止换行显示 */
    white-space:nowrap;
    border: 2px solid rgb(221, 210, 210);
    border-radius: 5px;
    transition: all 1s;
  }
  /* li::before{
      content: initial;
  } */
  li label {
    float: left;
    cursor: pointer;
  }
  label input{
      margin-right: 6px;
      /* margin: 0; */
      position: relative;
      right:20px;
      vertical-align: middle;
      top: -1px;
      opacity: 0;
      transition: all 1s;
  }
  .Mid_btn{
      height: 0;
      width: 0;
      float: right;
      margin-top: 5px;
      margin-right: 5px;
      padding: 0;
      border-radius: 8px;
      cursor: pointer;
      background-color: #5080ef;
      color: #fff;
      border: 1px solid #718acb;
      transition: all 1s;
      opacity: 0;
  }
  ul :hover .Mid_btn {
        height: 25px;
        width: 50px;
        opacity: 1;
  }
  /* 改变span里面的字体颜色 */
  .list-span{
    position: relative;
    left: -25px;
    margin: 0;
    padding: 0;
    color: rgb(221, 210, 210);
    font-size: 14px;
    transition: all 1s;
  }
</style>