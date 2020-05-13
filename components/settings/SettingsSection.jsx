import React, { useState } from "react";
import Section from "../Section";
import ReauthModal from "../ReauthModal";
import SettingsNav from "./SettingsNav";
import SettingsGeneral from "./SettingsGeneral";
import SettingsPassword from "./SettingsPassword";
import { useAuth } from "utils/auth";

function SettingsSection(props) {
  const auth = useAuth();
  const [section, setSection] = useState("general");

  // If an action is security sensitive it will
  // trigger a re-authentication flow.
  const [reauthState, setReauthState] = useState({
    show: false,
  });

  const handleRequireReauth = (callback) => {
    setReauthState({
      show: true,
      callback: callback,
    });
  };

  const handleCompleteReauth = () => {
    reauthState.callback();
    setReauthState({ show: false });
  };

  const handleCancelReauth = () => {
    setReauthState({ show: false });
  };

  return (
    <Section>
      {reauthState.show && (
        <ReauthModal
          provider={auth.user.providers[0]}
          onComplete={handleCompleteReauth}
          onCancel={handleCancelReauth}
        ></ReauthModal>
      )}

      <SettingsNav
        activeKey={section}
        onSelect={(selected) => setSection(selected)}
      ></SettingsNav>
      <div className="text-center w-1/3 mx-auto my-0">
        {section === "general" && (
          <SettingsGeneral
            onRequireReauth={handleRequireReauth}
          ></SettingsGeneral>
        )}

        {section === "password" && (
          <SettingsPassword
            onRequireReauth={handleRequireReauth}
          ></SettingsPassword>
        )}
      </div>
    </Section>
  );
}

export default SettingsSection;
