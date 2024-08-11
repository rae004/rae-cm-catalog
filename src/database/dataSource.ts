import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: [`dist/database/migrations/*{.ts,.js}`],
  // migrationsTableName: 'migrations', // Default Optional table name for migrations
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
