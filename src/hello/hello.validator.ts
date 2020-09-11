import * as Joi from '@hapi/joi';

export const helloCreationValidator = Joi.object({
  name: Joi.string().required()
});
