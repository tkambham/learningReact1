import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState([
        { id: 1, checked: false, item: "Item 1", },
        { id: 2, checked: false, item: "Item 2", },
        { id: 3, checked: false, item: "Item 3", },
        { id: 4, checked: false, item: "Item 4", },
        { id: 5, checked: false, item: "Item 5", },
    ]);

    const handleCheck = (id) => {
        const listItem = items.map((item) => item.id ===id ? {
            ...item,
            checked: !item.checked,
        }
        : item
        );
        setItems(listItem);
    }
    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt role="button" tabIndex="0"/>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content;