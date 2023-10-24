import { Pessoa } from './Pessoa';
import { Quarto } from './Quarto';

export interface Reserva {
  id?: number;
  quarto?: Quarto;
  dataReserva: Date;
  dataCheckin: Date;
  dataCheckout: Date;
  CheckedIn?: boolean;
  numeroPessoas: number;
  clientes?: Pessoa[];
}
