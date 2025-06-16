// Functional Imports
import { useState } from "react";

// Components Import
import Loading from "./components/Loading/Loading";
import Main from "./components/Main/Main";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    function onLoadingComplete(){
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading && <Loading onComplete={onLoadingComplete} />}
            {!isLoading && <Main />}
        </div>
    );
}
