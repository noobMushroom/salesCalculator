const billInput=document.getElementById("billTotal");
const percent=document.getElementById("salePercent");
const calculateBtn= document.getElementById("calculateBtn");
const billTotal= document.getElementById('totalBill');
const prevAmount= document.getElementById('oldAmount')
const salesTax= document.getElementById('salestax')


const calculateBill=() => {
    const bill = Number(billInput.value);
    const percentage= Number(percent.value)/100;
    const totalPercent= percentage*bill;
    let total= totalPercent+bill
    billTotal.innerText=`$ ${total}`
}

const calculateTotal = () =>{
    // salesTax.innerText =`$ ${totalPercent}`
    // prevAmount.innerText=`$ ${bill}`
    calculateBill()
    
}