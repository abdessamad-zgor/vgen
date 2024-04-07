import { atom, Atom, useAtom } from "jotai"
import { Field, Model, Table, Type } from "@/types/models"
import { getId, type Id } from "@/lib/utils"
import { atomWithImmer } from "jotai-immer"

export const modelsAtom = atomWithImmer<Id<Model>[]>([])

export const useModels = () => {
  const [models, setModels] = useAtom(modelsAtom);
  const addTable = () => {
    setModels((s) => {
      s.push({ id: getId(), type: 'table', name: `table${models.length + 1}`, fields: [] })
    })
  }

  const setTableField = (id: string, index: number, field: Field) => {
    setModels((s) => {
      let modelIndex = models.findIndex(m => m.id == id);
      (s[modelIndex] as Type<Id<Table>>).fields[index] = field;
    })
  }

  const setTableName = (id: string, name: string) => {
    setModels((s) => {
      let modelIndex = models.findIndex(m => m.id == id);
      (s[modelIndex] as Type<Id<Table>>).name = name;
    })
  }

  const removeTableField = (id: string, index: number) => {
    setModels((s) => {
      let modelIndex = models.findIndex(m => m.id == id);
      (s[modelIndex] as Type<Id<Table>>).fields = (s[modelIndex] as Type<Id<Table>>).fields.filter((_, i) => i != index);
    })
  }

  const getModel = (id: string) => {
    return models.find(v => v.id == id)
  }

  const removeModel = (id: string) => {
    setModels((s) => {
      return [...models.filter(m => m.id != id)]
    })
  }

  return {
    addTable,
    setModels,
    setTableName,
    setTableField,
    removeModel,
    removeTableField,
    getModel,
    models
  }
}

