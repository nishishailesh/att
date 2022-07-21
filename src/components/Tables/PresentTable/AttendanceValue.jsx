import React from "react";
import { CgCloseO } from "react-icons/cg";
import { BsCheckCircle } from "react-icons/bs";

function AttendanceValue({ data }) {
  return (
    <>
      {data?.attendances.map((d) => (
        <tr>
          {d.p_1 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_2 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_3 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_4 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_5 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_6 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_7 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_8 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_9 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_10 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_11 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_12 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_13 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_14 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_15 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_16 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_17 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_18 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_19 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_20 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_21 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_22 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_23 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_24 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_25 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_26 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_27 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_28 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_29 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_30 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_31 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_32 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_33 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_34 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_35 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_36 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_37 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_38 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_39 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_40 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_41 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_42 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_43 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_44 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_45 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_46 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_47 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_48 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_49 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_50 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_51 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_52 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_53 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_54 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_55 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_56 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_57 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_58 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_59 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
          {d.p_60 === 0 ? (
            <td className="bg-secondary-red py-2">
              <CgCloseO size={20} className="mx-auto text-white" />
            </td>
          ) : (
            <td className="bg-green-400 py-2">
              <BsCheckCircle size={20} className="mx-auto text-white" />
            </td>
          )}
        </tr>
      ))}
    </>
  );
}

export default AttendanceValue;
