<template>
    <div class="sign-up">
        <small-header></small-header>
        <course-detail></course-detail>
        <course-intro></course-intro>
    </div>
</template>
<script>
import smallHeader from '@/components/smallHeader'
import courseDetail from './components/courseDetail'
import courseIntro from './components/courseIntro'
export default {
    name:'signUp',
    components:{
        smallHeader,
        courseDetail,
        courseIntro
    }
}
</script>
<style scoped lang='styl'>
    .sign-up{
        /* position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0; */
    }
</style>
