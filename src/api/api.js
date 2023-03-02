import quizApp from "../asset/project/quizApp.jpg"
import register from "../asset/project/register.jpg"
import fastFood from "../asset/project/fast-food.jpg"
import dashboard from "../asset/project/dashboard.jpg"
import shopCss from "../asset/project/shop.jpg"
import spy from "../asset/project/spy.jpg"
import zoo from "../asset/project/zoo.jpg"
import zarinPal from "../asset/project/zarinpal.jpg"
import password from "../asset/project/password.jpg"
import weather from "../asset/project/weather.jpg"
import personal from "../asset/project/personal.jpg"
import reactShop from "../asset/project/reactShop.jpg"
import BHost from "../asset/project/BHost.jpg"
import parsHost from "../asset/project/parsHost.jpg"
import admin from "../asset/project/question.svg"

export const myProjects = [
    { id: 1, title: "فرم ثبت نام", image: register, technologies: ["react", "css"], link: "https://mahdirazzaghi808.github.io/loginRegister-react-css/", explain: "", active: "active" },
    { id: 2, title: "کوئیز اپ", image: quizApp, technologies: ["react", "bootstrap"], link: "https://mahdirazzaghi808.github.io/quizApp-react-bootstrap/", explain: "",active:"active" },
    { id: 3, title: "فروشگاه", image: reactShop, technologies: ["react", "css"], link: "https://mahdirazzaghi808.github.io/shop-react-css/", explain: "ui سایت در حال تغییر می باشد", active: "active" },
    { id: 4, title: "شخصی", image: personal, technologies: ["react", "css"], link: "#", explain: "", active: "active" },

    { id: 5, title: "پنل ادمین", image: admin, technologies: ["js", "tailwind"], link: "#", explain: "", active: "deActive" },
    { id: 6, title: "فست فود", image: fastFood, technologies: ["css"], link: "https://mahdirazzaghi808.github.io/fast-food-css/", explain: "", active: "active" },
    { id: 7, title: "پنل ادمین", image: dashboard, technologies: ["css"], link: "https://mahdirazzaghi808.github.io/dashboard-css/", explain: "", active: "active" },
    { id: 8, title: "فروشگاهی", image: shopCss, technologies: ["css"], link: "https://mahdirazzaghi808.github.io/shop-css/", explain: "", active: "active" },
    { id: 9, title: "بازی جاسوس", image: spy, technologies: ["js", "css"], link: "https://mahdirazzaghi808.github.io/spyGame/", explain: "", active: "active" },

    { id: 10, title: "زرین پال", image: zarinPal, technologies: ["sass"], link: "https://mahdirazzaghi808.github.io/zarinpal-sass/", explain: "", active: "active" },
    { id: 11, title: "تولید رمز", image: password, technologies: ["js", "sass"], link: "https://mahdirazzaghi808.github.io/fast-food-css/", explain: "", active: "active" },


    { id: 12, title: "هاست", image: BHost, technologies: ["tailwind"], link: "https://mahdirazzaghi808.github.io/BHost-tailwind/", explain: "", active: "active" },
    { id: 13, title: "هاست ", image: parsHost, technologies: ["tailwind"], link: "https://mahdirazzaghi808.github.io/parsHost-tailwind/", explain: "", active: "active" },

    { id: 14, title: "باغ وحش", image: zoo, technologies: ["bootstrap"], link: "https://mahdirazzaghi808.github.io/zoo-bootstrap/  ", explain: "", active: "active" },
    { id: 15, title: "هواشناسی", image: weather, technologies: ["js", "bootstrap"], link: "https://mahdirazzaghi808.github.io/weather-bootstrap/", explain: "", active: "active" },
]