<template>
	<div class="container pCardDetail">
		<div class="pageNavigation">
			<router-link :to="{ name: 'cards' }">
				<i class="fa-solid fa-arrow-left"></i>
			</router-link>
		</div>
		<ygoCardDetails />
	</div>
</template>
<script>

import ygoCardDetails from '@/components/ygoCardDetails.vue';



export default {
	name: 'pageCardDetails',
	components: {
		ygoCardDetails,
	}
}
</script>
  
<style>

.pCardDetail{
	display: flex;
	flex-direction: column;
}
.fa-arrow-left {
	margin-top: 30px;
	font-size: 2.5rem;
	color: #2c3e50;
}

.fa-arrow-left:hover {
	transform: scale(1.08);
	transition: transform .2s ease;
	color:#dd325d;
}

.pageNavigation{
	align-self: flex-start;
	margin-left: 15px;
}
</style>
  