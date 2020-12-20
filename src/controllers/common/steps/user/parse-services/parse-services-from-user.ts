import { ErrorInterface } from '../../../../../utils/errors/error.interface';
import { UserDbModel } from '../../../../../models/user/user-db.model';
import { UserResponseModel } from '../../../../../models/user/user-response.model';
import { getRowsByField } from '../../get-rows-by-field';
import { TablesEnum } from '../../../../../enums/tables-name.enum';
import { CitiesDbEnum } from '../../../../../enums/cities/cities-db.enum';
import { isCities, isCity } from '../../../../../models/city/check-is-models/check-is-cities';
import { CityModel } from '../../../../../models/city/city.model';
import { isServices } from '../../../../../models/service/check-is-models/check-is-services';
import { ServicesDbEnum } from '../../../../../enums/services/services-db.enum';
import { ServiceModel } from '../../../../../models/service/service.model';
import { UserRole, UserRoleType } from '../../../../../types/user-role.type';


export const parseServicesFromUser = (callback: (err: ErrorInterface, statusCode: number, servicesRes: ServiceModel[]) => void,
                                      serviceIds: number[], role?: UserRole) => {

  switch (true) {
    case !serviceIds || role === UserRoleType.CLIENT:
      callback(null, 204, null);
      break;

    default:
      getRowsByField((err, statusCode, result) => {
        if (!err && isServices(result)) {
          callback(null, 200, result);
        } else {
          callback(err, statusCode, null);
        }
      }, TablesEnum.Services, serviceIds, ServicesDbEnum.Id)
  }
}
