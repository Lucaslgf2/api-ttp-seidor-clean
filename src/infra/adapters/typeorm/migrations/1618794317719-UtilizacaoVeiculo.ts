import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class UtilizacaoVeiculo_1618794317719 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'UtilizacaoVeiculo',
      columns: [
        {
          name: 'CodigoUtilizacaoVeiculo',
          type: 'integer',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'CodigoVeiculo',
          type: 'integer'
        },
        {
          name: 'CodigoMotorista',
          type: 'integer'
        },
        {
          name: 'DataInicio',
          type: 'datetime'
        },
        {
          name: 'DataTermino',
          type: 'datetime'
        },
        {
          name: 'MotivoUtilizacao',
          type: 'varchar',
          length: '500'
        },
        {
          name: 'InseridoEm',
          type: 'datetime',
          default: 'datetime(\'now\',\'localtime\')'
        }
      ],
      foreignKeys: [
        {
          name: 'FK_UtilizacaoVeiculo_Veiculo_CodigoVeiculo',
          columnNames: ['CodigoVeiculo'],
          referencedColumnNames: ['CodigoVeiculo'],
          referencedTableName: 'Veiculo'
        },
        {
          name: 'FK_UtilizacaoVeiculo_Motorista_CodigoMotorista',
          columnNames: ['CodigoMotorista'],
          referencedColumnNames: ['CodigoMotorista'],
          referencedTableName: 'Motorista'
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('UtilizacaoVeiculo')
  }
}
