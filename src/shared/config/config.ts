export interface EnvironmentVariables {
  env: string;
  secret: string;
  port: number;
  db: {
    dialect: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
  };
}

export default () => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return {
        env: process.env.NODE_ENV,
        secret: process.env.SECRET,
        port: process.env.PORT || 3000,
        db: {
          dialect: process.env.DB_DIALECT,
          database: process.env.DB_NAME,
          logging: false,
        },
      };
    default:
      return {
        env: process.env.NODE_ENV,
        secret: process.env.SECRET,
        port: process.env.PORT || 3000,
        db: {
          dialect: process.env.DB_DIALECT,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
      };
  }
};
