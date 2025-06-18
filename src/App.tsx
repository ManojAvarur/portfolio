// Functional Imports
import { useState } from "react";

// Components Import
import Loading from "./components/Loading/Loading";
import Main from "./components/Main/Main";
import WorkingOnIt from "./components/WorkingOnIt/WorkingOnIt";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    function onLoadingComplete(){
        // window.location.reload();
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading && <Loading onComplete={onLoadingComplete} />}
            {!isLoading && <WorkingOnIt />}
        </div>
    );
}
