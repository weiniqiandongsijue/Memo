<template>

  <div>
    <div class="icon">
        <lord-icon
            src="https://cdn.lordicon.com/clcopglh.json"
            trigger="loop"
            colors="primary:#000000,secondary:#f4f19c"
            style="width:50px;height:50px">
        </lord-icon>
    </div>
    <div class="wrapper">
        <span class="time">
        {{ dateFormat(date)}}
    </span>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyTime',
    data() {
        return {
            date:new Date()
        }
    },
    methods:{
        dateFormat(time) {
            var date=new Date(time);
            var year=date.getFullYear();
            /* 在日期格式中，月份是从0开始的，因此要加0
            * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
            * */
            var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
            var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
            var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
            var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
            var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
            // 拼接
            return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
        }
    },
    mounted() {
        //显示当前日期时间
        let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
        _this.date = new Date(); // 修改数据date
        }, 1000)
    },
    beforeDestroy() {
    if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        }
    }
}
</script>

<style>
    .wrapper{
        position: relative;
        padding: 0;
        margin: 0;
        float: right;
        right: 20px;
        top: 15px;
        color: rgb(175, 167, 167);
        font-size: 16px;
        transition: all 1s;
    }
    /* gif动画 */
    .icon{
        position: relative;
        float: left;
        left: 8px;
        top: 1px;
        padding: 0;
        margin: 0;
        opacity: 0.8;
        transition: all 0.75s;
    }
    .time{
        opacity: 1;
        transition: all 0.75s;
    }

</style>