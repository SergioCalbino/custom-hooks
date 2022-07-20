import { useState } from "react";


export const useForm = ( initialForm = {} ) => { // Ese initialForm me permite enviar el formato que yo desee para los formularios
 
    const [formState, setformState] = useState( initialForm );

    const onInputChange = ({target}) => { //destructuro el event
        const { name, value } = target
        setformState({
            ...formState,
            [ name ]: value //De esta forma reemplazos el e.target.name y el e.target.value
        })
    };

    const onResetForm = () => {
        setformState(initialForm)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm

    }
}
