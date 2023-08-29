<script>
	import { onMount } from 'svelte';
	let zoomIndex = 0;
	let defaultWidth = 0;
	const zoomOption = [1, 1.5, 1.8, 2.2];

	function zoomin() {
		if (document) {
			zoomIndex++;
			if (zoomIndex <= 3) {
				let myImg = document.getElementById('image-preview');
				if (myImg) {
          // myImg.style.zoom = 2.2
					let currWidth = myImg.clientWidth;
					if (currWidth == 2500) return false;
					else {
						myImg.style.width = defaultWidth * zoomOption[zoomIndex] + 'px';
					}
				}
			}
		}
	}

	function zoomout() {
		if (document) {
			zoomIndex--;
			if (zoomIndex >= 0) {
				let myImg = document.getElementById('image-preview');
				if (myImg) {
					let currWidth = myImg.clientWidth;
					if (currWidth == 100) return false;
					else {
						myImg.style.width = defaultWidth * zoomOption[zoomIndex] + 'px';
						// myImg.style.width = (defaultWidth - 100) + "px";
					}
				}
			}
		}
	}

	onMount(() => {
		defaultWidth = document.getElementById('image-preview')?.clientWidth || 0;
	});
</script>

<svelte:head>
	<script
		type="text/javascript"
		src="https://cdn.rawgit.com/asvd/dragscroll/master/dragscroll.js"
	></script>
</svelte:head>

<div class="image-gallery-footer">
	<div>
		<button class="btn" on:click={zoomin}>
			<svg
				width="45"
				height="44"
				viewBox="0 0 45 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#a)">
					<path
						d="M27.333 22.667h-4.166v4.166a.836.836 0 0 1-.834.834.836.836 0 0 1-.833-.834v-4.166h-4.167a.836.836 0 0 1-.833-.834c0-.458.375-.833.833-.833H21.5v-4.167c0-.458.375-.833.833-.833.459 0 .834.375.834.833V21h4.166c.459 0 .834.375.834.833a.836.836 0 0 1-.834.834Z"
						fill="#494B50"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M12.5 12h20v20h-20z" />
					</clipPath>
				</defs>
			</svg>
		</button>
		<button class="btn" on:click={zoomout}>
			<svg
				width="45"
				height="44"
				viewBox="0 0 45 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#a)">
					<path
						d="M27.333 22.667h-10a.836.836 0 0 1-.833-.834c0-.458.375-.833.833-.833h10c.459 0 .834.375.834.833a.836.836 0 0 1-.834.834Z"
						fill="#494B50"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M12.5 12h20v20h-20z" />
					</clipPath>
				</defs>
			</svg>
		</button>
		<button class="btn">
			<svg
				width="45"
				height="44"
				viewBox="0 0 45 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#a)">
					<path
						d="M28.131 16.352a7.949 7.949 0 0 0-6.479-2.31c-3.669.37-6.688 3.35-7.098 7.02-.55 4.849 3.2 8.938 7.928 8.938 3.19 0 5.93-1.87 7.209-4.56a1.001 1.001 0 0 0-.9-1.439c-.37 0-.72.2-.88.53a5.993 5.993 0 0 1-6.799 3.31c-2.22-.49-4.009-2.3-4.479-4.52a6.001 6.001 0 0 1 5.85-7.318c1.659 0 3.139.69 4.218 1.78l-1.51 1.509c-.63.63-.19 1.71.7 1.71h3.59c.55 0 1-.45 1-1v-3.59c0-.89-1.08-1.34-1.71-.71l-.64.65Z"
						fill="#494B50"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M12.5 12h20v20h-20z" />
					</clipPath>
				</defs>
			</svg>
		</button>
	</div>
</div>

<style lang="scss">
	.image-gallery-footer {
		@apply w-full bg-white flex flex-col justify-between rounded-br;
		> div {
			@apply flex justify-center;
		}
		.btn {
			@apply w-11 h-11;
		}
	}
</style>
