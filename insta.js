var arr=[
    {dp:"https://images.unsplash.com/photo-1709418354359-6695ee7ea61d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",img:"https://images.unsplash.com/photo-1709428732591-84658d4637d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1709315372141-e1f41dfad2dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D", img:"https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1664369473114-9146ca35bd72?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjF8fHxlbnwwfHx8fHw%3D",img:"https://images.unsplash.com/photo-1707249662406-29ef3d2dd5db?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fHw%3D"}

]
 var full=document.querySelector("#fullscreen");
var clutter="";
 arr.forEach(function(elem,idx)
 {
   
    clutter+=`<div id="storien">
        <img id="${idx}"src="${elem.dp}" alt=" ">
    </div>`
 })
 document.querySelector("#story").innerHTML=clutter;
 console.log(clutter);
 document.querySelector("#story").addEventListener("click",function(dets){
    console.log(arr[dets.target.id].img);
    full.style.display="block";
    full.style.backgroundImage=`url(${arr[dets.target.id].img})`
    

    

 })