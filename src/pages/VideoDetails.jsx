import React from 'react'

import ReactPlayer from 'react-player'

import { BiLike, BiDislike,BiLeftArrowAlt } from "react-icons/bi";

import { useData } from '../context/GlobalState';
import { NavLink, useParams } from 'react-router-dom';
import Comments from '../components/Comments';
 



const VideoDetails = () => {
    const { jsonData } = useData();
    const { id } = useParams();
    const videoData = jsonData.find(item => item.id == id);
    console.log(videoData);
    return (
        <div className='container mx-auto mt-8 w-[1200px] '>
            <NavLink to="/"><h1 className='flex items-center py-4 text-white underline'><BiLeftArrowAlt/>Geri Dön</h1></NavLink>
            {
                <div className=''>
                    <div className='flex '>
                        <div className=''><ReactPlayer url={`${videoData.video_Url}`} /></div> 
                        <div className='p-4 flex flex-col'>
                            <h1 className='text-[#FFF] text-xl'>{videoData.video_basligi}</h1>
                            <div className='flex gap-4 py-2'>
                                <span className='text-[#A1A1A1] text-sm'>{videoData.izlenme_sayisi}</span>
                                <span className='text-[#A1A1A1] text-sm'>{videoData.yuklenme_tarihi}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={videoData.profil_resmi} className='w-[36px] h-[36px] rounded-full' alt="" />
                                <p className='text-[#A1A1A1]'>{videoData.kullanici_adi}</p>
                            </div>
                            <p className='text-[#A1A1A1] py-6'>{videoData.aciklama}</p>
                            <div className='flex gap-4 text-[#A1A1A1]'>
                                <span className='flex gap-2 justify-center items-center'><BiLike /> {videoData.like_sayisi}</span>
                                <span className='flex gap-2 justify-center items-center'><BiDislike /> {videoData.dislike_sayisi}</span>
                            </div>
                        </div>
                    </div>
                    <div>

                        <h1 className='text-white py-4 text-3xl mt-8'>~Yorumlar</h1>
                        {
                            videoData.yorumlar.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Comments
                                            img={item.yorum_profil_resmi}
                                            user={item.yorum_kullanici}
                                            time={item.yorum_tarihi}
                                            desc={item.yorum_metni}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default VideoDetails