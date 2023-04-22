<template>
	<div class="gallery-options">

		<div>
			<input type="text" class="search-bar" :value="search" @keydown.enter="onSearchChanged"
				placeholder="Chercher une carte" list='listid'>
			<datalist id="listid">

				<option>{{ this.storageSearch }}</option>
			</datalist>
			<span class="search-icon"><img
					src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></span>
		</div>

		<button class="emptyBtn" v-if="search" v-on:click="cleanSearch">empty</button>

		<div class="select">
			<label for="card-sort">Type :</label>
			<select :value="cardsFilterType" @change="onCardsFilterTypeChanged" id="card-sort">
				<option value="">All</option>
				<option value="Monster">Monster</option>
				<option value="Spell Card">Spell Card</option>
				<option value="Trap Card">Trap Card</option> 
				<option value ="Skill Card">Skill Card</option>

			</select>
		</div>

		<div class="select" v-if="cardsFilterType.includes('Monster')">
			<label for="card-sort">Type :</label>
			<select :value="cardsFilterType" @change="onCardsFilterTypeChanged" id="card-sort">
				<option value ="Effect Monster">Effect Monster</option>
				<option value ="Flip Effect Monster">Flip Effect Monster</option>
				<option value ="Fusion Monster">Fusion Monster</option>
				<option value ="Gemini Monster">Gemini Monster</option>
				<option value ="Link Monster">Link Monster</option>
				<option value ="Normal Monster">Normal Monster</option>
				<option value ="Normal Tuner Monster">Normal Tuner Monster</option>
				<option value ="Pendulum Effect Fusion Monster">Pendulum Effect Fusion Monster</option>
				<option value ="Pendulum Effect Monster">Pendulum Effect Monster</option>
				<option value ="Pendulum Effect Ritual Monster">Pendulum Effect Ritual Monster</option>
				<option value ="Pendulum Flip Effect Monster">Pendulum Flip Effect Monster</option>
				<option value ="Pendulum Normal Monster">Pendulum Normal Monster</option>
				<option value ="Pendulum Tuner Effect Monster">Pendulum Tuner Effect Monster</option>
				<option value ="Ritual Effect Monster">Ritual Effect Monster</option>
				<option value ="Ritual Monster">Ritual Monster</option>
				<option value ="Spirit Monster">Spirit Monster</option>
				<option value ="Synchro Monster">Synchro Monster</option>
				<option value ="Synchro Pendulum Effect Monster">Synchro Pendulum Effect Monster</option>
				<option value ="Synchro Tuner Monster">Synchro Tuner Monster</option>
				<option value ="Token">Token</option>
				<option value ="Toon Monster">Toon Monster</option>
				<option value ="Tuner Monster">Tuner Monster</option>
				<option value ="Union Effect Monster">Union Effect Monster</option>
				<option value ="XYZ Monster">XYZ Monster</option>
				<option value ="XYZ Pendulum Effect Monster">XYZ Pendulum Effect Monster</option>

			</select>
		</div>



		<div v-if="cardsFilterType.includes('Monster')" class="select">
			<label for="card-sort">Sort :</label>
			<select :value="cardsSortType" @change="onCardsSortTypeChanged" id="card-sort">
				<option value=atk>atk</option>
				<option value=def>def</option>
				<option value=level>level</option>
			</select>
		</div>

	</div>
</template>
  
<script>
console.log("localsearch :" + localStorage.getItem("search"));

export default {
	name: 'galleryOptions',

	data() {
		return {
			storageSearch: localStorage.getItem("search") || ""
		}
	},

	props: {
		search: String,
		cardsFilterType: String,
		cardsSortType: String,
	},

	emits: ["update:search", "update:cardsFilterType", "update:cardsSortType"],

	watch: {
		storageSearch: function (newSearch) {
			localStorage.setItem("search", newSearch);
		},
	},

	methods: {
		cleanSearch: function () {
			this.$emit('update:search', "");
		},

		onSearchChanged(event) {
			if (event.target.value.length >= 3) {
				this.$emit('update:search', event.target.value);
				this.storageSearch = event.target.value;
			}
		},

		onCardsFilterTypeChanged(event) {
			this.$emit('update:cardsFilterType', event.target.value);
		},

		onCardsSortTypeChanged(event) {
			this.$emit('update:cardsSortType', event.target.value);
		},
	}
}
</script>
  
<style scoped>
.gallery-options {
	margin: 50px auto;
	display: flex;
	justify-content: center;
}

.search-container {
	max-width: 490px;
	display: block;
	margin: 0 auto;
}

.search-bar {
	/* //width:100%; */
	max-width: 100%;
	margin: 0 auto;
	height: 45px;
	padding: 0 20px;
	font-size: 1rem;
	border: 1px solid #D0CFCE;
	outline: none;
	border-radius: 10px;
	position: relative;
}


input::-webkit-calendar-picker-indicator {
	opacity: 0;
}

[list]::-webkit-calendar-picker-indicator {
	display: none;
}

.search-bar:focus {
	border: 1px solid #008ABF;
	transition: 0.35s ease;
	color: #008ABF;
}

.search-bar:focus::placeholder {
	transition: opacity 0.45s ease;
	opacity: 30%;
}

.search-icon {
	position: relative;

}

.search-icon img {
	top: -26px;
	left: -60px;
	position: absolute;
	width: 70px;
	height: 70px;
}

.select {
	margin: 0px 20px;
	width: 350px;
	display: flex;
	align-items: center;
}

.select label {
	width: 60px;
	margin: 0px 20px;
}

select {
	position: relative;
	width: 80%;
	border-radius: 10px;
	padding: 10px 20px;
	border: 1px solid #D0CFCE;
	font-size: 1rem;
	color: #666;
	cursor: pointer;
	transition: all .3s;
	z-index: 0;
}


select:focus {
	border: 1px solid #008ABF;
	transition: 0.35s ease;
}

.emptyBtn {
	background-color: white;
	border: 1px solid #008ABF;
	font-size: 1rem;
	color: #008ABF;
	border-radius: 5px;
	padding: 0px 10px;
	margin-left: 15px;
}

.emptyBtn:hover {
	background-color: #008ABF;
	color: white;
	transition: 0.35s ease;
}
</style>
  