import React, {useState} from 'react';

function ShoppingList() {

    const initShopList = [
        {
            id: 1,
            task: 'Milk',
            complete: false
        },
        {
            id: 2,
            task: 'Bread',
            complete: false
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            task: 'Cheese',
            complete: false
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            task: 'Beer',
            complete: false
        },
    ]

    const [shoppingList, setShoppingList] = useState(initShopList)


    const listItems = shoppingList.map((el, index) => (
        <li key={index}
            className={el.complete ? 'checked' : ''}>
            <div className="check"></div>
            <div className="title">{el.task} {el.id}</div>
        </li>
    ))

    return (
        <div className="panel panel-tasklist">
            <div className="header">
                <div className="title">Shopping list ({initShopList.length})</div>
            </div>
            <div className="newItem">
                <div className="text">
                    <img src={require('../../img/plus.png')}/>
                    <span className="title">Add new item</span>
                </div>

                </div>
            <form>
                <input type="text" />
            </form>
            <ul>
                {listItems}


                {/*<li className="checked">*/}
                {/*    <div className="check"></div>*/}
                {/*    <div className="title">{initShopList.tasks[0]}</div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className="check"></div>*/}
                {/*    <div className="title">{initShopList.tasks[1]}</div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className="check"></div>*/}
                {/*    <div className="title">{initShopList.tasks[2]}</div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className="check"></div>*/}
                {/*    <div className="title">{initShopList.tasks[3]}</div>*/}
                {/*</li>*/}


            </ul>
        </div>
    );
}

ShoppingList.propTypes = {};

export default ShoppingList;