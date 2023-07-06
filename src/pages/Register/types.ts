import { z } from "zod";
import { registerSchema } from "../../providers/AuthProvider/validator";

export type iRegisterClient = z.infer<typeof registerSchema>;
