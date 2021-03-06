import { MigrationInterface, QueryRunner } from 'typeorm'

export class CargaInicial_1618795038226 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    // Faz a carga inicial na tabela de Cor
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Amarelo\', \'#ffff00\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Azul\', \'#0000ff\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Bege\', \'#f5f5dc\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Branca\', \'#ffffff\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Cinza\', \'#808080\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Dourada\', \'#daa520\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Grena\', \'#831d1c\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Laranja\', \'#ffa500\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Marrom\', \'#964b00\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Prata\', \'#c0c0c0\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Preta\', \'#000000\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Rosa\', \'#ffcbdb\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Roxa\', \'#993399\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Verde\', \'#008000\')')
    await queryRunner.query('INSERT INTO Cor (NomeCor, CodigoHexadecimal) VALUES (\'Vermelha\', \'#ff0000\')')

    // Faz a carga inicial na tabela de MarcaVeiculo
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Acura\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Agrale\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Alfa Romeo\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Aston Martin\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Audi\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Bentley\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Bmw\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Bugatti\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Buggy\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Cadillac\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Chery\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Chevrolet\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Chrysler\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Citroen\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Daewoo\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Daihatsu\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Dodge\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Ferrari\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Fiat\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Ford\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Gurgel\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Honda\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Hummer\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Hyundai\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Infiniti\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Jac\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Jaguar\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Jeep\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Karmann Ghia\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Kia\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Lada\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Lamborghini\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Land Rover\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Lexus\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Lincoln\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Lotus\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Maserati\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Mazda\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Mclaren\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Mercedes-benz\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Mini\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Mitsubishi\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Nissan\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Nissin\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Pagani\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Peugeot\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Plymouth\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Pontiac\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Porsche\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Renault\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Rolls-royce\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Shineray\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Simca\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Spyker\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Ssangyong\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Subaru\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Suzuki\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Toyota\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Triumph\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Troller\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Volkswagen\', NULL)')
    await queryRunner.query('INSERT INTO MarcaVeiculo (NomeMarca, UrlLogo) VALUES (\'Volvo\', NULL)')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM Cor')
    await queryRunner.query('DELETE FROM MarcaVeiculo')
  }
}
