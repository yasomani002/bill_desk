import React, { useState } from 'react'
import InputFormContainer from './InputFormContainer'
import DisplayBillContainer from './DisplayBillContainer'
import '../styles/PagesStyles.css'

function RootContainer() {
    const [selectedItem, setSelectedItem] = useState({ value: null, price: null })
    // const [selectedItemPrice, setSelectedItemPrice] = useState(null)
    const [tax, setTax] = useState(null)

    const [formData, setFormData] = useState({
        companyName: null,
        customerName: null,
        selectedItemPrice: null,
        quantity: null,
    })

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setTypeValue(name, value)
    }
    function setTypeValue(name, value) {
        switch (name) {
            case 'company-name':
                setFormData(prevState => ({ ...prevState, companyName: value }));
                break;
            case 'customer-name':
                setFormData(prevState => ({ ...prevState, customerName: value }));
                break;
            case 'selected-item':
                setSelectedItem(value);
                // setSelectedItemPrice(value && typeof value === 'object' ? value.price : null);
                break;
            case 'item-price':
                // setSelectedItemPrice(value);
                break;
            case 'quantity':
                setFormData(prevState => ({ ...prevState, quantity: value }));
                break;
            case 'tax':
                setTax(value);
                break;
            default:
                break;
        }
    }
    
    return (
        <div className='rootContainer__root'>
            <InputFormContainer
                handleOnChange={handleOnChange}
                formData={formData}
                selectedItem={selectedItem}
                tax={tax}
            />
            <DisplayBillContainer
                handleOnChange={handleOnChange}
                formData={formData}
                selectedItem={selectedItem}
                tax={tax}
            />
        </div>
    )
}

export default RootContainer