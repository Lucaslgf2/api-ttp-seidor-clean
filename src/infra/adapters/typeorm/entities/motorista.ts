import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UtilizacaoVeiculo } from './utilizacao-veiculo'

@Entity('Motorista')
export class Motorista {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'CodigoMotorista' })
  codigoMotorista: number

  @Column('varchar', { name: 'NomeMotorista', length: 200 })
  nomeMotorista: string

  @Column('varchar', { name: 'CPF', length: 11, unique: true })
  cpf: string

  @Column('datetime', { name: 'InseridoEm', default: () => "datetime('now','localtime')" })
  inseridoEm: Date

  @OneToMany(() => UtilizacaoVeiculo, (utilizacaoVeiculo) => utilizacaoVeiculo.motorista)
  utilizacaoVeiculo: UtilizacaoVeiculo[]
}
