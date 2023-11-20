import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useData } from '../context/GlobalState';
import Input from '../components/Input';
import { NavLink } from 'react-router-dom';

import { BiSolidPlusCircle } from "react-icons/bi";


const Home = () => {
  const { jsonData} = useData();
  const [inputValue, setInputValue] = useState("");
  const [newArray, setnewArray] = useState([]);

  const inputChange = (e) => {
    setInputValue(e.target.value)

  }

  useEffect(() => {
    setnewArray(jsonData)
  }, [jsonData]);

  useEffect(() => {
    const filterArray = jsonData.filter(item => item.kullanici_adi.toLowerCase().includes(inputValue))
    setnewArray(filterArray)
  }, [inputValue])

  const removeClick = (id) => {
    console.log(jsonData)
    console.log(newArray);
    const removeItem = newArray.filter(item => item.id !== id)
    setnewArray(removeItem)
    
  }

  const onClickUpdate = () => {

  }

  newArray.reverse()

  return (
    <div className='flex justify-center items-center flex-col mt-4'>
      <div className='flex items-center flex-col'>
        <Input value={inputValue} onChange={inputChange} /> 
        <NavLink to="/video-add"><h1 className='py-4 text-gray-500 underline flex items-center text-3xl pt-8'><BiSolidPlusCircle /></h1></NavLink>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4'>
        {
          newArray.map((item, index) => {
            return (
              <Card onClickUpdate={onClickUpdate} onClickRemove={() => removeClick(item.id)} key={index} id={item.id} img={item.video_kucuk_resim} title={item.video_basligi} profileImg={item.profil_resmi} userId={item.kullanici_adi} views={item.izlenme_sayisi} time={item.video_suresi} firstTime={item.yuklenme_tarihi} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home