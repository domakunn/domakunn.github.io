<template>
    <div class="Right-Selections-wrapper">
        <div class="top-tabs">
            <span @click="currentTab = item.value" :class="{
                tab:true,
                'active-tab':currentTab === item.value,
                hover:true
            }" v-for="item in TABS_LIST">{{ item.name }}</span>
        </div>
        <div class="expand-items">
            <span
                :class="{
                button:true,
                'active-button':imageManager.imageList.value.find(i=>i.name === item.name),
                 hover:true

            }"
                @click="imageManager.toggleImage(item)"
                v-for="item in DRESS_MAP[currentTab]">{{ item.name
                }}</span>
        </div>
    </div>
</template>


<script lang="ts" setup>
import {DRESS_MAP, DRESS_TYPE} from "@/hooks/config";
import {inject, ref} from "vue";

const imageManager = inject('imageManager')

const currentTab = ref(DRESS_TYPE.clothes)
const TABS_LIST = [
    {
        name: "饰品",
        value: DRESS_TYPE.jewelry
    }, {
        name: "眼睛",
        value: DRESS_TYPE.eye
        
    }, {
        name: "嘴",
        value: DRESS_TYPE.mouth
        
    }, {
        name: "服装",
        value: DRESS_TYPE.clothes
        
    }, {
        name: "袜子",
        value: DRESS_TYPE.sock
        
    },
    // {
    //     name: "贴纸",
    //     value: DRESS_TYPE.sticker
    //
    // },
]


</script>

<style lang="scss">
.Right-Selections-wrapper {
    width: 100%;
    height: calc(100% - 20px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: #ffdde2;
    padding: 10px;
    
    
    .top-tabs {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
        flex-shrink: 0;
        justify-content: flex-start;
        align-items: flex-start;
    }
    
    .tab {
        padding: 0 4px;
        margin: 2px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        background: #eac6cd;
        border-radius: 4px;
        text-align: center;
        font-weight: bold;
        letter-spacing: 4px;
        color: #8d4b56;
        border: 4px solid transparent;
    }
    
    .active-tab {
        border-color: white;
        color: white;
    }
    
    .expand-items {
        height: 100%;
        width: 100%;
        background: #ffe7eb;
        border-radius: 8px;
        padding: 10px 0;
        
        
    }
    
    .button {
        background: #ea446b;
        font-size: 12px;
        letter-spacing: 0;
        color: white;
        display: inline-block;
        padding: 0 4px;
        margin: 4px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        text-align: center;
        font-weight: bold;
        flex-shrink: 0;
    }
    
    .active-button {
        opacity: .5;
    }
}
</style>