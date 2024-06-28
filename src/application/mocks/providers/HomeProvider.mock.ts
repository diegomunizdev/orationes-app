import { LiturgicalColorType } from '../../../domain/enums/Liturgy';
import { HomeContextProps } from '../../contexts/home/home.context';

export const mockHomeProvider: HomeContextProps = {
  data: {
    data: new Date().toISOString(),
    liturgia: '6ª feira da 7ª Semana do Tempo Comum',
    cor: LiturgicalColorType.GREEN,
    dia: 'mock dia',
    oferendas: 'mock oferendas',
    comunhao: 'mock comunhao',
    primeiraLeitura: {
      referencia: 'mock reference',
      titulo: 'mock title',
      texto: 'mock texto',
    },
    segundaLeitura: {
      referencia: 'mock reference',
      titulo: 'mock title',
      texto: 'mock texto',
    },
    salmo: {
      referencia: 'mock reference',
      refrao: 'mock refrao',
      texto: 'mock texto',
    },
    evangelho: {
      referencia: 'mock reference',
      titulo: 'mock title',
      texto: 'mock texto',
    },
  },
  loading: false,
  error: undefined,
  handleDailyLiturgy: jest.fn(),
};
