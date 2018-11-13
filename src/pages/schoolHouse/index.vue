<template>
    <div class="school-house">
        <small-header></small-header>
        <xp-scroll class="container">
            <school-content></school-content>
        </xp-scroll>
    </div>
</template>
<script>
import smallHeader from '@/components/smallHeader'
import xpScroll from '@/components/scroll'
import schoolContent from './components/schoolContent'
export default {
    name:'school',
    components:{
        smallHeader,
        schoolContent,
        xpScroll,
    }
}
</script>
<style scoped lang='styl'>
    .school-house{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0px;
        .container{
            /* position: absolute;
            left: 0;
            top: 5px;
            width: 100%; */
            height: 100px;
        }
    }
</style>
