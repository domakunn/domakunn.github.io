<template>
    <div class="LeftList-wrapper"></div>
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
    
}
</style>
