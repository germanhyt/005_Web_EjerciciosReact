import React, { useContext } from 'react'
import { Context } from '../../context/Context';

export default function Colors() {
    const { setColor } = useContext(Context);

    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <div
                    className="w-20 h-20 bg-[#4285f4] rounded-md m-5"
                    onClick={() => {
                        setColor("#4285f4");
                    }}
                ></div>
                <div
                    className="w-20 h-20 bg-[#ea4335] rounded-md m-5"
                    onClick={() => {
                        setColor("#ea4335");
                    }}
                ></div>
                <div
                    className="w-20 h-20 bg-[#fbbc05] rounded-md m-5"
                    onClick={() => {
                        setColor("#fbbc05");
                    }}
                ></div>
                <div
                    className="w-20 h-20 bg-[#34a835] rounded-md m-5"
                    onClick={() => {
                        setColor("#34a835");
                    }}
                ></div>
            </div>
        </>
    )
}
