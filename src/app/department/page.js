import React from 'react';
import styles from '../styles/department.module.css'
import sus from '../../../public/Sustainability.png'
import it from '../../../public/IT.png'
import hr from '../../../public/HR.png'
import acc from '../../../public/Accounce.png'
import proc from '../../../public/proc.png'
import Image from 'next/image';
import Link from 'next/link';
const page = () => {
    return (
        <div>
            <div className='container'>
                <div className="blackShadow"></div>
                <div className={`inner-container`}>
                    <div className={`${styles.departmentCon} bg-white py-16 px-20 drop-shadow-lg rounded-lg grid grid-cols-3 gap-y-20 gap-x-32`}>
                        <Link href={'/department/upload'}>
                            <Image src={sus} alt='img' width={100} height={100} />
                        </Link>
                        <Link href={'/department/upload'}>
                            <Image src={it} alt='img' width={100} height={100} />
                        </Link>
                        <Link href={'/department/upload'}>
                            <Image src={hr} alt='img' width={100} height={100} />
                        </Link>
                        <Link href={'/department/upload'}>
                            <Image src={acc} alt='img' width={100} height={100} />
                        </Link>
                        <Link href={'/department/upload'}>
                            <Image src={proc} alt='img' width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;