import React from 'react';
import styles from '@/app/styles/department.module.css'
const page = () => {
    return (
        <div>
            <div className='container'>
                <div className='blackShadow'></div>
                <div className='inner-container'>
                    <div className={`${styles.uploadCon} drop-shadow-2xl rounded-lg bg-white`}>
                        <div>
                            <label htmlFor='filetype'>Upload a file</label>
                            <input type='file' id='filetype' className='hidden' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;