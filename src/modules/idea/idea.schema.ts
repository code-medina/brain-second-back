import * as z from 'zod';

const MAX_TITLE = 30;
const MIN_TITLE = 2;
const MAX_DESCRIPTION = 300;
const MIN_DESCRIPTIOIN = 2;
export const IdeaSchema = z.object({
  _id: z.string().trim().min(1),
  title: z
    .string()
    .trim()
    .min(MIN_TITLE, 'title too short')
    .max(MAX_TITLE, 'title too  long'),
  description: z
    .string()
    .trim()
    .min(MIN_DESCRIPTIOIN, 'description too short')
    .max(MAX_DESCRIPTION, 'description too long'),
    createdAt:z.iso.datetime("createdAt invalid format")
});
export type Idea=z.infer<typeof IdeaSchema>;

//create
export const CreateIdeaSchema=IdeaSchema.omit({_id:true,createdAt:true})
export type CreateIdeaDTO=z.infer<typeof CreateIdeaSchema>;



