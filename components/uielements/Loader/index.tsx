import { useState, useEffect } from "react";
import Iconography from "../Iconography";

interface Props {
    children: React.ReactNode;
    isLoading?: boolean
}
const delay = 2;
const Loader = ({children, isLoading}: Props) => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    useEffect(
        () => {
          setTimeout(() => setIsPageLoading(false), delay * 1000);
        },
        []
      );

    return <div>
        {(isLoading || isPageLoading) && (
        <div className="min-h-screen min-w-screen flex items-center justify-center px-4">
        <Iconography icon="spinner" className="animate-spin items-center justify-center" />
        </div>
        )}
        {children}
    </div>
};

export default Loader;