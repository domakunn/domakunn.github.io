<template>
    <div class="CenterCanvas-wrapper">
        <img src="../assets/body.PNG">
        
        <img v-for="i in imageManager.imageList.value" :src="i.image">
    </div>
</template>


<script lang="ts" setup>

import {inject} from "vue";

const imageManager = inject('imageManager')

</script>
<style lang="scss">
.CenterCanvas-wrapper {
    width: 60%;
    height: 100%;
    background: #fff4f5;
    border-radius: 10px;
    margin: 0 10px;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>
