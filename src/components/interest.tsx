import {IoIosDoneAll} from 'react-icons/io'
export const Intérêts = () => {
    return (
        <div className="mb-10 mt-10">
            <h2 className="text-xl font-extrabold"><strong> Intérêts:</strong></h2> 
            <ul className="mt-1">
            <li  className='flex items-center '><IoIosDoneAll className='mr-2'/><pre>Football</pre></li>
            <li className='flex items-center '><IoIosDoneAll className='mr-2'/><pre>Natation</pre></li>
            <li className='flex items-center '><IoIosDoneAll className='mr-2'/><pre>Lecture et écriture</pre></li>
            </ul>  
        </div>
    )
}
