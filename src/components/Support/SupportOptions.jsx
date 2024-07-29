import React,{useState} from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

function SupportOptions() {
  const [contacts,setContacts] = useState([
    {
      id:1,
      icon:<FaWhatsapp className="w-7 h-7 text-green-700"/>,
      title:'Whatsaap',
      message:'Message us on whatsaap and get attended to in minutes'
    },
    {
      id:2,
      icon:<MdOutlineMessage className="w-7 h-7 text-blue-700"/>,
      title:'Email Us',
      message:'Message us through email'
    },
    {
      id:3,
      icon:<BsChatDots className="w-7 h-7 text-purple-600"/>,
      title:'Live Chat',
      message:'message us here and a coustomer care agent will attend to you ASAP'
    },
  ])
  return (
    <div className="flex flex-col  my-5">
      <h1 className="mb-2 text-[1.1rem] text-black font-semibold">
        choose support option:
      </h1>
     {
      contacts.map(contact =>(
        <div key={contact.id} className="bg-purple-300/40 flex gap-2 items-center px-3 py-4 rounded-md my-2">
        <div>
          {contact.icon}
        </div>
        <div>
          <p className="text-[1rem] text-black font-semibold">{contact.title}</p>
          <p className="text-[.9rem] text-black">
         {contact.message}
          </p>
        </div>
      </div>
      ))
     }
    </div>
  );
}

export default SupportOptions;
