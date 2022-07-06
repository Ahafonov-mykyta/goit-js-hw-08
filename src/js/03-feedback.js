import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const LOCAL_DATA_INPUT = "feedback-form-state";
const btn = document.querySelector("button");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");



const objectValues = {
    email:"",
    message:"",
};

if(localStorage.getItem (LOCAL_DATA_INPUT, objectValues)) {

    const parce = JSON.parse(localStorage.getItem (LOCAL_DATA_INPUT,objectValues))
    objectValues.email = parce.email;
    objectValues.message = parce.message
    console.log(objectValues)}


// Слушатель формы, на который делегируется события ввода инпутов
form.addEventListener("input", throttle(onInput, 500));

// Функция записи данных ввода в объект локального хранилища 
function onInput (event){
    
    if (event.target === input){
    objectValues.email = event.target.value;
    localStorage.setItem (LOCAL_DATA_INPUT,JSON.stringify(objectValues) )
    // console.log(objectValues)
    }


    if (event.target === textarea){
        objectValues.message = event.target.value;
    localStorage.setItem (LOCAL_DATA_INPUT,JSON.stringify(objectValues) )
    // console.log(objectValues)
    }
}

//Функция проверки наличия данных в хранилище 
const storageAvailability = () =>{
if(localStorage.getItem (LOCAL_DATA_INPUT, objectValues)){
    const parcedObject = JSON.parse(localStorage.getItem (LOCAL_DATA_INPUT,objectValues));
    input.value = parcedObject.email;
    textarea.value = parcedObject.message;}}


storageAvailability()


// Функция сабмита формы - очищает хранилище, поля ввода и выводит данные в консоль
const onSubmit = (event) => {
    event.preventDefault();
    if ( input.value === "" || textarea.value === ""){
       return console.log("Ошибка")
    }
    
    console.log(`Email:${input.value}  Message:${textarea.value}`)
    form.reset()
    localStorage.removeItem(LOCAL_DATA_INPUT)
    objectValues.email= "";
    objectValues.message = "";
    
}

form.addEventListener("submit", onSubmit)