import {ReactComponentElement} from "react";

const compose = ( ...functions: any[] ) => (component: ReactComponentElement<any>) => {
    return functions.reduceRight(
        (wrapped, f) => f(wrapped), component
    );
};

export default compose;
