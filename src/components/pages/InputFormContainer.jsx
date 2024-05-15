import React from 'react'
import CustomTextFiled from '../common/CustomTextFiled'

function InputFormContainer({
    formData,
    handleOnChange,
    selectedItem,
    tax
}) {
    return (
        <div className='inputFormContainer__root'>
            <form>
                <CustomTextFiled
                    label='Company Name :'
                    name='company-name'
                    value={formData.companyName}
                    onChange={handleOnChange}
                />
                <CustomTextFiled
                    label='Customer Name :'
                    name='customer-name'
                    value={formData.customerName}
                    onChange={handleOnChange}
                />
                <CustomTextFiled
                    select
                    label="Item List :"
                    name="selected-item"
                    value={selectedItem}
                    onChange={handleOnChange}
                    variant="outlined"
                    manuItem={[
                        { value: 'item 01', label: 'item 01', price: 11 },
                        { value: 'item 02', label: 'item 02', price: 12 },
                        { value: 'item 03', label: 'item 03', price: 13 },
                        { value: 'item 04', label: 'item 04', price: 14 },
                    ]}
                />
                <div className='inputFormContainer__price__container'>
                    <CustomTextFiled
                        label='Item Price :'
                        name='item-price'
                        value={formData.selectedItemPrice}
                        onChange={handleOnChange}
                    />
                    <CustomTextFiled
                        label='Quantity :'
                        name='quantity'
                        value={formData.quantity}
                        onChange={handleOnChange}
                    />
                </div>
                <CustomTextFiled
                    select
                    label="Tax :"
                    name="tax"
                    value={tax}
                    onChange={handleOnChange}
                    variant="outlined"
                    manuItem={[
                        { value: 5, label: '5%' },
                        { value: 10, label: '10%' },
                        { value: 15, label: '15%' },
                        { value: 20, label: '20%' },
                    ]}
                />
            </form>
        </div>
    )
}

export default InputFormContainer