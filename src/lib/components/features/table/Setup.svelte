<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Play from '$lib/icons/Play.svelte';
	import UserPlus from '$lib/icons/UserPlus.svelte';
	import Stepper from './Stepper.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { tableStore } from '$lib/store/table.svelte';
	import Cross from '$lib/icons/Cross.svelte';
	import Plus from '$lib/icons/Plus.svelte';
	import { isValidUrl } from '$lib/utils/isValidUrl';
	import { addUrl, removeUrl } from '$lib/store/table.functions';
</script>

<Stepper />

<div class="mt-8 flex flex-col items-center justify-center">
	<div class="bg-brand-100 flex h-14 w-14 items-center justify-center rounded-2xl text-brand">
		<UserPlus />
	</div>
	<h2 class="mt-2 text-lg font-medium text-gray-900">Turn LinkedIn Profiles Into Leads</h2>
	<p class="mt-2 max-w-[589px] text-center text-base font-medium text-gray-500">
		Add the LinkedIn profile URL of anyone you want to monitor—whether it’s your own brand,
		competitors, companies, or industry thought leaders.
	</p>
	<p class="mb-[14px] mt-8 text-base font-medium text-gray-500">See how it works</p>
	<Button variant="outline">
		<Play />
		Watch Tutorial</Button
	>
</div>
<div class="px-[34px] text-center">
	<p class="mb-2 text-sm font-medium text-gray-700">LinkedIn profile url</p>
	<ul class="max-h-[148px] overflow-y-auto">
		{#each tableStore.urls as url, index}
			<li class="mb-2 flex items-center">
				<Input
					bind:value={url}
					placeholder="https://www.linkedin.com/in/johndoe"
					class={[
						'h-11 rounded-r-none border-gray-300 outline-none focus:!outline-none',
						url.length > 0 && !isValidUrl(url) && 'border-red-500'
					]}
				/>
				<button
					class="flex h-11 w-[52px] items-center justify-center border border-l-0 border-gray-300"
					onclick={() => removeUrl(index)}
				>
					<Cross />
				</button>
			</li>
		{/each}
	</ul>
	<Button variant="brand" onclick={() => addUrl('')}>
		<Plus />
		Add more profiles</Button
	>
</div>
