<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { currentStep } from '$lib/store/table.svelte';
</script>

<div class="flex items-center justify-center">
	<span class="flex flex-col items-center">
		<span
			class={[
				'mb-[10px] box-content flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium',
				currentStep.value >= 1 ? 'border-brand text-brand' : 'text-242E39 border-[#A1AEBE]'
			]}
		>
			01
		</span>
		<span
			class={['text-sm font-medium ', currentStep.value >= 1 ? 'text-brand' : 'text-[#465668]']}
		>
			Setup
		</span>
	</span>
	<Separator
		class={[
			'ml-3 mt-4 flex h-0.5 w-20 self-start',
			currentStep.value > 1 ? 'bg-brand' : 'bg-[#A1AEBE]'
		]}
	/>
	<span class="flex flex-col items-center">
		<span
			class={[
				'mb-[10px] box-content flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium',
				currentStep.value >= 2 ? 'border-brand text-brand' : 'text-242E39 border-[#A1AEBE]'
			]}
		>
			02
		</span>
		<span class={['text-sm font-medium ', currentStep.value >= 2 ? 'text-brand' : 'text-[#465668]']}
			>Configure</span
		>
	</span>
	<Separator
		class={[
			'ml-3 mt-4 flex h-0.5 w-20 self-start',
			currentStep.value > 2 ? 'bg-brand' : 'bg-[#A1AEBE]'
		]}
	/>
	<span class="flex flex-col items-center">
		<span
			class={[
				'mb-[10px] box-content flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium',
				currentStep.value === 3 ? 'border-brand text-brand' : 'text-242E39 border-[#A1AEBE]'
			]}
		>
			03
		</span>
		<span
			class={['text-sm font-medium ', currentStep.value === 3 ? 'text-brand' : 'text-[#465668]']}
			>Preview</span
		>
	</span>
</div>
