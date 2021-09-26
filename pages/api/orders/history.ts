import nc from 'next-connect';
import Order from '../../../models/Order';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';
import { onError } from '../../../utils/error';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = nc({
  onError,
});
handler.use(isAuth);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  // @ts-ignore
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});

export default handler;
