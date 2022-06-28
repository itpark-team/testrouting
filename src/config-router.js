import {createWebHistory, createRouter} from "vue-router";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import ComponentNotFound from "./components/ComponentNotFound";

const routes = [
    {
        path: "/",
        component: ComponentOne,
    },
    {
        path: "/comp2",
        component: ComponentTwo,
    },
    {
        path: "/comp3/:id/:id2",
        component: ComponentThree,
        props: true
    },
    {
        path: "/:catchAll(.*)",
        component: ComponentNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {

    console.log(from);
    let apiKey = "111";
    if(!to.fullPath.includes("comp2")) {
        if (apiKey !== "111") {
            return "/comp2";
        }
    }
})


export default router;