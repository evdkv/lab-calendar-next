import DefaultLayout from "@/layouts/default";
import { Dashboard } from "@/components/dashboard";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-row items-center justify-center gap-3 py-8 md:py-1">
        <Dashboard />
      </section>
    </DefaultLayout>
  );
}
