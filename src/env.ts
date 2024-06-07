
import { z } from "zod"

const envSchema = z.object({
    PORT: z.string().default("3000"),
    NODE_ENV: z.string().default("development"),
    DATABASE_URL: z.string(),
})

export type Env = z.infer<typeof envSchema>


const getEnv = (): Env => {


    const env = process.env
    const parsedEnv = envSchema.parse(env)
    return parsedEnv

}

export const env = getEnv()






