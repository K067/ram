import React from "react";

export const Status = ({ setStatus, setPage }) => {
    let status = ["Alive", "Dead", "Unknown"];

    return (<div className="filter filter-status">
        <span className="span-title">Status</span>
        <div className="break"></div>
        {status.map((status, i) => (
            <div key={i} className="checkbox">
                <div className="flex-table">
                    <input onClick={(e) => {
                        if (e.target.checked === true) {
                            setStatus(e.target.id);
                            setPage(1);
                        } else {
                            setStatus('');
                        }
                    }} className="input-class" type="checkbox" id={status} />
                    <span className="checkmark"></span>
                    <label htmlFor={status}>{status}</label>
                </div>
            </div>
        ))}
    </div>)
}