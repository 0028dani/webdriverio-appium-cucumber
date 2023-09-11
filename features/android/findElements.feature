Feature: Mobile Demos

    @lista
    Scenario Outline: Verificar lista
        Given que verifica a lista <lista> primeira tela
        When clico em App
        Then a <palavra> vai esta verificada
        Examples:
            | lista                                                                                                    | palavra  |
            | API Demos,Access'ibility,Accessibility,Animation,App,Content,Graphics,Media,NFC,OS,Preference,Text,Views | Fragment |

    @scroll
    Scenario Outline: Vertifical scrolling
        Given que estou na tela Activity
        When clicar no botao Secure Surfaces
        Then deve ocorrer o scroll com sucesso