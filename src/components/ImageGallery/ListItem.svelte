<script lang="ts">
	import type { IItemType } from './type';

	export let listImage: IItemType[] = [];

	export let keyActive: number = 0;

	const handleClickChooseImage = (itemKey: number) => {
		keyActive = itemKey;
	};
</script>

<div class="list-image">
	{#each listImage as image, index (index)}
		<div
			role="presentation"
			class={`item ${index === keyActive ? 'active' : ''}`}
			on:click={() => handleClickChooseImage(index)}
		>
			<img
				srcset=""
				src={image.damUrl}
				sizes=""
				alt={image.altText}
				class="h-full object-contain object-center w-full"
			/>
		</div>
	{/each}
</div>

<style scoped lang="scss">
	.list-image {
		@apply w-28 h-full bg-white px-9 py-8 flex flex-col gap-3;
		.item {
			@apply w-11 h-11 mx-auto cursor-pointer;
			img {
				@apply w-10 h-10 m-[2px];
			}
			&:hover {
				@apply border-2 rounded-md;
				img {
					@apply w-9 h-9;
				}
			}
		}
		.active {
			@apply border-2 rounded-md;
			img {
				@apply w-9 h-9 border-2 rounded border-black;
			}
		}
	}
</style>
