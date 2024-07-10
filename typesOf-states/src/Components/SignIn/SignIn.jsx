import React, { useState } from "react";
const SignIn = () => {
  const [signIn, setSignIn] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
  };

  const handleSignOut = () => {
    setSignIn(false);
  };
  return (
    <>
      <div className="text-center py-32">
        {signIn ? (
            <div>
          <button
            className="bg-green-500 font-bold font-mono rounded-full p-3 hover:bg-green-950 hover:text-white"
            onClick={handleSignIn}
          >
            SignOut
          </button>
          <p>
            Welcome Back Good To see You here back in the
            Commuitty,CutrateTraveller Welcomes You....
          </p>
        </div>
        ):(
<div>
          <button
            className="bg-red-700 font-bold font-mono rounded-full p-3 hover:bg-red-950 hover:text-white"
            onClick={handleSignOut}
          >
            SignIn
          </button>
          <p>See You Soon Buddy....</p>
        </div>
        )}
        
        
      </div>
    </>
  );
};
export default SignIn;
