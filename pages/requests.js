import Nav from "components/nav";
import { StyledButton } from "components/button";
// import RightSidebar, {
//   useToolbar,
//   toolbarConstants,
// } from "components/rightSidebar";
import React, { useEffect } from "react";
import { useAuth } from "utils/auth.js";
import { useRouter } from "next/router";

function Requests(props) {
  const auth = useAuth();
  const router = useRouter();
  // const toolbarOptions = useToolbar();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (!auth.user) {
      router.push("/auth/signin");
    }
  }, [auth, router]);

  return (
    <div>
      <Nav />
      {/* <RightSidebar toolbarOptions={toolbarOptions} /> */}
      <div className="text-center mt-10">
        <h1 className="title">Requests</h1>
        {auth.user ? (
          <>
            <h1 className="font-bold text-xl">
              Hello! You're logged in as {auth.user.email}
            </h1>
            {/* <StyledButton
              onClick={() =>
                toolbarOptions.handleToolbarToggle(
                  toolbarConstants.EDIT_REQUEST
                )
              }
            >
              Edit Request
            </StyledButton> */}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Requests;
