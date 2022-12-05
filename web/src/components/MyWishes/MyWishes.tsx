import MyWish from "../MyWish/MyWish"
import { Wish } from "types/graphql";

type Props = {
  wishes: Wish[]
};

const MyWishes = ({ wishes }: Props) => {
  return (
    <div>
      <h2>My wishes</h2>
      {wishes.map((wish: Wish, i: number)=>{
        <MyWish wish={wish} key={i}/>
      })}
    </div>
  )
}

export default MyWishes
