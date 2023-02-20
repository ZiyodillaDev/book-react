import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import {
  Profiles,
  ProfileHeader,
  ProfileLink,
  ProfBtn,
} from "./profilePage.style";

export const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <Profiles className="container">
      <ProfileHeader>
        <ProfileLink to="profile">
          <ProfBtn>1</ProfBtn> {t("header.profil")}
        </ProfileLink>
        <ProfileLink to="security">
          <ProfBtn>2</ProfBtn> {t("main.security")}
        </ProfileLink>
        <ProfileLink to="settings">
          <ProfBtn>3</ProfBtn> {t("main.settings")}
        </ProfileLink>
      </ProfileHeader>
      <Outlet />
    </Profiles>
  );
};
