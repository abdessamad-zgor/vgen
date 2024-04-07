import { SQLDataTypes } from "./data"

export class Default {
  value: any
  constructor(value: string) {
    this.value = value
  }
}

export class NotNull {
  is: boolean
  constructor(is: boolean) {
    this.is = is
  }
}

export class Check {
  condition: <T extends any[]>(...args: T) => boolean
  constructor(condition: <T extends any[]>(...args: T) => boolean) {
    this.condition = condition
  }
}

export class PrimaryKey {
  fieldname: string
  constructor(fieldname: string) {
    this.fieldname = fieldname
  }
}

export class Unique {
  is: boolean
  constructor(is: boolean) {
    this.is = is
  }
}

export class ForeignKey {
  reference: {
    table: string,
    fieldname: string
  };
  fieldname: string
  constructor(reference: { table: string, fieldname: string }, fieldname: string) {
    this.reference = reference
    this.fieldname = fieldname
  }
}

export type SQLConstraint = Default | NotNull | Unique | PrimaryKey | ForeignKey;

export type Constraint = SQLDataTypes
