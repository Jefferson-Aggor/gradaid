import { auth, signOut } from "@/auth";

const Dashboard = async () => {
    const session = await auth()
    return (
        <div>
            Dashboard: {JSON.stringify(session)}
            <form action={async () => {
                "use server";
                await signOut();
            }}>
                <button type="submit">Sign Out</button>
            </form>
        </div>
    );
}

export default Dashboard;