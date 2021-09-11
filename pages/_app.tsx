import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import Amplify from 'aws-amplify';
import 'tailwindcss/tailwind.css';
import "../public/tailwind.css";
import 'react-toastify/dist/ReactToastify.css';
import awsConfig from '../src/aws-exports';

Amplify.configure(awsConfig);

function GithubLinksApp({ Component, pageProps }: AppProps) {
    return <>
    <Component {...pageProps} />
    <ToastContainer />
    </>

}
export default GithubLinksApp