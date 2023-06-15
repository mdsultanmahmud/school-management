"use client";
import React from "react";
import styles from "@/app/styles/department.module.css";
import { useRouter } from "next/navigation";
const Success = () => {
  const router = useRouter();
  const handleUpload = (e) => {
    setTimeout(() => {
      router.push("/success");
    }, 1000);
  };
  return (
    <div>
      <div className="container">
        <div className="blackShadow"></div>
        <div className="inner-container">
          <div
            className={`${styles.uploadCon} w-[350px] h-[350px] lg:w-[956px] lg:h-[649px] grid place-items-center drop-shadow-2xl rounded-lg bg-white`}
          >
            <div>
              <label htmlFor="filetype">Upload a file</label>
              <input
                onChange={() => handleUpload()}
                type="file"
                id="filetype"
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
