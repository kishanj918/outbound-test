import data from '$lib/data/posts.mock.json';
type Post = {
	id: number;
	post: string;
	author: string;
	engagements: number;
};
export type Store = {
	resource: string | null;
	urls: string[];
	filterDate: string;
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
	filterDate: new Date().toISOString(),
	updateFrequency: Frequency.Daily,
	updateTime: '12:00'
});
export const posts = $state<Post[]>(data);
export const selectedPostsIDs = $state<{ value: number[] }>({ value: [] });

export const currentStep = $state({ value: 0 });
