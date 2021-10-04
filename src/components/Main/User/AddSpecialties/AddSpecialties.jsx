import { notification } from "antd";
import { useEffect } from "react";
import { Specialties } from "../../../Specialties/Specialties";
export const AddSpecialties = (props) => {
  useEffect(() => {
    openNotificationWithIcon(
      "info",
      "Вы можете выбрать не больше двух специальностей."
    );
  });

  const openNotificationWithIcon = (type, text) => {
    notification[type]({
      message: "Внимание",
      description: text,
    });
  };

  return (
    <>
      <Specialties />
    </>
  );
};
