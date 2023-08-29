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
			{#if image.videoUrl}
				<div class="video-container">
					<div class="video-thumnail">
						<svg
							width="24"
							height="24"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="m-2"
						>
							<path
								d="M4 4.13402V15.866C4 16.7606 4.98521 17.3042 5.74394 16.8172L14.9619 10.9512C15.664 10.5096 15.664 9.49041 14.9619 9.03744L5.74394 3.18278C4.98521 2.69583 4 3.2394 4 4.13402Z"
								fill="white"
							/>
						</svg>
					</div>
					<img
						srcset=""
						src={image.damUrl}
						sizes=""
						alt={image.altText}
						class="h-full object-contain object-center w-full"
					/>
				</div>
			{:else}
				<img srcset="" src={image.damUrl} sizes="" alt={image.altText} class="image-item" />
			{/if}
		</div>
	{/each}
</div>

<style scoped lang="scss">
	.list-image {
		@apply w-28 h-full bg-white px-9 py-8 flex flex-col gap-3;
		.item {
			@apply w-11 h-11 mx-auto cursor-pointer;
			.image-item {
				@apply object-contain object-center w-10 h-10 m-[2px];
			}
			&:hover {
				@apply border-2 rounded-md;
				.image-item {
					@apply w-9 h-9;
				}
			}

			.video-container {
				@apply w-9 h-9 m-[2px];

				.video-thumnail {
					@apply w-9 h-9 absolute;
					background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
						lightgray 50% / cover no-repeat;
					opacity: 0.7;
				}
			}
		}
		.active {
			@apply border-2 rounded-md;
			.image-item {
				@apply w-9 h-9 border-2 rounded border-black;
			}
		}
	}
</style>
