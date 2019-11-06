let newGoal = function(code,name,price){
    this.code = code;
    this.name = name;
    this.price = price;
}
let newOrders = function(PassengerName,id,TravelDestination,NumberOfPassengers,TotalPayable,travelCode){
    console.log(PassengerName,id,TravelDestination,NumberOfPassengers,TotalPayable);
    this.OrderNumber = (myOrders.length+1);
    this.PassengerName = PassengerName;
    this.id = id;
    this.TravelDestination = TravelDestination;
    this.NumberOfPassengers = NumberOfPassengers;
    this.TotalPayable = TotalPayable;
    this.travelCode=travelCode;
}
let templateOfGoals = `<tr><td>{{code}}</td><td>{{name}}</td><td>{{price}}</td></tr>`
let templateOfOrders = `<tr><td>{{OrderNumber}}</td><td>{{PassengerName}}</td><td>{{id}}</td>
                <td>{{TravelDestination}}</td><td>{{NumberOfPassengers}}</td><td>{{TotalPayable}}</td></tr>`
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
let myGoals =[
    new newGoal(1,'isrel',1000),
    new newGoal(2,'United States',800),
    new newGoal(3,'England',660),
    new newGoal(4,'China',500),
    new newGoal(5,'Morocco',100),
    new newGoal(6,'Egypt',70)
]
function start (){   
    console.log(renderOpArrayData(templateOfGoals,myGoals));
    document.querySelector('.tableOpMyGoals').innerHTML = renderOpArrayData(templateOfGoals,myGoals)
    document.querySelector('.tableOpMyOrders').style.visibility ="hidden";
}
function BookATrip(){
    BookATrip1(document.getElementById("fullName").value,
                document.querySelector(".findByNameDestestinationOrder").value,
                document.getElementById("id").value,
                document.getElementById("NumberOfPassengers").value);
    console.log(document.getElementById("fullName").value,
                document.querySelector(".findByNameDestestinationOrder").value,
                document.getElementById("id").value,
                document.getElementById("NumberOfPassengers").value);
    document.getElementById("fullName").value=''
    document.getElementById("id").value=''
    document.getElementById("NumberOfPassengers").value=''
}
function BookATrip1(fullName,travelCode,id,NumberOfPassengers){
        console.log(fullName,travelCode,id,NumberOfPassengers)
    let mytravelName = myGoals.find(aa=>{return aa.code==travelCode})
        console.log(mytravelName)
    let thisOrder = new newOrders(fullName,id,mytravelName.name,NumberOfPassengers,mytravelName.price*NumberOfPassengers,travelCode)
        console.log(thisOrder)
        console.log(render(templateOfOrders,thisOrder));
    let thisOrderAfterRender = render(templateOfOrders,thisOrder);  
        console.log(thisOrderAfterRender);
        console.log(typeof(thisOrderAfterRender));
        if(myOrders.length==0){
            document.querySelector('.tableOpMyOrders').style.visibility = "visible";
        }
        document.querySelector('.tbodyOfTableOpMyOrders').innerHTML += thisOrderAfterRender;
        console.log(document.querySelector('.tableOpMyOrders').innerHTML );
    myOrders.push(thisOrder)
}
let myOrders =[]
function findByName(){
    console.log(document.querySelector('.findByName').value);
    console.log(myOrders);
    let findByName = myOrders.filter(destestination=>{return destestination.PassengerName==document.querySelector('.findByName').value})
    console.log(findByName);
     renderOpArrayData(templateOfOrders,findByName)
    document.querySelector('.tablefindByName').innerHTML = renderOpArrayData(templateOfOrders,findByName)
}
function findByNameDestestination(){
    console.log(myOrders.filter(Goals=>{return Goals.travelCode== document.querySelector('.findByNameDestestination').value}));
    let summyOrders = myOrders.filter(Goals=>{return Goals.travelCode== document.querySelector('.findByNameDestestination').value})
    let sum = 0
    summyOrders.forEach(obj=>{sum += obj.TotalPayable})
    console.log(sum);
    document.getElementById('spunFindByNameDestestination').innerHTML = (sum+'')+"   סהכ   "
}
start ()