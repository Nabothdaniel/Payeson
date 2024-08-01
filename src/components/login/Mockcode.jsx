import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FiEye } from "react-icons/fi";
import { BsEyeSlash } from "react-icons/bs";

const LoginLeft = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const onSubmit = (data) => {
    // Replace this with actual login logic
    console.log(data); // Log submitted data

    // Simulate successful login
    toast.success("Login successful!");

    // Clear form fields
    reset();
  };

  return (
    <div className="">
      <p className="pb-4 text-black font-semibold">
        Login to your account by Phone Number or Email Address below:
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ... email or phone number input fields ... */}
        {isVisible ? (
          <input
            type="text"
            className="w-full block border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="name@example.com"
            rules={{ required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' } }}
         
          />
        ) : (
          <input
            type="text"
            className="w-full hidden border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="name@example.com"
          />
        )}

        {isVisible ? (
          <input
            type="text"
            className="w-full hidden border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="+234 0000 0000"
          />
        ) : (
          <input
            type="text"
            className="w-full block  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="+234 0000 0000"
            rules={{ required: 'Phone number is required', pattern: { value: /^\d{11}$/, message: 'Invalid phone number format' } }}
    
          />
        )}
        {/* ... email or phone number input fields ... */}

        <div className="mt-5 flex items-center gap-4 border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]">
          <input
            type={isPasswordVisible ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            className="w-full outline-none"
            placeholder="type your password"
          />
          <div onClick={togglePasswordVisibility} className="cursor-pointer">
            {isPasswordVisible ? (
              <BsEyeSlash className="w-5 h-5" />
            ) : (
              <FiEye className="w-5 h-5" />
            )}
          </div>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="mt-[15rem] w-full font-semibold text-center text-[1.3rem] p-3 bg-violet-700 rounded-xl text-white"
        >
          Login
        </button>
        {/* ... rest of your component ... */}
      </form>
    </div>
  );
};

export default LoginLeft;
