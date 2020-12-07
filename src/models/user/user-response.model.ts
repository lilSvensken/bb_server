import { UserConstFields } from './common/user-const-fields.interface';
import { ServiceModel } from '../service/service.model';
import { CityModel } from '../city/city.model';

export interface UserResponseModel extends UserConstFields {
  services?: ServiceModel[];
  city?: CityModel;
}