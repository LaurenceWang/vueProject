<template>
	<div class="container data-visu">
		<h3>Card types</h3>
		<div>
			<Pie v-if="loaded" :data="chartTypeData" :options="options" />
		</div>
		<h3>Monster attributes</h3>
		<div>
			<Bar v-if="loaded" :data="chartMonsterData" :options="options" />
		</div>

	</div>
</template>
	
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Pie, Bar } from 'vue-chartjs'
import { getYGOData, getYGOMonster } from "@/services/api/ygoAPI.js"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement,)


export default {
	name: 'ygoDataVisu',
	components: { Pie, Bar},
	data: () => ({
		ygoData: [],
		loaded: false,
		typeLabels: ["Monster", "Spell Card", "Trap Card", "Skill Card", "Token"],
		attributeLabels : ['dark', 'earth', 'fire', 'light', 'water', 'wind'],
		levelLabels: [1,2,3,4],
		chartTypeData: null,
		chartMonsterData: null,
		options: {
			responsive: true,
			maintainAspectRatio: false
		}
	}),
	async mounted() {

		this.loaded = false

		try {
			this.chartTypeData = await this.setTypeData();
			this.chartMonsterData = await this.setMonsterData();
			this.loaded = true
		} catch (e) {
			console.error(e)
		}

	},

	methods: {
		setData(ygo, labels, target){
			let typeChartData = {};
			typeChartData.labels = labels;
			let typeCount = [];
			typeChartData["labels"].forEach(type => typeCount.push(
				ygo.filter(card => (card[target]).toLowerCase().includes((type).toLowerCase())).length
			))

			typeChartData.datasets = [{
				label: 'monster attributes',
				backgroundColor: ['#4D3662', '#FBD78F', '#DD325D', '#24222B', '#F6F4F5'],
				data: typeCount
			}];

			return typeChartData;

		},

		async setTypeData() {
			this.ygoData = await getYGOData();
			let chartData = this.setData(this.ygoData, this.typeLabels, "type");
			return chartData;
		},

		async setMonsterData() {
			this.ygoData = await getYGOMonster();
			let chartData = this.setData(this.ygoData, this.attributeLabels, "attribute");
			return chartData;
		},

	}

}

</script>
	
	
	
<style scoped>

.data-visu{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	min-height: 100vh;

}
.data-visu h3{
	margin-top: 80px;
}

</style>
	