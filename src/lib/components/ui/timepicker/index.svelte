<script lang="ts">
	import Clock from '$lib/icons/Clock.svelte';

	export let value: string = '';
	export let id: string = 'time-input';
	export let name: string = 'time';
	export let required: boolean = false;
	export let disabled: boolean = false;

	function formatDisplayTime(timeString: string): string {
		if (!timeString) return '';

		const [hoursStr, minutesStr] = timeString.split(':');
		const hours = parseInt(hoursStr, 10);
		const minutes = minutesStr.padStart(2, '0');

		const period = hours >= 12 ? 'pm' : 'am';
		const displayHours = hours % 12 || 12;

		return `${displayHours}:${minutes} ${period}`;
	}

	$: displayTime = formatDisplayTime(value);
</script>

<div class="time-input-wrapper h-11 w-full">
	<input
		{id}
		{name}
		type="time"
		bind:value
		{required}
		{disabled}
		class="time-input"
		aria-label="Time selector"
	/>

	<div class="time-display h-full">
		<span class="time-text">{displayTime || '12:30 pm'}</span>

		<span class="flex h-full items-center justify-center border-l border-gray-200 pl-4">
			<Clock />
		</span>
	</div>
</div>

<style>
	.time-input-wrapper {
		position: relative;
		width: 100%;
	}

	.time-input {
		position: absolute;
		opacity: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
		z-index: 10;
	}

	.time-input::-webkit-calendar-picker-indicator {
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

	.time-display {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		border: 1px solid #eaecf0;
		border-radius: 8px;
		padding: 0px 16px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		pointer-events: none;
	}

	.time-text {
		font-size: 16px;
		font-weight: 500;
		color: #1a202c;
	}

	.time-input:focus + .time-display {
		border-color: #3b82f6;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
	}

	.time-input:disabled + .time-display {
		opacity: 0.6;
		background-color: #f1f5f9;
		cursor: not-allowed;
	}
</style>
