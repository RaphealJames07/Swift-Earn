import "./Dashboard.css";
// import Logo from "../../assets/Swift-Earn-Logo.png";
import Logo from "../../assets/Swift-Earn-Logo.png";
import {Link} from "react-router-dom";
import {IoHomeOutline} from "react-icons/io5";
import {LuHardDriveDownload} from "react-icons/lu";
import {
    FaArrowAltCircleUp,
    FaHistory,
    FaAddressCard,
    FaRegUser,
} from "react-icons/fa";
import {FaHandHoldingDollar} from "react-icons/fa6";
import {BsFillCreditCard2BackFill} from "react-icons/bs";
import {BiTransfer} from "react-icons/bi";
import {LiaHandHoldingHeartSolid} from "react-icons/lia";
import {LuRepeat2} from "react-icons/lu";
import {MdOutlineMenu} from "react-icons/md";
import {GoDatabase} from "react-icons/go";
import {HiMiniUser} from "react-icons/hi2";
import {FiLogOut} from "react-icons/fi";
import {useState, useEffect, useRef} from "react";
import {Outlet} from "react-router-dom";

const Dashboard = () => {
    const [showUserDrop, setShowUserDrop] = useState(false);
    const userDropdownRef = useRef(null);

    const handleShowUserDropdown = () => {
        setShowUserDrop(!showUserDrop);
    };

    const handleClickOutside = (event) => {
        if (
            userDropdownRef.current &&
            !userDropdownRef.current.contains(event.target)
        ) {
            setShowUserDrop(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="DashboardBody">
                <div className="DashboardWrapper">
                    <div className="DashboardNav">
                        <div className="DashboardNavWrapper">
                            <div className="DashboardNavLogo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="DashboardNavAccountView">
                                <div className="DashboardNavAccountViewPfp">
                                    <HiMiniUser className="HiMiniUser" />
                                </div>
                                <div className="DashboardNavAccountViewInitials">
                                    <h2>Eflex Media</h2>
                                    <p>online</p>
                                </div>
                                <div className="DashboardNavAccountViewBalance">
                                    <GoDatabase /> <span>$0.00</span>
                                </div>
                            </div>
                            <div className="DashboardNavLinks">
                                <div className="DashboardNavLinksRow1">
                                    <Link
                                        to={""}
                                        className="DashboardNavLinksItem "
                                    >
                                        <span>
                                            <IoHomeOutline className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Home</span>
                                    </Link>
                                    <Link
                                        to={"deposit"}
                                        className="DashboardNavLinksItem "
                                    >
                                        <span>
                                            <LuHardDriveDownload className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Deposit</span>
                                    </Link>
                                </div>
                                <div className="DashboardNavLinksRow2">
                                    <Link
                                        to={"withdrawal"}
                                        className="DashboardNavLinksItem"
                                    >
                                        <span>
                                            <FaArrowAltCircleUp className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Withdrawal</span>
                                    </Link>
                                    <Link
                                        to={"profit-history"}
                                        className="DashboardNavLinksItem"
                                    >
                                        <span>
                                            <FaHistory className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Profit History</span>
                                    </Link>
                                </div>
                                <div className="DashboardNavLinksRow3">
                                    <Link
                                        to={"transactions"}
                                        className="DashboardNavLinksItem"
                                    >
                                        <span>
                                            <BsFillCreditCard2BackFill className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Transactions</span>
                                    </Link>
                                    <Link
                                        to={"transfer-funds"}
                                        className="DashboardNavLinksItem"
                                    >
                                        <span>
                                            <BiTransfer className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Transfer Funds</span>
                                    </Link>
                                </div>
                                <div className="DashboardNavLinksRow4">
                                    <Link
                                        to={"profile"}
                                        className="DashboardNavLinksItem"
                                    >
                                        <span>
                                            <FaAddressCard className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Profile</span>
                                    </Link>
                                    <Link
                                        to={"trading-plans"}
                                        className="DashboardNavLinksItem"
                                    >
                                        <span>
                                            <FaHandHoldingDollar className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Trading Plans</span>
                                    </Link>
                                </div>
                                <div className="DashboardNavLinksRow5">
                                    <Link
                                        to={"my-plans"}
                                        className="DashboardNavLinksItem"
                                    >
                                        <span>
                                            <LiaHandHoldingHeartSolid className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>My Plans</span>
                                    </Link>
                                    <Link
                                        to={"referrals"}
                                        className="DashboardNavLinksItem"
                                    >
                                        <span>
                                            <LuRepeat2 className="DashboardNavlinksIcons" />
                                        </span>
                                        <span>Referrals</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="DashboardNavContact">
                                <div className="DashboardNavContactText">
                                    <h3>Need Help!</h3>
                                    <p>
                                        Contact our 24/7 customer support center
                                    </p>
                                </div>
                                <div className="DashboardNavContactBtn">
                                    <button>Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DashboardMain">
                        <div className="DashboardMainHeader">
                            <div className="DashboardMainHeaderBox">
                                <div className="DashboardMainHeaderBoxHambuger">
                                    <MdOutlineMenu className="MdOutlineMenu" />
                                </div>
                                <div
                                    className="DashboardMainHeaderBoxAccount"
                                    onClick={handleShowUserDropdown}
                                    ref={userDropdownRef}
                                >
                                    <span>
                                        <HiMiniUser className="HiMiniUser" />
                                    </span>
                                    <p>Eflex Media</p>
                                </div>
                            </div>
                            {showUserDrop ? (
                                <>
                                    <div className="DashboardMainHeaderUserAccDiv">
                                        <div className="DashboardMainHeaderUserAccDivWrap">
                                            <p>Hi Eflex Media</p>
                                            <div className="DashboardMainHeaderUserAccDivPfp">
                                                <span>
                                                    <FaRegUser />
                                                </span>
                                                My profile
                                            </div>
                                            <div className="DashboardMainHeaderUserAccDivLogout">
                                                <span>
                                                    <FiLogOut />
                                                </span>
                                                Logout
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                        <div className="DashboardMainContent">
                            <Outlet />
                        </div>
                        <div className="DashboardMainFooter">
                            <p>All Rights Reserved © Swift Earn Trade 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
