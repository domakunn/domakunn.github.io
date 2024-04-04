import {ref} from "vue";


const imageList = ref([])

export default function () {
    const manager = {
        imageList,
        toggleImage(image) {
            const index = imageList.value.findIndex(i => i.name === image.name)
            if (index !== -1) {
                imageList.value.splice(index, 1)
            } else {
                imageList.value.push(image)
            }

        }


    }
    return manager
}