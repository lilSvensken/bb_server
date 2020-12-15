import { ErrorInterface } from '../../../../utils/errors/error.interface';
import { step4AuthResult, StepsResultAuthorization } from '../interfaces/steps-result-authorization.interface';

export const step5SendApi = (callback: (err: ErrorInterface, statusCode: number, result: step4AuthResult, totalItems: number, token: string) => void,
                             stepsResults: StepsResultAuthorization) => {
  callback(null, 200, stepsResults.step4AuthResult, null, stepsResults.step3CreateToken);
}
