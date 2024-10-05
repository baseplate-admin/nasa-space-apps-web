import { writable } from 'svelte/store';

export const farms = writable<{}[]>(new Array());
