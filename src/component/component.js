import {useState} from 'react';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'user' && password === 'password') {
            setLogin(true);
            setError('');
        } else {
            setLogin(false);
            setError('Invalid username or password');
        }
    };
    return(
        <>
        <h1>Login Page</h1>
            {!login ? (
                <form onSubmit={handleSubmit}>
                    {error && <h4>{error}</h4>}
                    <label htmlFor='username'>Username:</label>
                    <input
                        placeholder='Username'
                        name='username'
                        type='text'
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <label htmlFor='password'>Password:</label>
                    <input
                        placeholder='Password'
                        type='password'
                        name='password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            ) : (
                <h1>Welcome, user!</h1>
            )}
        </>
    )
}