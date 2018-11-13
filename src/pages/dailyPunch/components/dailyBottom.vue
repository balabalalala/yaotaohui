<template>
    <div class="daily-bottom">
        <span class="say">发表感言</span>
        <input type="text" class="write">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .daily-bottom{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60px;
        background: #fff;
        z-index: 5;
        font-size: 20px;
        .say{
            position: absolute;
            left: 28px;
            top: 20px;
            font-size: 16px;
            color: #8A8A8A;
        }
        .write{
            position: absolute;
            left: 105px;
            top: 10px;
            width: 226px;
            height: 35px;
            text-indent:0.5em;
            background: #FFFFFF;
            border: 1px solid #DADADA;
            border-radius: 8px;
        }
    }
</style>
