import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from "../firebase";

export default function OAuth() {
    const auth = getAuth(app);
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account'});

        try {
            const resultFromGoogle = await signInWithPopup(auth, provider)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Button type="button" gradientDuoTone='pinkToOrange' outline onClick=
    {handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2' />
            continue with Google
    </Button>
  );
}
