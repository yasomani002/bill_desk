import React from 'react'
import Typo from '../common/Typo'

function DisplayBillContainer({
    formData,
    selectedItem,
    tax
}) {
    const price = selectedItem.price * formData.quantity 
    const total = price*tax?.value / 100 + price || 0
    return (
        <div className='displayBillContainer__root'>
            <Typo variant='ka01'>Company Name : {formData?.companyName}</Typo>
            <br />
            <Typo variant='ka01'>Customer Name : {formData?.customerName}</Typo>
            <br />
            <Typo variant='ka01'>Selected Item : {selectedItem.value}</Typo>
            <br />
            <Typo variant='ka01'>Item Price : ₹{selectedItem.price}</Typo>
            <br />
            <Typo variant='ka01'>Item Quantity : {formData?.quantity}</Typo>
            <br />
            <Typo variant='ka01'>Tax : {tax?.value}%</Typo>
            <br />
            <Typo variant='ka01'>Price : ₹{total}</Typo>
       
        </div>
    )
}

export default DisplayBillContainer