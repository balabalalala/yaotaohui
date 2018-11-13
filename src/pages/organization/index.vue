<template>
	<div class="organization-zong">
		<mo-organization></mo-organization>
		<mo-nav></mo-nav>
	</div>
</template>
<script>
import MoNav from '@/components/nav'
import MoOrganization from './components/organization'
	export default{
		components:{
			MoNav,
			MoOrganization,
		},
	}
</script>
<style scoped>
	.organization-zong{
		background: #f1f1f1;
	}
</style>