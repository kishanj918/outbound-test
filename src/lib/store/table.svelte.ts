import { isValidUrl } from '$lib/utils/isValidUrl';

type Store = {
	resource: string | null;
	urls: string[];
	filterDate: string;
	updateFrequency: string;
	updateTime: string;
};

export const updateFrequencyOptions = [
	{
		label: 'Daily',
		value: 'daily'
	},
	{
		label: 'Weekly',
		value: 'weekly'
	}
];

export const tableStore = $state<Store>({
	resource: null,
	urls: [''],
	filterDate: new Date().toISOString(),
	updateFrequency: 'daily',
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
