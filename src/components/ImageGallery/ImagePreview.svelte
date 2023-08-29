<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { IItemType } from './type';
	import ImageFooter from './ImageFooter.svelte';
	export let imageItem: IItemType;

	const dispatch = createEventDispatcher();

	const handlePreviousImage = () => {
		dispatch('changeImage', {
			isPrevious: true,
			isNext: false
		});
	};

	const handleNextImage = () => {
		dispatch('changeImage', {
			isPrevious: false,
			isNext: true
		});
	};
</script>

<div class="image-preview">
	<div class="image-preview-container">
		<div class="h-full flex flex-col justify-center">
			<button class="btn btn-previous" on:click={handlePreviousImage}>
				<svg
					width="44"
					height="44"
					viewBox="0 0 44 44"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#a)">
						<path
							d="M27.833 21.167h-9.308l4.067-4.067a.84.84 0 0 0 0-1.183.83.83 0 0 0-1.175 0l-5.492 5.491a.83.83 0 0 0 0 1.175l5.492 5.492a.83.83 0 1 0 1.175-1.175l-4.067-4.067h9.308a.836.836 0 0 0 .834-.833.836.836 0 0 0-.834-.833Z"
							fill="#494B50"
						/>
					</g>
					<defs>
						<clipPath id="a">
							<path fill="#fff" d="M12 12h20v20H12z" />
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
		<div class="h-full object-contain object-center w-full overflow-auto">
			<div
				id="image-preview"
				class="dragscroll cursor-grab m-auto flex flex-col justify-center xmlg:w-[563px] xmlg:h-[563px] xxlg:w-[664px] xxlg:h-[664px]"
			>
				{#if imageItem.videoUrl}
					<!-- svelte-ignore a11y-missing-attribute -->
					<div class="w-full h-full">
						<iframe
							src={imageItem.videoUrl}
							frameborder="0"
							allow="autoplay; fullscreen"
							class="w-full h-full mt-[156px]"
						/>
					</div>
				{:else}
					<img
						srcset=""
						src={imageItem.damUrl}
						sizes=""
						alt={imageItem.altText}
						class="w-full h-auto"
					/>
				{/if}
			</div>
		</div>
		<div class="h-full flex flex-col justify-center">
			<button class="btn btn-next" on:click={handleNextImage}>
				<svg
					width="44"
					height="44"
					viewBox="0 0 44 44"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#a)">
						<path
							d="M16.167 22.833h9.308L21.408 26.9a.84.84 0 0 0 0 1.183.83.83 0 0 0 1.175 0l5.492-5.491a.83.83 0 0 0 0-1.175l-5.483-5.5a.83.83 0 1 0-1.175 1.175l4.058 4.075h-9.308a.836.836 0 0 0-.834.833c0 .458.375.833.834.833Z"
							fill="#494B50"
						/>
					</g>
					<defs>
						<clipPath id="a">
							<path fill="#fff" d="M12 12h20v20H12z" />
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	</div>
	<ImageFooter />
</div>

<style scoped lang="scss">
	.image-preview {
		width: calc(100% - 112px);
		@apply flex flex-col;
		.image-preview-container {
			@apply h-full bg-white flex flex-row px-[10px];
		}
		.btn {
			@apply w-11 h-11;
		}
	}
</style>
