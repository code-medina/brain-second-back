import * as z from 'zod';
const MAX_CONTENT = 30000;
const MAX_TITLE = 1000;
const MIN_CONTENT = 3;
const MIN_TITLE = 3;

export const KnowledgeSchema = z.object({
  _id: z.string().min(1, '[_id] invalid'),
  title: z
    .string()
    .trim()
    .min(MIN_TITLE, '[title] too short')
    .max(MAX_TITLE, '[title] too langer'),
  content: z
    .string()
    .trim()
    .min(MIN_CONTENT, '[content] too short')
    .max(MAX_CONTENT, '[content] too larger'),
  createdAt: z.iso.datetime('invalid date'),
});
export type Knowledge = z.infer<typeof KnowledgeSchema>;

export const CreateKnowledgeSchema = KnowledgeSchema.omit({
  _id: true,
  createdAt: true,
});
export type CreateKnowledgeDTO = z.infer<typeof CreateKnowledgeSchema>;

export const UpdateKnowledgeSchema = KnowledgeSchema.partial().extend({
  _id: z.string().min(1, '[_id] invalid'),
});
export type UpdateKnowledDTO = z.infer<typeof UpdateKnowledgeSchema>;

export const IdKnowledgeSchema = z.object({
  id: z.string().min(1, '[_id] invalid'),
});
export type IdKnowledgeDTO = z.infer<typeof IdKnowledgeSchema>;
