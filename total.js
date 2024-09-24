document.getElementById('donate_btn').addEventListener('click', function (event) {

    const money = document.getElementById('input_money').value;
    if (isNaN(money)) {
        alert("enter a valid number not a string.");
        event.preventDefault();
    } else if (money < 0) {
        alert("enter a number greater than 0.");
        event.preventDefault();
    }

    else if (money === '') {
        alert("Amound canot be enpty");
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
        const div = document.createElement('div');
        div.classList.add('div_style');
        const date = new Date();
        const fulldate = date.toLocaleString('en-US', { timeZoneName: 'short' });

        div.innerHTML = `
        <p> ${Nummoney} TK is donate to Donate for Flood at Noakhali, Bangladesh</p>
        <p> ${fulldate}</p>
        `
        document.getElementById('Transaction_containr').appendChild(div);
        // modal(); //calling model fuction

    }
})

// donate for flood relief

document.getElementById('Relief').addEventListener('click', function (event) {

    const money = document.getElementById('input_money2').value;
    if (isNaN(money)) {
        alert("enter a valid number not a string.");
        event.preventDefault();
    } else if (money < 0) {
        alert("enter a number greater than 0.");
        event.preventDefault();
    }

    else if (money === '') {
        alert("Amound canot be enpty");
        event.preventDefault();
    }
    else {

        const Nummoney = parseFloat(money);
        const donate = document.getElementById('noakhali_donate2').innerText;
        const numDonate = parseFloat(donate);
        const new_donate = Nummoney + numDonate;
        document.getElementById('noakhali_donate2').innerText = new_donate;
        const myBlance = document.getElementById('my_blance').innerText;
        const num_myBlance = parseFloat(myBlance);
        get_update_blance(num_myBlance, Nummoney);

        const div = document.createElement('div');
        div.classList.add('div_style');
        const date = new Date();
        const fulldate = date.toLocaleString('en-US', { timeZoneName: 'short' });

        div.innerHTML = `
        <p> ${Nummoney} TK is  Donate for Flood Relief in Feni,Bangladesh</p>
        <p> ${fulldate}</p>
        `
        document.getElementById('Transaction_containr').appendChild(div);
        // modal_2()
    }

})


//Aid for Injured in the Quota Movement 

document.getElementById('quata').addEventListener('click', function (event) {

    const money = document.getElementById('input_money3').value;
    if (isNaN(money)) {
        alert("enter a valid number not a string.");
        event.preventDefault();
    } else if (money < 0) {
        alert("enter a number greater than 0.");
        event.preventDefault();
    }

    else if (money === '') {
        alert("Amound canot be enpty");
        event.preventDefault();
    }
    else {

        const Nummoney = parseFloat(money);
        const donate = document.getElementById('noakhali_donate3').innerText;
        const numDonate = parseFloat(donate);
        const new_donate = Nummoney + numDonate;
        document.getElementById('noakhali_donate3').innerText = new_donate;
        const myBlance = document.getElementById('my_blance').innerText;
        const num_myBlance = parseFloat(myBlance);
        get_update_blance(num_myBlance, Nummoney);

        const div = document.createElement('div');
        div.classList.add('div_style');
        const date = new Date();
        const fulldate = date.toLocaleString('en-US', { timeZoneName: 'short' });

        div.innerHTML = `
        <p> ${Nummoney} TK is  Donate for Aid for Injured in the Quota Movement</p>
        <p> ${fulldate}</p>
        `
        document.getElementById('Transaction_containr').appendChild(div);
        // modal_3()
    }

})



// a common function for updating the blance after donate
function get_update_blance(oldblance, donate_taka) {
    const Now_blance = oldblance - donate_taka;
    document.getElementById('my_blance').innerText = Now_blance;
    modal(); 
    modal_2() ;
    modal_3() ;
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




//.how section fuction
function showSection(id, id2) {
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById('btnDestination').classList.add('bg')
    document.getElementById('btnHistory').classList.add('bg')
    // now show 
    document.getElementById(id).classList.remove('hidden');
};



// modal function
function modal() {
    document.getElementById('donate_btn').addEventListener('click', function () {
        document.getElementById('modal').classList.add('popup')
    })
    document.getElementById('okk').addEventListener('click', function () {
        document.getElementById('modal').classList.remove('popup')
    })
}

// modal function 2
function modal_2() {
    document.getElementById('Relief').addEventListener('click', function () {
        document.getElementById('modal').classList.add('popup')
    })
    document.getElementById('okk').addEventListener('click', function () {
        document.getElementById('modal').classList.remove('popup')
    })
}

// modal function 3
function modal_3() {
    document.getElementById('quata').addEventListener('click', function () {
        document.getElementById('modal').classList.add('popup')
    })
    document.getElementById('okk').addEventListener('click', function () {
        document.getElementById('modal').classList.remove('popup')
    })
}




