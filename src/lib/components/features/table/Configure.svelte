<script>
	import UserPlus from '$lib/icons/UserPlus.svelte';
	import Stepper from './Stepper.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { tableStore, frequencyOptions, frequencyLabels } from '$lib/store/table.svelte';
	import Help from '$lib/icons/Help.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
</script>

<Stepper />

<div class="mt-8 flex flex-col items-center justify-center">
	<div class="bg-brand-100 flex h-14 w-14 items-center justify-center rounded-2xl text-brand">
		<UserPlus />
	</div>
	<h2 class="mt-2 text-lg font-medium text-gray-900">Turn LinkedIn Profiles Into Leads</h2>
	<p class="mt-2 max-w-[589px] text-center text-base font-medium text-gray-500">
		Set automatic updates to refresh your on a regular bases, and use date filters to include only
		the posts that fit your criteria.
	</p>
</div>
<div class="mx-auto mt-8 w-[520px]">
	<div class="mb-6">
		<p class="mb-2 text-sm font-medium text-gray-900">Filter by</p>
		<div class="flex items-center justify-between rounded-2xl border border-gray-200 p-4">
			<p class="text-base text-gray-900">Posts newer than</p>
			<Input type="date" class="w-fit" bind:value={tableStore.filterDate} />
		</div>
	</div>
	<div class="mb-6">
		<div class="mb-2 flex items-center gap-2">
			<p class="text-sm font-medium text-gray-900">
				How often do you want us to check for updates on social media?
			</p>
			<Help />
		</div>
		<Select.Root type="single" bind:value={tableStore.updateFrequency}>
			<Select.Trigger class="h-11">{frequencyLabels[tableStore.updateFrequency]}</Select.Trigger>
			<Select.Content>
				{#each frequencyOptions as frequency}
					<Select.Item value={frequency.value}>{frequency.label}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</div>

	<div>
		<div class="mb-2 flex items-center gap-2">
			<p class="text-sm font-medium text-gray-900">
				At what time should we check for updates on social media?
			</p>
			<Help />
		</div>
		<Input type="time" bind:value={tableStore.updateTime} />
	</div>
</div>
