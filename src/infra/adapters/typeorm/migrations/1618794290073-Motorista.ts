import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Motorista_1618794290073 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Motorista',
      columns: [
        {
          name: 'CodigoMotorista',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'NomeMotorista',
          type: 'varchar',
          length: '200'
        },
        {
          name: 'CPF',
          type: 'varchar',
          length: '11'
        },
        {
          name: 'InseridoEm',
          type: 'datetime',
          default: 'datetime(\'now\',\'localtime\')'
        }
      ],
      uniques: [
        {
          name: 'UK_Motorista_CPF',
          columnNames: ['CPF']
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Motorista')
  }
}
