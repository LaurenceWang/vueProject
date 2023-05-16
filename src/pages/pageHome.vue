<template>
	<pageNav />
	<pageHeader />
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
						<a href="https://www.yugioh-card.com/en/events/rankings/wcq-invite-lists/">Ranking &
							Leaderboards</a>
					</div>

					<div>
						<i class="fa-solid fa-star-and-crescent fa-2xl"></i>
						<a href="https://www.yugioh-card.com/en/events/specialevents/">Special Events</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container rules">


		<h2>How to play Yu-Gi-Oh!</h2>
		<br>
		<p>The Yu-Gi-Oh! TCG is played in turns that follow a specific order of operations. To begin a duel, the decks are
			shuffled and each player draws an opening hand of five cards. Here’s a breakdown of the flow of a player turn.
		</p>

		<div class="rules-explain">

			<p><strong>Draw Phase:</strong> The first thing you do every turn is draw a card. The one exception is the first
				turn of the player
				who goes first, who doesn’t draw anything. </p>

			<p><strong>Standby Phase </strong>This is when some card effects activate, as indicated by the cards’ text.</p>

			<p>
				<strong>Main Phase 1:</strong> In this phase, you make most of your non-combat actions. These include the
				normal summon/set of
				one monster (in face-up attack position or face-down defense position respectively), any special summons you
				are allowed, the activation/setting of spells and traps, and changing battle positions of your monsters,
				including flip-summoning facedown defending monsters into the face-up attack position.
			</p>

			<p>
				<strong>Battle Phase: </strong>This is where the magic happens. Each monster in attack position gets to
				attack once. When you
				attack, you compare your Atk value to the opponent’s Atk or Def value, whichever is relevant. Battle can go
				one of a few ways.
			</p>

			<p><strong>Main Phase 2:</strong> Just the same as Main Phase 1, preparing for your opponent’s turn.</p>

			<p>
				<strong>End Phase:</strong> This is when some card effects activate, which you’ll see in the cards’ text. If
				you have more
				than six cards in your hand, discard until you have six.
			</p>
		</div>

	</div>

	<pageFooter />
</template>
  
<script>


import pageHeader from './pageAssets/pageHeader.vue';
import pageNav from './pageAssets/pageNav.vue';
import pageFooter from './pageAssets/pageFooter.vue'


export default {
	name: 'pageGallery',
	components: {
		pageHeader,
		pageNav,
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
	cursor: pointer;
	transition: .2s ease;

}

.row {
	margin: auto;
}

.homePres{
	margin-top: 125px;
	margin-bottom: 80px;
}

.rules{
	margin-top: 90px;
	margin-bottom: 120px;
}


.rules-explain {
	margin-top:40px;
	text-align: left;
}

.homeFeatures {
	background-color: rgba(77, 54, 98, 0.25);
	padding: 75px
}

.features-info {
	width: 100%;
	display: flex;
	justify-content: space-around;
}

.features-info div {
	margin: 20px 50px;
}

.features-info .row div {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.features-info .row div a {
	text-decoration: none;
	color: black;
}

.features-info .row div a:hover {

	color: #dd325d;
	transition: .2 ease;
}



.features-info div i {
	font-size: 3rem;
	color: #4D3662;
	margin: 50px;
}
</style>
  