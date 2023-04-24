<template>
	<div class="container">
		<div class="card-detail">
			<div class="card-img">
				<img :src="img">
				<!-- <img src={{ detailCardData.img  }}> -->
			</div>

			<div class="card-info">
				<h1> {{ this.ygoData.name }}</h1>
				<div class="row">
					<div>
						<p>Type : </p>
						<h4> {{ this.ygoData.type }}</h4>
					</div>

					<div>
						<p>Attribute : </p>
						<h4> {{ this.ygoData.attribute }}</h4>
					</div>

					<div>
						<p>Race :</p>
						<h4> {{ this.ygoData.race }}</h4>
					</div>
				</div>

				<div class="row">
					<div>
						<p>Level : </p>
						<h4> {{ this.ygoData.level }}</h4>
					</div>

					<div>
						<p>ATK : </p>
						<h4> {{ this.ygoData.atk }}</h4>
					</div>

					<div>
						<p>DEF : </p>
						<h4> {{ this.ygoData.def }}</h4>
					</div>
				</div>

				<div>
					<strong>
						<p>Description :</p>
					</strong>
					<p> {{ this.ygoData.desc }}</p>
				</div>

			</div>




		</div>
	</div>
	<!-- <p>{{ this.ygoData }}</p> -->
</template>
  
<script>

import { getYGOData } from "@/services/api/ygoAPI.js"


export default {
	name: 'ygoCardGallery',

	// computed:{
	// 	/*detailCardData: function(){
	// 		const detail = this.ygoData.filter(card => card.id == this.cardId )[0];
	// 		return detail;
	// 	},

	// 	//
	// },

	data() {
		return {
			ygoData: [],
			cardId: this.$route.params.cardId,
			img: "https://images.ygoprodeck.com/images/cards/73262676.jpg",
			//img: this.ygoData.name
			//img : this.ygoData.image_url,
			//img : this.ygoData.card_images[0].image_url,
		}
	},
	created() {
		this.getData();
	},

	methods: {
		async getData() {
			this.ygoData = await getYGOData();
			this.ygoData = this.ygoData.filter(card => card.id == this.cardId)[0];
		},

	}
}




</script>
  
  
  
<style scoped>
.card-detail {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #F6F4F5;
	padding: 50px;
	margin: 50px 0px;
}

.card-img,
.card-info {
	margin: 0 50px;
}

.card-img img {
	width: 300px;
}

.card-info {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

.card-info h1,
.card-info p {
	text-align: left;
}

.row {
	justify-content: space-between;
}

.row div {
	border-radius: 10px;
	background-color: white;
	margin: 10px;
	width: 28%;
	padding: 10px;
}

.row div p,
.row div h4 {
	margin: 5px;
}

@media screen and (max-width:1200px) {

	.card-detail {

		padding: 20px;

	}


	.card-img img {
		width: 250px;
	}

	.row div {
		width: 25%;

	}
}

@media screen and (max-width:992px) {

	.card-detail {
		flex-direction: column;
		padding: 40px;
	}

	.card-info {

		justify-content: center;
	}
}

@media screen and (max-width:576px) {

	.card-img,
	.card-info {
		margin: 0 20px;
	}

	.card-info h1,
	.card-info p {
		text-align: center;
	}

	.row {
		flex-direction: columns;
	}

	.row div {
		width: 100%;

	}
}
</style>
  