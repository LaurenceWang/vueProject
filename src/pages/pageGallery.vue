<template>
	<navigationBar/>
	<heroHeader/>
	<ygoGallery />
	<pageFooter />
</template>
  
<script>

import heroHeader from '@/components/heroHeader.vue';
import navigationBar from '@/components/navigationBar.vue';
import ygoGallery from '@/components/ygoGallery.vue'
import pageFooter from '@/components/pageFooter.vue'


export default {
	name: 'pageGallery',
	components: {
		ygoGallery,
		heroHeader,
		navigationBar,
		pageFooter
	}
}
</script>
  
<style></style>
  