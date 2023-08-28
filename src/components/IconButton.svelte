<script lang="ts">
	import { icon_add_path, icon_cloud_rain, icon_cloud_sun, icon_user_check } from '../icons';
	import IconLightBulb from './IconLightBulb.svelte';
	import IconSvg from './IconSvg.svelte';
	type Icon = 'add' | 'user-check' | 'cloud_sun' | 'icon_cloud_rain';

	export let name: Icon = 'add';
	export let tooltip: string = '';

	const getIconPath = (key: Icon) => {
		switch (key) {
			case 'add':
				return icon_add_path;
			case 'user-check':
				return icon_user_check;
			case 'cloud_sun':
				return icon_cloud_sun;
			case 'icon_cloud_rain':
				return icon_cloud_rain;
			default:
				return icon_add_path;
		}
	};
</script>

<div class="icon">
	<IconSvg path={getIconPath(name)} />
	<div class="tooltip">
		<div class="content">
			<div>{tooltip}</div>
			<IconLightBulb />
		</div>
	</div>
</div>

<style lang="scss">
	.icon {
		@apply p-3 rounded-[50px] w-12 h-12 bg-[#313338] duration-300 relative cursor-pointer;

		&:hover {
			:global(svg path) {
				stroke: #fff;
			}

			.tooltip {
				@apply visible;
			}
			@apply bg-[#3ba55c] rounded-2xl;
		}

		.tooltip {
			@apply absolute min-w-[50px] h-10 bg-[#111214] left-[74px] top-2 rounded-lg invisible duration-150;
			.content {
				@apply flex justify-between my-2;
				> div {
					@apply pl-2 whitespace-nowrap text-white;
				}
			}
		}
	}
</style>
