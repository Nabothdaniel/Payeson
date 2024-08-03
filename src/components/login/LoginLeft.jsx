// LoginForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword ,signInWithPhoneNumber, RecaptchaVerifier} from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiEye } from 'react-icons/fi';
import { BsEyeSlash } from 'react-icons/bs';

function LoginLeft() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const onSubmit = async data => {
    const isEmail = data.identifier.includes('@');
    if (isEmail) {
      try {
        await signInWithEmailAndPassword(auth, data.identifier, data.password);
        toast.success('Login successful');
        navigate('/dashboard');
      } catch (error) {
        toast.error('Login failed');
      }
    } else {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
          'callback': function(response) {
            console.log('Recaptcha verified');
          }
        }, auth);

        const appVerifier = window.recaptchaVerifier;
        const confirmationResult = await signInWithPhoneNumber(auth, data.identifier, appVerifier);
        const verificationCode = window.prompt('Please enter the verification code that was sent to your mobile device.');
        await confirmationResult.confirm(verificationCode);

        toast.success('Login successful');
        navigate('/dashboard');
      } catch (error) {
        toast.error('Login failed');
      }
    }
  };

  return (
    <div className="login-form">
      <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-7">
          <label htmlFor="address" className="text-[1.1rem] mb-2 font-semibold block">
            Email address or Phone number
            <span className="text-[#95066E] ml-2">*</span>
          </label>
          <input
            type="text"
            className="w-full border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="name@example.com"
            {...register('address', { required: true })}
          />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="mb-5 flex items-center gap-4 border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="w-full outline-none"
            placeholder="type your password"
            {...register('password', { required: true })}
          />
          <div onClick={togglePasswordVisibility} className="cursor-pointer">
            {isPasswordVisible ? <BsEyeSlash className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
          </div>
        </div>
        {errors.password && <span className="text-red-500">This field is required</span>}
        <button type="submit" className="mt-[8rem] w-full font-semibold text-center text-[1.3rem] p-3 bg-orange-500 rounded-xl text-white">
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default LoginLeft;
