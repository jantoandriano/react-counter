import React, { useState } from 'react';
import swal from 'sweetalert';

export default function CounterHooks() {
    const [value, setValue] = useState(0)

    const incrementCount = () => {
        setValue(value + 1)
    }

    const decrementCount = () => {
        if (value == 0) {
            swal("BRO", "ngak boleh minus", "error");
        } else{
            setValue(value - 1)
        }
    }

    return (
        <div className="center">
        <h1 className="header">COUNTER HOOKS</h1>
        <h2>{value}</h2>
        <button className="btn btn-inc" onClick={incrementCount}>+</button>
        <button className="btn btn-dec" onClick={decrementCount}>-</button>
      </div>
    )
}
