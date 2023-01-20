import { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

/* Un componente de React que toma una matriz de objetos como accesorio. Luego mapea sobre la matriz y
devuelve un componente FormGroup para cada elemento de la matriz. */
export const FormComponent = ({ onChange, data, id, fields, handleSubmit }) => {
    const [inputFields, setInputFields] = useState(fields);
    const [formData, setData] = useState(data);

    return (
        <>
            <Form id={id} onSubmit={handleSubmit} className="my-3 mx-4">
                {
                    /* Al verificar si inputFields es verdadero, si lo es, se mapeará sobre la matriz
                    inputFields y devolverá un componente FormGroup para cada elemento de la matriz. */
                    inputFields && inputFields.map((field, index) => (
                        <FormGroup key={index}>
                            <Label for={field.id.toString()}>
                                {field.label}
                            </Label>
                            <Input
                                onChange={onChange}
                                value={data[field.name]}
                                id={field.id.toString()}
                                name={field.name}
                                placeholder={field.placeholder}
                                type={field.type}
                            />
                        </FormGroup>
                    ))
                }
            </Form>
        </>
    )
}
