import AddNewInterView from "../_components/AddNewInterView";
import InterviewList from "./interview/[interviewid]/start/_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="text-gray-500">Create and Start Your Mock Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        <AddNewInterView />
      </div>
      <InterviewList/>
    </div>
  );
};

export default Dashboard;
