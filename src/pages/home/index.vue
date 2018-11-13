<template>
    <div class="home">
        <xp-header></xp-header>
        <xp-content></xp-content>
        <!-- <xp-nav></xp-nav> -->
    </div>
</template>
<script>
import xpHeader from './components/header'
// import xpNav from '@/components/nav'
import xpContent from './components/homeContent'
export default {
    name:'home',
    components:{
        xpHeader,
        xpContent,
        // xpNav,
    }
}
</script>
<style scoped lang='styl'>
    .home{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: -280px;
        background-color: #fff;
    }
</style>

