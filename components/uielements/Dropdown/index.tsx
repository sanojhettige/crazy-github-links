import { useState } from 'react';
import Iconography from '../Iconography';
import Button from '../button';

interface Props {
    fullwith?: boolean,
    rounded?: boolean,
    onChange?: (e) => void,
    value?: string,
    options: option[],
    placehoderText?: string,
    id: string,
    size: 'large' | 'medium' | 'small'
  }
  
  interface option {
    id: string,
    title: any,
  }
  
  const Dropdown = (
      {
      onChange,
      value,
      options,
      id,
      size = 'medium',
      placehoderText = 'Select Option',
    } : Props,) => {

        const [isOpen, setIsOpen] = useState(false);

        const onHanldeVisibility = () => setIsOpen(!isOpen);

        const onOptionChange = value => {
            setIsOpen(false);
            onChange(value);
        }

        const getSelectedLabel = () => {
            const selected =  options?.find(item => item.id === value);
            return selected ? selected.title : placehoderText;
        }

    return (
      <div className="w-full">
  <div>
    <Button onClick={onHanldeVisibility} fullwith size={size} type="transparent" id={id} aria-expanded="true" aria-haspopup="true">
        <div className="flex w-full">
          <span className="w-3/4 flex justify-start">{getSelectedLabel()}</span>
          <span className="w-1/4 flex justify-end"><Iconography icon="down-arrow" /></span>
        </div>
    </Button>
  </div>
  {isOpen && (
      <div className="z-50 origin-top-right absolute bg-white-500 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby={id}>
    <div className="py-1" role="none">
    {options?.map(({id, title}) =>  <button onClick={() => onOptionChange(id)} type="button" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id={`menu-item-${id}`}>{title}</button>)}
    </div>
  </div>
  )}
  </div>
    )
  }
  
  export default Dropdown;