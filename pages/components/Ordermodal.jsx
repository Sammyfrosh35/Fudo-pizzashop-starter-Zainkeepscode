import  {useDisclosure}  from '@mantine/hooks';
import  {Modal, Button}  from '@mantine/core';
import css from "../../styles/order.module.css"
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { createOrder, PaymentMethod } from '../../lib/orderhandler';
import { useStore } from "../../store/store";
import { Toaster } from 'react-hot-toast';


export default function OrderModal() {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [FormData, setFormData]=useState({})




     const handleInput = (e) => {
      setFormData({...FormData,[e.target.name]: e.target.value})
     }

     const resetcart = useStore((state)=>state.resetcart)



 const total = typeof window !== 'undefined' && localStorage.getItem('total')


 const handleSubmit =  async (e)=> {
   e.preventDefault();
   const id = await createOrder({...FormData, total, PaymentMethod})
  toast.success("Order completed")
  resetcart()
  {
    typeof window !== 'undefined' && localStorage.setItem('order',id)
  }
  router.push(`/order/${id}`)
 }


  return (
    <>
      <Modal opened={opened} onClose={close} title="payment in cash" >
        {/* Modal content */}
        <form action='' className={css.formcontainer}>
        <input onChange={handleInput} type="text" name= 'name' required placeholder="Name" />
        <input onChange={handleInput} type="text" name= 'phone' required placeholder="Phone No."/>
        <textarea onChange={handleInput} name="Address"  rows={3} placeholder='Address'></textarea>

        <span>
          You are to pay <span>$ {total}</span> on delivery
        </span>

        <button  onClick={handleSubmit} type='submit' className='btn'>Place Order</button>
       </form>



      <Toaster/>
      </Modal>
      <button className="btn" onClick={open}>Pay on Delivery </button>
      
    </>
  );
}