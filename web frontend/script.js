const formElements = document.getElementById("saveTransaction");

formElements.addEventListener("submit", (event)=>{
    event.preventDefault();
   let transactionDescription = document.getElementById("transactionDescription").value;
   let transactionPrice = document.getElementById("transactionPrice").value;
   let transaction = { transactionDescription: transactionDescription, transactionPrice: transactionPrice };
   let transactionJson = JSON.stringify(transaction);
   console.log(transactionJson);
   

   //Mandar los datos al Backend y guardarlos ahi
   
   fetch('http://localhost:5500/transaction',{
    method : 'Post',
    body : transactionDescription
   })

})