import { Response, Request } from 'express';

export const root = (req: Request, res: Response) => {
  res.status(200).send('<h1>Express server running</h1>');
};
