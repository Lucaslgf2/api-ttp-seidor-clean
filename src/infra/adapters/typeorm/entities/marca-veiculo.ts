import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Veiculo } from './veiculo'

@Entity('MarcaVeiculo')
export class MarcaVeiculo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'CodigoMarcaVeiculo' })
  codigoMarcaVeiculo: number

  @Column('varchar', { name: 'NomeMarca', length: 50 })
  nomeMarca: string

  @Column('varchar', { name: 'UrlLogo', nullable: true, length: 500 })
  urlLogo: string | null

  @Column('datetime', { name: 'InseridoEm', default: () => "datetime('now','localtime')" })
  inseridoEm: Date

  @OneToMany(() => Veiculo, (veiculo) => veiculo.marcaVeiculo)
  veiculo: Veiculo[]
}
