import SidebarLogin from "./components/SidebarLogin";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <SidebarLogin/>
    </>
  );
}