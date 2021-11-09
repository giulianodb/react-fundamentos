import React, { cloneElement } from "react";

function FamiliaCurso(props) {
    return (
        <>
            {
                React.Children.map(props.children, (el) => {
                    return cloneElement(el,{...props})
                })
            }

        </>
    )
}

export default FamiliaCurso;