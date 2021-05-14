import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDomain } from '../redux/actions'

const AddDomainInputField = () => {
    const [domain, setDomain] = useState('')
    const dispatch = useDispatch()

    const updateDomain = (event) => {
        setDomain(event.target.value);
    }

    const addDomainSubmit = (event) => {
        event.preventDefault();
        dispatch(addDomain(domain))
        setDomain('')
    }
    return (
        <form onSubmit={(event) => addDomainSubmit(event)}>
            <label for="domain">New Domain: </label>
            <input type="text" name="domain" value={domain}
                onChange={(event) => updateDomain(event)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddDomainInputField;
