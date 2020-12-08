import { ErrorInterface } from '../../../../utils/errors/error.interface';
import { ServiceModel } from '../../../../models/service/service.model';
import { getRowByField } from '../../../common/steps/get-row-by-field';
import { TablesEnum } from '../../../../enums/tables-name.enum';
import { ServicesDbEnum } from '../../../../enums/services-table/services-db.enum';

export const step1GetService = (callback: (err: ErrorInterface, statusCode: number, result: ServiceModel[]) => void,
                                id: string) => {
  getRowByField(callback, TablesEnum.Services, JSON.parse(id), ServicesDbEnum.Id);
}
