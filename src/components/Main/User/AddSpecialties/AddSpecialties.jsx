import { notification } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Specialties } from "../../../Specialties/Specialties";
export const AddSpecialties = (props) => {
  const selectedSpecialties = useSelector(
    (state) => state.student.selectedSpecialties
  );

  const openNotificationWithIcon = (type, text) => {
    notification[type]({
      message: "Внимание",
      description: text,
    });
  };

  useEffect(() => {
    // if (selectedSpecialties) {
    //   openNotificationWithIcon(
    //     "info",
    //     "Вы можете выбрать не больше двух специальностей."
    //   );
    // }
    if (!JSON.parse(window.sessionStorage.getItem('isVisitedSpec'))) {
      openNotificationWithIcon(
        "info",
        "Вы можете выбрать не больше двух специальностей."
      );
      sessionStorage.isVisitedSpec = true;
    }
  }, []);

  return (
    <>
      <Specialties />
    </>
  );
};
