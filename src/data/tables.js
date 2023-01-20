
/* Representación de relaciones y su información en un formato JSON */
export const clients = [
    { id: 1, nombre: "José Hernández Castro", correo: "jose@ptree.com.mx" },
    { id: 2, nombre: "Anyhelo Moreno Castro", correo: "danyhelottaviani@outlook.com" },
    { id: 3, nombre: "Carla Garzón Flores", correo: "test@outlook.com" },
]


export const credits = [
    {
        id: 1,
        fecha: "2022-10-17 15:48:25",
        monto_original: 8000.00,
        saldo: 4000.00,
        parcialidad: 2,
        liquidado: "false",
        cliente_id: 1
    },
    {
        id: 2,
        fecha: "2022-10-17 15:48:25",
        monto_original: 8000.00,
        saldo: 4000.00,
        parcialidad: 2,
        liquidado: "false",
        cliente_id: 2
    },
    {
        id: 3,
        fecha: "2022-10-17 15:48:25",
        monto_original: 8000.00,
        saldo: 4000.00,
        parcialidad: 2,
        liquidado: "false",
        cliente_id: 1
    },
    {
        id: 4,
        fecha: "2022-10-17 15:48:25",
        monto_original: 8000.00,
        saldo: 4000.00,
        parcialidad: 2,
        liquidado: "false",
        cliente_id: 3
    },
    {
        id: 5,
        fecha: "2022-10-17 15:48:25",
        monto_original: 8000.00,
        saldo: 4000.00,
        parcialidad: 2,
        liquidado: "false",
        cliente_id: 2
    },
]

export const payments = [
    { id: 1, monto: 2000.00, fecha: "2022-11-17 14:58:01", credito_id: 1 },
    { id: 2, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 1 },
    { id: 3, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 2 },
    { id: 4, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 2 },
    { id: 5, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 3 },
    { id: 6, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 3 },
    { id: 7, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 4 },
    { id: 8, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 4 },
    { id: 9, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 5 },
    { id: 10, monto: 2000.00, fecha: "2022-12-17 17:25:12", credito_id: 5 }
]