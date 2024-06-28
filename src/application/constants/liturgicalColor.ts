import { LiturgicalColorType } from '../../domain/enums/Liturgy';

export const LITURGICAL_COLOR_DESCRIPTION = {
  [LiturgicalColorType.WHITE]:
    'Usado na época da Páscoa, Natal, festas do Senhor, da Virgem, dos anjos e dos santos não mártires. Representa a alegria da Páscoa, a luz e a vida.',
  [LiturgicalColorType.RED]:
    'Utilizado no Domingo de Ramos, Sexta-feira Santa, Pentecostes, festa dos apóstolos e santos mártires. Simboliza o Espírito Santo e o martírio.',
  [LiturgicalColorType.GREEN]:
    'É a cor do tempo ordinário, expressando a juventude da Igreja e a renovação da vida. Usado nos ofícios e missas do “ciclo anual”.',
  [LiturgicalColorType.PURPLE]:
    'Indica esperança, penitência e desejo de encontrar Jesus. Usado no Advento, Quaresma e liturgia dos mortos.',
  [LiturgicalColorType.GOLD_OR_SILVER]:
    'Sublinha a importância das grandes festas, mesmo que não sejam da cor do dia.',
  [LiturgicalColorType.PINK]:
    'Simboliza a alegria pela proximidade do Salvador no terceiro domingo do Advento e indica uma pausa no rigor penitencial no quarto domingo da Quaresma.',
  [LiturgicalColorType.BLUE]:
    'Associado às festas marianas, especialmente na Imaculada Conceição.',
  [LiturgicalColorType.BLACK]: 'Expressa luto.',
};

export const LITURGICAL_COLOR = {
  [LiturgicalColorType.WHITE]: '#FFFFFF',
  [LiturgicalColorType.RED]: '#D20103',
  [LiturgicalColorType.GREEN]: '#2C4125',
  [LiturgicalColorType.PURPLE]: '#5A0550',
  [LiturgicalColorType.GOLD_OR_SILVER]: '#CCCCCC',
  [LiturgicalColorType.PINK]: '#FC66EB',
  [LiturgicalColorType.BLUE]: '#5F79EB',
  [LiturgicalColorType.BLACK]: '#000000',
};

export const LITURGICAL_BACKGROUND_COLOR = {
  [LiturgicalColorType.WHITE]: '#CCCCCC',
  [LiturgicalColorType.RED]: '#F9ACAD',
  [LiturgicalColorType.GREEN]: '#E2ECDF',
  [LiturgicalColorType.PURPLE]: '#E9B1E2',
  [LiturgicalColorType.GOLD_OR_SILVER]: '#F2F2F2',
  [LiturgicalColorType.PINK]: '#FBBEF4',
  [LiturgicalColorType.BLUE]: '#BFC8F4',
  [LiturgicalColorType.BLACK]: '#D4D5DA',
};
