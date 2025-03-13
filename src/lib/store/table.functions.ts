import { isValidUrl } from '$lib/utils/isValidUrl';
import { selectedPostsIDs, posts, tableStore, currentStep, Frequency } from './table.svelte';

export const toggleAllPostsSelection = () => {
	if (selectedPostsIDs.value.length === posts.length) {
		selectedPostsIDs.value = [];
	} else {
		selectedPostsIDs.value = posts.map((post) => post.id);
	}
};
export const togglePostSelection = (id: number) => {
	selectedPostsIDs.value = selectedPostsIDs.value.includes(id)
		? selectedPostsIDs.value.filter((id) => id !== id)
		: [...selectedPostsIDs.value, id];
};

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
				tableStore.filterDate &&
				tableStore.updateFrequency.length > 0 &&
				tableStore.updateTime.length > 0
			);
		default:
			return true;
	}
};

export const resetTable = () => {
	tableStore.resource = null;
	tableStore.urls = [];
	tableStore.filterDate = new Date();
	tableStore.updateFrequency = Frequency.Daily;
	tableStore.updateTime = '12:00';
	selectedPostsIDs.value = [];
	currentStep.value = 0;
};
