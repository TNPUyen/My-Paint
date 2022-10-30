/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export default () => ({
    appDatabase: process.env.APP_DATABASE,
});