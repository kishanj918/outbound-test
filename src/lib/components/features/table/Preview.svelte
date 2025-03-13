<script>
	import Stepper from './Stepper.svelte';
	import Posts from './Posts.table.svelte';
	import posts from '$lib/data/posts.mock.json';
	import Help from '$lib/icons/Help.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<Stepper />
<div class="">
	<div class="flex max-h-[493px] flex-col overflow-hidden rounded-[12px] border border-gray-300">
		<div class="flex items-center justify-between border-b border-gray-300 bg-gray-100 px-6 py-2">
			<p class="text-sm font-medium text-gray-700">Preview Results</p>
			<div class="flex items-center gap-4">
				<span
					class="border-blue-dark-300 bg-blue-dark-100 text-blue-dark-600 flex h-[22px] items-center justify-center rounded border px-2 text-xs font-medium"
					>Total posts: {posts.length}</span
				>
				<span
					class="bg-green-dark-100 text-green-dark-600 border-green-dark-300 flex h-[22px] items-center justify-center rounded border px-2 text-xs font-medium"
					>Total posts: 5219</span
				>
			</div>
		</div>
		<Posts />
	</div>
	<div class="mt-5 flex items-center justify-center">
		<p class="mr-1">Lead count</p>
		<Help />
		<Input class="ml-4 h-8 w-20 border-gray-300 text-sm font-medium text-gray-900" value={50} />
		<span
			class="ml-4 flex h-[22px] items-center justify-center rounded border border-gray-300 bg-gray-100 px-2 text-xs font-medium text-gray-900"
			>150 Credits</span
		>
	</div>
</div>
