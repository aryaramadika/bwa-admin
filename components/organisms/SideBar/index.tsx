import Footer from "./Footer"
import Profile from "./Profile"
import MenuItem from "./MenuItem"

interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
  }
export default function SideBar(props:SideBarProps) {
    const { activeMenu } = props;
    return ( 
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
            <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon="ic-menu-overview" active={activeMenu === 'overview'} /> 
                    <MenuItem title="Transactions" icon="ic-menu-transaction"active={activeMenu === 'transactions'} /> 
                    <MenuItem title="Messages" icon="ic-menu-messages" /> 
                    <MenuItem title="Card" icon="ic-menu-card"/> 
                    <MenuItem title="Rewards" icon="ic-menu-rewards" /> 
                    <MenuItem title="Setting" icon="ic-menu-settings" active={activeMenu === 'settings'} /> 
                    <MenuItem title="Log Out" icon="ic-menu-logout"/> 
                </div>
            <Footer />
            </div>
        </section>
    )
}
