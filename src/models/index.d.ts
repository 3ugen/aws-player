import { ModelInit, MutableModel } from "@aws-amplify/datastore";





type SongsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Songs {
  readonly id: string;
  readonly title?: string;
  readonly length?: number;
  readonly digest?: string;
  readonly created_at?: string;
  readonly user?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Songs, SongsMetaData>);
  static copyOf(source: Songs, mutator: (draft: MutableModel<Songs, SongsMetaData>) => MutableModel<Songs, SongsMetaData> | void): Songs;
}