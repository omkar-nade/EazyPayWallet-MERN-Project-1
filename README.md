# EazyPayWallet-MERN-Project

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {RegisterUser} from "../../apicalls/users";

export default function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [identificationType, setIdentificationType] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerFormData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      identificationType,
      identificationNumber,
      address,
      password,
      confirmPassword,
    };
    // console.log(registerFormData);
    try {
      const response = await RegisterUser(registerFormData);
      // console.log(response);
      if (response.success) {
        alert(response.message);
        navigate("/login");
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col items-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  EazyPayWallet - Registration
                </h2>
                <div className="border-b border-gray-800 pb-1"></div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* <!-- First Name Input --> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <!-- Last Name Input --> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <!-- Email Input --> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <!-- Mobile Number Input --> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mobile number
                    </label>
                    <div className="mt-2">
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <!-- Identification Type --> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="identificationType"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Identification Type
                    </label>
                    <div className="mt-2">
                      <select
                        id="identificationType"
                        name="identificationType"
                        autoComplete="identification-type"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={identificationType}
                        onChange={(e) => setIdentificationType(e.target.value)}
                      >
                        <option value="NATIONAL ID">National ID</option>
                        <option value="PASSPORT">Passport</option>
                        <option value="DRIVING LICENCE">Driving License</option>
                        <option value="SOCIAL CARD">
                          Social Security card (SSN)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Identification Number --> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="identificationNumber"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Identification Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="identificationNumber"
                        id="identificationNumber"
                        autoComplete="identification-number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) =>
                          setIdentificationNumber(e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* <!-- Address Input --> */}
                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <!-- Password Input --> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="new-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <!-- Confirm Password Input --> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="new-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <!-- Buttons Section --> */}
                  <div className="col-span-full">
                    <div className="mt-6 flex flex-col items-center gap-y-2">
                      <button
                        type="submit"
                        className="w-full rounded-md bg-green-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        REGISTER
                      </button>

                      <p className="mt-2 text-center text-sm text-gray-500">
                        Already a member?{" "}
                        <Link
                          to="/login"
                          className="font-semibold leading-6 text-green-900 hover:text-green-800"
                        >
                          Log in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

