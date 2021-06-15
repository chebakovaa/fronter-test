export interface IOffer {
  type: string,
  id: number,
  attributes: IApartment,
  relationships: IRelationship
}

export interface IPersonalInfo {
  first_name: string,
  last_name: string,
  middle_name: string,
 }

export interface IRelationship {
  type: string,
  id: number,
  attributes: IPersonalInfo,
}

export interface IApartment {
  title: string,
  rooms: number,
  address: IAddress,
  area: number,
  unit: string,
}

export interface IAddress {
  city: string,
  street: string,
  house: string,
  room: string,
}
