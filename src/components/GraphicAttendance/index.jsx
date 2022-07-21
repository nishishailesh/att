import React, { useEffect, useState,useMemo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { GET_ATTENDANCES_ALL } from "../../api/Model/Subscription/GetAttendancesAll";
import { useSubscription } from "@apollo/client/react";

function GraphicAttendance() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const { data: dataAttendances } = useSubscription(GET_ATTENDANCES_ALL);

  const labels =useMemo(()=>["Week-1", "Week-2", "Week-3", "Week-4", "Week-5", "Week-6", "Week-7", "Week-8", "Week-9", "Week-10", "Week-11", "Week-12", "Week-13", "Week-14"],[]) ;

  const p1a = dataAttendances?.attendances.filter((d) => {
    return d.p_1 === 0;
  }).length;
  const p1p = dataAttendances?.attendances.filter((d) => {
    return d.p_1 === 1;
  }).length;

  const p2a = dataAttendances?.attendances.filter((d) => {
    return d.p_2 === 0;
  }).length;
  const p2p = dataAttendances?.attendances.filter((d) => {
    return d.p_2 === 1;
  }).length;

  const p3a = dataAttendances?.attendances.filter((d) => {
    return d.p_3 === 0;
  }).length;
  const p3p = dataAttendances?.attendances.filter((d) => {
    return d.p_3 === 1;
  }).length;

  const p4a = dataAttendances?.attendances.filter((d) => {
    return d.p_4 === 0;
  }).length;
  const p4p = dataAttendances?.attendances.filter((d) => {
    return d.p_4 === 1;
  }).length;

  const p5a = dataAttendances?.attendances.filter((d) => {
    return d.p_5 === 0;
  }).length;
  const p5p = dataAttendances?.attendances.filter((d) => {
    return d.p_5 === 1;
  }).length;

  const p6a = dataAttendances?.attendances.filter((d) => {
    return d.p_6 === 0;
  }).length;
  const p6p = dataAttendances?.attendances.filter((d) => {
    return d.p_6 === 1;
  }).length;

  const p7a = dataAttendances?.attendances.filter((d) => {
    return d.p_7 === 0;
  }).length;
  const p7p = dataAttendances?.attendances.filter((d) => {
    return d.p_7 === 1;
  }).length;

  const p8a = dataAttendances?.attendances.filter((d) => {
    return d.p_8 === 0;
  }).length;
  const p8p = dataAttendances?.attendances.filter((d) => {
    return d.p_8 === 1;
  }).length;

  const p9a = dataAttendances?.attendances.filter((d) => {
    return d.p_9 === 0;
  }).length;
  const p9p = dataAttendances?.attendances.filter((d) => {
    return d.p_9 === 1;
  }).length;

  const p10a = dataAttendances?.attendances.filter((d) => {
    return d.p_10 === 0;
  }).length;
  const p10p = dataAttendances?.attendances.filter((d) => {
    return d.p_10 === 1;
  }).length;

  const p11a = dataAttendances?.attendances.filter((d) => {
    return d.p_11 === 0;
  }).length;
  const p11p = dataAttendances?.attendances.filter((d) => {
    return d.p_11 === 1;
  }).length;

  const p12a = dataAttendances?.attendances.filter((d) => {
    return d.p_12 === 0;
  }).length;
  const p12p = dataAttendances?.attendances.filter((d) => {
    return d.p_12 === 1;
  }).length;

  const p13a = dataAttendances?.attendances.filter((d) => {
    return d.p_13 === 0;
  }).length;
  const p13p = dataAttendances?.attendances.filter((d) => {
    return d.p_13 === 1;
  }).length;

  const p14a = dataAttendances?.attendances.filter((d) => {
    return d.p_14 === 0;
  }).length;
  const p14p = dataAttendances?.attendances.filter((d) => {
    return d.p_14 === 1;
  }).length;

  const absent = useMemo(()=>[p1a, p2a, p3a, p4a, p5a, p6a, p7a, p8a, p9a, p10a, p11a, p12a, p13a, p14a],[p1a, p2a, p3a, p4a, p5a, p6a, p7a, p8a, p9a, p10a, p11a, p12a, p13a, p14a]);
  const present = useMemo(()=>[p1p, p2p, p3p, p4p, p5p, p6p, p7p, p8p, p9p, p10p, p11p, p12p, p13p, p14p],[p1p, p2p, p3p, p4p, p5p, p6p, p7p, p8p, p9p, p10p, p11p, p12p, p13p, p14p]);

  const [dataset, setData] = useState({ label: labels, absent: absent, present: present });

  useEffect(() => {
    setData({ label: labels, absent: absent, present: present });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [absent, present, labels]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Attendance Chart GMCS",
      },
    },
  };

  const data = {
    labels: dataset.label,
    datasets: [
      {
        label: "Absent",
        data: dataset.absent,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Present",
        data: dataset.present,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="w-5/6 mx-auto">
      <Line options={options} data={data} />
    </div>
  );
}

export default GraphicAttendance;
