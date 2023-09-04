import Notice from "./Notice";
import image1 from '../assets/images/avatar-mark-webber.webp'
import image2 from '../assets/images/avatar-jacob-thompson.webp'
import image3 from '../assets/images/avatar-nathan-peterson.webp'
import image4 from '../assets/images/avatar-rizky-hasanuddin.webp'
import { useState } from "react";

export default function Wrapper() {
    const [mark, setMark]= useState(false)
    const [count, setCount]= useState(7)
    let indicator
    let bgColor
    
    const handleMark=()=>{
        setMark(!mark)
       
        if(mark==true){
            setCount(7)
        }else{
            setCount(0)
        }
        console.log(count)
    }
   return (
       <div className="m-5 p-3 select-none">
           <div className="flex justify-between">
                <div className="flex flex-wrap">
                    <h2 className="pr-4 text-[22px] font-bold flex items-center h-[24px]">Notifications</h2>
                    <div className="text-[16px] font-semibold flex items-center border-[1px] border-black px-[8px] h-[24px] py-[0px] bg-[#0a317b] text-white rounded-md">{`${count}`}</div>
                </div>
                <div className="font-medium text-[#7B7C81]" onClick={()=>handleMark()}>Mark all as {mark==false?'read':'unread'}</div>
            </div>
            <div className='m-0 mt-10 pt-10-6 flex flex-col gap-[10px]'>
                <div className="w-[100%]"><Notice notify={{name: 'Mark Webber', type: 'react', post: 'My first tournament today!', image: image1, time: '1m', value: false, mark:mark}} key={mark} setCount={setCount}/></div>
                <div className="w-[100%]"><Notice notify={{name:'Angela Gray', type: 'follow', followTopic: 'you', image:image2, time: '5m', value:false, mark:mark}} key={mark} setCount={setCount}/></div>
                <div className="w-[100%]"><Notice notify={{name:'Jacob Thompson', type: 'group', groupAction: 'joined',groupName: 'Chess Club',image:image3, time: '1d', value:false, mark:mark}} key={mark} setCount={setCount}/></div>
                <div className="w-[100%]"><Notice notify={{name:'Rizki Hasanuddin', type: 'message', msg:'Hello, thanks for setting up the chess club. I\'ve been a member for a few weeks now and i\'am aleady having lots of fun and improving  my game', image:image1, time: '5days', value:false, mark:mark}} key={mark} setCount={setCount}/></div>
                <div className="w-[100%]"><Notice notify={{name:'Kimberly Smith', type: 'comment', commentTopic: 'your picture', commentImage: image1,image:image4, time: '1 week', value:false, mark:mark}} key={mark} setCount={setCount}/></div>
                <div className="w-[100%]"><Notice notify={{name: 'Nathan Peterson', type: 'react', post: '5 end-game strategies to increase your win rate', image: image1, time: '2 weeks', value: false, mark:mark}} key={mark} setCount={setCount}/></div>
                <div className="w-[100%]"><Notice notify={{name:'Anna Kim', type: 'group', groupAction: 'left',groupName: 'Chess Club', image:image3, time: '1d', value:false, mark:mark}} key={mark} setCount={setCount}/></div>
            </div>
        
       </div>
   )
}
