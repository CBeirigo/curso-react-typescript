import useOnlineStatus from "../hooks/useOnlineStatus";

const UserStatus = () => {
  const statusUser  = useOnlineStatus();
  return (
    <div>
      <p>Você está atualmente: {statusUser ? "Online" : "Offline"}</p>
    </div>
  );
};

export default UserStatus;
