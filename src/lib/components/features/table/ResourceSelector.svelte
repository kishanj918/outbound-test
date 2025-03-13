<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import UserPlus from '$lib/icons/UserPlus.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Help from '$lib/icons/Help.svelte';
	import { tableStore } from '$lib/store/table.svelte';

	const resources = {
		linkedIn: [
			{
				label: 'Turn LinkedIn Profiles Into Leads',
				icon: UserPlus,
				description:
					'Collect posts from any LinkedIn profile and transform them into a valuable lead list in seconds.',
				resource: 'linkedin-profiles'
			}
		]
	};
</script>

<div>
	<h2 class="text-base font-medium text-gray-700">LinkedIn</h2>
	<Separator />
	<div class="mt-4 grid grid-cols-3 gap-4">
		{#each resources.linkedIn as resource}
			<button
				onclick={() => (tableStore.resource = resource.resource)}
				class={[
					'text-left',
					tableStore.resource === resource.resource && 'rounded-2xl border border-brand'
				]}
			>
				<Card.Root
					class="relative rounded-2xl shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.06),_0px_4px_8px_-2px_rgba(16,24,40,0.1)]"
				>
					<span class="absolute right-4 top-8">
						<Help />
					</span>
					<Card.Header class="p-4">
						<Card.Title class="flex items-center gap-[14px]">
							<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
								<resource.icon />
							</div>
							<p class="text-base font-medium text-gray-900">{resource.label}</p>
						</Card.Title>
					</Card.Header>

					<Card.Content class="p-4 pt-0">
						<Separator class="mb-4 border-gray-200" />
						<p class="text-sm text-gray-500">{resource.description}</p>
					</Card.Content>
				</Card.Root>
			</button>
		{/each}
	</div>
</div>
