import { ErrorMessage, Field, Form , Formik } from "formik";
import Modal from "./Modal";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup' ;

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  number: Yup.number().typeError("Invalid number").required("Number is Required"),
});

const AddAndUpdateContact = ({ isOpen, onClose  , isUpdate , contact}) => {
     const addContact =  async (contact) => {
      try{
         const contactRef = collection(db, "contacts");
         await addDoc (contactRef, contact);
         onClose();
          toast.success("Contact Added Successfully");
      }catch (error) {
        console.log(error);

      }
     };
        const updateContact = async (contact, id) => {
          try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose();
             toast.success("Contact Updated Successfully");
          } catch (error) {
            console.log(error);
          }
        };

  
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        {/* formik only support yup schema */}
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                  number: contact.number,
                }
              : {
                  name: "",
                  email: "",
                  number: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4 mx-9 ">
            <div children="flex  gap-1 mx-9 bg-black ">
              <label htmlFor="name"> Name</label>
              <Field name="name" className="border h-10 mx-8 items-center align-middle rounded-xl " />
              <div className=" text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div children="flex flex-col gap-9">
              <label htmlFor="email"> Email</label>
              <Field name="email" className="border h-10 mx-9 align-middle rounded-xl" />
              <div className=" text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div children="flex flex-col gap-1">
              <label htmlFor="number">Number</label>
              <Field name="number" className="border h-10 mx-4 align-middle rounded-xl" />
              <div className=" text-red-500 text-xs">
                <ErrorMessage name="number" />
              </div>
            </div>
            <button className="bg-blue-600 px-3 py-1.5 border self-end">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
export default AddAndUpdateContact;
