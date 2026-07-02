import { Request, Response } from 'express';

export const handler = (req: Request, res: Response) => {
  const data = await fetchData();
  res.json(data);
};
