<template>
    <div class="confirm-sign">
        <small-header></small-header>
        <course-information></course-information>
        <course-price></course-price>
    </div>
</template>
<script>
import smallHeader from '@/components/smallHeader'
import courseInformation from './components/courseInformation'
import coursePrice from './components/coursePrice'
export default {
    name:'confirmSign',
    components:{
        smallHeader,
        courseInformation,
        coursePrice,
    }
}
</script>
<style scoped lang='styl'>
    .confirm-sign{
        /* margin-bottom: -200px; */
    }
</style>
