<template>
	<pageNav/>
	<pageHeader/>
	<ygoGallery />
	<pageFooter />
</template>
  
<script>

import pageHeader from './pageAssets/pageHeader.vue';
import pageNav from './pageAssets/pageNav.vue';
import ygoGallery from '@/components/ygoGallery.vue'
import pageFooter from './pageAssets/pageFooter.vue'


export default {
	name: 'pageGallery',
	components: {
		ygoGallery,
		pageHeader,
		pageNav,
		pageFooter
	}
}
</script>
  
<style></style>
  