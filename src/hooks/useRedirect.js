import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useRedirects() {
  const router = useRouter();

  useEffect(() => {
    if (router.route === "/") {
      return router.push("/main");
    }
  }, [router.route]);

  return {};
}
