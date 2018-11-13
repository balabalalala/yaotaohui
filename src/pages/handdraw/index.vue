<template>
	<div class="handdraw">
		
		<mo-tops></mo-tops>
		<mo-handdraw></mo-handdraw>
		<mo-bottom></mo-bottom>
	</div>
</template>
<script>
import MoTops from '@/components/tops'
import MoHanddraw from './components/handdraw'
import MoBottom from '@/components/bottom'
	export default{
		components:{
			MoTops,
			MoHanddraw,
			MoBottom,
		},
	}
</script>
<style scoped>
	
</style>