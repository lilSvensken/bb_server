import { UserConstFields } from './common/user-const-fields.interface';

export interface UserDbModel extends UserConstFields {
  id: number;
  passwordHash: string,
  serviceIdsStr?: string;
  cityId?: number;
  myMasterIdsStr?: string;
  myClientIdsStr?: string;
}
