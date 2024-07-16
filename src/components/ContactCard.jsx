import { deleteDoc ,doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
     const {isOpen,onClose, onOpen} = useDisclouse();

  const deleteContact =  async (id) => {
    try{
        await deleteDoc(doc(db,"contacts",id));
      toast.success("Contact Deleted Successfully");

    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow flex justify-between items-center p-2 rounded-lg transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-800 duration-300"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-orange text-4xl" />
          <div className="">
            <h2 className="text-medium ">{contact.name}</h2>
            <p className="text-sm  ">{contact.number}</p>
            <p className="text-sm ">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl ">
          <RiEditCircleLine
            onClick={onOpen}
            className="cursor-pointerpointer"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
