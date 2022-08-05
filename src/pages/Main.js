import React from 'react';
// import axios from 'axios';
import Alert from '../utils/alert';

const Main = () => {
    // const [response, setResponse] = React.useState(null);
    const [currentTab, setCurrentTab] = React.useState('login');


    const [alert, setAlert] = React.useState({
        open: false,
        type: '',
        message: ''
    })

    const showAlert = (message, type) => {
        setAlert({
            open: true,
            message,
            type
        })
    }

    const closeAlert = () => {
        setAlert({
            open: false,
            message: '',
            type: ''
        })
    }

    // const sendData = (data, type) => {
    //     const body = {
    //         data,
    //         type
    //     }
    //     axios.post('http://127.0.0.1:5000/', body)
    //         .then(res => {
    //             if(res.data.success === false) {
    //                 setResponse(null);
    //                 return showAlert(res.data.message, 'error');
    //             }
    //             setResponse(res.data);
    //             // setCurrentTab('result');
    //             showAlert('Fetched data', 'success');
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             setResponse(null);
    //             showAlert('Internal server error, please try again', 'error')
    //         })
    // }   

    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password,setPassword] = React.useState(null);
    const [confirmPassword,setConfirmPassword] = React.useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    let content = (
        <div className='flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center w-full justify-center'>
            <div className='w-96 rounded bg-white shadow-md px-8 pt-6 pb-2 h-96'>
                <form className="rounded mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="form__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="email" value={email} 
                            onChange = {(e) => handleInputChange(e)} id="email" placeholder="Email"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="form__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="password"  id="password" value={password} 
                            onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                    </div>
                    <div className="flex items-center justify-end">
                        <button onClick={()=>handleSubmit()} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

    if(currentTab === 'signup'){
        content = (
            <div className='flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center w-full justify-center'>
            <div className='w-96 rounded bg-white shadow-md px-8 pt-4 pb-2 h-250'>
                <form className="rounded mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                            First Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="text" value={firstName} 
                            onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name
                        </label>
                        <input className="form__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="text" value={lastName} 
                            onChange = {(e) => handleInputChange(e)} id="lastName" placeholder="LastName"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="form__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="email" value={email} 
                            onChange = {(e) => handleInputChange(e)} id="email" placeholder="Email"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="form__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="password"  id="password" value={password} 
                            onChange = {(e) => handleInputChange(e)} placeholder="Password"/>

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input className="form__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="password" id="confirmPassword" value={confirmPassword} 
                            onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                    </div>
                    <div className="flex items-center justify-end">
                        <button onClick={()=>handleSubmit()} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            SIGNUP
                        </button>
                    </div>
                </form>
            </div>
        </div>
        )
    }

    return (
        <React.Fragment>
            <div className='w-full px-5 py-3 shadow-xl bg-black text-white flex'>
                <p className='text-xl flex-grow'> HANGOUT </p>
            </div>
            <div className='w-full flex items-center justify-center mt-12'>
                <div className={`p-2 border-b-2 border-${currentTab === 'login'? 'black': 'white'} mx-2 cursor-pointer`} onClick={_ => setCurrentTab('login')}>
                    LOGIN
                </div>
                <div className={`p-2 border-b-2 border-${currentTab === 'signup'? 'black': 'white'} mx-2 cursor-pointer`} onClick={_ => setCurrentTab('signup')}>
                    SIGNUP
                </div>
            </div>
            
            {content}
            <Alert alert={alert} closeAlert={closeAlert}/>
        </React.Fragment>
    )
}

export default Main;