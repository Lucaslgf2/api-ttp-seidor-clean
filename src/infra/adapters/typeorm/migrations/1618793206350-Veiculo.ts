import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Veiculo_1618793206350 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Veiculo',
      columns: [
        {
          name: 'CodigoVeiculo',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'Placa',
          type: 'varchar',
          length: '7'
        },
        {
          name: 'CodigoCor',
          type: 'integer'
        },
        {
          name: 'CodigoMarcaVeiculo',
          type: 'integer'
        },
        {
          name: 'InseridoEm',
          type: 'datetime',
          default: 'datetime(\'now\',\'localtime\')'
        }
      ],
      uniques: [
        {
          name: 'UK_Veiculo_Placa',
          columnNames: ['Placa']
        }
      ],
      foreignKeys: [
        {
          name: 'FK_Veiculo_Cor_CodigoCor',
          columnNames: ['CodigoCor'],
          referencedColumnNames: ['CodigoCor'],
          referencedTableName: 'Cor'
        },
        {
          name: 'FK_Veiculo_MarcaVeiculo_CodigoMarcaVeiculo',
          columnNames: ['CodigoMarcaVeiculo'],
          referencedColumnNames: ['CodigoMarcaVeiculo'],
          referencedTableName: 'MarcaVeiculo'
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Veiculo')
  }
}
