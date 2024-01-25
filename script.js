const mySym =Symbol("key1")
const JsUser={
    name:"abhi",
    "full name":"abhi singh",
    [mySym]:"mykey1",
    age:22
}
//console.log(JsUser.age)
console.log(JsUser["full name"])
//console.log(JsUser[mySym])
//Object.freeze(JsUser)
//JsUser.name="gagn"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Mr. abhi");
}

JsUser.greeting2=function(){
    console.log(`userName: ${this.name}, ${this.age}`)
}


console.log(JsUser.greeting2( ))
console.log(JsUser.greeting());

