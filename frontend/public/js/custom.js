$(document).ready(function(){

    //global functions, variables start
    var account;

    const connectMetamask = async () => {
        if(window.ethereum) {
            try {
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];
                window.location.href= "/account_details";
                // document.getElementById("userArea").innerHTML = `User Account: ${account}`;
            } catch (error) {

                if(account === undefined)
                {
                    window.location.href= "/"; 
                }
            }
            
        }
    }

    if(window.ethereum) 
    {
      window.ethereum.on('accountsChanged', function (account) {
          var newAccount= account[0];
          window.location.reload();
      });
    }
  
    const checkMetamaskStatus = async () => {
        if(window.ethereum) {
            var currentAccount;
            try {
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                currentAccount = accounts[0];
            } catch (error) {

                if(currentAccount === undefined)
                {
                    window.location.href= "/"; 
                }
            }
            
        }
    }

    const handleLoginButton = async () => {
            var userStatus;
            try {
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                userStatus = accounts[0];
                $('#getStarted').show();
                $('#loginMeta').hide();
            } catch (error) {
                if(userStatus === undefined)
                {
                    $('#loginMeta').show();
                }
            }
    }

    //global functions, variables end


    // events start
  
    if(document.getElementById('homePage')){  // if user is on home page
        if(!window.ethereum) {
            $('#loginMeta').hide();
            $('#installMeta').show();
        }else{
            handleLoginButton();
        }
    }else{    
        console.log('you are on the other page');                                // if user is not on home page
        if(!window.ethereum) {
            alert('please install Metamask Extension');
            window.location.href="/";
        }else{
            checkMetamaskStatus(); 
        }
    }

    // connect to metamask event
    $('#loginMeta,#getStarted').on('click',function(e){
        e.preventDefault();
        connectMetamask();
    });

    if(document.getElementById('currentDate'))
    {
        var date = new Date().toISOString().slice(0, 10)
        $('#currentDate').empty().append(date);
    }

    $('.formSubmit').on('click',function(e){
        e.preventDefault();
    });

   
});