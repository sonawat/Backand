import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
    const[name,setName] = useState('');
    const[email,setemail] = useState('');
    const[password,setPassword] = useState('');
    const[mobile,setMobile] = useState('');
  const { id } = useParams();

  const ani = async () => {
      const response = await axios.get(`http://localhost:3000/user`);
      const filteredData = response.data.filter((item) => item._id === id);
        const d = filteredData[0];
        setData({
          id: d._id,
          name: d.name,
          email: d.email,
          password: d.password,
          mobile:d.mobile
        });
   

  };

  useEffect(() => {
    ani();
  }, [id]);

  const up = async(e)=>{
    e.preventDefault();
     
     const upd = await axios.put(`http://localhost:3000/user/${id}`,{
      name  : name,
      email : email,
      password  : Number(password),
      mobile  :Number(mobile),
     });  
    
     navigate('/');
  }
  return (
    <div>
   {data && (
  <form onSubmit={up}>
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" placeholder={data.name} /><br /><br />
      <input value={email} onChange={(e) => setemail(e.currentTarget.value)} type="email" placeholder={data.email} /><br /><br />
      <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder={data.password} /><br /><br />
      <input value={mobile} onChange={(e) => setMobile(e.currentTarget.value)} type="text" placeholder={data.mobile} /><br /><br />
      <input type="submit" /><br /><br />
  </form>
)}


    </div>
  );
};

export default Update;
