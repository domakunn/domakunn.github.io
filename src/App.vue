<template>
    <div class="dress-up-wrapper">
        <LeftList></LeftList>
        <CenterCanvas></CenterCanvas>
        <RightSelections></RightSelections>
    </div>
</template>

<script setup lang="ts">

import RightSelections from './components/RightSelections.vue'
import LeftList from './components/LeftList.vue'
import CenterCanvas from './components/CenterCanvas.vue'
import useManagerHook from './hooks/useManagerHook'
import {provide} from "vue";

const imageManager = useManagerHook()
provide('imageManager', imageManager)


</script>


<style lang="scss">
body,
html,
#app, {
    height: 100%;
    margin: auto;
}

* {
    user-select: none;
}

.dress-up-wrapper {
    border-radius: 20px;
    background-color: lightpink;
    height: calc(100% - 60px);
    border: 10px solid #f39daa;
    margin: 10px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    padding: 10px;
}
</style>
