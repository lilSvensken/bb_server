import { Request, Response } from 'express';
import { stepsIteration } from '../../common/steps-iteration/steps-iteration';
import { step1GetService } from './steps/step-1-get-service';

export function getById(req: Request, res: Response) {
  const reqId: string = req.params.id;

  const stepsIter = [
    { fn: step1GetService, params: [reqId], next: false }
  ]

  stepsIteration(stepsIter, res);
}
