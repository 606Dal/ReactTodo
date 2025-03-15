import {NavLink, Outlet} from "react-router";
import CustomLayout from "../../layouts/customLayout.tsx";

function TodoIndexPage() {
    return (
        <CustomLayout>
            <div className="flex gap-4 p-4">
                <NavLink to={'/todo/list'} className="flex-1">
                    <div className="bg-pink-100 hover:bg-pink-200 p-4 shadow rounded text-center font-bold">
                        LIST
                    </div>
                </NavLink>
                <NavLink to={'/todo/add'} className="flex-1">
                    <div className="bg-pink-100 hover:bg-pink-200 p-4 shadow rounded text-center font-bold">
                        ADD
                    </div>
                </NavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </CustomLayout>
    );
}

export default TodoIndexPage;