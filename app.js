var totalBalance = 0;
var isBalanceEnough = true;

function addNumber(input) {
    document.getElementById('numDisplay').value = document.getElementById('numDisplay').value+input.value;
  }

function depositMoney() {
    totalBalance = Number(totalBalance) + Number(document.querySelector('#numDisplay').value);
    document.querySelector('#totalBalanceInput').value = `$${totalBalance}`;
    document.getElementById('numDisplay').value = "";
}

function withdrawMoney() {
    checkBalance();
    if (isBalanceEnough) {
        totalBalance = Number(totalBalance) - Number(document.querySelector('#numDisplay').value);
        document.querySelector('#totalBalanceInput').value = `$${totalBalance}`; 
    }
    document.getElementById('numDisplay').value = "";
}

function checkBalance() {
    var withdrawAmount = Number(document.querySelector('#numDisplay').value);  
    if (withdrawAmount > totalBalance) {
        alert("Nice try. The withdrawal amount exceeds the account balance.");
        isBalanceEnough = false; 
    } else {
        isBalanceEnough = true;
    }
    return isBalanceEnough;
}

$(document).ready(function(){    
    $(".main").slideUp();
    $(".main-two").slideDown();    
    $(".money-drop").slideUp("fast");
});

$(document).ready(function(){
    $(".nav-acc-details").click(function(){
        $(".main").slideUp('slow');
        $(".main-two").slideDown('slow');
    });
});

$(document).ready(function(){
    $(".nav-dep-withdraw").click(function(){
        $(".main").slideDown("slow");
        $(".main-two").slideUp("slow");
        $(".money-drop").slideUp("slow");
    });
});

$(".nav-dep-withdraw").click(function () {
    $(this).toggleClass('dark');
    $(".nav-acc-details").removeClass('dark'); 
});

$(".nav-acc-details").click(function () {
    $(this).toggleClass('dark');
    $(".nav-dep-withdraw").removeClass('dark'); 
    $(".money-drop").slideUp("slow");
});

$(".withdraw-btn").click(function () {
    if (totalBalance == 0) {
        $("#totalBalanceInput").addClass('zero-balance') 
    } else {
        $("#totalBalanceInput").removeClass('zero-balance');
    }
    if (totalBalance >= 0) {
        $(".money-drop").slideDown("slow");
    } else {
        $(".money-drop").slideUp("fast");
    }
    
}); 

$(".deposit-btn").click(function () {
    if (totalBalance == 0) {
        $("#totalBalanceInput").addClass('zero-balance');
    } else {
        $("#totalBalanceInput").removeClass('zero-balance');
    }
    $(".money-drop").slideUp("slow");
}); 





