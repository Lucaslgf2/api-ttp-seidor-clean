import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Cor_1618793176270 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Cor',
      columns: [
        {
          name: 'CodigoCor',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'NomeCor',
          type: 'varchar',
          length: '50'
        },
        {
          name: 'CodigoHexadecimal',
          type: 'varchar',
          length: '7',
          isNullable: true
        },
        {
          name: 'InseridoEm',
          type: 'datetime',
          default: 'datetime(\'now\',\'localtime\')'
        }
      ],
      uniques: [
        {
          name: 'UK_Cor_NomeCor',
          columnNames: ['NomeCor']
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Cor')
  }
}
