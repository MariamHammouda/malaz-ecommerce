'use client'
import { signIn , useSession } from "next-auth/react"


export default function Home() {
  const {data:session} = useSession();

  if(!session){
    return (    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button 
          onClick={() => signIn('google')}
          className="bg-white p-2 px-4 rounded-lg hover:bg-gray-100"
        >
          Login with Google
        </button>
      </div>
    </div> ) ;
  
  }
  return (
    <div>loggen in {session.user.email}</div>
  );
}