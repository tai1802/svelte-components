<script lang="ts">
	import ImageHeader from './ImageHeader.svelte';
	import ImagePreview from './ImagePreview.svelte';
	import ListItem from './ListItem.svelte';
	import type { IItemType } from './type';
	let itemActive: number = 0;
	const items: IItemType[] = [
		{
			damUrl: 'https://drberg-dam.imgix.net/product-images/electrolyte-pomegranate-cherry-02.png',
			altText: 'Electrolyte powder pomegranate and cherry',
			videoUrl: null
		},
		{
			damUrl: 'https://drberg-dam.imgix.net/product-images/electrolyte-pomegranate-cherry-03.png',
			altText: 'Electrolyte powder pomegranate and cherry ingredients',
			videoUrl: null
		},
		{
			damUrl: 'https://drberg-dam.imgix.net/product-images/electrolyte-pomegranate-cherry-01.png',
			altText: 'Electrolyte powder pomegranate and cherry directions',
			videoUrl: null
		},
		{
			damUrl:
				'https://drberg-dam.imgix.net/video-thumbnails/c428650d-bf92-4daf-8888-9dd15573e5ba.jpg',
			altText: 'Electrolyte powder pomegranate and cherry ingredients',
			videoUrl:
				'https://media-drberg.azurewebsites.net/c428650d-bf92-4daf-8888-9dd15573e5ba/gallbladder-formula'
		}
	];

	const handleChangeImage = (value: CustomEvent) => {
		const { isPrevious, isNext } = value.detail as { isPrevious: boolean; isNext: boolean };
		if (isNext) {
			if (itemActive === items.length - 1) {
				itemActive = 0;
			} else {
				itemActive++;
			}
		}
		if (isPrevious) {
			if (itemActive === 0) {
				itemActive = items.length - 1;
			} else {
				itemActive--;
			}
		}
	};
</script>

<svelte:head>
	<script
		type="text/javascript"
		src="https://cdn.rawgit.com/asvd/dragscroll/master/dragscroll.js"
	></script>
</svelte:head>
<div class="image-gallery">
	<ImageHeader />
	<div class="image-gallery-body">
		<ListItem listImage={items} bind:keyActive={itemActive} />
		<ImagePreview imageItem={items[itemActive]} on:changeImage={handleChangeImage} />
	</div>
</div>

<style lang="scss" scoped>
	.image-gallery {
		@apply max-w-[1500px] max-h-[900px] w-full xmlg:w-[1200px] xmlg:h-[800px] xxlg:w-[1500px] xxlg:h-[900px];
		&-body {
			height: calc(100% - 84px);
			@apply mt-[1px] flex flex-row gap-[1px];
		}
	}
</style>
