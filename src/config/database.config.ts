const config = {
  test: {
    type: 'oracle',
    host: process.env.ORACLE_HOST || 'oracledb',
    port: +process.env.ORACLE_PORT || 1521,
    name: process.env.ORACLE_DBNAME || 'test',
    username: process.env.ORACLE_USERNAME || 'SYSTEM',
    password: process.env.ORACLE_PASSWORD || 'Oracle@123',
    sid: process.env.ORACLE_SID || 'XE',
  },
  development: {
    type: 'oracle',
    host: process.env.ORACLE_HOST || 'oracledb',
    port: +process.env.ORACLE_PORT || 1521,
    name: process.env.ORACLE_DBNAME || 'dev',
    username: process.env.ORACLE_USERNAME || 'SYSTEM',
    password: process.env.ORACLE_PASSWORD || 'Oracle@123',
    sid: process.env.ORACLE_SID || 'XE',
  },
  production: {
    type: 'oracle',
    host: process.env.ORACLE_HOST,
    port: +process.env.ORACLE_PORT,
    name: process.env.ORACLE_DBNAME,
    username: process.env.ORACLE_USERNAME,
    password: process.env.ORACLE_PASSWORD,
    sid: process.env.ORACLE_SID,
  },
};

export default config[process.env.NODE_ENV];