import { isValidUrl } from '$lib/utils/isValidUrl';

type Store = {
	resource: string | null;
	urls: string[];
	filterDate: Date;
	updateFrequency: Frequency;
	updateTime: string;
};
export enum Frequency {
	Daily = 'daily',
	Weekly = 'weekly'
}
export const frequencyLabels = {
	[Frequency.Daily]: 'Daily',
	[Frequency.Weekly]: 'Weekly'
};
export const frequencyOptions = [
	{
		label: 'Daily',
		value: Frequency.Daily
	},
	{
		label: 'Weekly',
		value: Frequency.Weekly
	}
];

export const tableStore = $state<Store>({
	resource: null,
	urls: ['https://superforms.rocks/'],
	filterDate: new Date(),
	updateFrequency: Frequency.Daily,
	updateTime: '12:00'
});

export const currentStep = $state({ value: 0 });
export const nextStep = () => {
	currentStep.value += 1;
};
export const previousStep = () => {
	currentStep.value -= 1;
};
export const addUrl = (url: string) => {
	tableStore.urls.push(url);
};
export const removeUrl = (index: number) => {
	tableStore.urls.splice(index, 1);
};
export const canContinue = () => {
	switch (currentStep.value) {
		case 0:
			return tableStore.resource !== null;
		case 1:
			return tableStore.urls.length > 0 && tableStore.urls.every((url) => isValidUrl(url));
		case 2:
			return (
				tableStore.filterDate.length > 0 &&
				tableStore.updateFrequency.length > 0 &&
				tableStore.updateTime.length > 0
			);
		default:
			return true;
	}
};
