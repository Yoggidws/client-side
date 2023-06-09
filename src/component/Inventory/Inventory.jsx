import Dropdowns from "../Dropdowns/Dropdowns";
import Items from "../Items/Items";
import data from '../../component/Data'


export default function Inventory() {
    return (
        <div>
            <Dropdowns data={data} />
            <Items data={data} />
        </div>
    )
}
