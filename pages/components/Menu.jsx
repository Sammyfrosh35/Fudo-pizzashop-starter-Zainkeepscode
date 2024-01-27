import { urlFor, url} from "../../lib/client";
import css from "../../styles/Menu.module.css";
import Image from "next/image";
import pizza from "../../sanity/schemas/pizza"



export default function Menu({ pizzas }) {
  console.log(pizzas);
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu that Always</span>
        <span>Makes you Salivate</span>
      </div>

      {/* pizzas */}
      {pizzas.map((pizzas, id) => {
        return (
          <div className={css.pizza} key={id}>
            <div className={css.imagewrapper}>
              <Image src={urlFor(pizza.image).url()} alt="" 
              objectFit="cover"
              layout="fill"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
