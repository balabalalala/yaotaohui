<template>
<div class="search-input">
    <div class="search-content">
        <router-link to='/homeSearch'>
            <img src="@/assets/home/search.png" alt="sorry" class="search">
        </router-link>
        <input type="text" class="input-word">
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .search-input{
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 52px;
         .search-content{
            position: absolute;
            left: 27px;
            top: -65px;
            width: 319px;
            height: 35px;
            z-index:2;
            border-radius: 8px;
            background: #FFFFFF;
            border: 1px solid #DADADA;
            .search{
                position: absolute;
                left: 22px;
                top: 8px;
            }
            .input-word{
                position: absolute;
                left: 50px;
                top: 7px;
                width: 96px;
                height: 22px;
                font-size: 16px;
                color: #888888;
            }
        }
    }
</style>
