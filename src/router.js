import * as VueRouter from 'vue-router'
import Gallery from "./pages/pageGallery.vue"
//import CardStats from "./components/ygoDataVisu.vue"
import CardStats from "./pages/pageStats.vue"
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
		name: "home"
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

	{
		path: '/stats',
		component: CardStats,
		name: "cardStats"
	},

]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
})

export default router;