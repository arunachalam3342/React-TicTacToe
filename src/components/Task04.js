import Axios from "axios";
import { useEffect, useState } from "react";

//Task04
function Task04(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("https://dummyjson.com/users")
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data.users);
                    console.log(res.data.users);
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            })
    }, [])
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{ justifyContent: 'center', fontFamily: 'Arial' }}>
                {(data.map((val, ind) => {
                    return (<div class="col card-container">
                        <div class="card ms-3 mt-4 me-3" style={{ width: '28rem' }}>
                            <img src={val.image} class="card-img-top" alt="Images" style={{ width: '30%', height: '30%' }} />
                            <div class="card-body">
                                <h3 class="card-title text-center" style={{ fontWeight: 'bold' }}>{val.id}.) {val.firstName} {val.lastName}</h3>
                                <h4 class="card-title text-center" style={{ fontWeight: 'lighter',fontStyle:'italic' }}> {val.username} </h4>
                                <h6 class="card-text ps-4" style={{textAlign:"justify"}}>
                                    <ul class="list" style={{ listStyle: 'none'}}>
                                        <li><b>Age: </b>{val.age}  <b>Gender: </b>{val.gender}</li>
                                        <li><b>Height: </b>{val.height}  <b>weight: </b>{val.weight}</li>
                                        <li><b>Email: </b>{val.email}</li>
                                        <li><b>Phone: </b>{val.phone}</li>
                                        <li><b>Address: </b>{val.address.city} ({val.address.coordinates.lat},{val.address.coordinates.lng})</li>
                                        <li><b>Company: </b>{val.company.name}</li>
                                        <li><b>Bank: </b>{val.bank.cardExpire}</li>
                                        
                                        
                                    </ul>
                                </h6>

                            </div>
                        </div>
                    </div>)
                }))}
            </div>
        </div>
    )
}

export default Task04;