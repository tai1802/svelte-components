<div class="image-gallery-header">
	<div>
		<div class="product-name">Product name goes here on a single line and truncated</div>
		<div class="variation">1 x variation | $33.99</div>
	</div>
	<div>
		<button class="button-close">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="m-auto"
			>
				<path
					d="M6.616 5.507a.794.794 0 0 0-1.123 1.124L8.863 10l-3.37 3.37a.794.794 0 1 0 1.123 1.123l3.37-3.37 3.369 3.37a.794.794 0 0 0 1.123-1.123L11.108 10l3.37-3.37a.794.794 0 1 0-1.123-1.123l-3.37 3.37-3.37-3.37Z"
					fill="#494B50"
				/>
			</svg>
		</button>
	</div>
</div>

<style lang="scss">
	.image-gallery-header {
		@apply h-[84px] p-5 bg-white flex flex-row justify-between rounded-t-md;
		.product-name {
			@apply text-base font-medium;
		}
		.variation {
			@apply text-sm font-normal;
		}
		.button-close {
			@apply my-auto w-11 h-11 border border-[#464F6029] rounded;
		}
	}
</style>
