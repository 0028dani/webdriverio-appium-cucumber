Feature: Mobile ColorNote
  @note
  Scenario Outline: Adicionar nota e salvar
    Given que pulo o tutorial
    When altero a nota padrão de cor
    And adicione o titulo <titulo> da nota com conteudo <conteudo>
    And salvo a nota
    Then Terei uma nota salva com conteudo salvo <conteudoSalvo>
    Examples:
      | titulo                        | conteudo                                              | conteudoSalvo                                         |
      | Lista de Alimentos            | Arroz, Feijão, Carne, Tomate, Banana, Penino, cenoura | Arroz, Feijão, Carne, Tomate, Banana, Penino, cenoura |
      | Personagens do Overwatch      | Soldier, Bastion, Cassidy, Ana, Moira                 | Soldier, Bastion, Cassidy, Ana, Moira                 |
      | Lista de Produtos Eletronicos | Notebook, TV, Computador, Teclado, Mouse, Celular     | Notebook, TV, Computador, Teclado, Mouse, Celular     |
      | Varejos                       | Kabum, Mobly, Pichau, Shoope                          | Kabum, Mobly, Pichau, Shoope                          |
