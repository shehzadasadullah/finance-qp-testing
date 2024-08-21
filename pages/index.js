import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return;
}
