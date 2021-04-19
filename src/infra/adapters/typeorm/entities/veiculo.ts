import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Cor } from './cor'
import { MarcaVeiculo } from './marca-veiculo'
import { UtilizacaoVeiculo } from './utilizacao-veiculo'

@Entity('Veiculo')
export class Veiculo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'CodigoVeiculo' })
  codigoVeiculo: number

  @Column('varchar', { name: 'Placa', length: 7, unique: true })
  placa: string

  @Column('datetime', { name: 'InseridoEm', default: () => "datetime('now','localtime')" })
  inseridoEm: Date

  @ManyToOne(() => Cor, (cor) => cor.veiculo)
  @JoinColumn([{ name: 'CodigoCor', referencedColumnName: 'codigoCor' }])
  cor: Cor

  @ManyToOne(() => MarcaVeiculo, (marcaVeiculo) => marcaVeiculo.veiculo)
  @JoinColumn([{ name: 'CodigoMarcaVeiculo', referencedColumnName: 'codigoMarcaVeiculo' }])
  marcaVeiculo: MarcaVeiculo

  @OneToMany(() => UtilizacaoVeiculo, (utilizacaoVeiculo) => utilizacaoVeiculo.veiculo)
  utilizacaoVeiculo: UtilizacaoVeiculo[]
}
