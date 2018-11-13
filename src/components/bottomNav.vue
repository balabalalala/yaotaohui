<template>
  <div class="bottomNav">
    <ul class="navList">
      <router-link tag="li" to="/home">
        <img src="@/assets/nav/Group 5 Copy 2.png" alt="">
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/colleges">
        <img src="@/assets/nav/Group 2 Copy 2.png" alt="">
        <p>院校</p>
      </router-link>
      <router-link tag="li" to="/mechanism">
         <img src="@/assets/nav/Group 3 Copy 2.png" alt="">
         <p>机构</p>
      </router-link>
      <router-link tag="li" to="/my">
        <img src="@/assets/nav/Group 4 Copy 2.png" alt="">
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="styl">
.bottomNav{
  position: fixed;
  left: 0;
  bottom:0;
  width:100%;
  height:49px;
  background: #fff;
  .navList{
    position: absolute;
    left:0;
    top:0;
    /* background-color: green; */
    width:100%;
    height: 100%;
    li{
      position: relative;
      width:25%;
      height: 100%;
      float: left;
      img{
        position: absolute;
        left:50% ;
        transform:translateX(-50%);
        top:5px;
        width:25px;
        height: 26px;
      }
      p{
        position: absolute;
        left:0;
        top:32px;
        width:100%;
        height: 17px;
        line-height:17px;
        text-align: center;
        font-size: 12px;
        color: #000000;
      }
    }
  }
}
</style>

