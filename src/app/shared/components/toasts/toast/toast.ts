export interface Toast {
  title: 'Atenção' | 'Sucesso' | 'Erro' | 'Info';
  messagem: string;
  date: Date;
  isShow: boolean;
}
