import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const {googleAuthProvider,logIn,loading} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    if(loading){
        return <Loading></Loading>
    }
	//google
	const handleGoogleSignIn=()=>{
		googleAuthProvider(googleProvider)
		.then(result=>{
			const user = result.user;
            
            const userInfo = {
                name:user.displayName,
                email:user.email,
                role:'Buyer'
            }
            console.log(userInfo);
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json', 
                },
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result);   

            })
            
		})
		.catch(er=>setLoginError(true));
	}
    //login
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>Do not have an account?  <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-info w-full' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;