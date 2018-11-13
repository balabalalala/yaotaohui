<template>
    <div class="header">
        <div class="header-container">
            <div class="search-content">
                <router-link to='/homeSearch'>
                    <img src="@/assets/home/search.png" alt="sorry" class="search">
                </router-link>
                <input type="text" placeholder="中央美术学院" class="input-word">
            </div>
        </div>
        <img src="@/assets/home/peple.png" alt="sorry" class="peple">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 143px;
        background-color:  #FDD003;
        z-index:2;
        .header-container{
            width: 100%;
            height: 100%;
            .search-content{
                position: absolute;
                left: 17px;
                top: 12px;
                width: 342px;
                height: 35px;
                border-radius: 8px;
                background: #FFFFFF;
                .search{
                    position: absolute;
                    left: 12px;
                    top: 8px;
                }
                .input-word{
                    position: absolute;
                    left: 40px;
                    top: 7px;
                    width: 96px;
                    height: 22px;
                    font-size: 16px;
                    color: #888888;
                }
            }
        }
        .peple{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 74px;
            margin: 0 auto;
        }
    }
</style>


