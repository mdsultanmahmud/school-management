import React from 'react';
import styles from "@/app/styles/department.module.css"
import Image from 'next/image';
import tick from '../../../public/tick.png'
const page = () => {
    return (
        <div>
            <div className='container'>
                <div className='blackShadow'></div>
                <div className='inner-container'>
                    <div className={`drop-shadow-2xl rounded-lg bg-white w-[511px] h-[436px] grid place-items-center`}>
                        <div className={`${styles.successCon}`}>
                            <Image src={tick} alt='tick' width={30} height={40} />
                            <p>YOUR FILE UPDATETION <br />
                                SUCCESSFULLY <br />
                                DONE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;