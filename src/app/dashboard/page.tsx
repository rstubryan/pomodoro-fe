import { cookies } from "next/headers";
import Logout from "@/app/dashboard/logout";

export default async function Dashboard() {
  const cookie = (await cookies()).get("user")?.value;
  const authenticatedData = cookie ? JSON.parse(cookie) : null;

  return (
    <div>
      <h1>Dashboard</h1>
      {authenticatedData ? (
        <pre>
          {JSON.stringify(authenticatedData, null, 2)}
          <Logout />
        </pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
