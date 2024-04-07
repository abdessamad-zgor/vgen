import { DataTypes } from "./data";
import { Constraint } from "./constraint";
import { Relation } from "./relations";

export type Field = {
  name: string;
  type: DataTypes;
  contraints?: Constraint[];
}

export type Table = {
  name: string;
  fields: Field[]
}

export type Type<T> = { type: string } & T

export type Model = Type<Table | Relation>;
