export const Informations_Personnelles = () => {
    return (
        <div className="mb-10">
            <img className='w-1/2 ' style={{ borderRadius: '70%' , transform: 'scale(1)',border: '1px solid #000' }} src='images/dylna.jpg' alt='persona'/>
            <h2 className="mt-6 text-xl font-extrabold"><strong>Informations Personnelles:</strong></h2> 
            <ul className="mt-1">
            <li><pre>Nom     :   Yassine</pre></li>
            <li><pre>Prénom  :    Oualid</pre></li>
            <li><pre>Age     :     21</pre></li>
            </ul>  
        </div>
    )
}
