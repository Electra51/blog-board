import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <Image
        src="/images/eror.jpg"
        width={900}
        height={900}
        layout="responsive"
      />
      <Button type="primary">Go Back Home</Button>
    </div>
  );
};

export default ErrorPage;
