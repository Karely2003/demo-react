import { useState } from "react"
import Swal from "sweetalert2"

const UseSuma = () => {
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [resultado, setResultado] = useState('')

    const Alerta = (mensaje) => {
        Swal.fire({
            title: 'Advertencia',
            text: mensaje,
            icon: 'warning',
            
        })
    }
    

    const Sumar = () => {
         if (numero1 === '' ) {
            Alerta('ingrese primer numero')
        }else if (numero2 === '') {
            Alerta('ingrese segundo numero')
        } else {
            let suma = Number(numero1) + Number(numero2)
            setResultado(suma)
        }

    }  

    const Limpiar = () => {
        setNumero1('')
        setNumero2('')
        setResultado('')
    }

    return {
        numero1,
        setNumero1,
        numero2,
        setNumero2,
        resultado,
        Sumar,
        Limpiar
    }


}


export default UseSuma