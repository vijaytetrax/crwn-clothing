import { signInWithGooglePopup, createUserDocFromAuth } from '../Utils/Firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response.user);
        const userDocRef = await createUserDocFromAuth(response.user);
    }

    return (
        <div>
            <p>sign-in page</p>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button>
        </div>
    );
};

export default SignIn;