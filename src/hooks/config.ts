import clothes_dress_yellow from "../assets/clothes_dress_yellow.PNG"
import clothes_jk from "../assets/clothes_jk.PNG"
import clothes_maid from "../assets/clothes_maid.PNG"
import clothes_yelusilu from "../assets/clothes_yelusilu.PNG"
import clothes_yokada from "../assets/clothes_yokada.PNG"
import clthes_swimming from "../assets/clthes_swimming.PNG"
import eye_close from "../assets/eye_close.PNG"
import eye_cry from "../assets/eye_cry.PNG"
import eye_cry_2 from "../assets/eye_cry_2.PNG"
import eye_normal from "../assets/eye_normal.PNG"
import hand_dog from "../assets/hand_dog.PNG"
import hand_yellow from "../assets/hand_yellow.PNG"
import head_dog from "../assets/head_dog.PNG"
import socks_short from "../assets/socks_short.PNG"


export const DRESS_TYPE = {
    clothes: "clothes",
    face: "face",
    jewelry: "jewelry",
    sock: "sock"
}
export const IMAGE_MAP = {
    clothes_dress_yellow: {
        image: clothes_dress_yellow,
        name: '黄色连衣裙',
        type: DRESS_TYPE.clothes
    },
    clothes_jk: {
        image: clothes_jk,
        name: '校服',
        type: DRESS_TYPE.clothes
    },
    clothes_maid: {
        image: clothes_maid,
        name: '女仆装',
        type: DRESS_TYPE.clothes
    },
    clothes_yelusilu: {
        image: clothes_yelusilu,
        name: 'T恤',
        type: DRESS_TYPE.clothes
    },
    clothes_yokada: {
        image: clothes_yokada,
        name: '和服',
        type: DRESS_TYPE.clothes
    },
    clthes_swimming: {
        image: clthes_swimming,
        name: '泳装',
        type: DRESS_TYPE.clothes
    },
    eye_close: {
        image: eye_close,
        name: '闭眼',
        type: DRESS_TYPE.face
    },
    eye_cry: {
        image: eye_cry,
        name: '哭',
        type: DRESS_TYPE.face

    },
    eye_cry_2: {
        image: eye_cry_2,
        name: '拒绝',
        type: DRESS_TYPE.face

    },
    eye_normal: {
        image: eye_normal,
        name: '普通',
        type: DRESS_TYPE.face

    },
    hand_dog: {
        image: hand_dog,
        name: '黑色爪爪套',
        type: DRESS_TYPE.jewelry

    },
    hand_yellow: {
        image: hand_yellow,
        name: '黄色手饰',
        type: DRESS_TYPE.jewelry

    },
    head_dog: {
        image: head_dog,
        name: '柴犬耳',
        type: DRESS_TYPE.jewelry


    },
    head_maid: {
        image: head_dog,
        name: '女仆头饰',
        type: DRESS_TYPE.jewelry

    },
    head_yellow: {
        image: head_dog,
        name: '黄色蝴蝶结',
        type: DRESS_TYPE.jewelry

    },
    mouse_happy: {
        image: head_dog,
        name: '开心',
        type: DRESS_TYPE.face

    },
    mouse_not_happy: {
        image: head_dog,
        name: '不开心',
        type: DRESS_TYPE.face

    },
    mouse_o: {
        image: head_dog,
        name: 'o嘴',
        type: DRESS_TYPE.face

    },
    mouse_smoke: {
        image: head_dog,
        name: '香烟',
        type: DRESS_TYPE.face

    },
    mouse_w: {
        image: head_dog,
        name: 'w嘴', type: DRESS_TYPE.face

    },
    mouse_wenduji: {
        image: head_dog,
        name: '温度计',
        type: DRESS_TYPE.face

    },
    socks_middle: {
        image: head_dog,
        name: '中筒袜',
        type: DRESS_TYPE.face

    },
    socks_short: {
        image: socks_short,
        name: '短袜',
        type: DRESS_TYPE.face

    },
}

const _DRESS_MAP = {}

Object.values(DRESS_TYPE).forEach(v => {
    _DRESS_MAP[v] = []
})
Object.values(IMAGE_MAP).forEach(v => {
    _DRESS_MAP[v.type].push(v)
})

export const DRESS_MAP = _DRESS_MAP



