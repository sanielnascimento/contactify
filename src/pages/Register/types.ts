import { z } from "zod";
import { registerSchema } from "./validator";

export type iRegisterClient = z.infer<typeof registerSchema>;
