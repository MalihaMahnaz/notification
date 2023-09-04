import { useEffect, useState } from "react"

export default function Notice({notify, setCount}) {
    const [marked, setMarked]= useState(notify.mark)
    const [val, setVal]= useState(notify.mark)
    
    let content
    let extraContent
    let extraImage
    let indicator
    let bgColor=''
  
    const handleClick=()=>{
        if(val==true && marked==true ||(val==false)&&(marked==true))
        setCount(c=>c+1)
        else setCount(c=>c-1)
        setVal(!val)  
        setMarked(!marked)
        
    }
    
     if(notify.mark==true && marked==notify.mark){
        console.log('notify mark is true & notify value is true')
        indicator= <div className="h-2 w-2 rounded-lg inline-block ml-2"></div>
    }else if(notify.mark==false && marked==notify.mark){
        console.log('notify mark is false & notify value is false')
        bgColor= "bg-[#F6FAFD]"
        indicator=<div className="h-2 w-2 rounded-lg bg-red-600 inline-block ml-2"></div>
    }else if(val==true && marked==true ||(val==false)&&(marked==true)){
        console.log('value is true & mark is true OR value is false & mark is true')
        indicator= <div className="h-2 w-2 rounded-lg inline-block ml-2"></div>
    }else if(val==false || marked==false ||(val==true)&&(marked==false)){
        console.log('value is false OR mark is false OR (value is false & mark is true)')
        bgColor= "bg-[#F6FAFD]"
        indicator=<div className="h-2 w-2 rounded-lg bg-red-600 inline-block ml-2"></div>
    }

    if(notify.type === 'react'){
        content= <span>{notify.type}ed to your recent post <b>{notify.post}</b></span>
    }else if(notify.type === 'follow'){
        content= <span>followed {notify.followTopic}</span>
    }else if(notify.type === 'group'){
        if(notify.groupAction =='joined'){
            content= <span>has <b>{notify.groupAction}</b> {notify.groupName}</span>
        }else if(notify.groupAction =='left'){
            content= <span>has {notify.groupAction} the {notify.groupName}</span>
        }
        
    }else if(notify.type === 'message'){
        content= <span>sent you a private {notify.type}</span>
        extraContent= <p className="ml-[25px] mt-[10px] p-[14px]">{notify.msg}</p>    
    }else if(notify.type ==='comment'){
        content= <span>{notify.type}ed on {notify.commentTopic}</span>
        extraImage= <img src={notify.commentImage} width="50" height="50" />
    }
   
   
   return (
    <div className={`border-[1px] py-[14px] rounded-lg ${bgColor}  border-[#F6FAFD]`} onClick={()=>handleClick()}>
    <div>
       <div className="notice flex justify-start items-center gap-[14px] pl-[20px]">
           <img src={notify.image} width="50" height="50"/>
           <div className="w-full">
            <div className="w-full flex flex-row justify-between">
            <div>
                <b>{notify.name}</b> {content}{indicator} 
                <p className="text-[15px] text-[#7B7C81]">{notify.time} ago</p>
            </div>
            <div>
               {extraImage &&(
                <div>
                    {extraImage}
                </div>
               )}
            </div>
            </div>
                {extraContent && (
                <div className="hover:bg-[#F6FAFD]">
                    {extraContent}
                </div>
                )}
           </div>
       </div>
       </div>
    </div>
   )
}

