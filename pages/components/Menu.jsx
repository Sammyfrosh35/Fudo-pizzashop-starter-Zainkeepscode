import React from 'react'
import css from "../../styles/Menu.module.css"
const Menu = (pizzas) => {
    console.log(pizzas)
  return (
    <div className={css.container}>

        <div className={css.heading}>
            <span>OUR MENU</span>
            <span>Menu that Always</span>
            <span>Makes you Salivate</span>
        </div>

        {/* pizzas */}
            {pizzas.map((pizza,id))}
    </div>
  )
}

export default Menu