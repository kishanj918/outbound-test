<script lang="ts">
	import Calendar from '$lib/icons/Calendar.svelte';

	export let value: string = '';
	export let id: string = 'date-input';
	export let name: string = 'date';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let placeholder: string = 'Select date';

	function formatDisplayDate(dateString: string): string {
		if (!dateString) return '';

		const date = new Date(dateString);
		if (isNaN(date.getTime())) return '';

		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	$: displayDate = formatDisplayDate(value);
</script>

<div class="date-input-wrapper w-full">
	<input
		{id}
		{name}
		type="date"
		bind:value
		{required}
		{disabled}
		class="date-input"
		aria-label="Date selector"
	/>

	<div class="date-display">
		<Calendar />
		<span class="date-text ml-2 flex text-sm font-medium text-gray-700"
			>{displayDate || placeholder}</span
		>
	</div>
</div>

<style>
	.date-input-wrapper {
		position: relative;
		width: 100%;
	}

	.date-input {
		position: absolute;
		opacity: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
		z-index: 10;
	}

	.date-input::-webkit-calendar-picker-indicator {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}

	.date-display {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		padding: 8px 16px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		pointer-events: none;
	}

	.date-text {
		font-size: 16px;
		font-weight: 500;
		color: #1a202c;
	}

	.date-input:focus + .date-display {
		border-color: #3b82f6;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
	}

	.date-input:disabled + .date-display {
		opacity: 0.6;
		background-color: #f1f5f9;
		cursor: not-allowed;
	}
</style>
