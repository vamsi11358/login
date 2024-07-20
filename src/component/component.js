import {useState} from 'react';

export default function Login(){
    const [text, setText] = useState('');
    const [password, setPassword]= useState('');
    const [login, setLogin] = useState(false);
    const handleSubmit = ()=>{
        if(text === 'user' && password === 'password'){
            setLogin(true)
        }else{
            setLogin(false);
        }
    }
    return(
        <>
        <h1>Login Page</h1>
        {!login && (
        <form  onSubmit={handleSubmit}>
            <h4>Invalid username or password</h4>
        <label for='username'>User Name:</label>
        <input placeholder='Username' name='username' type='username' required onChange={(e)=>setText(e.target.value)}/>
        <br/>
        <label for='Password'>Password:</label>
        <input placeholder='Password' type='password' name='password'  required onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button type='submit'>Submit</button>
        </form>
)}
{login && (
    <h1>Welcome ,user!</h1>
)

}
        </>
    )
}