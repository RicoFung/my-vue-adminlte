<template>
<main-navbar/>
<main-sidebar/>
<main-content/>
<main-footer/>
<main-control-sidebar/>
</template>

<script>
	import MainNavbar from './MainNavbar'
	import MainSidebar from './MainSidebar'
	import MainContent from './MainContent'
	import MainFooter from './MainFooter'
	import MainControlSidebar from './MainControlSidebar'

	export default {
		components: {
			'main-navbar': MainNavbar,
			'main-sidebar': MainSidebar,
			'main-content': MainContent,
			'main-footer': MainFooter,
			'main-control-sidebar': MainControlSidebar
		}
	}
</script>