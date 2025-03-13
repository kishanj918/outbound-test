<script>
	import CreateTable from '$lib/components/features/table/CreateTable.modal.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	import Plus from '$lib/icons/Plus.svelte';
	let isOpen = $state(false);
</script>

<main class="flex h-screen items-center justify-center">
	<Plus />
	<Button variant="brand" size="sm" onclick={() => (isOpen = true)}>Create New Table</Button>
</main>
<CreateTable
	bind:isOpen
	onComplete={(data, selectedPostIds) => {
		console.log(data, selectedPostIds);
	}}
/>
