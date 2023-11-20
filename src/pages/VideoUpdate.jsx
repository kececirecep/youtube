import React, { useEffect, useState } from 'react'
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, useParams } from 'react-router-dom';
import { useData } from '../context/GlobalState';

import { BiRotateRight } from "react-icons/bi";



const VideoUpdate = () => { 
  const { jsonData } = useData();
  const { id } = useParams();
  const videoData = jsonData.find(item => item.id == id); 

  const [myVideoUrl, setMyVideoUrl] = useState("");
  const [profilResim, setProfilResim] = useState("");
  const [videoKucukResim, setVideoKucukResim] = useState("");
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [videoBasligi, setVideoBasligi] = useState("");
  const [aciklama, setAciklama] = useState("");
   
  useEffect(() => {
    if (videoData) {
      setMyVideoUrl(videoData.video_Url || "");
      setProfilResim(videoData.profil_resmi || "");
      setVideoKucukResim(videoData.video_kucuk_resim || "");
      setKullaniciAdi(videoData.kullanici_adi || "");
      setVideoBasligi(videoData.video_basligi || "");
      setAciklama(videoData.aciklama || "");
    }
  }, [videoData]);

  const update=()=>{ 
  }

 
  return (
    <div className='container mx-auto  w-1/1 sm:w-1/2 p-4'>
      <Link to="/"><span className='text-white flex items-center py-8'><BiLeftArrowAlt />Geri dön</span></Link>
      <div className='bg-[#2e3c4933] flex flex-col justify-center rounded-xl border border-[#313b49] p-4'>
        <input value={myVideoUrl} onChange={(e)=>setMyVideoUrl(e.target.value)} type="text" placeholder='Video URL' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
        <input value={profilResim} onChange={(e)=>setProfilResim(e.target.value)} type="text" placeholder='Profil Resim Url' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
        <input value={videoKucukResim} onChange={(e)=>setVideoKucukResim(e.target.value)} type="text" placeholder='Video Küçük Resim URL' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
        <input value={kullaniciAdi} onChange={(e)=>setKullaniciAdi(e.target.value)} type="text" placeholder='Kullanıcı Adı' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
        <input value={videoBasligi} onChange={(e)=>setVideoBasligi(e.target.value)} type="text" placeholder='Video Başlığı' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
        <textarea value={aciklama} onChange={(e)=>setAciklama(e.target.value)} placeholder='Video Açıklaması' rows="8" className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
        <div onClick={update} className='w-1/12 flex text-gray-500 underline justify-center text-3xl  cursor-pointer'><BiRotateRight /> </div>
      </div>
    </div>
  )
}

export default VideoUpdate