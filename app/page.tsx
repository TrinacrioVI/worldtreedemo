"use client"
import Image from "next/image";
import './styles.css';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)
  const router = useRouter();

  return (
    <div>
      {!isAuthorized && (
        <div className="auth_modal">
          <h2>Welcome to WorldTree</h2>
          <h2>Sign In / Sign Up</h2>
          <h2>Click to Authorize:</h2>
          <button className='auth_modal_button' onClick={() => setIsAuthorized(true)}>Authorize</button>
        </div>
      )}
      {isAuthorized && (
        <Image src='/universe.png' alt = 'background' layout= 'fill'/>
      )}
      <div className="enter_button_container">
        <h2>Authorized! Enter:</h2>
        <Image onClick={() => router.push('/tree')} className="enter_button" src='/yggsadril.png' width={200} height={200} alt='tree'/>
      </div>
    </div>
  );
}
