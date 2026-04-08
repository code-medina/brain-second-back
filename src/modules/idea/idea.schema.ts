import * as z from 'zod';

const MAX_TITLE = 30;
const MIN_TITLE = 2;
const MAX_DESCRIPTION = 300;
const MIN_DESCRIPTIOIN = 2;

//id
export const IdIdeaSchema = z.object({
  id: z.string().min(1, '[_id] invalid'),
});
export type IdIdea = z.infer<typeof IdIdeaSchema>;

//idea
export const IdeaSchema = z.object({
  _id: z.string().min(1, '[_id] invalid'),
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
  createdAt: z.iso.datetime('createdAt invalid format'),
});
export type Idea = z.infer<typeof IdeaSchema>;

//create
export const CreateIdeaSchema = IdeaSchema.omit({ _id: true, createdAt: true });
export type CreateIdeaDTO = z.infer<typeof CreateIdeaSchema>;

//update
export const UpdateIdeaSchema = IdeaSchema.partial().extend({
  _id: z.string().min(1, '[_id] invalid'),
});
export type UpdateIdeaDTO = z.infer<typeof UpdateIdeaSchema>;
