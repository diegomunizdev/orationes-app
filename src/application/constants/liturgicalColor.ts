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
  [LiturgicalColorType.PINK]:
    'Simboliza a alegria pela proximidade do Salvador no terceiro domingo do Advento e indica uma pausa no rigor penitencial no quarto domingo da Quaresma.',
};

export const LITURGICAL_COLOR = {
  [LiturgicalColorType.WHITE]: '#FFFFFF',
  [LiturgicalColorType.RED]: '#D20103',
  [LiturgicalColorType.GREEN]: '#2C4125',
  [LiturgicalColorType.PURPLE]: '#5A0550',
  [LiturgicalColorType.PINK]: '#FC66EB',
};

export const LITURGICAL_BACKGROUND_COLOR = {
  [LiturgicalColorType.WHITE]: '#CCCCCC',
  [LiturgicalColorType.RED]: '#F9ACAD',
  [LiturgicalColorType.GREEN]: '#E2ECDF',
  [LiturgicalColorType.PURPLE]: '#E9B1E2',
  [LiturgicalColorType.PINK]: '#FBBEF4',
};
