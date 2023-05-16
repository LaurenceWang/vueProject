<template>
	<navigationBar />
	<heroHeader />
	<div class="container homePres">


		<h1>About Yu-Gi-Oh!</h1>
		<p>Yu-Gi-Oh! is an exciting universe based on a card game played with Monsters, Spells, and Traps. The Yu-Gi-Oh!
			franchise includes manga series, television series, several video games, the Yu-Gi-Oh! TRADING CARD GAME,
			and more! This short guide will help you familiarize yourself with some of what Yu-Gi-Oh! has to offer.</p>

		<router-link :to="{ name: 'cards' }"><button class="btn">Visit the Gallery</button></router-link>

	</div>

	<div class="homeFeatures">
		<div class="container">
			<h2>Yu-Gi-Oh! Events & Championships</h2>

			<div class="features-info">
				<div class="row">
					<div>
						<i class="fa-solid fa-calendar-days fa-2xl"></i>
						<a href="https://yugiohblog.konami.com/">Event Coverage</a>
					</div>

					<div>
						<i class="fa-solid fa-ranking-star fa-2xl"></i>
						<a href="https://www.yugioh-card.com/en/events/rankings/wcq-invite-lists/">Ranking & Leaderboards</a>
					</div>

					<div>
						<i class="fa-solid fa-star-and-crescent fa-2xl"></i>
						<a href="https://www.yugioh-card.com/en/events/specialevents/">Special Events</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<pageFooter />
</template>
  
<script>

import heroHeader from '@/components/heroHeader.vue';
import navigationBar from '@/components/navigationBar.vue';

import pageFooter from '@/components/pageFooter.vue'


export default {
	name: 'pageGallery',
	components: {
		heroHeader,
		navigationBar,
		pageFooter
	}
}
</script>
  
<style>
.btn {
	background-color: #dd325d;
	border: 1px solid #dd325d;
	font-size: 1rem;
	color: white;
	border-radius: 25px;
	padding: 15px;
	margin: 25px 0px;
	-webkit-box-shadow: 0px 0px 34px -14px rgba(0, 0, 0, 0.25);
	box-shadow: 0px 0px 34px -14px rgba(0, 0, 0, 0.25);


}

.btn:hover {
	background-color: white;
	border: 1px solid #dd325d;
	color: #dd325d;
	transition: .2s ease;

}

.homePres {
	margin-top: 125px;
	margin-bottom: 80px;
}

.homeFeatures {
	background-color: rgba(77, 54, 98, 0.25);
	padding: 75px
}

.features-info{
	width: 100%;
	display: flex;
	justify-content: space-around;
}

.features-info div {	
	margin : 20px 50px;
}

.features-info .row div{
	display:flex;
	flex-direction: column;
	justify-content: center;
}

.features-info .row div a{
	text-decoration: none;
	color: black;
}

.features-info .row div a:hover{
	
	color:  #dd325d;
	transition: .2 ease;
}



.features-info div i {
	font-size: 3rem;
	color: #4D3662;
	margin: 50px;
}
</style>
  