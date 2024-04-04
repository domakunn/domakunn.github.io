import {ref} from "vue";
import {COEXIST_TYPE, DRESS_TYPE} from "@/hooks/config";
import clothes_jk from "@/assets/clothes_jk.PNG";
import eye_normal from "@/assets/eye_normal.PNG";
import mouth_w from "@/assets/mouth_w.PNG";


const imageList = ref([
    {
        image: clothes_jk,
        name: '校服',
        type: DRESS_TYPE.clothes
    }, {
        image: eye_normal,
        name: '普通',
        type: DRESS_TYPE.eye

    }, {
        image: mouth_w,
        name: 'w嘴', type: DRESS_TYPE.mouth

    }
])

export default function () {
    const manager = {
        imageList,
        toggleImage(image) {
            const index = imageList.value.findIndex(i => i.name === image.name)
            if (index !== -1) {
                imageList.value.splice(index, 1)
            } else {
                // 不允许共存
                if (!COEXIST_TYPE[image.type]) {
                    const i = imageList.value.findIndex(i => i.type === image.type)
                    imageList.value.splice(i, 1)
                }
                imageList.value.push(image)
            }

        }


    }
    return manager
}