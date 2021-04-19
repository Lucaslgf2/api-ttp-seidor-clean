import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Veiculo } from './veiculo'

@Entity('Cor')
export class Cor {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'CodigoCor' })
  codigoCor: number

  @Column('varchar', { name: 'NomeCor', length: 50, unique: true })
  nomeCor: string

  @Column('varchar', { name: 'CodigoHexadecimal', nullable: true, length: 7 })
  codigoHexadecimal: string | null

  @Column('datetime', { name: 'InseridoEm', default: () => "datetime('now','localtime')" })
  inseridoEm: Date

  @OneToMany(() => Veiculo, (veiculo) => veiculo.cor)
  veiculo: Veiculo[]
}
