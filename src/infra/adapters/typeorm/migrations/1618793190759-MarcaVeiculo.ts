import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class MarcaVeiculo_1618793190759 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'MarcaVeiculo',
      columns: [
        {
          name: 'CodigoMarcaVeiculo',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'NomeMarca',
          type: 'varchar',
          length: '50'
        },
        {
          name: 'UrlLogo',
          type: 'varchar(500)',
          isNullable: true
        },
        {
          name: 'InseridoEm',
          type: 'datetime',
          default: 'datetime(\'now\',\'localtime\')'
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('MarcaVeiculo')
  }
}
