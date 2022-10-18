// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Announcements, Events } = initSchema(schema);

export {
  Announcements,
  Events
};