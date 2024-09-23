document.getElementById('donate_btn').addEventListener('click', function (event) {

    const money = document.getElementById('input_money').value;
    if (isNaN(money)) {
        alert("enter a valid number not a string.");
        event.preventDefault();
    } else if (money < 0) {
        alert("enter a number greater than 0.");
        event.preventDefault();
    }
    else {

        const Nummoney = parseFloat(money);

        const donate = document.getElementById('noakhali_donate').innerText;
        const numDonate = parseFloat(donate);

        const new_donate = Nummoney + numDonate;
        document.getElementById('noakhali_donate').innerText = new_donate;

        const myBlance = document.getElementById('my_blance').innerText;
        const num_myBlance = parseFloat(myBlance);

        get_update_blance(num_myBlance, Nummoney);
        // alert("success full added");
        // modal 


        // add history 

        const div = document.createElement('div');
        div.classList.add('div_style');
        const date = new Date();
        const fulldate = date.toLocaleString('en-US', { timeZoneName: 'short' });
        div.innerHTML = `
        <p> ${Nummoney} TK is donate to Donate for Flood at Noakhali, Bangladesh</p>
        <p> ${fulldate}</p>
        `
        document.getElementById('Transaction_containr').appendChild(div);

    }
})

// a comon function for updating the blance after donate
function get_update_blance(oldblance, donate_taka) {
    const Now_blance = oldblance - donate_taka;
    document.getElementById('my_blance').innerText = Now_blance;
}


// changing the page 
document.getElementById('btnDestination')
    .addEventListener('click', function () {
        console.log('click desti');
        showSection('donation', 'btnDestination')
        document.getElementById('btnHistory').classList.remove('bg')
    })
document.getElementById('btnHistory')
    .addEventListener('click', function () {
        console.log('click hsitoru');
        showSection('history', 'btnHistory')
        document.getElementById('btnDestination').classList.remove('bg')
    })

function showSection(id, id2) {
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // document.getElementById(id2).classList.add('bg');
    document.getElementById('btnDestination').classList.add('bg')
    document.getElementById('btnHistory').classList.add('bg')

    // now show 
    document.getElementById(id).classList.remove('hidden');
};



// modal
document.getElementById('modalbtn').addEventListener('click', function () {
    document.getElementById('modal').classList.add('popup')
 })

 document.getElementById('okk').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('popup')
 })





