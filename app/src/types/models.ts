import { DataTypes } from "./data";
import { Constraint } from "./constraint";

export type Field = {
  name: string;
  type: DataTypes;
  contraints: Constraint[];
}

export type Table = {
  name: string;
  fields: Field[]
}
