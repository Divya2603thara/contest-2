let arr=[];
 let d=document.querySelector('.t');
let a=document.querySelector(".issue");

let tbl=document.querySelector('tbody');
let count=0;
function fun(){
  let tr=document.createElement('tr');
let td1=tr.appendChild(document.createElement('td'));
let td2=tr.appendChild(document.createElement('td'));
let td3=tr.appendChild(document.createElement('td'));
let td4=tr.appendChild(document.createElement('td'));
let td5=tr.appendChild(document.createElement('td'));
let date=new Date().toLocaleString();
// alert(date);
     let name=document.querySelector(".name").value;
     let to=document.querySelector(".issued").value;
     let st=document.createElement('span');
     st.classList.add('red');
     st.innerHTML="Not Returned"
    //  let status=st;
     let id=arr.length+1;
     let obj={id,name,to,date,st};
 arr.push(obj);
   td2.innerHTML=name;
   td3.innerHTML=to;
   td1.innerHTML=id;
   td4.innerHTML=date;
   td5.appendChild(st);
  
   td5.innerHTML+=' <a onclick="fun2('+id+')""><span class="material-icons md-36">edit_square</span></a>';
  // console.log(a);
  // td5.innerHTML+=a; 
  if(!name=="" && !to=="")
   tbl.append(tr);
 name="";
 to="";
}
function fun2(id){
  let st1=document.createElement('span');
  let curr=arr[id-1].st;
  // console.log(curr.classList);
  
  if(curr.innerHTML.includes('Not')){
    let st1=document.createElement('span');
    st1.classList.add('green');
    st1.innerHTML="Returned"
    arr[id-1].st=st1;
    console.log(st1);
  }
  else{
    let st1=document.createElement('span');
    st1.classList.add('red');
    st1.innerHTML="Not Returned"
    arr[id-1].st=st1;
  }
  
  rander();

}
function rander(){

  tbl.innerHTML='';
  arr.forEach(ele => {
    let tr=document.createElement('tr');
    let td1=tr.appendChild(document.createElement('td'));
    let td2=tr.appendChild(document.createElement('td'));
    let td3=tr.appendChild(document.createElement('td'));
    let td4=tr.appendChild(document.createElement('td'));
    let td5=tr.appendChild(document.createElement('td'));


         let name=ele.name;
         let to=ele.to;
         let status=ele.st;
         let id=ele.id;
         let date=ele.date;
         td1.innerHTML=id;
         td2.innerHTML=name;
       td3.innerHTML=to;
       td4.innerHTML=date;
       td5.appendChild(status);
       td5.innerHTML+=' <a onclick="fun2('+id+')"><span class="material-icons md-36">edit_square</span></a>';
       tbl.append(tr);
  });

}
a.addEventListener('click',fun);
// let b=document.querySelector('a');
function f(){
alert("hi");
}
// b.addEventListener('click',f);