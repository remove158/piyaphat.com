// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
	title: z.string(),
	description: z.string(),
	author: reference('authors'),
	pubDate: z.coerce.date(),
	categories: z.array(reference('categories')),
	heroImage: z.string().optional(),
}),
});

const authors  = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		git: z.string().url()
	}),
});

const categories  = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
	}),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {  blog, authors, categories};