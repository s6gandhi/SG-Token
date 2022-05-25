//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

import "hardhat/console.sol";

contract Shoken {
    string public name = "SG Token";
    string public symbol = "SG";
    uint256 public totalSupply = 1000;

    address public owner;

    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        console.log("##Sender balance is %s tokens##", balances[msg.sender]);
        console.log(
            "##Sender is sending %s tokens to %s address##",
            amount,
            to
        );

        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount; 
        balances[to] += amount;
        console.log("#updated balances for owner and receipient are %s and %s respectively are",balances[msg.sender],balances[to]);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}