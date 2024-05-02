<template>
    <div class="LeftList-wrapper">
        <span class="title">已添加</span>
        <div class="hover item-container" v-for="item in imageManager.imageList.value">
           
           <span>
                {{ item.name }}
           </span>
            
            <span @click="imageManager.toggleImage(item)" class="remove">
                x
            </span>
        </div>
    </div>
</template>


<script lang="ts" setup>
import {inject} from "vue";

const imageManager = inject('imageManager')

</script>

<style lang="scss">
.LeftList-wrapper {
    width: 20%;
    height: 100%;
    background: #ffdde2;
    border-radius: 10px;
    padding: 10px;
    flex-grow: 0;
    flex-shrink: 0;
    
    .title {
        display: inline-block;
        font-size: 24px;
        font-weight: bold;
        color: #dc6d7f;
        margin-bottom: 16px;
    }
    
    .item-container {
        padding: 8px 10px;
        background-color: pink;
        border-radius: 4px;
        margin-bottom: 4px;
        color: #fff4f5;
        font-weight: bold;
        letter-spacing: 2px;
        display: flex;
        justify-content: space-between;
    }
    
    .remove {
        &:hover {
            color: red
        }
    }
}

</style>
