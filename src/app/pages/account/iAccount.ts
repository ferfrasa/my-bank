export interface IAccount{
  id:string;
  type:string;
  name:string;
  balance: number;
  movements:IMovement[];


}

export interface IAccountUser{
  id:string;
  accounts:IAccount[];
}

export interface IMovement{
  id: string;
  date: Date;
  value: number;
  type:string;
}
