import {Eye, Pencil,Trash2} from "lucide-react"
import { useContext,useState } from "react"
import { LeaveContext } from "../../context/LeaveContext"
import Modify from "./ModifyRequest"
import Show from "./ShowRequest"
export default function ListLeave(){
    const{request,setrequest}=useContext(LeaveContext);
     const[showmodify,setModify]=useState(false);
     const[show,setShow]=useState(false);
     const [reqs,setReq]=useState(null);
     function Modifye(req){
        setModify(true);
        setReq(req)

     }
     function Delete(id){
     setrequest(prev =>prev.filter(req =>req.id !==id))
      }
     function Shows(req){
      setShow(true);
      setReq(req);
     }
    return<>
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-4 py-3 text-lg font-bold text-slate-900">Leave Request</h2>
       <table className="w-full border-separate border-spacing-0 p-1 text-left">
        <thead>
            <tr>
                <th className="bg-slate-100 px-3 py-2 text-base   text-slate-600">Employee Name</th>
                <th className="bg-slate-100 px-3 py-2 text-base  text-slate-600">Department</th>
                <th className="bg-slate-100 px-3 py-2 text-base   text-slate-600">type of leave</th>
                <th className="bg-slate-100 px-3 py-2 text-base  text-slate-600">Start Date</th>
                <th className="bg-slate-100 px-3 py-2 text-base   text-slate-600">Number of days</th>
                <th className="bg-slate-100 px-3 py-2 text-base  text-slate-600">Expected Return Date</th>
                <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Return Date</th>
                <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Action</th>
            </tr>
        </thead>
         <tbody className="text-small text-left text-slate-900">
           {request.map((req) => (
             <tr className="border-t border-slate-200 bg-white transition hover:bg-cyan-50/50" key={req.id}>
               <td className="px-4 py-3 font-semibold">{req.name}</td>
               <td className="px-4 py-3 font-semibold">{req.dep}</td>
               <td className="px-4 py-3 font-semibold">{req.type}</td>
               <td className="px-4 py-3 font-semibold">
                 <span className="px-4 py-3 font-semibold  ">
                   {req.startdate}
                 </span>
               </td>
               <td className="px-4 py-3 font-semibold ">{req.nbdays}</td>
               <td className="px-4 py-3 font-semibold ">{req.expected}</td>
               <td className="px-4 py-3 font-semibold ">{req.returndate}</td>
               <td className="px-4 py-3">
                 <div className="flex items-center gap-4 ">
                   <button
                     className="bg-green-200 text-green-700 p-3 rounded-full"
                     aria-label="Edit employee"
                     onClick={()=>Modifye(req)}
                   >
                     <Pencil size={20} />
                   </button>
                      <button
                      onClick={()=>Shows(req)}
                     className="bg-blue-200 text-blue-700 p-3 rounded-full"
                     aria-label="Edit employee"
                     
                   >
                     <Eye size={20} />
                   </button>
                   <button
                      className="text-red-600 transition hover:text-red-700 bg-red-200 p-3 rounded-full"
                      aria-label="Delete employee"
                      onClick={() => Delete(req.id)}>
                      <Trash2 size={20} />
                    </button>
                 </div>
               </td>
             </tr>
           ))}
         </tbody>
       </table>

    </div>
    {showmodify && <Modify setModify={setModify} req={reqs} />}
    {show && <Show setShow={setShow} req={reqs} />}


    </>
}
