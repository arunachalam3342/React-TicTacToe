import { useState } from "react";
//TASK01

function Task01() {
    const [count, setcount] = useState(0);
    const handlecount = (event) => {
        const para = event.target.value;
        const word = para.split(" ");
        setcount(word.length);
    };

    return (
        <div class="container text-center">
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea onChange={handlecount} style={{border: '2px solid black',padding: '8px',width: '50%',height: '100px'}}/>
            <p>Word Count: {count}</p>
        </div>
    )

}


export default Task01;
