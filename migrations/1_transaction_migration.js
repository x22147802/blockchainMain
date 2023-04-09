const trasaction= artifacts.require("Transactions");

module.exports= function(deployer)
{
    deployer.deploy(trasaction);
}