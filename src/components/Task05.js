import { useState } from "react";
//TASK05

const Task05 = () => {
    const [Birthdate, setBirthdate] = useState('');
    const [Age, setAge] = useState('');

    const calculate = () => {
        const today = new Date();
        const birth = new Date(Birthdate);
        const y = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        const d = today.getDate() - birth.getDate();

        if (m < 0 || (m === 0 && d < 0)) {
            setAge(y - 1)
        } else {
            setAge(y)
        }
    }

    return (
        <div class="conatainer text-center bg-dark text-white">
            <h1 style={{ textDecorationLine: 'underline' }}>Age Calculator</h1>
            <h4><label htmlFor="Birthdate" class="text-center">Enter your Birth date</label></h4>
            <div class="d-flex justify-content-center mb-3 conatiner">
                <input class="mt-3 mb-2 form-control rounded" style={{width:"20%"}} type="date" id="Birthdate" value={Birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            </div>
            <div class="d-flex justify-content-center mb-3 conatiner">
            <input class="mt-3 mb-2 form-control rounded" style={{width:"20%"}} type="text" placeholder="Enter your Birthday date(alt)" id="Birthdate" value={Birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            </div>
            <div>
                <button class="btn btn-lg btn-danger mt-4 mb-3" onClick={calculate}>Calculate Age</button>
            </div>
            {Age !== '' && <p style={{ fontSize: 'larger' }}> Your Age is {Age} Years.</p>}
        </div>
    )
}


export default Task05;
