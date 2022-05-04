import { useState } from "react";
import {
    Button,
    useToast,
    FormControl,
    FormLabel,
    Textarea,
    FormHelperText,
    Stack,
} from "@chakra-ui/react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../../API/firebase";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const toast = useToast({
        position: "top-right",
        autoDismiss: true,
        duration: 3000,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoMensaje = {
            nombre,
            email,
            mensaje,
            fecha: serverTimestamp(),
        };

        if ((nuevoMensaje.nombre, nuevoMensaje.email, nuevoMensaje.mensaje === "")) {
            toast({
                title: "Todos los campos son obligatorios",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
        } else {
            const mensajeColeccion = collection(db, "nuevoMensaje");
            const mensajesEnviados = addDoc(mensajeColeccion, nuevoMensaje);

            mensajesEnviados
                .then((promesa) => {
                    console.log(promesa);
                    toast({
                        title: "Mensaje enviado",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                })
                .catch(() => {
                    toast({
                        title: "Error al enviar el mensaje",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                });
            setNombre("");
            setEmail("");
            setMensaje("");
        }
    };

    return (
        <FormControl as={"form"} onSubmit={handleSubmit}>
            <Stack justifyContent={"center"} maxWidth={"700px"}>
                <FormHelperText color={"brand.100"}>
                    Si te interesa vender nuestros productos llamá al <strong>(351)371-3106</strong>
                </FormHelperText>
                <Stack>
                    <FormLabel htmlFor="nombre">Nombre</FormLabel>
                    <input
                        className="form--input"
                        id="nombre"
                        type="nombre"
                        value={nombre}
                        width={"100%"}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <FormLabel htmlFor="nombre">Email</FormLabel>
                    <input
                        className="form--input"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormLabel htmlFor="mensaje">Mensaje</FormLabel>
                    <Textarea
                        bgColor={"#f5f5f5"}
                        id="mensaje"
                        type="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                </Stack>
            </Stack>
            <Button marginTop={6} size={"sm"} type={"submit"}>
                Enviar
            </Button>
        </FormControl>
    );
};

export default Formulario;
