import Footer from "./Footer"
import Profile from "./Profile"
import MenuItem from "./MenuItem"
import Cookies from 'js-cookie';
import { useRouter } from "next/router";


interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings' | 'recommendations'
  }
export default function SideBar(props:SideBarProps) {
    const { activeMenu } = props;
    const router = useRouter()
    const onLogOut = () => {
        Cookies.remove('token');
        router.push('/sign-in');
      };
    return ( 
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
            <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon="ic-menu-overview" active={activeMenu === 'overview'}  href="/member"/> 
                    <MenuItem title="Transactions" icon="ic-menu-transaction"active={activeMenu === 'transactions'}  href="/member/transactions" /> 
                    <MenuItem title="Recommendation" icon="ic-menu-messages" active={activeMenu === 'recommendations'} href="/member/recommendationHistory"/> 
                    <MenuItem title="Treatment History" icon="ic-menu-card"/> 
                    <MenuItem title="Booking" icon="ic-menu-rewards" /> 
                    <MenuItem title="Setting" icon="ic-menu-settings" active={activeMenu === 'settings'} /> 
                    <MenuItem title="Log Out" icon="ic-menu-logout"onClick={onLogOut}/> 
                </div>
            {/* <Footer /> */}
            </div>
        </section>
    )
}
