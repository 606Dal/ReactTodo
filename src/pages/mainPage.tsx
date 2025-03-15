import CustomLayout from "../layouts/customLayout.tsx";

function MainPage() {
    return (
        <CustomLayout>

            <h2 className='text-lg font-semibold'>Main Page</h2>
            <img src="/public/images/Cherryblossom.jpg" alt="Cherryblossom Image"
                className={'p-5'}/>

        </CustomLayout>
    );
}

export default MainPage;