import { LiturgicalColorType } from '../../domain/enums/Liturgy';
import {
  DailyLiturgyProtocol,
  GospelProtocol,
  PrimaryReadingProtocol,
  PsalmsProtocol,
  SecondReadingProtocol,
} from '../../domain/protocols/DialyLiturgy';
import { formatDate } from '../formatters/Date';

export class DailyLiturgyModel implements DailyLiturgyProtocol {
  data: string | undefined;
  liturgia: string | undefined;
  cor: LiturgicalColorType | undefined;
  dia: string | undefined;
  oferendas: string | undefined;
  comunhao: string | undefined;
  primeiraLeitura: PrimaryReadingProtocol | undefined;
  segundaLeitura: SecondReadingProtocol | undefined;
  salmo: PsalmsProtocol | undefined;
  evangelho: GospelProtocol | undefined;

  constructor(obj: Partial<DailyLiturgyModel> | undefined) {
    if (!obj) {
      Object.assign(this, undefined);
    } else {
      Object.assign(this, {
        ...obj,
        data: formatDate(obj?.data),
        segundaLeitura:
          typeof obj?.segundaLeitura === 'object'
            ? obj.segundaLeitura
            : undefined,
      });
    }
  }
}
