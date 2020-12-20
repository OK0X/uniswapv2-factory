pragma solidity =0.5.16;

contract Test{

    uint public num=0;
    function setNum(uint newNum)public{
        require(newNum > 5, "new num is invalid");
        num=newNum;
    }
}