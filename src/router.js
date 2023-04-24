import * as VueRouter from 'vue-router'
import Gallery from "./pages/pageGallery.vue"
import cardDetails from "./components/ygoCardDetails.vue"

const routes = [{
		path: '/',
		component: Gallery,
		name: ""
	},
	{
		path: '/cards',
		component: Gallery,
		name: "cards"
	},

	{
		path: '/cards/:cardId',
		component: cardDetails,
		name: "cardDetails"
	},

]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
})

export default router;