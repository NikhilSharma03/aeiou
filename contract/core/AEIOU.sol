// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract AEIOUCampaignFactory {
    address[] public campaigns;

    /**
     * @dev Creates a new campaign
     * @param title Title of new campaign
     * @param description Description of new campaign
     * @param image Image of new campaign
     * @param minimumAmount Minimum investment amount
     * @param targetAmount Target crowdfunding amount
     */
    function createCampaign(
        string memory title,
        string memory description,
        string memory image,
        uint minimumAmount,
        uint targetAmount
    ) public {
        AEIOUCampaign newCampaign = new AEIOUCampaign(
            title,
            description,
            image,
            minimumAmount,
            targetAmount,
            msg.sender
        );
        campaigns.push(address(newCampaign));
    }

    /**
     * @dev Returns all created campaigns
     */
    function getAllCampaigns() public view returns (address[] memory) {
        return campaigns;
    }
}

contract AEIOUCampaign {
    /**
     * @dev Expense request data structure
     * @param title Title of expense
     * @param description Description of expense
     * @param receiver Receiver address
     * @param amount Expense amount
     * @param approvalsCount Number of approvals for expense from approvers
     * @param completed This request is completed or not
     * @param approvals Contributors addresses
     */
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
    string public image;
    uint public minimumAmount;
    uint public targetAmount;
    address public manager;

    mapping(address => bool) public contributors;
    address[] public contributorsList;
    uint public totalContributors;

    Request[] public requests;

    constructor(
        string memory _title,
        string memory _description,
        string memory _image,
        uint _minimumAmount,
        uint _targetAmount,
        address _manager
    ) {
        title = _title;
        description = _description;
        image = _image;
        minimumAmount = _minimumAmount;
        targetAmount = _targetAmount;
        manager = _manager;
    }

    /**
     * @dev Balance of campaign
     */
    function getBalance() public view returns (uint256) {
        return payable(address(this)).balance;
    }

    /**
     * @dev Add new contributor to the campaign
     */
    function contribute() public payable {
        require(msg.value >= minimumAmount);
        require(!contributors[msg.sender]);
        contributors[msg.sender] = true;
        contributorsList.push(msg.sender);
        totalContributors++;
    }

    /**
     * @dev Returns contributors list
     */
    function getAllContributors() public view returns (address[] memory) {
        return contributorsList;
    }

    /**
     * @dev Create new expense request for making a transaction to some third party (by Manager only)
     */
    function createRequest(
        string memory _title,
        string memory _description,
        address _receiver,
        uint _amount
    ) public onlyManager {
        Request storage newRequest = requests.push();
        newRequest.title = _title;
        newRequest.description = _description;
        newRequest.receiver = _receiver;
        newRequest.amount = _amount;
        newRequest.completed = false;
        newRequest.approvalsCount = 0;
    }

    /**
     * @dev Returns total number of request
     */
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }

    /**
     * @dev Allow contributors to approve requests
     * @param requestIndex Request index number in request list
     */
    function approveRequest(uint requestIndex) public {
        require(contributors[msg.sender]);
        require(!requests[requestIndex].approvals[msg.sender]);
        requests[requestIndex].approvals[msg.sender] = true;
        requests[requestIndex].approvalsCount++;
    }

    /**
     * @dev Allow manager to finalize a request and tranfer the amount to receiver
     * @param requestIndex Request index number in request list
     */
    function finalizeRequest(uint requestIndex) public onlyManager {
        require(
            requests[requestIndex].approvalsCount > (totalContributors / 2)
        );
        require(!requests[requestIndex].completed);
        payable(requests[requestIndex].receiver).transfer(
            requests[requestIndex].amount
        );
        requests[requestIndex].completed = true;
    }

    /**
     * @dev Returns summary details of campaign
     */
    function getSummary()
        public
        view
        returns (
            uint,
            uint,
            uint256,
            uint,
            uint,
            address,
            string memory,
            string memory,
            string memory
        )
    {
        return (
            minimumAmount,
            targetAmount,
            payable(address(this)).balance,
            requests.length,
            totalContributors,
            manager,
            title,
            description,
            image
        );
    }

    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }
}
