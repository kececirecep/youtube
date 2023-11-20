import React, { useState } from 'react'
import { useData } from '../context/GlobalState';
import { Link } from 'react-router-dom';

import { BiSolidPlusCircle, BiLeftArrowAlt } from "react-icons/bi";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const VideoAdd = () => {
    const { jsonData, addNewData } = useData();
    
    const [baslikValue, setbaslikValue] = useState(""), [kullaniciValue, setkullaniciValue] = useState("");
    const [comments, setcomments] = useState([]);
    const [izlenmesayisi, setizlenmesayisi] = useState(0 + " görüntülenme");//
    //const [yuklenmetarihi, setyuklenmetarihi] = useState(new Date().toLocaleTimeString());
    const [yuklenmetarihi, setyuklenmetarihi] = useState("Bugün");
    const [likesayisi, setlikesayisi] = useState(0);//
    const [dislikesayisi, setdislikesayisi] = useState(0);//
    const [kucukresim, setkucukresim] = useState("");
    const [profilresmi, setprofilresmi] = useState("");
    const [aciklama, setaciklama] = useState("");
    const [videoUrl, setvideoUrl] = useState("");
    const [videoSuresi, setvideoSuresi] = useState("unknown");//

    const add = () => {
        if (baslikValue === "" && kullaniciValue === "") {
            toastErr()
        } else {
            const myJsonData = jsonData;
            const newData = {
                id: myJsonData.length + 1,
                video_basligi: baslikValue,
                kullanici_adi: kullaniciValue,
                izlenme_sayisi: izlenmesayisi,
                yorumlar: comments,
                like_sayisi: likesayisi,
                dislike_sayisi: dislikesayisi,
                video_kucuk_resim: kucukresim,
                video_suresi: videoSuresi,
                aciklama: aciklama,
                video_Url: videoUrl,
                yuklenme_tarihi: yuklenmetarihi,
                profil_resmi: profilresmi

            }
            addNewData([...myJsonData, newData])
            toasts()
            setbaslikValue("")
            setvideoUrl("")
            setaciklama("")
            setkucukresim("")
            setprofilresmi("")
            setkullaniciValue("")
        }
    }
    const toastErr = () => {
        toast.error('Boş alanları doldurunuz.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    const toasts = () => {
        toast.success('Başarıyla eklendi.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const completed = () => {
        setbaslikValue("1) Giriş - Framer ile İnanılmaz Siteler Yapalım")
        setvideoUrl("https://www.youtube.com/watch?v=oAAIdk8CEPs")
        setaciklama("Framer,  hiç kod yazmadan hızlıca inanılmaz siteler yapacağınız no-code aracıdır. Bu video serisi en temelden en üst düzeye kadar framer özelliklerine değinir.")
        setprofilresmi("https://i.hizliresim.com/lm0tarb.jpg")
        setkucukresim("https://i.ytimg.com/vi/oAAIdk8CEPs/maxresdefault.jpg")
        setkullaniciValue("Adem İlter")
    }

    return (
        <div className='container mx-auto  w-1/1 sm:w-1/2 p-4 '>
            <Link to="/"><span className='text-white flex items-center py-8'><BiLeftArrowAlt />Geri dön</span></Link>
            <ToastContainer />
            <div className='flex justify-between items-center'>
                <div className='bg-[#2e3c4933] w-2/3 flex flex-col justify-center rounded-xl border border-[#313b49] p-4'>
                    <input value={videoUrl} onChange={(e) => setvideoUrl(e.target.value)} type="text" placeholder='Video URL' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
                    <input value={profilresmi} onChange={(e) => setprofilresmi(e.target.value)} type="text" placeholder='Profil Resim Url' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
                    <input value={kucukresim} onChange={(e) => setkucukresim(e.target.value)} type="text" placeholder='Video Küçük Resim URL' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
                    <input value={kullaniciValue} onChange={(e) => setkullaniciValue(e.target.value)} type="text" placeholder='Kullanıcı Adı' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
                    <input value={baslikValue} onChange={(e) => setbaslikValue(e.target.value)} type="text" placeholder='Video Başlığı' className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
                    <textarea value={aciklama} onChange={(e) => setaciklama(e.target.value)} placeholder='Video Açıklaması' rows="8" className='my-4 bg-transparent border-b-2 border-gray-500 outline-none text-white px-4 py-1' />
                    <div onClick={add} className='w-1/12 flex text-gray-500 underline justify-center text-3xl  cursor-pointer'><BiSolidPlusCircle /> </div>
                </div>
                <button onClick={completed} className='text-white px-8 py-1 h-[50px] text-lg border border-[#313b49] rounded-lg'>Doldur</button>
            </div>
        </div>
    )
}

export default VideoAdd