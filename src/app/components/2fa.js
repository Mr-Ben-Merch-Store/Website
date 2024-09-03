'use client';
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

const BASE_URL = process.env.BASE_URL;

const TwoFactorModal = () => {

    const [otp, setOtp] = useState('');
    const [invalidOtp, setInvalidOtp] = useState(false)

    const [qrImage, setQrImage] = useState()
    const [secret, setSecret] = useState()

    /* Generate a QR */
    const get2faQrCode = async () => {
        const response = await axios.get(`${BASE_URL}api/2fa/qrcode`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        if (response.data.status == 200) {
            setQrImage(response.data.data)
            setSecret(response.data.secret)
        }
    }

    useEffect(() => {
        get2faQrCode()
    }, [])

    /* Validate Code  */
    const handleOtpChange = async (e) => {

        setOtp(e.target.value);

        if (e.target.value.length === 6) {

            const token = e.target.value
            const response = await axios.post(`${BASE_URL}api/2fa/verify`,
                { secret, token },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            if (response.data.verified) {
                // 2FA Enabled successfully
            } else {
                setInvalidOtp(true)
            }

        }

    };

    return (

        <div className='flex justify-end w-full'>

          <div className="container mx-auto p-4">

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">

              <div className="flex flex-1 justify-center items-center p-4 text-white rounded-md">

                {
                  qrImage &&
                  <img src={qrImage} alt="2FA QR Code" className='rounded-lg border-2' />
                }

              </div>

              <div className="flex-1 p-4 text-white rounded-md">

                <p className="text-2xl text-gray-700 font-bold mb-4">Use an Authenticator App to enable 2FA</p>
                <ul className="list-none list-inside mb-4 text-gray-700">
                  <li className="mb-2"><span className="font-bold">Step 1:</span> Scan the QR Code with your Authenticator app.</li>
                  <li className="mb-2"><span className="font-bold">Step 2:</span> Enter the code below from your app.</li>
                </ul>
  
                {/* OTP Input */}
                <input
                  type="text"
                  maxLength="6"
                  value={otp}
                  onChange={handleOtpChange}
                />
  
                {/* Invalid Input */}
                {
                  <p className="mt-3 text-red-500 text-sm text-center">{invalidOtp && '*Invalid Code'}</p>
                }

              </div>

            </div>

          </div>

        </div>

    );
};

export default TwoFactorModal;