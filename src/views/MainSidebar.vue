<template>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
<!-- Brand Logo -->
<a href="index3.html" class="brand-link">
    <img src="admin-lte/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">AdminLTE 3</span>
</a>
<div class="sidebar">
	<main-sidebar-user-panel/>
	<main-sidebar-search-form/>
	<main-sidebar-menu/>
</div>
</aside>
</template>

<script>
	import MainSidebarUserPanel from './MainSidebarUserPanel'
	import MainSidebarSearchForm from './MainSidebarSearchForm'
	import MainSidebarMenu from './MainSidebarMenu'

	export default {
		components: {
			'main-sidebar-user-panel': MainSidebarUserPanel,
			'main-sidebar-search-form': MainSidebarSearchForm,
			'main-sidebar-menu': MainSidebarMenu
		}
	}
</script>