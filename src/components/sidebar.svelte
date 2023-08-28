<script lang="ts">
	import IconButton from './IconButton.svelte';
</script>

<div class="sidebar-container">
	<div class="menu-list">
		<IconButton name="add" tooltip="add" />
		<IconButton name="user-check" tooltip="user check" />
		<IconButton name="cloud_sun" tooltip="cloud sun" />
		<IconButton name="icon_cloud_rain" tooltip="cloud rain" />
	</div>
</div>

<style lang="scss">
	.sidebar-container {
		@apply bg-[#1e1f22] h-full;

		.menu-list {
			@apply flex flex-col mx-2 gap-4 h-full pt-3;
		}
	}
</style>
