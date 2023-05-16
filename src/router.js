import * as VueRouter from 'vue-router'
import Gallery from "./pages/pageGallery.vue"
//import cardDetails from "./components/ygoCardDetails.vue"
import CardDetails from "./pages/pageCardDetails.vue"
import Home from "./pages/pageHome.vue"

const routes = [{
		path: '/',
		component: Home,
		name: ""
	},

	{
		path: '/home',
		component: Home,
		name: ""
	},

	{
		path: '/cards',
		component: Gallery,
		name: "cards"
	},

	{
		path: '/cards/:cardId',
		component: CardDetails,
		name: "cardDetails"
	},

]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
})

export default router;