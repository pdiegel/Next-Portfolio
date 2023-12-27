import navigationUrls from '@/public/navigation.json';

export default function DropDownMenu() {
    const dropDownObjects = () => {
        return Object.entries(navigationUrls).map(([navName, navDetails]) => {
            return <DropDownItem key={navName} url={navDetails.url}>{navName}</DropDownItem>
        });
    };

    function DropDownItem(props) {
        return (
            <a href="#" className="menu-item">
                {props.leftIcon && <span className="icon-button">{props.leftIcon}</span>}

                {props.children}

                {props.rightIcon && <span className="icon-right">{props.rightIcon}</span>}
            </a>
        );
    }

    return (
        <div className="dropdown">
            {dropDownObjects()}
        </div>
    )
}