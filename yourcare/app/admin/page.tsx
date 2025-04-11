import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  // const appointments = await getRecentAppointmentList();

  const appointments = await getRecentAppointmentList();

// Optional fallback object
const safeAppointments = appointments ?? {
  scheduledCount: 0,
  pendingCount: 0,
  cancelledCount: 0,
  documents: [],
};

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo1-icon.svg"
            height={32}
            width={1000}
            alt="logo"
            className="w-32 sm:w-40 md:w-52 lg:w-64 xl:w-72 h-auto mx-auto"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
        <StatCard
  type="appointments"
  count={safeAppointments.scheduledCount}
  label="Scheduled appointments"
  icon={"/assets/icons/appointments.svg"}
/>
<StatCard
  type="pending"
  count={safeAppointments.pendingCount}
  label="Pending appointments"
  icon={"/assets/icons/pending.svg"}
/>
<StatCard
  type="cancelled"
  count={safeAppointments.cancelledCount}
  label="Cancelled appointments"
  icon={"/assets/icons/cancelled.svg"}
/>
        </section>

        <DataTable columns={columns} data={safeAppointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
