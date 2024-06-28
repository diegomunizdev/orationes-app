import { LiturgicalColorType } from '../enums/Liturgy';

export interface PrimaryReadingProtocol {
  referencia: string | undefined;
  titulo: string | undefined;
  texto: string | undefined;
}

export interface SecondReadingProtocol {
  referencia: string | undefined;
  titulo: string | undefined;
  texto: string | undefined;
}

export interface PsalmsProtocol {
  referencia: string | undefined;
  refrao: string | undefined;
  texto: string | undefined;
}

export interface GospelProtocol {
  referencia: string | undefined;
  titulo: string | undefined;
  texto: string | undefined;
}

export interface DailyLiturgyProtocol {
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
}
