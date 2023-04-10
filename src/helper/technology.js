
import css from '../asset/technology/css.svg'
import js from '../asset/technology/js.svg'
import react from '../asset/technology/react.svg'
import tailwind from '../asset/technology/tailwind.svg'
import bootstrap from '../asset/technology/bootstrap.svg'
import sass from '../asset/technology/sass.svg'
import mui from '../asset/technology/mui.svg'

const icon = [{ iconName: "css", src: css }, { iconName: "js", src: js }, { iconName: "react", src: react }, { iconName: "tailwind", src: tailwind }, { iconName: "bootstrap", src: bootstrap }, { iconName: "sass", src: sass }, { iconName: "mui", src: mui }];

export const technologyIcon = name => {
    const findIcon = icon.find(item => item.iconName === name)
    return findIcon.src
}