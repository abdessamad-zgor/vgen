import { SQLDataTypes } from "./data"

export type Default = {
  value: any
}

export type NotNull = boolean

export type Check = {
  _f: <T extends any[]>(...args: T) => boolean
}

export type PrimaryKey = {
  fieldname: string
}

export type Unique = boolean

export type ForeignKey = {
  reference: {
    table: string,
    name: string
  },
  fieldname: string
}

export type SQLConstraint = Default | NotNull | Unique | PrimaryKey | ForeignKey;

export type Constraint = SQLDataTypes
