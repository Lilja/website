'use strict'

Vue.use(VueRouter)

const home = Vue.extend({
	template: '<p>Oh, you found my website? That\'s pretty neat! My name is Erik and I am a software engineer.</p>',
	data : () => {
		return {
			title: "Erik Lilja",
			subtitle: "Software Engineer"
		}
	}
})
const about = Vue.extend({
	template: "<span>About</span>"
})
const work = Vue.extend({
	template: "<span>Work</span>"
})
const blog = Vue.extend({
	template: "<span>Blog</span>"
})

const routes = [
	{
		path: '/', component: home
	},
	{
		path: '/home',
		component: home
	},
	{
		path: '/about',
		component: about
	},
	{
		path: '/work',
		component: work
	},
	{
		path: '/blog',
		component: blog
	}
]

const router = new VueRouter({
	routes
})

const app = new Vue({
	router
}).$mount('#vue-wrapper')


