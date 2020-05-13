import React, { useEffect } from "react";
import SettingsSection from "components/settings/SettingsSection";
import { useAuth } from "utils/auth.js";
import { useRouter } from "next/router";

function SettingsPage(props) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/auth/signin");
    }
  }, [auth, router]);

  // Show loading until we have user
  if (!auth.user) {
    return "Loading...";
  }

  return <SettingsSection></SettingsSection>;
}

export default SettingsPage;
