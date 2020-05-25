import Nav from "components/nav";
import { StyledLink } from "components/button";
import React, { useEffect, useCallback, useState } from "react";
import { useAuth } from "utils/auth.js";
import { useRouter } from "next/router";
import { useRequests } from "contexts/requests";
import { getRequestsByUser, deleteRequest } from "utils/db";
import Grid from "components/requestGrid";

function Requests() {
  const auth = useAuth();
  const router = useRouter();
  const [state, dispatch] = useRequests();
  const [pending, setPending] = useState(false);

  const fetchRequests = useCallback(async () => {
    try {
      const data = await getRequestsByUser(auth.user.uid);
      dispatch({
        type: "FETCH_MY_REQUESTS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error,
      });
    }
  }, [dispatch]);

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (!auth.user) {
      router.push("/auth/signin");
    } else {
      fetchRequests();
    }
  }, [auth, router]);

  const { myRequests } = state;

  const handleDelete = async (id) => {
    setPending(true);
    try {
      await deleteRequest(id);
    } catch (error) {
      console.error(error);
    }
    setPending(false);
  };

  return (
    <div>
      <Nav />
      {/* <RightSidebar toolbarOptions={toolbarOptions} /> */}
      <div className="text-center mt-10 px-8">
        {auth.user ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="title">{auth.user.name}'s Requests</h1>
              <StyledLink href="/requests/create" classNames="text-text_white">
                Create New Request
              </StyledLink>
            </div>

            {myRequests && myRequests.length ? (
              <Grid
                data={myRequests}
                canEdit={true}
                handleDelete={handleDelete}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Requests;
