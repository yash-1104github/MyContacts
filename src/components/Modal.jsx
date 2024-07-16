import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
            <div className="relative m-auto z-50 min-h-[200px] min-w-[20%] bg-green-200 text p-4 rounded-md">
              <div className="flex justify-end ">
                <AiOutlineClose
                  onClick={onClose}
                  className="text-2xl  self-end"
                />
              </div>
              {children}
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("model-root")
  );
};

export default Modal
