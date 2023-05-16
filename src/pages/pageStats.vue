<template>
	<pageNav />
	<div class="container test">
		<ygoDataVisu />
	</div>
	<pageFooter />
</template>
  
<script>


import pageNav from './pageAssets/pageNav.vue';
import pageFooter from './pageAssets/pageFooter.vue'
import ygoDataVisu from '@/components/ygoDataVisu.vue'


export default {
	name: 'pageStats',
	components: {
		pageNav,
		pageFooter,
		ygoDataVisu,
	}
}
</script>
  
<style>


</style>
  