import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Motorista } from './motorista'
import { Veiculo } from './veiculo'

@Entity('UtilizacaoVeiculo')
export class UtilizacaoVeiculo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'CodigoUtilizacaoVeiculo' })
  codigoUtilizacaoVeiculo: number

  @Column('datetime', { name: 'DataInicio' })
  dataInicio: Date

  @Column('datetime', { name: 'DataTermino' })
  dataTermino: Date

  @Column('varchar', { name: 'MotivoUtilizacao', length: 500 })
  motivoUtilizacao: string

  @Column('datetime', { name: 'InseridoEm', default: () => "datetime('now','localtime')" })
  inseridoEm: Date

  @ManyToOne(() => Motorista, (motorista) => motorista.utilizacaoVeiculo)
  @JoinColumn([{ name: 'CodigoMotorista', referencedColumnName: 'codigoMotorista' }])
  motorista: Motorista

  @ManyToOne(() => Veiculo, (veiculo) => veiculo.utilizacaoVeiculo)
  @JoinColumn([{ name: 'CodigoVeiculo', referencedColumnName: 'codigoVeiculo' }])
  veiculo: Veiculo
}
