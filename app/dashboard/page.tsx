import { DashboardComponent } from '@/components/dashboard';
import { auth0 } from '@/lib/auth0';

const Dashboard = async () => {
  const session = await auth0.getSession();

  return (
    <div className='h-screen flex flex-col item-center text-center gap-10'>
      <DashboardComponent session={session} />
    </div>
  );
};

export default Dashboard;
