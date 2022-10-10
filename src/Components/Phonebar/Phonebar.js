import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
const Phonebar = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesLoaded = data.data.data;
        const phoneData = phonesLoaded.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const SinglePhone = {
            name: phone.phone_name,
            price: price,
          };
          return SinglePhone;
        });

        setPhones(phoneData);
      });
  }, []);
  return (
    <BarChart width={550} height={400} data={phones}>
      <Bar dataKey="price" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default Phonebar;
