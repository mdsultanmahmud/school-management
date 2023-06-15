import React from "react";
import styles from "@/app/styles/home.module.css";
import department from "../../../public/department.png";
import knowledge from "../../../public/knowledge.png";
import notice from "../../../public/notice.png";
import policy from "../../../public/policy.png";
import Image from "next/image";
import Link from "next/link";
const HomeCom = () => {
  return (
    <div>
      <div className={`container`}>
        <div className="blackShadow"></div>
        <div className={`${styles.homeContainer} flex`}>
          <div
            className={`hidden md:block md:w-[250px] max-w-[330px] ${styles.drawer}`}
          >
            <ul>
              <li>
                <Image src={department} alt="img" height={26} width={25} />
                <span>Department</span>
              </li>
              <li>
                <Image src={knowledge} alt="img" height={26} width={25} />
                <span>Notice</span>
              </li>
              <li>
                <Image src={notice} alt="img" height={26} width={25} />
                <span>Notice</span>
              </li>
              <li>
                <Image src={policy} alt="img" height={26} width={25} />
                <span>Polices</span>
              </li>
            </ul>
          </div>
          <div className={`p-0 md:p-5 lg:p-16`}>
            <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <Link href={"/department"}>
                <div className={`${styles.active} ${styles.sector}`}>
                  <h3>1</h3>
                  <p>Department</p>
                </div>
              </Link>
              <Link href={"/department"}>
                <div className={`${styles.sector}`}>
                  <h3>2</h3>
                  <p>Notice</p>
                </div>
              </Link>
              <Link href={"/department"}>
                <div className={`${styles.sector}`}>
                  <h3>3</h3>
                  <p>Knowledge</p>
                </div>
              </Link>
              <Link href={"/department"}>
                <div className={`${styles.sector}`}>
                  <h3>4</h3>
                  <p>Polices</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCom;
