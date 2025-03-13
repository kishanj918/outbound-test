<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { canContinue, nextStep, previousStep, resetTable } from '$lib/store/table.functions';
	import type { Store } from '$lib/store/table.svelte';
	import { currentStep, selectedPostsIDs, tableStore } from '$lib/store/table.svelte';
	import Configure from './Configure.svelte';
	import Preview from './Preview.svelte';
	import ResourceSelector from './ResourceSelector.svelte';
	import Setup from './Setup.svelte';
	let {
		isOpen = $bindable(false),
		onComplete
	}: { isOpen: boolean; onComplete: (data: Store, selectedPostIds: number[]) => void } = $props();
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Content class="flex h-[800px] max-w-[1008px] flex-col py-6 pt-5">
		<Dialog.Header>
			<Dialog.Title class="text-lg font-medium text-gray-900">Create New Table</Dialog.Title>
		</Dialog.Header>
		<Separator class="-mx-5 box-content px-5" />
		{#if currentStep.value === 0}
			<ResourceSelector />
		{/if}
		{#if currentStep.value === 1}
			<Setup />
		{/if}
		{#if currentStep.value === 2}
			<Configure />
		{/if}
		{#if currentStep.value === 3}
			<Preview />
		{/if}
		<div
			class="absolute bottom-0 left-6 right-6 flex justify-between border-t border-gray-200 py-4"
		>
			<Button size="sm" variant="outline" onclick={() => (isOpen = false)}>Cancel</Button>
			<div>
				{#if currentStep.value > 1}<Button variant="ghost" onclick={previousStep}>Back</Button>
				{/if}
				{#if currentStep.value < 3}
					<Button size="sm" variant="brand" disabled={!canContinue()} onclick={nextStep}
						>Continue</Button
					>
				{/if}
				{#if currentStep.value === 3}
					<Button
						size="sm"
						variant="brand"
						disabled={selectedPostsIDs.value.length === 0}
						onclick={() => {
							isOpen = false;
							onComplete(tableStore, selectedPostsIDs.value);

							resetTable();
						}}>Create Table</Button
					>
				{/if}
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
