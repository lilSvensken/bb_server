import { ErrorInterface } from '../../../utils/errors/error.interface';
import { queryGetRowsByField } from '../querys/query-get-rows-by-field';
import { ErrorTypes } from '../../../utils/errors/error.types';

export const checkOriginalOnField = (callback: (err: ErrorInterface, statusCode: number) => void,
                                     table: string, field: string, fieldName: string) => {
  let error: ErrorInterface = {
    type: '',
    field: '',
    message: '',
    status: 0,
  };

  queryGetRowsByField((err, result) => {
    switch (true) {
      case !!(err):
        error.type = ErrorTypes.InternalServerError;
        error.message = err.message;
        error.status = 500;
        callback(error, error.status);
        break;

      case !!(Object.keys(result).length):
        error.type = ErrorTypes.BadRequest;
        error.field = fieldName;
        error.message = `${ table } with field "${ error.field }" already exists`;
        error.status = 400;
        callback(error, error.status);
        break;

      default:
        callback(null, 200);
    }
  }, table, `${ fieldName }='${ field }'`);
}
