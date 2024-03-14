import { z } from 'zod'

export const updateProfileFormSchema = z.object({
  bio: z.string(),
})

export type UpdateProfileFormData = z.infer<typeof updateProfileFormSchema>
