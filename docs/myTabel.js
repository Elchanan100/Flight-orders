let myGoals = function(code,name,price){
    this.code = code;
    this.name = name;
    this.price = price;
}
let myOrders = function(OrderNumber,PassengerName,id,TravelDestination,NumberOfPassengers,TotalPayable){
    this.OrderNumber = OrderNumber;
    this.PassengerName = PassengerName;
    this.id = id;
    this.TravelDestination = TravelDestination;
    this.NumberOfPassengers = NumberOfPassengers;
    this.TotalPayable = TotalPayable;
}
let templateOfGoals = `<tr><td>{{code}}</td><td>{{name}}</td><td>{{price}}</td></tr>`
let templateOfGoals = `<tr><td>{{OrderNumber}}</td><td>{{PassengerName}}</td><td>{{id}}</td><td>
                    <td>{{TravelDestination}}</td>{{NumberOfPassengers}}</td><td>{{TotalPayable}}</td></tr>`
function renderOpArrayData (template,ArrayData) {
    let dataAfterRender=''
    ArrayData.forEach(element => {
        dataAfterRender += render(template,element)
    });
    return dataAfterRender;
}

function render(template,data){
    let arr1 =template.split('{{');
    for (let i = 1; i < arr1.length; i++) {
        let arr2 = arr1[i].split('}}');
        arr1[i]=data[arr2[0]]+arr2[1]
    }
    return arr1.join('')
}


let myGoalsTbodyarr = [{code:1 ,name: "itali" ,price:100},
                        {code:2 ,name: "isrel" ,price:100},
                        {code:3 ,name: "isrel" ,price:100},
                        {code:4 ,name: "hmen" ,price:100},
                        {code:1 ,name: "isrel" ,price:100},
                        {code:1 ,name: "isrel" ,price:100},
                        {code:1 ,name: "isrel" ,price:100},
                        {code:1 ,name: "itali" ,price:100}]
let myGoalsTbodyHtnl = `<tr><td>#code</td><td>#name</td><td>#price</td></tr>`;
d();
function d(){
     myGoalsTbodyarr.forEach(paramete=>{
        let aa = myGoalsTbodyHtnl.replace('#code',paramete.code).replace('#name',paramete.name).replace('#price',paramete.price);;
        console.log(aa);
        document.getElementById("myGoalsTbody").innerHTML +=aa;
    })  
}
function BookATrip(){
    let fullName = document.getElementById("fullName").value
    document.getElementById("fullName").value=''
    let travelCode = document.getElementById("travelCode").value
    document.getElementById("travelCode").value=""
    let id = document.getElementById("id").value
    document.getElementById("id").value=''
    let NumberOfPassengers = document.getElementById("NumberOfPassengers").value
    document.getElementById("NumberOfPassengers").value=''
    console.log(fullName,travelCode,id,NumberOfPassengers)
    OrderNumber++;
    BookATrip1(fullName,travelCode,id,NumberOfPassengers);
}
let OrderNumber = 0
function BookATrip1(fullName,travelCode,id,NumberOfPassengers){
    console.log(fullName,travelCode,id,NumberOfPassengers)
    
    let z=`<tr><td>"#OrderNumber"</td><td>"#PassengerName"</td><td>"#id"</td><td>"#TravelDestination"</td>
    <td>"#NumberOfPassengers"</td><td>"#TotalPayable"</td></tr>`
    let mytravelCode = myGoalsTbodyarr.find(aa=>{return aa.code==travelCode})
    console.log(mytravelCode)
    let myOrdersTbody = z.replace('#OrderNumber',(OrderNumber+''))
            .replace("#PassengerName",fullName)
            .replace("#id",id )
            .replace("#TravelDestination",mytravelCode.name)
            .replace("#NumberOfPassengers",NumberOfPassengers)
            .replace("#TotalPayable",mytravelCode.price*NumberOfPassengers);
    console.log(myOrdersTbody)
    document.getElementById("myOrdersTbody").innerHTML +=myOrdersTbody;
    myarr.push({OrderNumber:OrderNumber,PassengerName:fullName,id:id,TravelDestination:mytravelCode.name
        ,NumberOfPassengers:NumberOfPassengers,TotalPayable:mytravelCode.price*NumberOfPassengers ,travelCode:travelCode})
        console.log(myarr); 
}
let myarr =[]
function DefinitionOfBrowsing(DefinesSearch){
    console.log(DefinesSearch);
    console.log( document.getElementById(mydiv1));
    
    document.getElementById('mydiv1').style.display='none';
 document.getElementById('mydiv2').style.display='block';
// }
mybutton1=DefinesSearch
}
let mybutton1 =''
function myybutton(){
    console.log('ssssss');
   let zszs = []
   if(mybutton1=='שם נוסע')
    zszs= myarr.filter(aa=>{return aa.PassengerName==document.getElementById('mybutton1').value})
    if(mybutton1=='ת.ז נוסע')
    zszs= myarr.filter(aa=>{return aa.id==document.getElementById('mybutton1').value})
    if(mybutton1=='יעד נסיעה')
    zszs= myarr.filter(aa=>{return aa.TravelDestination==document.getElementById('mybutton1').value})
    if(mybutton1=='קוד נסיעה')
    zszs= myarr.filter(aa=>{return aa.travelCode==document.getElementById('mybutton1').value})
    console.log(zszs);
    let z=`<tr><td>#OrderNumber</td><td>#PassengerName</td><td>#id</td><td>#TravelDestination</td>
    <td>#NumberOfPassengers</td><td>#TotalPayable</td></tr>`
    document.getElementById('myytable').innerHTML =`<tr><td>מספר הזמנה </td><td>שם נוסע</td><td>ת.ז</td><td>יעד נסיעה </td><td>מספר נוסעים</td><td>סה''כ לתשלום</td></tr>`
    zszs.forEach(paramete=>{
        let aaa = z.replace('#OrderNumber',paramete.OrderNumber).replace('#PassengerName',paramete.PassengerName).replace('#id',paramete.id)
        .replace('#TravelDestination',paramete.TravelDestination).replace('#NumberOfPassengers',paramete.NumberOfPassengers).replace('#TotalPayable',paramete.TotalPayable);;
        console.log(aaa);
        document.getElementById('myytable').innerHTML += aaa;
    })
}