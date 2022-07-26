import React from 'react';

function Location() {

    function handler(e: any): void {
        e.preventDefault()
        console.log(e.target.value)
    }


    return (
        <div className="panel panel-location">
            <div className="text-field text-field_floating-2">
                <form onChange={(e)=> handler(e)}>
                    <input className="text-field__input" type="name" id="name" name="city"/>
                    <label className="text-field__label" htmlFor="name">Budapest, Hungary</label>
                </form>
            </div>
        </div>
    );
}

Location.propTypes = {};

export default Location;