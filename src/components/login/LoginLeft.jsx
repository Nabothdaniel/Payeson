import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiEye } from 'react-icons/fi';
import { BsEyeSlash } from 'react-icons/bs';
import { setUser } from '../../redux/store/slice/userSlice'; 

function LoginLeft() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const onSubmit = async data => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.address, data.password);
      const user = userCredential.user;

      // Dispatch user data to Redux store
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        // Add more user properties if needed
      }));

      toast.success('Login successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      if (error.code === 'auth/user-not-found') {
        toast.error('User not found. Please register first.');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Incorrect password. Please try again.');
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email. Please check your email address.');
      } else if (error.code === 'auth/too-many-requests') {
        toast.error('Too many login attempts. Please try again later.');
      } else {
        toast.error('Login failed. Please try again later.');
      }
    }
  };

  return (
    <div className="login-form">
      <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-7">
          <label htmlFor="address" className="text-[1.1rem] mb-2 font-semibold block">
            Email address
            <span className="text-[#95066E] ml-2">*</span>
          </label>
          <input
            type="text"
            className="w-full border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="name@example.com"
            {...register('address', { required: 'This field is required' })}
          />
          {errors.address && <span className="text-red-500">{errors.address.message}</span>}
        </div>
        <div className="mb-5 flex items-center gap-4 border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="w-full outline-none"
            placeholder="type your password"
            {...register('password', { required: 'This field is required' })}
          />
          <div onClick={togglePasswordVisibility} className="cursor-pointer">
            {isPasswordVisible ? <BsEyeSlash className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
          </div>
        </div>
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        <button type="submit" className="mt-[8rem] w-full font-semibold text-center text-[1.3rem] p-3 bg-orange-700 rounded-xl text-white">
          Login
        </button>
        <div className="my-5 text-center">
            Dont have an account? 
            {" "}
            <Link className='text-orange-700' to='/register'>Sigup</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default LoginLeft;
