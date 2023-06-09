import { ErrorInterface } from '../../../utils/errors/error.interface';
import { ErrorTypes } from '../../../utils/errors/error.types';
import { queryCountRowsByFieldValue } from '../querys/query-count-rows-by-field-value';

export const countRowsByFieldValue = (callback: (err: ErrorInterface, statusCode: number, result: number) => void,
                                      table: string, field: string | number, fieldName: string) => {
  let error: ErrorInterface = {
    type: '',
    field: '',
    message: '',
    status: 0,
  };

  queryCountRowsByFieldValue((err, result) => {
    if (!err) {
      callback(null, 200, result);
    } else {
      error.type = ErrorTypes.InternalServerError;
      error.message = err.message;
      error.status = 500;
      callback(error, error.status, null);
    }
  }, table, field, fieldName);
}
