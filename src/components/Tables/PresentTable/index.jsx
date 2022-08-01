import { useSubscription } from "@apollo/client";
import React, { useEffect } from "react";
import { useState } from "react";
import { GET_ATTENDANCES_STUDENT } from "../../../api/Model/Subscription/GetAttendanceStudents";
import AttendanceValue from "./AttendanceValue";
import HeaderTable from "./HeaderTable";

function PresentTable({ schedule_data, npm }) {
  const { data } = useSubscription(GET_ATTENDANCES_STUDENT, {
    variables: {
      npm: npm,
      schedules_id: schedule_data.id,
    },
  });

  const [persentase, setPersentase] = useState(0);
  useEffect(() => {
    setPersentase(0);
    if (data?.attendances[0].p_1 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_2 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_3 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_4 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_5 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_6 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_7 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_8 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_9 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_10 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_11 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_12 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_13 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_14 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_15 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_16 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_17 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_18 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_19 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_20 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_21 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_22 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_23 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_24 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_25 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_26 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_27 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_28 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_29 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_30 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_31 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_32 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_33 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_34 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_35 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_36 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_37 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_38 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_39 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_40 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_41 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_42 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_43 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_44 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_45 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_46 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_47 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_48 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_49 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_50 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_51 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_52 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_53 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_54 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_55 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_56 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_57 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_58 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_59 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
    if (data?.attendances[0].p_60 === 1) {
      setPersentase((persentase) => persentase + 1);
    }
  }, [data]);

  return (
    <>
      <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <HeaderTable />
          </thead>
          <tbody>
            <AttendanceValue data={data} />
          </tbody>
        </table>
      </div>
      <div className="w-full p-5">
        {schedule_data.meet_number !== 0 ? (
          <div className="justify-center flex flex-col gap-y-5 text-primary-grey dark:text-white">
            <div className="flex flex-row justify-center items-end">
              <p className=" text-center lg:text-6xl text-4xl font-bold">
                {((persentase / schedule_data.meet_number) * 100).toFixed(1)}
              </p>
              <p className=" text-center text-lg ">%</p>
            </div>
            <p className=" text-center lg:text-2xl text-lg">
              From {schedule_data.meet_number} Session
            </p>
          </div>
        ) : (
          <div className="justify-center flex flex-col gap-y-5 text-primary-grey dark:text-white">
            <p className=" text-center lg:text-2xl text-lg">No Session yet</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PresentTable;
