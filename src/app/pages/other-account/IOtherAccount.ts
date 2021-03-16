export interface IOtherAccountUser{
  id:number;
  idUser:string;
  iOtherAccounts:IOtherAccount[]

}

export interface IOtherAccount{
  id:string;
  alias: string;
  tipo: string;
  entidadBancaria:string;
  numeroCuenta:string;
  documentoTitular:string;
  modena: string;
}
