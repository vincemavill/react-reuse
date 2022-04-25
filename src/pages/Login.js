import React, { useEffect, useState } from "react";
import auth from "./../approutes/Authentication";
import { useNavigate } from "react-router-dom";
import Navbar from "./component/Navigation";
import AxiosRequest from "../helper/AxiosRequest";
export default function Login(props) {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
            handleSubmitData()
        };
    }, [])
    const handleGetData = async () => {
        // let api = "https://apingweb.com/api/users";
        // fetchGet(api).then((v) => {
        //     console.log(v.data)
        // })
    }
    // const handleSubmitData = async () => {
    //     try {
    //         let api = "https://apingweb.com/api/user/create";
    //         let data = {
    //             "email": "batman@yahoo.com",
    //             // "name": "bruce wayne",
    //             "age": "36",
    //             "image": "https://example.com/batman.png"
    //         }
    //         const response = await AxiosRequest.post(api, data)
    //         const result = response.data
    //         console.log('RESULT--------------')
    //         console.log('API--->' + api)
    //         console.log('METHOD---> POST');
    //         console.log('STATUS---> ' + response.status);
    //         console.log(result)
    //     } catch (err) {
    //         console.log("error--------------------------")
    //         const error = err.response
    //         console.log(error)
    //     }
    // }
    const handleSubmitData = () => {
        setLoading(true)
        let api = "https://apingweb.com/api/user/create";
        let data = {
            "email": "batman@yahoo.com",
            // "name": "bruce wayne",
            "age": "36",
            "image": "https://example.com/batman.png"
        }
        AxiosRequest.post(api, data)
            .then((response) => {
                console.log("success-----------------");
                console.log(response);
            }).catch((err) => {
                console.log("error-----------------");
                // const error = err.response
                console.log(err);
            }).then(() => {
                setLoading(false)
            })
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                {
                    loading && <h1>Loading...</h1>
                }
                <div className="mw-form mx-auto my-5">
                    <h1>Login</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            auth.login(() => {
                                navigate("/dashboard");
                            });
                        }}>Submit</button>
                    </form>
                </div>
            </div >
        </div >
    );
}





// function getServerStatusCode() {
//     return new Promise(function(resolve, reject) {
//         axios
//             .get("https://httpbin.org/status/200")
//             .then(response => resolve(response.status))
//             .catch(error => reject(error.response.status))
//     });
// }

// getServerStatusCode()
//     .then(statusCode => console.log("生きてる", statusCode))
//     .catch(statusCode => console.error("死んでる", statusCode))