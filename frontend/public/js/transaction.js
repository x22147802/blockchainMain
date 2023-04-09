$(document).ready(function(){

  // global variables
  const web3= new Web3(window.ethereum);
  // contract address
  const Address= '0xd71117a809804c25F8965238546D8B820d409481';
  // ABI code
  const ABI= 
  [
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
  const currentAccountBalance= async()=>{
    const accounts= await ethereum.request({method:"eth_requestAccounts"});
    const account= accounts[0];

    await web3.eth.getBalance(account,(err,balance)=>{
      var balance= web3.utils.fromWei(balance,"ether");
      $('#displayAccountBalance').empty().append(parseFloat(balance).toFixed(2));
      $('#accNumber').empty().append(account);
    });
    
  }

  const displayWalletBalance= async()=>{
    const Address= '0xd71117a809804c25F8965238546D8B820d409481';
    // ABI code
    const ABI= 
    [
      {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ];
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);

    // display the current balance in the smart contract
    const contractBalance = await window.contract.methods.getBalance().call();
    $('#displayContractBalance').empty().append(contractBalance);

  }

  const depositWalletAmount= async(amount)=>{

    if(amount == '')
    {
      $('.message').show().empty().append('<div class="alert alert-success alert-dismissible fade show" role="alert">'+
        'Please enter all required details'+
        '<i class="fa fa-times"></i>'+
        '</div>');
    }else{

    $('#preloader').show();
    const contractAddress= '0xd71117a809804c25F8965238546D8B820d409481';
    // ABI code
    const ABI= 
    [
      {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ];
    window.web3 = new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, contractAddress);
    const accounts= await ethereum.request({method:"eth_requestAccounts"});
    const account= accounts[0];

    try {
      
      await window.contract.methods.deposit().send({from: account, value: amount});
      $('#preloader').hide();

      $('.message').show().empty().append('<div class="alert alert-success alert-dismissible fade show" role="alert">'+
      '<strong>Congratulations!</strong> Ether has been added to your Smart Contract Wallet! Please wait while we refersh the page...'+
      '</div>');

      setTimeout(() => {
        location.reload();
      }, 2000);


    } catch (error) {
        $('.message').show().empty().append('<div class="alert alert-success alert-dismissible fade show" role="alert">'+
        'something went wrong! please try again later'+
        '<i class="fa fa-times"></i>'+
        '</div>');

        location.reload();
    }
  }



  }

  const retreiveAmount= async(transferAccount,amount)=>{

    if(transferAccount == '' || amount == '')
    {
      $('.message').show().empty().append('<div class="alert alert-success alert-dismissible fade show" role="alert">'+
        'Please enter all required details'+
        '<i class="fa fa-times"></i>'+
        '</div>');
    }else{

      $('#preloader').show();
      const contractAddress= '0xd71117a809804c25F8965238546D8B820d409481';
      // ABI code
      const ABI= 
      [
        {
          "inputs": [],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "getAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ];
      window.web3 = new Web3(window.ethereum);
      window.contract = await new window.web3.eth.Contract(ABI, contractAddress);
      const accounts= await ethereum.request({method:"eth_requestAccounts"});
      const account= accounts[0];
  
      try {
        
        await window.contract.methods.withdraw(transferAccount, amount).send({from: account});
        $('#preloader').hide();
  
        $('.message').show().empty().append('<div class="alert alert-success alert-dismissible fade show" role="alert">'+
        '<strong>Congratulations!</strong> Withdrawal Complete! please wait while we refersh the page...'+
        '</div>');
  
        setTimeout(() => {
          location.reload();
        }, 2000);
  
  
      } catch (error) {
          $('.message').show().empty().append('<div class="alert alert-success alert-dismissible fade show" role="alert">'+
          'something went wrong! please try again later'+
          '<i class="fa fa-times"></i>'+
          '</div>');
  
          location.reload();
      }
    }
   

  }

  // functions
  
  // events
  currentAccountBalance();
  displayWalletBalance();

  $('#depositAmount').on('click',function(e){
    e.preventDefault();
     
    var amount= $('#amountInput').val();

    depositWalletAmount(amount);


  });

  $('#refreshBalance').on('click',function(){
    currentAccountBalance();
  });

  $('#refreshWallet').on('click',function(){
    displayWalletBalance();

  });

  $('#transferToAccount').on('click',function(e){
    e.preventDefault();

    var account= $('#addressInput').val();
    var amount= $('#withdrawamount').val();

    retreiveAmount(account,amount);
  });

});