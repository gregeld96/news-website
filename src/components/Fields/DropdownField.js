import { useEffect, useState } from 'react';
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

function DropdownField({title, errorMessage = "", dropdownValue, onChange, itemList, optional = false, searchInput}) {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);

    function clicked(item){
        onChange(item);
        setShow(false);
        setSearch("");
    }

    function showContent() {
        setShow(!show);
        setSearch("");
    }

    useEffect(() => {
        setItems(itemList);
    }, [itemList])

    return (
        <div className='field'>
            <div className="label">{title} {optional ? <span className="form_optional_label">(Optional)</span> : ""}</div>
            {/* <div className='group'> */}
                <div className='dropdown__general'>
                    <div className='password input' onClick={() => showContent()}>
                        <div className="password__input">
                            <p>{dropdownValue?.toUpperCase()}</p>
                        </div>
                        <ArrowDownSLineIcon />
                    </div>
                    {
                        show ? 
                        <div className='input content' onMouseLeave={() => showContent()}>
                            {
                                searchInput ? <input className="form_input" value={search} type={"text"} style={{ paddingTop: "0.7em", paddingBottom: "0.7em", backgroundColor: 'white' }} onChange={(e) => setSearch(e.target.value)} /> : null
                            }
                            <div className='list'>
                            {
                                items && items.length > 0 ? items.map((item) => {
                                    return (
                                        <div key={item?.value} className={`${dropdownValue === item?.name ? 'item__active' : 'item'}`} onClick={() => clicked(item)}>{item?.name.toUpperCase()}</div>
                                    )
                                }) : null
                            }
                            </div>
                        </div>
                        : null
                    }
                    {
                        errorMessage ? <p className='font-weight-light text-danger pt-2'>{errorMessage}</p> : null
                    }
                </div>
                {/* </div> */}
        </div>
    )
}

export default DropdownField;