import { useModels } from "@/state/models";
import { Field } from "@/types/models"
import { ChangeEventHandler, MouseEventHandler, SyntheticEvent, useEffect, useState } from "react"

export const useField = (id: string, index: number, field: Field) => {
  const { setTableField } = useModels();
  const [hoverTooltip, setHoverTooltip] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [editField, setEditField] = useState<Field>(field);

  useEffect(() => {
    setTableField(id, index, field)
  }, [editField])

  const toggleEdit: MouseEventHandler<HTMLElement> = () =>
    setEdit(!edit)
  const openHoverTooltip: MouseEventHandler<HTMLElement> = () =>
    setHoverTooltip(true)

  const closeHoverTooltip: MouseEventHandler = () => {
    if (!edit)
      setHoverTooltip(false)
  }

  const saveChanges = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTableField(id, index, field)
    setEdit(false);
  }

  const discardChanges = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.reset()
    setEdit(false);
  }

  const onFieldChange: ChangeEventHandler = (e) => {
    //@ts-ignore
    let name = e.target.name
    //@ts-ignore
    let value = e.target.value
    setEditField(s => ({ ...s, [name]: value }))
  }

  return {
    edit,
    toggleEdit,
    openHoverTooltip,
    closeHoverTooltip,
    onFieldChange,
    hoverTooltip,
    saveChanges,
    discardChanges,
    editField
  }
}
