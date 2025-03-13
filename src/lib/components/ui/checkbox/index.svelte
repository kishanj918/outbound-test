<script>
	let { checked = false, onClick } = $props();
</script>

<div class="flex items-center space-x-2">
	<div class="relative">
		<input type="checkbox" bind:checked class="sr-only" />

		<button
			onclick={onClick}
			role="checkbox"
			aria-checked={checked}
			tabindex="0"
			class={`
          flex h-5 w-5 cursor-pointer items-center justify-center rounded-md
          border-2 transition-colors duration-200
          ${checked ? 'border-brand bg-brand' : 'border-gray-300 bg-white'}
        
        `}
		>
			{#if checked}
				<svg
					class="h-3 w-3 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="3"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			{/if}
		</button>
	</div>
</div>
