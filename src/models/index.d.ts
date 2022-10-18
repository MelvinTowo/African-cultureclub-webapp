import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type AnnouncementsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Announcements {
  readonly id: string;
  readonly Title?: string | null;
  readonly Date?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Announcements, AnnouncementsMetaData>);
  static copyOf(source: Announcements, mutator: (draft: MutableModel<Announcements, AnnouncementsMetaData>) => MutableModel<Announcements, AnnouncementsMetaData> | void): Announcements;
}

export declare class Events {
  readonly id: string;
  readonly Title?: string | null;
  readonly Date?: string | null;
  readonly Details?: string | null;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Events, EventsMetaData>);
  static copyOf(source: Events, mutator: (draft: MutableModel<Events, EventsMetaData>) => MutableModel<Events, EventsMetaData> | void): Events;
}