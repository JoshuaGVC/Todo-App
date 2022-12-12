export interface IInput{
  name:string;
  value:string | number;
  onChange:(value:string|number, name:string)=>void
}
