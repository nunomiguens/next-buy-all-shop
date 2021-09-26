import db from './db';

const getError = (err: {
  response: { data: { message: any } };
  message: any;
}) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

// eslint-disable-next-line no-unused-vars
const onError = async (
  err: { toString: () => any },
  req: any,
  res: {
    // eslint-disable-next-line no-unused-vars
    status: (arg0: number) => {
      (): any;
      new (): any;
      // eslint-disable-next-line no-unused-vars
      send: { (arg0: { message: any }): void; new (): any };
    };
  }
) => {
  await db.disconnect();
  res.status(500).send({ message: err.toString() });
};
export { getError, onError };
