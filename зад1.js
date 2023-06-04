const User={
    name: 'Ruslan',
    age: 27,
    counrty: 'Russia',
    job: 'junior fronted'

}
function KeyValuiObj(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log ('${key} - ${obj[key]}')
        }
    }
}

KeyValuiObj (User)