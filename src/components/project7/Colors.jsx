import React, { useContext } from 'react'
import { Context } from '../../context/Context';

export default function Colors() {
    const { setColor } = useContext(Context);

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <div
                    className="w-20 h-20 bg-[#4285f4] rounded-md "
                    onClick={() => {
                        setColor("#4285f4");
                    }}
                ></div>
                <div
                    className="w-20 h-20 bg-[#ea4335] rounded-md "
                    onClick={() => {
                        setColor("#ea4335");
                    }}
                ></div>
                <div
                    className="w-20 h-20 bg-[#fbbc05] rounded-md "
                    onClick={() => {
                        setColor("#fbbc05");
                    }}
                ></div>
                <div
                    className="w-20 h-20 bg-[#34a835] rounded-md "
                    onClick={() => {
                        setColor("#34a835");
                    }}
                ></div>
            </div>
        </>
    )
}
