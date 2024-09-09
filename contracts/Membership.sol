pragma solidity ^0.8.0;

contract Membership {
    struct Member {
        address wallet;
        uint256 balance;
        bool exists;
    }

    mapping(address => Member) public members;
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function register() public {
        require(!members[msg.sender].exists, "Member already exists");
        members[msg.sender] = Member(msg.sender, 0, true);
    }

    function deposit() public payable {
        require(members[msg.sender].exists, "You must be a member to deposit");
        members[msg.sender].balance += msg.value;
    }

    function withdraw(uint256 amount) public {
        require(members[msg.sender].exists, "You must be a member to withdraw");
        require(members[msg.sender].balance >= amount, "Insufficient balance");
        members[msg.sender].balance -= amount;
        payable(msg.sender).transfer(amount);
    }
}
