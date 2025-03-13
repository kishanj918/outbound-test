<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { canContinue, currentStep, nextStep } from '$lib/store/table.svelte';
	import ResourceSelector from './ResourceSelector.svelte';
	import Setup from './Setup.svelte';
	let { isOpen = $bindable(false) } = $props();
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
		<div
			class="absolute bottom-0 left-6 right-6 flex justify-between border-t border-gray-200 py-4"
		>
			<Button size="sm" variant="outline" onclick={() => (isOpen = false)}>Cancel</Button>
			<Button size="sm" variant="brand" disabled={!canContinue()} onclick={nextStep}
				>Continue</Button
			>
		</div>
	</Dialog.Content>
</Dialog.Root>
