<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { toggleAllPostsSelection, togglePostSelection } from '$lib/store/table.functions';
	import { posts, selectedPostsIDs } from '$lib/store/table.svelte';
</script>

<div class="overflow-y-auto">
	<table class="w-full">
		<thead>
			<tr class="border-b border-gray-300 bg-gray-100">
				<th
					class="border-l-0 border-r border-gray-300 px-6 py-1.5 text-left text-xs font-semibold text-gray-600"
				>
					<Checkbox
						checked={selectedPostsIDs.value.length === posts.length}
						onClick={toggleAllPostsSelection}
					/>
				</th>
				<th
					class="border-l-0 border-r border-gray-300 px-6 py-1.5 text-left text-xs font-semibold text-gray-600"
				>
					Post
				</th>
				<th
					class="border-l-0 border-r border-gray-300 px-6 py-1.5 text-left text-xs font-semibold text-gray-600"
				>
					Author
				</th>
				<th class="border-none px-6 py-1.5 text-left text-xs font-semibold text-gray-600">
					Total Engagements
				</th>
			</tr>
		</thead>
		<tbody class="overflow-y-scroll">
			{#each posts as post (post.id)}
				{@const isChecked = selectedPostsIDs.value.includes(post.id)}
				<tr class="border-b border-gray-200">
					<td class="px-6 py-1.5 text-sm text-gray-600">
						<Checkbox checked={isChecked} onClick={() => togglePostSelection(post.id)} />
					</td>
					<td class="px-6 py-1.5 text-sm text-gray-600">{post.post}</td>
					<td class="px-6 py-1.5 text-sm text-gray-600">{post.author}</td>
					<td class="px-6 py-1.5 text-sm text-gray-600">{post.engagements}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
