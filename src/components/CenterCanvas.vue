<template>
    <div :style="style" id="Canvas" class="CenterCanvas-wrapper">
        <div class="main-person">
            <img src="../assets/body.PNG">
            <img v-for="i in imageManager.imageList.value" :src="i.image">
        </div>
        
        
        <div class="sticker-container">
            <img src="@/assets/sticker_baqiao.png">
            <img src="@/assets/sticker_dabanshao.png">
            <img src="@/assets/sticker_pasta.png">
        </div>
    </div>
</template>


<script lang="ts" setup>

import {inject, onMounted, reactive, ref} from "vue";

const imageManager = inject('imageManager')

const style = reactive({})
const isMobile = ref(false)

onMounted(() => {
    if (window.screen.width < 500) {
        const $Canvas = document.getElementById('Canvas')
        const {width, height} = document.querySelector('body').getBoundingClientRect()
        const w = (width - 160)
        Object.assign(style, {
            width: w + 'px',
            height: (w * 3 / 2) + 'px',
            borderWidth: '20px 30px 60px 20px'
        })
    } else {
        Object.assign(style, {
            width: '400px',
            height: '600px',
            borderWidth: '40px 40px 120px 40px'
            
        })
    }
    console.log(style)
})

</script>
<style lang="scss">
.CenterCanvas-wrapper {
    width: 400px;
    height: 600px;
    background: #e4f6ff;
    border-radius: 10px;
    margin: 0 50px;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    border-color: white;
    border-style: solid;
    
    box-shadow: 0 0 10px 1px #dc6565;
    
    .main-person img {
        transform: scale(1.1);
    }
    
    img {
        
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 0;
        top: 0;
    }
    
    .sticker-container {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        position: absolute;
        margin-top: 150%;
        
        img {
            position: relative;
            width: 30%;
            height: 30%;
        }
    }
}
</style>
