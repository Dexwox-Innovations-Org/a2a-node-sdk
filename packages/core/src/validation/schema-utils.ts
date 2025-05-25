import { jsonSchemaToZod } from 'json-schema-to-zod';
import { z, ZodTypeAny } from 'zod';

export function validateWithSchema<T>(
  schema: Record<string, any>, 
  data: unknown
): z.SafeParseReturnType<unknown, T> {
  const zodSchema = jsonSchemaToZod(schema, { module: 'cjs' });
  const validator = z.object(zodSchema as unknown as Record<string, ZodTypeAny>);
  return validator.safeParse(data) as z.SafeParseReturnType<unknown, T>;
}

export function createValidator<T>(schema: Record<string, any>) {
  const zodSchema = jsonSchemaToZod(schema, { module: 'cjs' });
  const validator = z.object(zodSchema as unknown as Record<string, ZodTypeAny>);
  
  return {
    validate: (data: unknown) => validator.safeParse(data) as z.SafeParseReturnType<unknown, T>,
    schema: validator
  };
}
