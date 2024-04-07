import { useField } from '@/hooks/field'
import { SQLDataTypes } from '@/types/data'
import editIcon from '@/assets/edit.svg';
import deleteIcon from '@/assets/trash.svg';
import type { Field } from '@/types/models'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';

type FieldPropTypes = {
  field: Field,
  id: string,
  index: number
}

function Field({ field, id, index }: FieldPropTypes) {

  const { toggleEdit, hoverTooltip, openHoverTooltip, closeHoverTooltip } = useField(id, index, field)
  return (
    <div className='w-full relative min-h-[20px] border-b px-2 z-10' onMouseOver={openHoverTooltip} onMouseOut={closeHoverTooltip}>
      - <span className='font-medium'>{field.name}</span>{"  "}<span className='font-thin'>{SQLDataTypes[field.type as SQLDataTypes].split('_').join("").toLowerCase()}</span>{" "}
      {
        hoverTooltip ?
          <div className='absolute flex  right-0 top-0 bottom-0'>
            <Popover>
              <PopoverTrigger asChild>
                <button onClick={toggleEdit} className='w-[1.5em] h-[1.5em] rounded-full'>
                  <img src={editIcon} alt="" />
                </button>
              </PopoverTrigger>
              <PopoverContent className='w-80 z-20'>
                <FieldEditForm id={id} field={field} index={index} />
              </PopoverContent>
            </Popover>
            <Popover>
              <button className='w-[1.5em] h-[1.5em] rounded-full'>
                <img src={deleteIcon} alt="" />
              </button>
            </Popover>
          </div> : <></>
      }
    </div>
  )
}

export default Field

const FieldEditForm = ({ field, id, index }: FieldPropTypes) => {
  const { toggleEdit, onFieldChange, saveChanges, discardChanges, editField } = useField(id, index, field);

  return (
    <form onSubmit={saveChanges} onReset={discardChanges} className='py-2 px-4 w-full bg-stone-50 rounded shadow z-10'>
      <div className='py-4 border-b text-lg font-bold text-stone-500'>
        Edit field info

      </div>
      <div className='flex flex-col py-1'>
        <label className='font-medium text-stone-500'>Field name</label>
        <input name='name' value={editField.name} onChange={onFieldChange} className='p-2 border outline-0' />
      </div>

      <div className='flex justify-end'>
        <button type='submit' className='bg-stone-700 text-white font-bold text-lg rounded shadow'>
          Save
        </button>
        <button type='submit' className='border-2 font-bold rounded shadow'>
          Cancel
        </button>
      </div>
    </form>
  )
}
