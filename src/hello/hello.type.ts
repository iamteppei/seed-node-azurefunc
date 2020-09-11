import * as Joi from '@hapi/joi';
import 'joi-extract-type/dist/index';
import { ValidatedRequestSchema } from 'express-joi-validation';
import { helloCreationValidator } from './hello.validator';
import { ContainerTypes } from '../common/containerTypes';

export interface HelloCreationRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Joi.extractType<typeof helloCreationValidator>;
}
