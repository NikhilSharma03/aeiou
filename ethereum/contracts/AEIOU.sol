pragma solidity^0.8.11;

contract AEIOUCampaignFactory {
    address[] public campaigns;

    function createCampaign(string memory titl, string memory desc, string memory image, uint minAmt, uint target) public {
        AEIOUCampaign newCampaign = new AEIOUCampaign(titl, desc, image, minAmt, target, msg.sender);
        campaigns.push(address(newCampaign));
    }

    function getAllCampaigns() public view returns (address[] memory) {
        return campaigns;
    }
}

contract AEIOUCampaign {
    struct Request {
        string title;
        string description;
        address receiver;
        uint amount;
        uint approvalsCount;
        bool completed;
        mapping(address => bool) approvals;
    }

    string public title;
    string public description;
    string public imgSource;
    address public manager;
    uint public minimumAmount;
    uint public targetAmount;
    mapping(address => bool) public contributors;
    address[] public contributorsList;
    uint public totalContributors;
    Request[] public requests;

    constructor(string memory titl, string memory desc, string memory image, uint minAmount, uint targetAmt, address manag) {
        title = titl;
        description = desc;
        minimumAmount = minAmount;
        targetAmount = targetAmt;
        imgSource = image;
        manager = manag;
    }

    // contribute function allows investors to become contributor of an project on condition they send the minimum required ether and are not already a part of the campaign
    function contribute() public payable {
        require(msg.value >= minimumAmount);
        require(!contributors[msg.sender]);
        contributors[msg.sender] = true;
        contributorsList.push(msg.sender);
        totalContributors++;
    }

    // getAllContributors returns the list of all the contributors
    function getAllContributors() public view returns (address[] memory) {
        return contributorsList;
    }

    // getBalance returns the total available balance of contract
    function getBalance() public view returns(uint256) {
        return payable(address(this)).balance;
    }

    // getRequestsCount returns the total available requests
    function getRequestsCount() public view returns (uint){
        return requests.length;
    }

    // createRequest can be only called by manager which helps to create a new request for the purpose of making a transaction to some party
    function createRequest(string memory title, string memory desc, address receiver, uint amount) public restricted {
        Request storage newRequest = requests.push();
        newRequest.title = title;
        newRequest.description = desc;
        newRequest.receiver = receiver;
        newRequest.amount = amount;
        newRequest.completed = false;
        newRequest.approvalsCount = 0;
    }

    // approveRequest helps an contributor to approve an request created by the manager
    function approveRequest(uint requestIndex) public {
        require(contributors[msg.sender]);
        require(!requests[requestIndex].approvals[msg.sender]);
        requests[requestIndex].approvals[msg.sender] = true;
        requests[requestIndex].approvalsCount++;
    }

    // finalizeRequest helps to finalize the request
    function finalizeRequest(uint requestIndex) public restricted {
      require(requests[requestIndex].approvalsCount > (totalContributors / 2));
      require(!requests[requestIndex].completed);
      payable(requests[requestIndex].receiver).transfer(requests[requestIndex].amount);
      requests[requestIndex].completed = true;
    }

    // getSummary returns a summary of the contract
    function getSummary() public view returns (uint, uint, uint256, uint, uint, address, string memory, string memory, string memory) {
        return (
            minimumAmount,
            targetAmount,
            payable(address(this)).balance,
            requests.length,
            totalContributors,
            manager,
            title,
            description,
            imgSource
        );
    }


    // modifiers
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}
