import React from "react";
import AuthSection from "components/AuthSection";
import { useRouter } from "next/router";
import Nav from "components/nav";

function AuthTypePage(props) {
  const router = useRouter();
  const { type } = router.query;

  return (
    <>
      <Nav />
      <AuthSection
        color="white"
        size="large"
        type={type}
        providers={["google", "facebook", "twitter"]}
        afterAuthPath="/requests"
      ></AuthSection>
    </>
  );
}

// Tell Next.js to export static files for each auth page
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = () => ({
  paths: [
    { params: { type: "signin" } },
    { params: { type: "signup" } },
    { params: { type: "forgotpass" } },
    { params: { type: "changepass" } },
  ],
  fallback: true,
});

export function getStaticProps({ params }) {
  return { props: {} };
}

export default AuthTypePage;
