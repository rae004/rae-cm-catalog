import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1723388806243 implements MigrationInterface {
  name = 'InitialMigration1723388806243';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`field_value\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`displayName\` varchar(255) NOT NULL, \`parameterName\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`fieldId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`field\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`displayName\` varchar(255) NOT NULL, \`parameterName\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`contentTypeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`content_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`displayName\` varchar(255) NOT NULL, \`parameterName\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`field_value\` ADD CONSTRAINT \`FK_573f3b44eb57c0e0e2bad57c425\` FOREIGN KEY (\`fieldId\`) REFERENCES \`field\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`field\` ADD CONSTRAINT \`FK_9124c70d14021d999fff1d9ff9b\` FOREIGN KEY (\`contentTypeId\`) REFERENCES \`content_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`field\` DROP FOREIGN KEY \`FK_9124c70d14021d999fff1d9ff9b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`field_value\` DROP FOREIGN KEY \`FK_573f3b44eb57c0e0e2bad57c425\``,
    );
    await queryRunner.query(`DROP TABLE \`content_type\``);
    await queryRunner.query(`DROP TABLE \`field\``);
    await queryRunner.query(`DROP TABLE \`field_value\``);
  }
}
