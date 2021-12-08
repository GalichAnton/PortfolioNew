/* eslint-disable react/jsx-no-target-blank */
import { FunctionComponent } from "react"

const Modal: FunctionComponent<{
  open: boolean;
  onOpen: Function;
}> = ({ open, onOpen, children }) => {
  console.log(onOpen)
  return (
    <div
      onClick={() => onOpen()}
      className={`z-20 transition-all duration-700 fixed top-0 left-0 flex items-center justify-center w-full h-full ${open ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} modal`}>
      <div className="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>
      <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md" >
        <div className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
          <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
        <div className="px-6 py-4 text-left modal-content text-myDarkGrey" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>

  )
}

export default Modal
