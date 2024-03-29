var array = [
    {
        id : "1",
        name : "rooney",
        country : "england",
        age: "23"
    },
    {
        id : "2",
        name : "ronaldo",
        country : "portugal",
        age: "23"
    },
    {
        id : "3",
        name : "evra",
        country : "french",
        age: "27"
    },
    {
        id : "4",
        name : "vidic",
        country : "serbia",
        age: "27"
    },
    {
        id : "5",
        name : "ferdinand",
        country : "england",
        age: "30"
    },
    {
        id : "6",
        name : "carrick",
        country : "england",
        age: "27"
    },
    {
        id : "7",
        name : "hargeves",
        country : "england",
        age: "27"
    },
    {
        id : "8",
        name : "park",
        country : "korea",
        age: "27"
    },
    {
        id : "9",
        name : "tevez",
        country : "argentina",
        age: "24"
    },
    {
        id : "10",
        name : "nani",
        country : "portugal",
        age: "22"
    }, 
]

// header tabel

function showtable(curarray) {

    document.getElementById("mytable").innerHTML = `
        <tr class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" class="px-6 py-3">name</th>
            <th scope="col" class="px-6 py-3">country</th>
            <th scope="col" class="px-6 py-3">age</th>
        </tr>
    `;

// data tabel array dan cek jika data kosong maka akan muncul keterangan not found 

    if(curarray == ""){
        document.getElementById("error").innerHTML = `<span class="text-red-500">Not Found!</span>` 
    } 
    else{
        document.getElementById("error").innerHTML = "";

        for(var i = 0 ; i < curarray.length;i++){
            document.getElementById("mytable").innerHTML += `
                <tr class="capitalize bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">${curarray[i].name}</th>
                    <td class="px-6 py-4">${curarray[i].country}</td>
                    <td class="px-6 py-4">${curarray[i].age}</td>
                </tr>
            `  
        }
    }
}

// memaanggil data Table

showtable(array);

// filter data array

var newarray = [];

// metode untuk mencari data di tabel

document.getElementById("search").addEventListener("keyup",function(){

    var search = this.value.toLocaleLowerCase();

    newarray = array.filter(function (val) {

        if(val.name.includes(search) || val.country.includes(search) || val.age.includes(search)){
            var newobj = {name : val.name , country : val.country , age : val.age};
            return newobj;
        }
    })

    showtable(newarray);
})